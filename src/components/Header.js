import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <div>
                <p>{this.props.msg}</p>
                <button onClick={this.props.run}>调用父组件的run方法</button>
            </div>
        );
    }
}

export default Header;
