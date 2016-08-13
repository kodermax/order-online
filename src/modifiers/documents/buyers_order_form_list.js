/**
 * ### Форма списка документов _Заказ покупателя_
 * 
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 * 
 * @module doc_buyers_order_form_list
 */

(function($p){

	var _mgr = $p.doc.buyers_order;

	_mgr.form_list = function(pwnd, attr){

		if(!attr)
			attr = {
				hide_header: true,
				custom_selection: true,
				date_from: new Date((new Date()).getFullYear().toFixed() + "-01-01"),
				date_till: new Date((new Date()).getFullYear().toFixed() + "-12-31"),
				on_new: function (o) {
					$p.iface.set_hash(_mgr.class_name, o.ref);
				},
				on_edit: function (_mgr, rId) {
					$p.iface.set_hash(_mgr.class_name, rId);
				}
			};

		// разбивка на 2 колонки - дерево и карусель
		var layout = pwnd.attachLayout({
				pattern: "2U",
				cells: [{
					id: "a",
					text: "Фильтр",
					collapsed_text: "Фильтр",
					width: 180
				}, {
					id: "b",
					text: "Заказы",
					header: false
				}],
				offsets: { top: 0, right: 0, bottom: 0, left: 0}
			}),

			tree = layout.cells("a").attachTreeView({
				iconset: "font_awesome"
			}),

			carousel = layout.cells("b").attachCarousel({
				keys:           false,
				touch_scroll:   false,
				offset_left:    0,
				offset_top:     0,
				offset_item:    0
			});

		// страницы карусели
		carousel.hideControls();
		carousel.addCell("list");
		carousel.addCell("report");
		carousel.conf.anim_step = 200;
		carousel.conf.anim_slide = "left 0.1s";

		var wnd = _mgr.form_selection(carousel.cells("list"), attr),
			report;

		// настраиваем фильтр для списка заказов
		wnd.elmnts.filter.custom_selection._view = {
			get value(){
				switch(tree.getSelectedId()) {

					case 'draft':
					case 'sent':
					case 'declined':
					case 'confirmed':
					case 'zarchive':
					case 'all':
						return 'doc/by_date';

					case 'execution':
						return '';
				}
			}
		};
		wnd.elmnts.filter.custom_selection._key = {
			get value(){
				var key, id;

				switch(id = tree.getSelectedId()) {

					case 'draft':
					case 'sent':
					case 'declined':
					case 'confirmed':
					case 'zarchive':
						key = id;
						break;

					case 'execution':
						key = id;
						break;

					case 'all':
						key = _mgr.class_name;
				}

				var filter = wnd.elmnts.filter.get_filter(true);
				return {
					startkey: [key, filter.date_from.getFullYear(), filter.date_from.getMonth()+1, filter.date_from.getDate()],
					endkey: [key, filter.date_till.getFullYear(), filter.date_till.getMonth()+1, filter.date_till.getDate()],
					_drop_date: true,
					_order_by: true,
					_search: filter.filter.toLowerCase()
				};
			}
		};

		// настраиваем дерево
		tree.loadStruct($p.injected_data["tree_filteres.xml"]);
		tree.attachEvent("onSelect", function (rid, mode) {

			if(!mode)
				return;

			// переключаем страницу карусели
			switch(rid) {

				case 'draft':
				case 'sent':
				case 'declined':
				case 'confirmed':
				case 'zarchive':
				case 'all':
					carousel.cells("list").setActive();
					wnd.elmnts.filter.call_event();
					return;
			}

			build_report(rid);

		});

		function build_report(rid) {

			carousel.cells("report").setActive();

			function show_report() {

				switch(rid) {

					case 'execution':
						$p.doc.buyers_order.rep_invoice_execution(report);
						break;

					case 'plan':
					case 'underway':
					case 'manufactured':
					case 'executed':

						$p.doc.buyers_order.rep_planing(report, rid);
						break;
				}

			}

			if(!report){

				report = new $p.HandsontableDocument(carousel.cells("report"), {})

					.then(function (rep) {

						if(!rep._online)
							return report = null;

						show_report();


					});

			}else if(report._online){

				show_report();
			}


		}

		return wnd;
	};

})($p);

