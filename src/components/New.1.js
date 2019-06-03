import React,{ Component } from 'react';
// import img from '../assets/img/1.png'

class Home extends Component{
    constructor(){
        super();
        this.state={
              name:'张三',
              list:['12312312',44444,'qweqweqwe'],
              list2:[<h2>2222</h2>,<h2>2222</h2>]
        }
    }
    render(){

       return(
           <div>
               {/* <h2>{this.state.name}</h2>
               <img src={require('../assets/img/1.png')} />
               <img src={img} />


               <hr/>
               <ul>
               {listResult}
               </ul> */}
           </div>
       )
    }
}

export default Home;