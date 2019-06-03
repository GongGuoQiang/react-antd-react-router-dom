import React, { Component } from 'react';
class Formlist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
             list:[]
         };
    }
    addData=()=>{
        // alert(this.refs.title.value)
        var tempList = this.state.list;
        tempList.push(this.refs.title.value);
        this.refs.title.value='';
        this.setState({
            list:tempList
        })
    }
    removeData=(index)=>{
        var tempList = this.state.list;
        tempList.splice(index,1);
        this.setState({
            list:tempList
        })
    }

    render() {
        return (
            <div>
             <h1>TODO任务日志</h1>
            <input ref='title' /><button onClick={this.addData}>增加+</button>
            <hr/>
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return(
                            <li key={index}>{item}<button onClick={this.removeData.bind(this,index)}>删除-</button></li>
                        )
                    })
                }
            </ul>
            </div>
            
        );
    }
}

export default Formlist;

