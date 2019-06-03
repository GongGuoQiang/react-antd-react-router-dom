import React, { Component } from 'react';
class Formlist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
             list:[
                //  {title:'录制视频',checked:true},
                //  {title:'录制视asd',checked:false},
                //  {title:'录制放',checked:true},
                //  {title:'录制水电费水电费',checked:true}
             ]
         };
    }
    addData=()=>{
        // alert(this.refs.title.value)
        var tempList = this.state.list;
        tempList.push({title:this.refs.title.value,checked:false});
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
    changeCheck=(index)=>{
        var tempList = this.state.list;
        tempList[index].checked=!tempList[index].checked;
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
            <h2>待办事项</h2><hr/>
            <ul>
                {
                    this.state.list.map((item,index)=>{
                    if(!item.checked){
                        return(
                         <li key={index}>
                             <input type="checkbox" checked={item.checked} onChange={this.changeCheck.bind(this,index)}/>
                             {item.title}<button onClick={this.removeData.bind(this,index)}>删除-</button>
                         </li>
                        )
                    }
                    })
                }
            </ul>
            <h3>已完成事项</h3><hr/>
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        if(item.checked){
                            return(
                             <li key={index}>
                                 <input type="checkbox" checked={item.checked} onChange={this.changeCheck.bind(this,index)}/>
                                 {item.title}<button onClick={this.removeData.bind(this,index)}>删除-</button>
                             </li>
                            )
                        }
                    })
                }
            </ul>
            <h3>全部事项</h3><hr/>
            <ul>
                {
                    this.state.list.map((item,index)=>{
                            return(
                             <li key={index}>
                                 <input type="checkbox" checked={item.checked} onChange={this.changeCheck.bind(this,index)}/>
                                 {item.title}<button onClick={this.removeData.bind(this,index)}>删除-</button>
                             </li>
                            )
                    })
                }
            </ul>
            </div>
            
        );
    }
}

export default Formlist;

