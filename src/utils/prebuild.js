/**
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 * @module  metadata-prebuild
 */

"use strict";

var through = require('through2');
var path = require('path');
var gutil = require('gulp-util');

var PluginError = gutil.PluginError;
var File = gutil.File;

module.exports = function (fileName) {

	if (!fileName) {
		throw new PluginError('metadata-prebuild', 'Missing fileName option for metadata-prebuild');
	}

	var firstFile = null;

	// подключим метадату
	var $p = require('metadata-js');

	// установим параметры
	$p.on("settings", function (prm) {

		var settings = require('./settings.json');

		// разделитель для localStorage
		prm.local_storage_prefix = settings.pouch.prefix;

		// по умолчанию, обращаемся к зоне 0
		prm.zone = settings.pouch.zone;

		// объявляем номер демо-зоны
		prm.zone_demo = 1;

		// расположение couchdb
		prm.couch_path = settings.pouch.path;

		// логин гостевого пользователя couchdb
		prm.guest_name = "guest";

		// пароль гостевого пользователя couchdb
		prm.guest_pwd = "meta";

		// расположение rest-сервиса 1c
		prm.rest_path = settings["1c"].odata;

		prm.create_tables = false;

	});
	$p.eve.init();


	function create_modules(_m){

		var name,
			text = "$p.md.create_managers=function(){\n",
			categoties = {
				cch: {mgr: "ChartOfCharacteristicManager", obj: "CatObj"},
				cacc: {mgr: "ChartOfAccountManager", obj: "CatObj"},
				cat: {mgr: "CatManager", obj: "CatObj"},
				bp: {mgr: "BusinessProcessObj", obj: "BusinessProcessObj"},
				tsk: {mgr: "TaskManager", obj: "TaskObj"},
				doc: {mgr: "DocManager", obj: "DocObj"},
				ireg: {mgr: "InfoRegManager", obj: "RegisterRow"},
				areg: {mgr: "AccumRegManager", obj: "RegisterRow"}
			};


		for(name in _m.enm)
			text+= "$p.enm." + name + " = new $p.EnumManager('enm." + name + "');\n";

		for(var category in categoties){
			for(name in _m[category]){
				text+= obj_constructor_text(_m, category, name, categoties[category].obj);
				if(name == "$log")
					text+= "$p." + category + "." + name + " = new $p.LogManager('ireg.$log');\n";
				else
					text+= "$p." + category + "." + name + " = new $p." + categoties[category].mgr + "('" + category + "." + name + "');\n";
			}
		}

		return text + "};\n";

	}

	function obj_constructor_text(_m, category, name, proto) {

		var meta = _m[category][name],
			fn_name = $p.DataManager.prototype.obj_constructor.call({class_name: category + "." + name}),
			text = "\n/**\n* ### " + $p.msg.meta[category] + " " + meta.name,
			f, props = "";

		text += "\n* " + (meta.illustration || meta.synonym);
		text += "\n* @class " + fn_name;
		text += "\n* @extends " + proto;
		text += "\n* @constructor \n*/\n";
		text += "function " + fn_name + "(attr, manager){" + fn_name + ".superclass.constructor.call(this, attr, manager)}\n";
		text += fn_name + "._extend($p." + proto + ");\n";
		text += "$p." + fn_name +  " = " + fn_name + ";\n";

		// реквизиты по метаданным
		if(meta.fields){
			for(f in meta.fields){
				if(props)
					props += ",\n";
				props += f + ": {get: function(){return this._getter('"+f+"')}, " +
					"set: function(v){this._setter('"+f+"',v)}, enumerable: true, configurable: true}";
			}
		}else{
			for(f in meta.dimensions){
				if(props)
					props += ",\n";
				props += f + ": {get: function(){return this._getter('"+f+"')}, " +
					"set: function(v){this._setter('"+f+"',v)}, enumerable: true, configurable: true}";
			}
			for(f in meta.resources){
				if(props)
					props += ",\n";
				props += f + ": {get: function(){return this._getter('"+f+"')}, " +
					"set: function(v){this._setter('"+f+"',v)}, enumerable: true, configurable: true}";
			}
			for(f in meta.attributes){
				if(props)
					props += ",\n";
				props += f + ": {get: function(){return this._getter('"+f+"')}, " +
					"set: function(v){this._setter('"+f+"',v)}, enumerable: true, configurable: true}";
			}
		}

		if(props)
			text += fn_name + ".prototype.__define({" + props + "});\n";


		// табличные части по метаданным
		props = "";
		for(var ts in meta.tabular_sections){

			// создаём конструктор строки табчасти
			var row_fn_name = $p.DataManager.prototype.obj_constructor.call({class_name: category + "." + name}, ts);

			text+= "function " + row_fn_name + "(owner){" + row_fn_name + ".superclass.constructor.call(this, owner)};\n";
			text+= row_fn_name + "._extend($p.TabularSectionRow);\n";
			text+= "$p." + row_fn_name + " = " + row_fn_name + ";\n";

			// в прототипе строки табчасти создаём свойства в соответствии с полями табчасти
			for(var rf in meta.tabular_sections[ts].fields){

				if(props)
					props += ",\n";

				props += rf + ": {get: function(){return this._getter('"+rf+"')}, " +
					"set: function(v){this._setter('"+rf+"',v)}, enumerable: true, configurable: true}";
			}

			if(props)
				text += row_fn_name + ".prototype.__define({" + props + "});\n";

			// устанавливаем геттер и сеттер для табличной части
			text += fn_name + ".prototype.__define('"+ts+"', {get: function(){return this._getter_ts('"+ts+"')}, " +
				"set: function(v){this._setter_ts('"+ts+"',v)}, enumerable: true, configurable: true});\n";

		}

		return text;

	}

	// т.к. содержимое входных файлов нам не интересно, сразу вызываем cb()
	function bufferContents(file, enc, cb) {

		if (!firstFile) {
			firstFile = file;
		}

		cb();
	}

	function endStream(cb) {

		var joinedFile,
			t = this;

		// if file opt was a file path
		// clone everything from the latest file
		if (typeof fileName === 'string') {
			joinedFile = firstFile.clone({contents: false});
			joinedFile.path = path.join(firstFile.base, fileName);
		} else {
			joinedFile = new File(fileName);
		}

		$p.md.init($p.wsql.pouch.local._meta)
			.then(function (_m) {

				// создаём текст модуля конструкторов данных
				var text = create_modules(_m);

				// выполняем текст модуля, чтобы появились менеджеры
				eval(text);
				$p.md.create_managers();

				// получаем скрипт таблиц
				$p.md.create_tables(function (sql) {

					text = "$p.wsql.alasql('" + sql + "', []);\n\n"
						+ text + "\n\n"
						+ "$p.md.init(" + JSON.stringify(_m) + ");";

					joinedFile.contents = new Buffer(text);
					t.push(joinedFile);
					cb();
				})

			})
			.catch(function (err) {
				throw new PluginError('metadata-prebuild', err);
			});
	}

	return through.obj(bufferContents, endStream);
};
