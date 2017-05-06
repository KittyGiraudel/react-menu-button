# React MenuButton

react-menu-button is a React component for [inclusive-menu-button](https://github.com/Heydon/inclusive-menu-button) meant to ease the use of accessible menu buttons in React applications.

## Install

```
npm install --save react-menu-button
```

## Usage

There are 3 required properties for the menu-button component:

- `id`: the `id` attribute used internally by inclusive-menu-button to connect the button element and its menu.
- `label`: the text content for the button element.
- `children`: children to be rendered as the content of the menu (they should render `<button>` elements).

## Examples

Play with examples in the [storybook playground](https://hugogiraudel.github.com/react-menu-button).

```jsx
const MenuButton = require('react-menu-button')

const DifficultyMenu = (props) => (
  <MenuButton
    id='difficulty'
    label='Difficulty'
  >
    <button type='button'>Easy</button>
    <button type='button'>Medium</button>
    <button type='button'>Hard</button>
  </MenuButton>
)

ReactDOM.render(
  <DifficultyMenu />,
  document.getElementById('root')
)
```

More complex example using the inclusive-menu-button instance to programmatically use its API.

```jsx
const MenuButton = require('react-menu-button')

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
      >
        <button type='button'>Easy</button>
        <button type='button'>Medium</button>
        <button type='button'>Hard</button>
      </MenuButton>
    )
  }
}
```

## Inclusive-menu-button constructor options

In [version 0.1.1](https://github.com/Heydon/inclusive-menu-button/releases/tag/v0.1.1), inclusive-menu-button introduced an optional object as second argument for its constructor to define settings for the menu instance. This object can be passed as an `options` prop.

```jsx
<MenuButton … options={{ checkable: 'many' }}>
  …
</MenuButton>
```
