import { withKnobs, text } from '@storybook/addon-knobs';
import Main from './index';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
};

export const Basic: React.FC = () => (
  <Main
    title={text('Title', 'vasdbfab')}
    description={text('Description', '')}
  />
);
