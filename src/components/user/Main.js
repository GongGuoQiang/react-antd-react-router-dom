import React,{ Component } from 'react';

class Main extends Component{
    constructor(){
        super();
        this.state={
              msg:'我是新闻组件',
        }
    }

    render(){

       return(
           <div className="Main">
               我是main
           </div>
       )
    }
}

export default Main;