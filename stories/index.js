import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import BasicDifficultyMenu from './Basic'
import ClickDifficultyMenu from './Click'
import DynamicLabelDifficultyMenu from './DynamicLabel'
import OptionsDifficultyMenu from './Options'

storiesOf('MenuButton', module)
  .addDecorator((story) => (
    <div style={{ 'display': 'flex', 'height': '100vh' }}>
      <div style={{ 'margin': 'auto' }}>
        {story()}
      </div>
    </div>
  ))
  .add('Basic', () => (
    <BasicDifficultyMenu />
  ))
  .add('Intercepting click', () => (
    <ClickDifficultyMenu onChoose={choice => action('Option ‘' + choice.innerText + '’ clicked')(choice)} />
  ))
  .add('Dynamic label', () => (
    <DynamicLabelDifficultyMenu />
  ))
  .add('Inclusive-menu-button options', () => (
    <OptionsDifficultyMenu />
  ))
