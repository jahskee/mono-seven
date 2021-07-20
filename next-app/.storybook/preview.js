import { muiTheme } from 'storybook-addon-material-ui'
import { MockedProvider } from '@apollo/client/testing';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'dark'
  },
  apolloClient: {
    MockedProvider,
    // any props you want to pass to MockedProvider on every story
  },
}

export const decorators = [
	muiTheme()
];