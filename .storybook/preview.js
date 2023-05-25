/** @type { import('@storybook/react').Preview } */
import { addDecorator } from "@storybook/react";
import Theme from "../src/context/Theme/Theme";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators : [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ]
};

export default preview;


