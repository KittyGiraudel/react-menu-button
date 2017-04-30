# React MenuButton

react-menu-button is a React component for [inclusive-menu-button](https://github.com/Heydon/inclusive-menu-button) meant to ease the use of accessible menu buttons in React applications.

## Install

```
npm install --save react-menu-button
```

## Example

There are 3 required properties for the menu-button component:

- `id`: the `id` attribute used internally by inclusive-menu-button to connect the button element and its menu.
- `label`: the text content for the button element.
- `children`: children to be rendered as the content of the menu (they should render `<button>` elements).

```jsx
const MenuButton = require('react-menu-button')

const DifficultyMenu = (props) => (
  <ReactMenuButton
    id='difficulty'
    label='Difficulty'
  >
    <button type='button'>Easy</button>
    <button type='button'>Medium</button>
    <button type='button'>Hard</button>
  </ReactMenuButton>
)

ReactDOM.render(
  <DifficultyMenu />,
  document.getElementById('root')
)
```

More complex example using the inclusive-menu-button instance to programmatically use its API.

```jsx
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
      <ReactMenuButton
        id='difficulty'
        label={label}
        menuRef={this.saveMenuRef}
      >
        <button type='button'>Easy</button>
        <button type='button'>Medium</button>
        <button type='button'>Hard</button>
      </ReactMenuButton>
    )
  }
}
```
