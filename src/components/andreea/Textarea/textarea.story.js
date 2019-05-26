import React from 'react';
import { storiesOf } from '@storybook/react';

import Textarea from './Textarea';
import './../stories.css';

storiesOf('Textarea', module)
.addParameters({
  info: {
    header:false,
    inline: false, // where the components are inlined
    styles: {
      header: false
      },
    },
  })
    .add('textarea', ()=>(<div className="container">
        <p>Simple Centric textarea </p>
        <Textarea /></div>))
    .add('textarea maxlength', ()=>(<div className="container">
        <p>Simple Centric textarea with maximum length 20</p>
        <Textarea maxlength="20" /></div>))
    .add('textarea disabled', ()=>(<div className="container">
    <p>Simple Centric textarea disabled</p>
    <Textarea disabled /></div>))
     