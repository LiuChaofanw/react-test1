import React,{Component} from 'react'
import {Button,Toast} from 'antd-mobile'
export default class App extends Component{
    handlerClick=()=>{
        Toast.success('哈哈哈',1)
    }
    render(){
        return(
            <Button type='primary' onClick={this.handlerClick}>测试</Button>
        )
    }
}