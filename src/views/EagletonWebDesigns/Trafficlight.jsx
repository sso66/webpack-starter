// views/EagletonEnd/Trafficlight.jsx: < UIViewController >
console.info( 'Mounting Trafficlight.jsx... <Trafficlight />' );

import React from 'react';

import { Stoplight } from '../../redux/modules/CurrentLight/stoplight';
import { Buttons } from '../../redux/modules/CurrentLight/buttons';

// < UIViewDatasource >
class Trafficlight extends React.Component {

    render() {
        return (
            <div>
                <h2>Traffic Light</h2>
               <Stoplight store={this.props.store} />
               <Buttons store={this.props.store} />
            </div>
        )
    }    
}

export default Trafficlight;

// eof