const React = require('react')
const ReactDOM = require('react-dom')
const MenuButton = require('../dist')


describe('The MenuButton component', () => {
  const root = document.createElement('div')
  it('should throw if no `id` is passed', () => {
    expect(() => {
      ReactDOM.render(<MenuButton />, root)
    }).toThrow()
  })

  it('should render without crashing', () => {
    ReactDOM.render(<MenuButton id='foo' label='Foo' />, root)
  })
})
