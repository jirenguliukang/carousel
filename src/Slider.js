import React, { Component } from 'react';
import './slider.css';
import SliderItems from "./SliderItems.js"
import SliderArrows from "./SliderArrows.js"
import SliderDots from "./SliderDots.js"
class Slider extends Component {
  constructor(){
    super();
    this.state={index:0}
  }
  
  turn = (step) =>{
    let index = this.state.index+step;
    if(index<0){
      this.$slider.style.transitionDuration = "0s";
      this.$slider.style.left=-400*this.props.items.length+"px";
      setTimeout(()=>{
        index = this.props.items.length-1;
        this.$slider.style.transitionDuration = this.props.speed+"s";
        this.setState({index})
      },0)
      return;
      // index = this.props.items.length-1
    }
    if(index > this.props.items.length){
      this.$slider.style.transitionDuration = "0s";
      this.$slider.style.left=0;
      setTimeout(()=>{
        index=1;
        this.$slider.style.transitionDuration = this.props.speed+"s";
        this.setState({index});
      },0)
     return;
    }
    this.setState({index})
  }

  //启动自动轮播
  go = () =>{
    this.$timer = setInterval(()=>{
      this.turn(1);
    },this.props.delay*1000);
  }
  componentDidMount(){
    this.$slider = document.querySelector(".sliders");
    if(this.props.auto){
       this.go();
    }
  }
  render() {

    return(
      <div onMouseOver={() => clearInterval(this.$timer)} onMouseOut={() => this.go()} className="slider-wrapper">
        <SliderItems
          items={this.props.items}
          index={this.state.index}
          speed={this.props.speed} />
        <SliderArrows 
        turn ={this.turn}
        />
        <SliderDots
         items={this.props.items}
         index={this.state.index}
         turn ={this.turn}/>
      </div>

    )

  }
}

export default Slider;
