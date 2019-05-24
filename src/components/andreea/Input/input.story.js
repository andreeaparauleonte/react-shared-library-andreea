import React from 'react';
import { storiesOf } from '@storybook/react';

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
        () => (<div className="container">
              <p>This is a centric mat input with maxLength = '2'</p>
              <Input type="text" maxLength="2" />
              </div>))
    .add('input min',
        () => (<div className="container">
            <p>This is a centric mat input with minLength = '2'</p>
            <Input type="text" minLength="2"/>
            </div>))
    .add('input mask',
        () => (<div className="container">
            <p>This is a centric mat input with mask set:</p>
            <Input type="text" mask="+7(999) 999-999" alwaysShowMask ="true"/>
            </div>))
    .add('input password',
        () => (<div className="container">
          <p>This is a centric mat input with type="password"</p>
          <Input type="password" />
        </div>))
    .add('input event',
        () => { class StoryComponent extends React.Component {                       
                        state = {
                          value : ""
                        }
                        
                        inputValueChanged = (value) =>{
                          this.setState({ value });
                        }

                        render(){                         
                            return (<div className="container">
                              <p>This is a centric mat input with (inputValueChanged) event set:</p>
                              <Input type="text" inputValueChanged={this.inputValueChanged}/>
                              <p>Input value changed: {this.state.value}</p>
                              </div>)
                        }
                    };

                    return <StoryComponent />
        })
    .add('clear icon',
        () => (<div className="container">
          <p>This is a centric mat input with clear icon:</p>
          <Input type="text" hasClearIcon/>
        </div>))
    .add('success state',
        () => (<div className="container">
          <p>This is a centric mat input with success state (className='input-success')</p>
          <Input type="text" className="input-success"/>
        </div>))
    .add('warning state',
        () => (<div className="container">
          <p>This is a centric mat input with warning state (className='input-warning')</p>
          <Input type="text" className="input-warning"/>
        </div>))
    .add('invalid state',
        () => (<div className="container">
          <p>This is a centric mat input with invalid state (className='input-invalid')</p>
          <Input type="text" className="input-invalid" hasClearIcon/>
        </div>))
    .add("input color",
    () => (<div className="container">
          <p>This is a centric mat input type color</p>
          <Input type="color" value="#0000ff" hasClearIcon/>
        </div>))
    .add("input date",
    () => (<div className="container">
          <p>This is a centric mat input type color</p>
          <Input type="date" hasClearIcon/>
        </div>))