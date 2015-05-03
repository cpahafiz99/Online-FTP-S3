(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _Breadcrumbs = require('./components/Breadcrumbs.js');

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _FileList = require('./components/FileList.js');

var _FileList2 = _interopRequireDefault(_FileList);

var _FileListEntry = require('./components/FileListEntry.js');

var _FileListEntry2 = _interopRequireDefault(_FileListEntry);

var _FileTree = require('./components/FileTree.js');

var _FileTree2 = _interopRequireDefault(_FileTree);

var _Editor = require('./components/Editor.js');

var _Editor2 = _interopRequireDefault(_Editor);

var _Toolbar = require('./components/Toolbar.js');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _OnlineFtp = require('./components/_OnlineFtp.js');

var _OnlineFtp2 = _interopRequireDefault(_OnlineFtp);

},{"./components/Breadcrumbs.js":2,"./components/Editor.js":3,"./components/FileList.js":4,"./components/FileListEntry.js":5,"./components/FileTree.js":6,"./components/Toolbar.js":7,"./components/_OnlineFtp.js":8}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

'use strict';

var Breadcrumbs = (function (_React$Component) {
    function Breadcrumbs(props) {
        _classCallCheck(this, Breadcrumbs);

        _get(Object.getPrototypeOf(Breadcrumbs.prototype), 'constructor', this).call(this, props);
        this.state = {
            parts: this.parsePath(props.path)
        };
    }

    _inherits(Breadcrumbs, _React$Component);

    _createClass(Breadcrumbs, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({ parts: this.parsePath(nextProps.path) });
        }
    }, {
        key: 'parsePath',
        value: function parsePath(path) {

            // Remove trailing slash
            if (path.substr(-1) == '/') {
                path = path.substr(0, path.length - 1);
            }

            var parts = path.split('/');
            var breadcrumbs = [];
            var path = '/';

            parts.forEach(function (element) {
                // root element
                if (element == '') {
                    element = '/';
                } else {
                    path = path + element + '/';
                }
                breadcrumbs = breadcrumbs.concat({ path: path, label: element });
            });

            return breadcrumbs;
        }
    }, {
        key: 'render',
        value: function render() {
            var addBreadcrumb = function addBreadcrumb(breadcrumb) {
                var href = '#/dir' + breadcrumb.path;
                return React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'a',
                        { href: href },
                        breadcrumb.label
                    )
                );
            };
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'ul',
                    { className: 'breadcrumbs' },
                    this.state.parts.map(addBreadcrumb)
                )
            );
        }
    }]);

    return Breadcrumbs;
})(React.Component);

exports['default'] = Breadcrumbs;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

'use strict';

var Editor = (function (_React$Component) {
    function Editor() {
        _classCallCheck(this, Editor);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Editor, _React$Component);

    _createClass(Editor, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'Editor ',
                this.props.path
            );
        }
    }]);

    return Editor;
})(React.Component);

exports['default'] = Editor;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _FileListEntry = require('./FileListEntry');

var _FileListEntry2 = _interopRequireDefault(_FileListEntry);

'use strict';

var FileList = (function (_React$Component) {
    function FileList(props) {
        _classCallCheck(this, FileList);

        _get(Object.getPrototypeOf(FileList.prototype), 'constructor', this).call(this, props);
        this.state = {
            files: [],
            path: this.props.path,
            isLoading: false
        };
    }

    _inherits(FileList, _React$Component);

    _createClass(FileList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getFiles(this.state.path);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.getFiles(nextProps.path);
        }
    }, {
        key: 'getFiles',
        value: function getFiles(path) {
            var _this2 = this;

            if (typeof path === 'undefined') path = this.state.path;
            var isLoading = true;

            this.setState({ isLoading: isLoading });

            $.ajax({
                url: '/api/dir/' + path,
                dataType: 'json',
                cache: false,
                success: function success(files) {
                    isLoading = false;
                    files = files.content;
                    _this2.setState({ files: files, path: path, isLoading: isLoading });
                },
                error: function error(xhr, status, err) {
                    console.error(_this2.props.url, status, err.toString());
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var addFile = function addFile(file) {
                return React.createElement(_FileListEntry2['default'], {
                    filename: file.filename,
                    type: file.type,
                    size: file.size,
                    path: file.path
                });
            };
            var classes = 'table table-filelist table--striped is-clickable';

            if (this.state.isLoading) classes += ' is-loading';

            if (this.state.files.length > 0) {
                var fileListing = this.state.files.map(addFile);
            } else {
                var fileListing = React.createElement(
                    'tr',
                    null,
                    React.createElement(
                        'td',
                        { colSpan: '2' },
                        ' '
                    ),
                    React.createElement(
                        'td',
                        { colSpan: '5' },
                        'Dieser Ordner ist leer'
                    )
                );
            }

            return React.createElement(
                'table',
                { className: classes },
                React.createElement(
                    'thead',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            null,
                            ' '
                        ),
                        React.createElement(
                            'th',
                            null,
                            ' '
                        ),
                        React.createElement(
                            'th',
                            null,
                            'Dateiname'
                        ),
                        React.createElement(
                            'th',
                            { className: 'text-right' },
                            'Berechtigung'
                        ),
                        React.createElement(
                            'th',
                            { className: 'text-right' },
                            'Dateigrösse'
                        ),
                        React.createElement(
                            'th',
                            { className: 'text-right' },
                            'Datum'
                        ),
                        React.createElement(
                            'th',
                            { className: 'text-right' },
                            'Aktionen'
                        )
                    )
                ),
                React.createElement(
                    'tbody',
                    null,
                    fileListing
                )
            );
        }
    }]);

    return FileList;
})(React.Component);

