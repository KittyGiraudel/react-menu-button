'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');
var InclusiveMenuButton = require('inclusive-menu-button');

var MenuButton = function (_React$Component) {
  _inherits(MenuButton, _React$Component);

  function MenuButton(props) {
    _classCallCheck(this, MenuButton);

    var _this = _possibleConstructorReturn(this, (MenuButton.__proto__ || Object.getPrototypeOf(MenuButton)).call(this, props));

    _this.saveButtonRef = _this.saveButtonRef.bind(_this);
    _this.passMenuRef = _this.passMenuRef.bind(_this);
    return _this;
  }

  _createClass(MenuButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.menu = this.menu || new InclusiveMenuButton(this.buttonNode, this.props.options);
      this.passMenuRef(this.menu);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.menu = null;
      this.passMenuRef(undefined);
    }
  }, {
    key: 'passMenuRef',
    value: function passMenuRef(ref) {
      if (typeof this.props.menuRef === 'function') {
        this.props.menuRef(ref);
      }
    }
  }, {
    key: 'saveButtonRef',
    value: function saveButtonRef(ref) {
      this.buttonNode = ref;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: this.props.className },
        React.createElement(
          'button',
          {
            ref: this.saveButtonRef,
            type: 'button',
            'data-inclusive-menu-opens': this.props.id
          },
          this.props.label,
          React.createElement(
            'span',
            { 'aria-hidden': 'true' },
            '\u25BE'
          )
        ),
        React.createElement(
          'div',
          { id: this.props.id },
          this.props.children
        )
      );
    }
  }]);

  return MenuButton;
}(React.Component);

MenuButton.propTypes = {
  // The HTML `id` attribute of the button element, internally used by
  // inclusive-menu-button to connect it to the menu.
  id: PropTypes.string.isRequired,

  // The text used for the button element.
  label: PropTypes.string.isRequired,

  // A function called when the component has mounted, receiving the instance
  // of InclusiveMenuButton so that it can be programmatically accessed later
  // on.
  // E.g.: menuRef={(instance) => (this.menu = instance)}
  menuRef: PropTypes.func,

  // An object to pass to the constructor of InclusiveMenuButton.
  options: PropTypes.object
};

module.exports = MenuButton;

