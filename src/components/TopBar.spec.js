import React from 'react';
import {render} from './lib/tests';
import TopBar from './TopBar';

describe('TopBar test', ()=>{
  it('should render the Top Bar', () => {
    const component =render(<TopBar/>);
    expect(component.toJSON()).toMatchSnapshot();
  })
})