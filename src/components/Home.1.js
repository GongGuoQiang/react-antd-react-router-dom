import React,{ Component } from 'react';
import '../assets/css/index.css'
class Home extends Component{
    constructor(props){
        super(props);//固定写法
        this.state={ 
              name:'我是home组件'
        }
    }

    run(){
        alert('run一个')
    }

    render(){
       return(
           <div>
               {/* <h1 className="red">我是头头</h1>
               <p className={this.state.color}>你好！{this.state.name}</p>
               <p title={this.state.title}>我是一个div</p>

               <label htmlFor='name'>姓名</label>
               <input id="name" />
               <br/>
               <p style={{margin:this.state.space + "px"}} title={this.state.title}>我是一个div</p> */}
                
               <button onClick={this.run}>执行方法</button> 
           </div>
       )
    }
}

export default Home;