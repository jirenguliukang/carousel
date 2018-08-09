import React, { Component } from 'react';

class SliderItems extends Component{

    render(){
        let style={
            width:(this.props.items.length+1)*400,
            left:this.props.index*-400,
            transitionDuration:this.props.speed+'s'
          }
        return(

            <ul style={style} className="sliders">
                {
                    this.props.items.map((item, index) => (
                        <li key={index} className="slider"><img src={item.src} />
                        </li>
                    ))

                }
                <li key={this.props.items.length} className="slider"><img src={this.props.items[0].src} />
                </li>
            </ul>
        )
    }

}

export default SliderItems;