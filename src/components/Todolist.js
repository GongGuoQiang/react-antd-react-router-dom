import React,{ Component } from 'react';
// import img from '../assets/img/1.png'

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state={
              username:'adasd'
        }
    }
    inputChange=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    setUsername=(e)=>{
        this.setState({
            username:'我是改变后的值'
        })
    }

    render(){

       return(
           <div>
               <h2>双向数据绑定</h2>
               {/* modle改变影响view，view改变反过来影响modle */}
               <input value={this.state.username} onChange={this.inputChange} />
               <p>{this.state.username}</p>
               <button onClick={this.setUsername}>view改变modle</button>
           </div>
       )
    }
}

export default Todolist;