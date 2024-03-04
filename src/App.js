import React from 'react';
import EffectComponent from './useEffect/index';
import IdComponent from './useId/index';
import LayoutEffectComponent from './useLayoutEffect/index'
import MemoComponent from './useMemo/index'
import DebugComponent from './useDebugValue/index'
import RefComponent from './useRef/index'
import ReducerComponent from './useReducer/index'
import TransitionComponent from './useTransition/index'
import DeferredComponent from './useDeferredValue/index'


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
      <div className="content">
      <p>5. useDebugValue, is a React hook that allows you to display a label for custom hooks in React DevTools. </p>
      <DebugComponent/>
      </div>
      <div className="content">
      <p>6. useRef usecases , 
        1.Store and persist value between renders.
        2.direct access to any DOM node </p>
      <RefComponent/>
      </div>
      <div className="content">
      <p>7. useReducer, takes the reducer function and initial state as arguments and returns the current state and a dispatch function. 
       </p>
      <ReducerComponent/>
      </div>
      <div className="content">
      <p>8. useTransition, returns an array with exactly two items:
      1. The pending flag that tells you whether there is a pending transition.
      2. The startTransition function that lets you mark a state update as a transition.
       </p>
      <TransitionComponent/>
      <div className="content">
      <p>9. useDeferredValue, 1. During the initial render, the deferred value will be the same as the value you provided.
2. During updates, the deferred value will “lag behind” the latest value. In particular, React will first re-render without updating the deferred value, and then try to re-render with the newly received value in background.
       </p>
      <DeferredComponent/>
      </div>
      </div>
    </div>
  );
}
