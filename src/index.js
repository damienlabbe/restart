import React from 'react';
import ReactDom from 'react-dom';

import sayHello from './utils';
import './style.css';

const Content = () => (
    <div>
        <h1>Test</h1>
        <p>{sayHello()}</p>
    </div>
);

ReactDom.render(<Content />, document.getElementById('root'));