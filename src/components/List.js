import React,{ Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:''
         };
    }
    getInput=()=>{
        alert(this.state.username)
    }
    inputChange=(e)=>{
        this.setState({
            username:this.refs.username.value
        })
    }
    inputKeyUp(e){
        console.log(e.keyCode)
    }
    render() {
        return (
             <div>
                 <input ref="username" onChange={this.inputChange} />
                 <button onClick={this.getInput}>获取input的值</button>

                 <br/>
                 <input onKeyUp={this.inputKeyUp} />
             </div>
        );
    }
}

export default List;