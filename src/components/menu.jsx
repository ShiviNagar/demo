import React, { Component } from 'react';
class Menu extends Component {
    state = 
    {
        currentItem:"",
        currentItemPrice:0,
        price:0,
        counterValue:0,

    }
    render()
    {
        const {price,counterValue,currentItem} = this.state;
        return(<div>
            <h1> Menu </h1>
            <h1>--------------------------------------------</h1>
        
            <h1 onClick ={()=> this.onClickHandler(300,"pizza")}>Pizza</h1>
            <h1 onClick ={()=> this.onClickHandler(150,"burger")}>Burger</h1>
            <h1 onClick = {()=> this.onClickHandler(100,"Pasta")}> Pasta </h1>
            <h1 onClick = {()=> this.onClickHandler(200,"Dimsum")}> Dimsum </h1>
            <h1>---------------------------------------------</h1>
        <h1>selected item = {currentItem}</h1>
        <h1> quantity = {counterValue}</h1>
         <button onClick ={()=>this.onIncrementHandler()}>Increment</button> 
         <button onClick = {()=>this.onDecrementHandler()}>Decrement </button> 
        <button onClick = {()=>this.onResetHandler()}>Reset </button>
        <button onClick = {()=>this.onCalculateHandler()}>Calculate </button>
        <h1>-----------------------------------------------------</h1>
    <h1>final price = Rs. {price}</h1>
        </div>
        )
    }
    onClickHandler = (price,item)=>
    {
        this.setState({currentItemPrice:price, currentItem:item})
    }
    onIncrementHandler =()=>
    {
        console.log("increment button")
        const count = this.state.counterValue+1
        this.setState({counterValue:count})
    }
    onDecrementHandler =()=>
    {
        console.log("decrement button");
        const count = this.state.counterValue-1
        this.setState({counterValue:count})
    }
    onResetHandler = ()=>
    {
        this.setState({counterValue:0,price:0, currentItemPrice:0, currentItem:""})
    }
    onCalculateHandler = ()=>
    {
        this.setState({price:this.state.counterValue*this.state.currentItemPrice})
    }
}
export default Menu;