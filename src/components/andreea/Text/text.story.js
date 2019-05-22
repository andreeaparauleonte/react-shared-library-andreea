import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Text from './text';

storiesOf('Text', module).add('simple text example', () => <Text />);