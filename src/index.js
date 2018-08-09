import React from 'react';
import ReactDOM from 'react-dom';

import Slider from './Slider';
import registerServiceWorker from './registerServiceWorker';


let IMAGE_DATA = [
    {src:require('./images/1.jpg')},
    {src:require('./images/2.jpg')},
    {src:require('./images/3.jpg')}
]

ReactDOM.render(<Slider
    items={IMAGE_DATA}
    speed={2}
    delay={4}
    pause={true}
    auto={true}
    dots={true}
    arrow={true}

/>, 
document.getElementById('root'));
registerServiceWorker();
