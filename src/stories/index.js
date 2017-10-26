import { storiesOf } from 'storybook-vue'
import { action } from '@storybook/addon-actions'

import MyButton from '../Button.vue'

storiesOf('Button', module)
  .add('Default', () => ({
    render() {
      return <MyButton>Default</MyButton>
    }
  }))
  .add('Emoji', () => ({
    render() {
      return <MyButton>😎🎉🌈⚽️</MyButton>
    }
  }))
  .add('Click action', () => ({
    methods: {
      handleClick() {
        action('button-click')(`hmmm, I'm clicked..`)
      }
    },
    render() {
      return (
        <MyButton nativeOnClick={this.handleClick}>
          Click me!
        </MyButton>
      )
    }
  }))
