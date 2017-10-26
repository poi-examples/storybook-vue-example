import { storiesOf } from 'storybook-vue'
import { action } from '@storybook/addon-actions'

import MyButton from '../Button.vue'

storiesOf('Button', module)
  .add('Welcome', () => Welcome)
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

const Welcome = {
  render() {
    return <div>
      Welcome!
      <p>
      This storybook is built with <a href="https://github.com/egoist/poi">Poi</a> + <a href="https://github.com/egoist/poi/tree/master/packages/poi-preset-storybook">poi-preset-storybook</a>
      </p>
      <p>
      Check out the source code <a href="https://github.com/poi-examples/storybook-vue-example">here</a>.
      </p>
    </div>
  }
}