exports['default'] = FileList;
module.exports = exports['default'];

},{"./FileListEntry":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

'use strict';

var FileListEntry = (function (_React$Component) {
    function FileListEntry() {
        _classCallCheck(this, FileListEntry);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(FileListEntry, _React$Component);

    _createClass(FileListEntry, [{
        key: 'render',
        value: function render() {
            var href = this.props.type === 'dir' ? '#/dir/' : '#/file/';
            href += this.props.path;

            return React.createElement(
                'tr',
                null,
                React.createElement(
                    'td',
                    null,
                    React.createElement('input', { type: 'checkbox' })
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.type
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'a',
                        { href: href },
                        this.props.filename
                    )
                ),
                React.createElement(
                    'td',
                    { className: 'text-right' },
                    'A'
                ),
                React.createElement(
                    'td',
                    { className: 'text-right' },
                    this.props.size
                ),
                React.createElement(
                    'td',
                    { className: 'text-right' },
                    'A'
                ),
                React.createElement(
                    'td',
                    { className: 'text-right' },
                    'X Y'
                )
            );
        }
    }]);

    return FileListEntry;
})(React.Component);

exports['default'] = FileListEntry;
module.exports = exports['default'];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

'use strict';

var FileTree = (function (_React$Component) {
    function FileTree() {
        _classCallCheck(this, FileTree);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(FileTree, _React$Component);

    _createClass(FileTree, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'p',
                null,
                'FileTree'
            );
        }
    }]);

    return FileTree;
})(React.Component);

exports['default'] = FileTree;
module.exports = exports['default'];

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

"use strict";

var Toolbar = (function (_React$Component) {
    function Toolbar() {
        _classCallCheck(this, Toolbar);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Toolbar, _React$Component);

    _createClass(Toolbar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "toolbar" },
                React.createElement(
                    "div",
                    { className: "toolbar-group" },
                    React.createElement(
                        "button",
                        { className: "btn-toolbar-upload primary" },
                        "Upload"
                    ),
                    React.createElement(
                        "button",
                        { className: "btn-toolbar-download secondary" },
                        "Download"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "toolbar-group" },
                    React.createElement(
                        "button",
                        { className: "btn-toolbar-move" },
                        "Verschieben"
                    ),
                    React.createElement(
                        "button",
                        { className: "btn-toolbar-delete" },
                        "Löschen"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "toolbar-group" },
                    React.createElement(
                        "button",
                        { className: "btn-toolbar-create" },
                        "Erstellen"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "toolbar-group" },
                    React.createElement(
                        "button",
                        { className: "btn-toolbar-refresh" },
                        "Neu laden"
                    )
                )
            );
        }
    }]);

    return Toolbar;
})(React.Component);

exports["default"] = Toolbar;
module.exports = exports["default"];

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _FileTree = require('./FileTree');

var _FileTree2 = _interopRequireDefault(_FileTree);

var _Breadcrumbs = require('./Breadcrumbs');

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _Toolbar = require('./Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _FileList = require('./FileList');

var _FileList2 = _interopRequireDefault(_FileList);

var _Editor = require('./Editor');

var _Editor2 = _interopRequireDefault(_Editor);

'use strict';

var OnlineFtp = (function (_React$Component) {
    function OnlineFtp(props) {
        _classCallCheck(this, OnlineFtp);

        _get(Object.getPrototypeOf(OnlineFtp.prototype), 'constructor', this).call(this, props);
    }

    _inherits(OnlineFtp, _React$Component);

    _createClass(OnlineFtp, [{
        key: 'parseRoute',
        value: function parseRoute(hash) {
            var parts = hash.split('/');

            var type = parts[0];
            delete parts[0];

            var path = parts.join('/');

            return { type: type, path: path };
        }
    }, {
        key: 'render',
        value: function render() {
            var route = this.parseRoute(this.props.hash);

            var Child;
            switch (route.type) {
                case 'file':
                    Child = _Editor2['default'];break;
                default:
                    Child = _FileList2['default'];break;
            }
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'aside',
                    { className: 'sidebar' },
                    React.createElement(_FileTree2['default'], null)
                ),
                React.createElement(
                    'main',
                    { className: 'main' },
                    React.createElement(_Breadcrumbs2['default'], { path: route.path }),
                    React.createElement(_Toolbar2['default'], null),
                    React.createElement(Child, { path: route.path })
                )
            );
        }
    }]);

    return OnlineFtp;
})(React.Component);

// var routes = (
//     <Route name="app" path="/" handler={OnlineFtp}>
//         <Route name="dir/:path" handler={FileList}/>
//     </Route>
// );
// Router.run(routes, function (Handler, state) {
//     var params = state.params;
//
// });
function render() {
    var hash = window.location.hash.substr(2);
    React.render(React.createElement(OnlineFtp, { hash: hash }), document.getElementById('app'));
}
window.onhashchange = render;
render();

exports['default'] = OnlineFtp;
module.exports = exports['default'];

},{"./Breadcrumbs":2,"./Editor":3,"./FileList":4,"./FileTree":6,"./Toolbar":7}]},{},[1]);
