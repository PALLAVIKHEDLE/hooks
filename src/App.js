import React from 'react';
import EffectComponent from './useEffect/index';
import IdComponent from './useId/index';
import LayoutEffectComponent from './useLayoutEffect/index'
import MemoComponent from './useMemo/index'
// import DebugComponent from './useDebugValue/index'
import RefComponent from './useRef/index'


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
      <div className="content">
      <p>4. useMemo, cache the result of a calculation between re-renders </p>
      <MemoComponent/>
      </div>
      {/* <div className="content">
      <p>5. useDebugValue, is a React hook that allows you to display a label for custom hooks in React DevTools. </p>
      <DebugComponent/>
      </div> */}
      <div className="content">
      <p>6. useRef usecases , 
        1.Store and persist value between renders.
        2.direct access to any DOM node </p>
      <RefComponent/>
      </div>
    </div>
  );
}