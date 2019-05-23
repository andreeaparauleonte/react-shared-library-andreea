import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { info, withInfo } from '@storybook/addons';
import Input from './input';
import './stories.css';

storiesOf('Input', module)
.addParameters({
  info: {
    header:false,
    inline: false, // where the components are inlined
    styles: {
      header: false
      },
    },
  })
    .add('input simple', 
        () => (<div className="container">
              <p>This is a simple centric mat input:</p>
              <Input type="text" placeholder="placeholder" />
              </div>))
    .add('input max', 
        () =>  (<div>
              <p>This is a centric mat input with maxLength = '2'</p>
              <Input type="text" maxLength="2" />
              </div>))
    .add('input min',
    () =>  (<div>
            <p>This is a centric mat input with minLength = '2'</p>
            <Input type="text" minLength="2"/>
            </div>))
    .add('input mask',
    () =>  (<div>
            <p>This is a centric mat input with mask set:</p>
            <Input type="text" mask="+7(999) 999-999" alwaysShowMask ="true"/>
            </div>))
    .add('input password',
    () =>(<div>
          <p>This is a centric mat input with type="password"</p>
          <Input type="password" />
        </div>))
    .add('clear icon',
    () => (<div>
      <p>This is a centric mat input with clear icon:</p>
      <Input type="text" hasClearIcon/>
    </div>))
    .add('success state',
    () => (<div>
      <p>This is a centric mat input with success state
          (className='input-success')</p>
      <Input type="text" className="input-success"/>
    </div>))
    .add('warning state',
    () => (<div>
      <p>This is a centric mat input with warning state
          (className='input-warning')</p>
      <Input type="text" className="input-warning"/>
    </div>))
    .add('invalid state',
    () => (<div>
      <p>This is a centric mat input with invalid state
          (className='input-invalid')</p>
      <Input type="text" className="input-invalid"/>
    </div>))