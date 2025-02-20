const parent = React.createElement('div', { className: 'parent' }, [
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Hello World"),
        React.createElement("h2",{},"This is a paragraph"),
    ]),
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Hello World"),
        React.createElement("h2",{},"This is a paragraph"),
    ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));;
root.render(parent);