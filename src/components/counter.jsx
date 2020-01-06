import React, { Component } from 'react';
class Counter extends Component
{
    state = {
        counterValue:0,
        // price:0,
        // currentItemPrice:0,
        // currentItem:"",
    }
render()
{
   const {counterValue,
    //  price,
    //  currentItem
    } = this.state;
return(<div>
    {/* <h1>Menu </h1>
    <h1>------------------------------</h1>
    <h1 onClick = {()=>onClickHandler(300,"pizza")}>Pizza</h1>
    <h1 onClick ={()=> onClickHandler(150,"burger")}> Burger</h1>
    <h1 onClick = {()=>onClickHandler(100, "pasta")}> Pasta </h1>
    <h1 onClick = {()=>onClickHandler(100, "dimsum")}> Pasta </h1>
    <h1>---------------------------------</h1> */}
    {/* <h1>Selected item = {currentItem} </h1> */}
    {/* <h1>quantity = {counterValue}</h1> */}
<h1>{counterValue}</h1>
<button onClick = {()=> this.onIncrementHandler()}>Increment</button>
<button onClick = {()=> this.onDecrementHandler()}>Decrement</button>
<button onClick ={()=> this.onResetHandler()}> Reset </button>
{/* <button onClick ={()=> this.onCalculateHandler()}> Calculate</button> */}
<h1>--------------------------------</h1>
{/* <h1>final price = Rs.{price}</h1> */}
    </div>)
}
onIncrementHandler = ()=>
{
console.log("increment button click");
const count = this.state.counterValue+1;
this.setState({counterValue:count})
}

// onClickHandler = (price,item)=>
// {
//     this.setState({currentItemPrice:price, currentItem:item})
// }
onDecrementHandler = ()=>
{
    console.log("decrement button click");
    const count = this.state.counterValue-1;
    this.setState({counterValue:count});
}
onResetHandler = ()=>
{
    console.log("Reset button clicked");
    this.setState({counterValue:0, price:0,currentItemPrice:0, currentItem:""})
}
// onCalculateHandler = ()=>
// {
//     this.setState({price:this.state.counterValue*this.state.currentItemPrice})
// }
}
export default Counter