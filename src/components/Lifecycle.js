import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        console.log('01构造函数')
        super(props);
        this.state = { 
            msg:'我是一个msg'
         };
    }
    componentWillMount(){
        console.log('02组件将要挂载')
    }
    componentDidMount(){
        console.log('04组件已经完成挂载')
    }
    render() {
        console.log('03数据渲染render')
        return (
            <div>
                生命周期函数演示{this.state.msg}
            </div>
        );
    }
}

export default Lifecycle;