// /stories/pages/home.stories.jsx

import Home from "../../pages/index";

export default {
  title: "Pages/Home",
  component: Home,
  argTypes: {
      backgroundColor: {control: 'color'},
      description: {control: "Hidsd"}
  }
};

const Template = (args) => <Home {...args}/>

export const HomePage = () => <Home />;
export const Homepage = Template.bind({});
Homepage.args = {
  primary: true,
  label: 'Bg',
  description: "Hi"
};
Homepage.storyName='hm';
