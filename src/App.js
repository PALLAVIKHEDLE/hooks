import React from 'react';
import EffectComponent from './useEffect/index';
import IdComponent from './useId/index';
import LayoutEffectComponent from './useLayoutEffect/index'

import './App.css'; 


export default function App() {
  return (
    <div className="app-container">
      <h1>React Hooks</h1>
      <div className="content">
      <p>1. useEffect perform side effects(fetching data, manually changing the dom) in function components. It will run after the component has rendered</p>
        <EffectComponent />
      </div>
      <div className="content">
      <p>2. useId , generate the unique ID's that can be passed to accessibility attributes </p>
        <IdComponent />
      </div>
      <div className="content">
      <p>3. useLayoutEffect , similar to useEffect, that fires before the browser repaints the screen </p>
      <LayoutEffectComponent/>
      </div>
    </div>
  );
}