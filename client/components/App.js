import React from 'react';

const App = (props) => {
    return (
        <div>
            Hello World
            {props.children}
        </div>)
};

export default App;