import React,{ Component } from 'react';
// import img from '../assets/img/1.png'
import Header from './Header.js'
class Home extends Component{
    constructor(){
        super();
        this.state={
              msg:'我是新闻组件',
        }
    }
    run=()=>{
        alert('我是父组件的run方法')
    }
    render(){

       return(
           <div>
               <Header run={this.run}/>
               <h2>{this.state.msg}</h2>
           </div>
       )
    }
}

export default Home;