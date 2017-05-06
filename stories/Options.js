import React from 'react'
import MenuButton from '../src'

const DifficultyMenu = (props) => (
  <MenuButton
    id='difficulty'
    label='Difficulty'
    options={{ checkable: 'one' }}
    className='menu'
  >
    <button type='button'>Easy</button>
    <button type='button'>Medium</button>
    <button type='button'>Hard</button>
  </MenuButton>
)

export default DifficultyMenu
