const React = require('react')
const PropTypes = require('prop-types')
const createReactClass = require('create-react-class')
const InclusiveMenuButton = require('inclusive-menu-button')

const MenuButton = createReactClass({
  propTypes: {
    // The HTML `id` attribute of the button element, internally used by
    // inclusive-menu-button to connect it to the menu.
    id: PropTypes.string.isRequired,

    // The text used for the button element.
    label: PropTypes.string.isRequired,

    // A function called when the component has mounted, receiving the instance
    // of InclusiveMenuButton so that it can be programmatically accessed later
    // on.
    // E.g.: menuRef={(instance) => (this.menu = instance)}
    menuRef: PropTypes.func
  },

  componentDidMount: function () {
    this.menu = this.menu || new InclusiveMenuButton(this.buttonNode)
    this.passMenuRef(this.menu)
  },

  componentWillUnmount: function () {
    this.menu = null
    this.passMenuRef(undefined)
  },

  passMenuRef: function (ref) {
    if (typeof this.props.menuRef === 'function') {
      this.props.menuRef(ref)
    }
  },

  saveButtonRef: function (ref) {
    this.buttonNode = ref
  },

  toggle: function () { this.menu.toggle() },
  close: function () { this.menu.close() },
  open: function () { this.menu.open() },
  on: function () { this.menu.on() },

  render: function () {
    return (
      React.createElement("div", {className: this.props.className}, 
        React.createElement("button", {
          ref: this.saveButtonRef, 
          type: "button", 
          "data-inclusive-menu-opens": this.props.id
        }, 
          this.props.label, 
          React.createElement("span", {"aria-hidden": "true"}, "▾")
        ), 

        React.createElement("div", {id: this.props.id}, 
          this.props.children
        )
      )
    )
  }
})

module.exports = MenuButton
