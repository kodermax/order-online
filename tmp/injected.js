$p.injected_data._mixin({"view_about.html":"<div class=\"md_column1300\">\r\n    <h1><i class=\"fa fa-info-circle\"></i> Заказы онлайн</h1>\r\n    <p>Заказы онлайн - это веб-приложение на базе фреймворка <a href=\"http://www.oknosoft.ru/metadata/\" target=\"_blank\">Metadata.js</a><br />\r\n        Исходный код и документация доступны на <a href=\"https://github.com/oknosoft/order-online\" target=\"_blank\">GitHub <i class=\"fa fa-github-alt\"></i></a>.<br />\r\n    </p>\r\n\r\n    <h3>Назначение и возможности</h3>\r\n    <ul>\r\n        <li>Создание и редактирование документов <i>Заказ покупателя</i> для типовых конфигураций 1С</li>\r\n        <li>Заказы формируются с тем же набором и типами полей, что и в стандартной 1С<br />(реплицируются справочники <i>Контрагенты, Партнеры, Договоры, Организации, Номенклатура, Характеристики, Серии, Склады</i> и т.д. -<br />все ссылочные типы, задействованные в подсистеме управления продажами)</li>\r\n        <li>Фоновый двусторонний обмен изменений объектов с ИБ 1С</li>\r\n        <li>Гибкая настройка видимости и доступности объектов и реквизитов для групп пользователей</li>\r\n        <li>Формирование печатных форм счетов и заказов</li>\r\n        <li>Формирование отчетов об оплате и отгрузке по заказам</li>\r\n        <li>Поддержка автономной работы при отсутствии доступа в Интернет и прозрачного обмена с сервером при возобновлении соединения</li>\r\n        <li>Синхронизация заказов не только базой поставщика, но так же и с учетными системами клиентов и дилеров</li>\r\n    </ul>\r\n\r\n    <h3>Использованы следующие библиотеки и инструменты:</h3>\r\n    <h4>Серверная часть</h4>\r\n    <ul>\r\n        <li><a href=\"http://couchdb.apache.org/\" target=\"_blank\">couchDB</a>, NoSQL база данных с поддержкой master-master репликации</li>\r\n        <li><a href=\"http://nginx.org/ru/\" target=\"_blank\">nginx</a>, высокопроизводительный HTTP-сервер</li>\r\n    </ul>\r\n\r\n    <h4>Управление данными в памяти браузера</h4>\r\n    <ul>\r\n\t\t<li><a href=\"http://www.oknosoft.ru/metadata/\" target=\"_blank\">metadata.js</a>, движок ссылочной типизации для браузера и Node.js</li>\r\n\t\t<li><a href=\"https://pouchdb.com/\" target=\"_blank\">pouchDB</a>, клиентская NoSQL база данных с поддержкой автономной работы и репликации с CouchDB</li>\r\n\t\t<li><a href=\"https://github.com/agershun/alasql\" target=\"_blank\">alaSQL</a>, SQL-интерфейс к массивам javascript в памяти браузера и Node.js</li>\r\n    </ul>\r\n\r\n    <h4>UI библиотеки и компоненты интерфейса</h4>\r\n    <ul>\r\n        <li><a href=\"http://dhtmlx.com/\" target=\"_blank\">dhtmlx</a>, кроссбраузерная библиотека javascript для построения современных веб и мобильных приложений</li>\r\n        <li><a href=\"https://handsontable.com/\" target=\"_blank\">handsontable</a>, компонент для отображения и редактирования табличных данных</li>\r\n        <li><a href=\"https://github.com/eligrey/FileSaver.js\" target=\"_blank\">filesaver.js</a>, HTML5 реализация метода saveAs</li>\r\n        <li><a href=\"http://momentjs.com/\" target=\"_blank\">moment.js</a>, библиотека форматирования интервалов и дат</li>\r\n        <li><a href=\"https://github.com/SheetJS/js-xlsx\" target=\"_blank\">xlsx</a>, библиотека для чтения и записи XLSX / XLSM / XLSB / XLS / ODS в браузере</li>\r\n    </ul>\r\n\r\n    <h4>Графика</h4>\r\n    <ul>\r\n        <li><a href=\"https://fortawesome.github.io/Font-Awesome/\" target=\"_blank\">fontawesome</a>, набор шрифтовых иконок</li>\r\n    </ul>\r\n\r\n    <h3>Лицензия</h3>\r\n    <p>Для некоммерческих Open Source проектов, разрешено использование и распространение исходного кода приложения\r\n        <a href=\"https://github.com/oknosoft/order-online\" target=\"_blank\">Заказы онлайн</a> и библиотеки\r\n        <a href=\"http://www.oknosoft.ru/metadata/\" target=\"_blank\">Metadata.js</a><br />на условиях\r\n        <a href=\"http://www.gnu.org/licenses/agpl.html\" target=\"_blank\">GNU Affero General Public License v.3</a>.<br />\r\n        Коммерческая <a href=\"http://www.oknosoft.ru/programmi-oknosoft/metadata.html\" target=\"_blank\">лицензия на разработчика</a> позволяет использовать и распространять ПО в любом количестве неконкурирующих продуктов, без ограничений на количество копий\r\n    </p>\r\n\r\n    <h3><i class=\"fa fa-question-circle\"></i> Вопросы</h3>\r\n    <p>Если обнаружили ошибку, пожалуйста,\r\n        <a href=\"https://github.com/oknosoft/metadata.js/issues\" target=\"_blank\">зарегистрируйте вопрос в GitHub</a> или\r\n        <a href=\"http://www.oknosoft.ru/metadata/#page-118\" target=\"_blank\">свяжитесь с разработчиком</a> напрямую<br /></p>\r\n    <p>&nbsp;</p>\r\n\r\n</div>","view_settings.html":"<div class=\"md_column1300\">\r\n\r\n    <div class=\"md_column320\" name=\"form1\" style=\"max-width: 400px;\"><div></div></div>\r\n\r\n    <div class=\"md_column320\" name=\"form2\" style=\"max-width: 400px;\"><div></div></div>\r\n\r\n</div>","toolbar_buyers_order_obj.xml":"<?xml version=\"1.0\" encoding='utf-8'?>\r\n<toolbar>\r\n    <item id=\"sep0\" type=\"separator\"/>\r\n    <item type=\"button\" id=\"btn_save_close\" text=\"&lt;i class='fa fa-caret-square-o-down fa-fw'&gt;&lt;/i&gt;\" title=\"Записать и закрыть\"/>\r\n    <item type=\"button\" id=\"btn_save\" text=\"&lt;i class='fa fa-floppy-o fa-fw'&gt;&lt;/i&gt;\" title=\"Записать\"/>\r\n    <item type=\"button\" id=\"btn_sent\" text=\"&lt;i class='fa fa-paper-plane-o fa-fw'&gt;&lt;/i&gt;\" title=\"Отправить заказ\" />\r\n\r\n    <item type=\"button\" id=\"btn_post\" enabled=\"false\" text=\"&lt;i class='fa fa-check-square-o fa-fw'&gt;&lt;/i&gt;\" title=\"Провести документ\" />\r\n    <item type=\"button\" id=\"btn_unpost\" enabled=\"false\" text=\"&lt;i class='fa fa-square-o fa-fw'&gt;&lt;/i&gt;\" title=\"Отмена проведения\" />\r\n\r\n    <item type=\"button\" id=\"btn_files\" text=\"&lt;i class='fa fa-paperclip fa-fw'&gt;&lt;/i&gt;\" title=\"Присоединенные файлы\"/>\r\n\r\n    <item type=\"buttonSelect\" id=\"bs_print\" text=\"&lt;i class='fa fa-print fa-fw'&gt;&lt;/i&gt;\" title=\"Печать\" openAll=\"true\">\r\n    </item>\r\n\r\n    <item type=\"buttonSelect\" id=\"bs_create_by_virtue\" text=\"&lt;i class='fa fa-bolt fa-fw'&gt;&lt;/i&gt;\" title=\"Создать на основании\" openAll=\"true\" >\r\n        <item type=\"button\" id=\"btn_message\" enabled=\"false\" text=\"Сообщение\" />\r\n    </item>\r\n\r\n    <item type=\"buttonSelect\" id=\"bs_go_to\" text=\"&lt;i class='fa fa-external-link fa-fw'&gt;&lt;/i&gt;\" title=\"Перейти\" openAll=\"true\" >\r\n        <item type=\"button\" id=\"btn_go_connection\" enabled=\"false\" text=\"Связи\" />\r\n    </item>\r\n\r\n    <item type=\"buttonSelect\"   id=\"bs_more\"  text=\"&lt;i class='fa fa-th-large fa-fw'&gt;&lt;/i&gt;\"  title=\"Дополнительно\" openAll=\"true\">\r\n        <item type=\"button\"     id=\"btn_retrieve\"    text=\"&lt;i class='fa fa-undo fa-fw'&gt;&lt;/i&gt; Отозвать\" title=\"Отозвать заказ\" />\r\n        <item type=\"separator\"  id=\"sep_export\" />\r\n        <item type=\"button\" id=\"btn_import\" text=\"&lt;i class='fa fa-upload fa-fw'&gt;&lt;/i&gt; Загрузить из файла\" />\r\n        <item type=\"button\" id=\"btn_export\" text=\"&lt;i class='fa fa-download fa-fw'&gt;&lt;/i&gt; Выгрузить в файл\" />\r\n    </item>\r\n\r\n    <item id=\"sep_close_1\" type=\"separator\"/>\r\n    <item type=\"button\" id=\"btn_close\" text=\"&lt;i class='fa fa-times fa-fw'&gt;&lt;/i&gt;\" title=\"Закрыть форму\"/>\r\n    <item id=\"sep_close_2\" type=\"separator\"/>\r\n\r\n</toolbar>","tree_filteres.xml":"<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<tree id=\"0\">\r\n    <item id=\"draft\" text=\"&lt;i class='fa fa-pencil fa-fw'&gt;&lt;/i&gt; Черновики\" select=\"1\" tooltip=\"Предварительные расчеты\"/>\r\n    <item id=\"sent\" text=\"&lt;i class='fa fa-paper-plane-o fa-fw'&gt;&lt;/i&gt; Отправлено\" tooltip=\"Отправленные, но еще не принятые в работу. Могут быть отозваны (переведены в 'черновики')\" />\r\n    <item id=\"confirmed\" text=\"&lt;i class='fa fa-thumbs-o-up fa-fw'&gt;&lt;/i&gt; Согласовано\" tooltip=\"Включены в план производства. Могут быть изменены менеджером. Недоступны для изменения дилером\" />\r\n    <item id=\"declined\" text=\"&lt;i class='fa fa-thumbs-o-down fa-fw'&gt;&lt;/i&gt; Отклонено\" tooltip=\"Не приняты в работу по техническим причинам. Требуется изменение конструктива или комплектации\" />\r\n    <item id=\"execution\" text=\"&lt;i class='fa fa-money fa-fw'&gt;&lt;/i&gt; Долги\" tooltip=\"Оплата, отгрузка\" />\r\n    <item id=\"zarchive\" text=\"&lt;i class='fa fa-archive fa-fw'&gt;&lt;/i&gt; Архив\" tooltip=\"Старые заказы\" />\r\n    <item id=\"all\" text=\"&lt;i class='fa fa-expand fa-fw'&gt;&lt;/i&gt; Все\" tooltip=\"Отключить фильтрацию\" />\r\n</tree>\r\n"});