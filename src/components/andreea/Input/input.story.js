import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { info, withInfo } from '@storybook/addons';
import Input from './input';

storiesOf('Input', module)
.addParameters({
  info: {
    // Make a default for all stories in this book,
    inline: true, // where the components are inlined
    styles: {
      header: false
      },
    },
  })
    .add('input simple', 
        () => <Input type="text" placeholder="placeholder" onChange={action('value changed')}/>,
        { info: { text: "This is a simple centric mat input:" } })
    .add('input max', 
        () =>  <Input type="text" maxLength="2" onChange={action('value changed')}/>,
    { info:{text: "This is a centric mat input with maxLength = '2'"} } )
    .add('input min',
    () =>  <Input type="text" minLength="2" onChange={action('te changed')}/>,
    { info:{text: "This is a centric mat input with minLength = '2'"} } )
    .add('input mask',
    () =>  <Input type="text" data-inputmask="'mask': '9999 9999 9999 9999'" onChange={action('test changed')}/>)


 