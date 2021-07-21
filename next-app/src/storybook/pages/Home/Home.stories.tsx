import Home from './Home';
import { apolloClientMocks } from '../../_data_mocks/apollo_client_mocks';

export default {
  title: '7-Eleven/Pages/Home',
  component: Home,
  args: {  // default values
  
  },
  argTypes: {
  },
};

const Template = (args) => (<Home {...args} />);
export const Widget = Template.bind({});
Widget.args = {}

Widget.parameters = {
  apolloClient: apolloClientMocks,
};