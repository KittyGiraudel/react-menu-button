import React from 'react'
import MenuButton from '../src'
import './styles.css'

class DifficultyMenu extends React.Component {
  constructor (props) {
    super(props)

    this.saveMenuRef = this.saveMenuRef.bind(this)
  }

  saveMenuRef (ref) {
    this.menu = ref
  }

  componentDidMount () {
    if (typeof this.props.onChoose === 'function') {
      this.menu.on('choose', this.props.onChoose)
    }
  }

  render () {
    return (
      <MenuButton
        id='difficulty'
        label='Difficulty'
        menuRef={this.saveMenuRef}
        className='menu'
      >
        <button type='button'>Easy</button>
        <button type='button'>Medium</button>
        <button type='button'>Hard</button>
      </MenuButton>
    )
  }
}

export default DifficultyMenu
