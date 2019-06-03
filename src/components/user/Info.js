import React,{ Component } from 'react';

class Info extends Component{
    constructor(){
        super();
        this.state={
              msg:'我是新闻组件',
        }
    }

    render(){

       return(
           <div className="info">
               我是userinfo
           </div>
       )
    }
}

export default Info;