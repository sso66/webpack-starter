// Root.jsx
console.log( "Mounting Root.jsx..." );

import React from 'react';
import App from './App'

// Utility Modules
import '../utils/logger.es6';
import '../utils/startup';

const Root = () => {
    return ( 
        <div className="root">
            <App />
        </div>
    );
}

export default Root;

// eof