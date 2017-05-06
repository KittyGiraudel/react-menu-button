const React = require('react')
const PropTypes = require('prop-types')
const InclusiveMenuButton = require('inclusive-menu-button')

class MenuButton extends React.Component {
  constructor (props) {
    super(props)

    this.saveButtonRef = this.saveButtonRef.bind(this)
    this.passMenuRef = this.passMenuRef.bind(this)
  }

  componentDidMount () {
    this.menu = this.menu || new InclusiveMenuButton(this.buttonNode, this.props.options)
    this.passMenuRef(this.menu)
  }

  componentWillUnmount () {
    this.menu = null
    this.passMenuRef(undefined)
  }

  passMenuRef (ref) {
    if (typeof this.props.menuRef === 'function') {
      this.props.menuRef(ref)
    }
  }

  saveButtonRef (ref) {
    this.buttonNode = ref
  }

  render () {
    return (
      <div className={this.props.className}>
        <button
          ref={this.saveButtonRef}
          type='button'
          data-inclusive-menu-opens={this.props.id}
        >
          {this.props.label}
          <span aria-hidden='true'>▾</span>
        </button>

        <div id={this.props.id}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

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
}

module.exports = MenuButton
