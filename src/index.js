import React from "react";
import ReactDOM from "react-dom";
import './styles/index.sass'

const App = () => {
  return <div className='asd'>Hello React,Webpack 4 & Babel 7!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
