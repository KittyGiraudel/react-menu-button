import React from 'react'
import MenuButton from '../src'

class DifficultyMenu extends React.Component {
  constructor (props) {
    super(props)

    this.saveMenuRef = this.saveMenuRef.bind(this)
    this.state = { choice: null }
  }

  saveMenuRef (ref) {
    this.menu = ref
  }

  componentDidMount () {
    this.menu.on('choose', choice => {
      this.setState({ choice: choice.innerText })
    })
  }

  render () {
    let label = 'Difficulty'

    if (this.state.choice) {
      label += ' ' + this.state.choice
    }

    return (
      <MenuButton
        id='difficulty'
        label={label}
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
