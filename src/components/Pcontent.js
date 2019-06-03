import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Info from './user/Info.js'
import Main from './user/Main.js'
class Pcontent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="user">
                <div className="content">
                    {/* <div className="left">
                       <Link className="tag" to="/Pcontent">用户信息</Link>
                       <Link className="tag" to="/Pcontent/main">主要内容</Link>
                    </div> */}
                    <div className="right">
                        <Route path="/Pcontent" exact component={Info} />
                        <Route path="/Pcontent/main" component={Main} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Pcontent;