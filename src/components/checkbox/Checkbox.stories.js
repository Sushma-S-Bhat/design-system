import Checkbox from "./checkbox";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Common/Checkbox',
  component: Checkbox,
    args:{
      label:'Checkbox',
      name:'Checkbox',
    },
  }

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Checked = {
  args: {
    checked: true,
  },
};

export const UnChecked = {
    args: {
      checked: false,
    },
  };

