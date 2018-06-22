import React,{Component} from 'react'

export default class App extends Component{
    state={
        number:0
    }
    add=()=>{
        const number=this.state.number+this.refs.selectValue.value*1
        this.setState({
            number
        })
    }
    del=()=>{
        const number=this.state.number-this.refs.selectValue.value*1
        this.setState({
            number
        })
    }
    addOdd=()=>{
        if(this.state.number%2===1){
            const number=this.state.number+this.refs.selectValue.value*1
            this.setState({
                number
            })
        }
    }
    asyncAdd=()=>{
        setTimeout(()=>{
            const number=this.state.number+this.refs.selectValue.value*1
            this.setState({
                number
            })
        },2000)
    }
    render(){
        const number=this.state.number
        return(
            <div>
                <p>click {number} times</p>
                <select ref='selectValue'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                <button onClick={this.add}>+</button>
                <button onClick={this.del}>-</button>
                <button onClick={this.addOdd}>increment if odd</button>
                <button onClick={this.asyncAdd}>increment async</button>
            </div>
        )
    }
}