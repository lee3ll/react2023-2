import React from 'react'
import ReactDOM from 'react-dom';

function Hello(props){
    return <h1>Hello, {props.name}</h1>
}
const elemnt = <Hello name="lee3ll"/>;

ReactDOM.render(elemnt, document.getElementById("root"));

export default Hello;