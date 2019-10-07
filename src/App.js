/*
  Evan MacHale - 19191391
  07.10.19
  App.js
*/

import React from 'react';
import './App.scss';
import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import Nav from './components/nav';

function App() {
  return (
    <>
      <Nav />
      <Content>
        <Button>Button</Button>
      </Content>
    </>
  );
}

export default App;
