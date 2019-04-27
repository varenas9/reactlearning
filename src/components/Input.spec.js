import React from 'react';
import {render} from './lib/tests';
import Input from './Input';

describe('Input test', ()=>{
  it('should render Input', ()=>{
    const component= render(<Input/>);
    expect(component.toJSON()).toMatchSnapshot();
  })
  it('should render a value if value is given', ()=>{
    const component= render(<Input value="Chau"/>);
    expect(component.toJSON()).toMatchSnapshot();
  })
})