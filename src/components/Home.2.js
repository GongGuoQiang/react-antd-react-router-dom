import React,{ Component } from 'react';
import '../assets/css/index.css'
class Home extends Component{
    constructor(props){
        super(props);//固定写法

        this.state={ 
              mag:'我是home',
              username:''
        }

    }
    

    run=(e)=>{
        // alert('run一个')
        // alert(this.state.mag)
        // this.setState({
        //     mag:'我是home，改变后的值'+val+val2
        // })
        e.target.style.background="red"
        console.log(e.target.getAttribute('aid'))
    }

    inputChange=(e)=>{
        this.setState({
            username:e.target.value
        })
        console.log(e.target.value)
    }
    
    getInput=()=>{
        alert(this.state.username)
    }
    render(){
       return(
           <div>
               {this.state.mag}
               <br/>
               {/* <button onClick={this.run.bind(this)}>执行方法</button>  */}
               <button aid="qweqwe" onClick={this.run}>执行方法</button> 
               <br/>
               {/* 获取表单的值
               1.监听表单的改变事件；
               2.在改变的时间里面获取表单输入的值；
               3.把表单输入的值赋值给username；
               4.点击按钮的时候获取表单的值； */}
               <input onChange={this.inputChange}  /><button onClick={this.getInput}>获取input值</button> 
           </div>
       )
    }
}

export default Home;