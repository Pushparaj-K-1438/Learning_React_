const Element = React.createElement('div', {}, [
    React.createElement('h1', {}, [ "Parent Element",
        React.createElement('h2', {},"Child Element")
    ])]
);

const renderToDom = ReactDOM.createRoot(document.getElementById('root'));
renderToDom.render(Element);