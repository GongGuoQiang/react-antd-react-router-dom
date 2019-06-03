import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../assets/css/index.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentIndex:0
         };
    }
    state = {
        collapsed: false,
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    componentWillMount(){

    }
    handleClick=(index)=>{
        this.setState({
            currentIndex:index
        })
    }
    render() {
        return (
            <div className="shop user">
               <div className="content">
                    {/* <div className="left">
                       <Link className="tag" className={this.state.currentIndex === 0? 'active':''} onClick={this.handleClick.bind(this,0)} to="/shop/">商户列表</Link>
                       <Link className="tag" className={this.state.currentIndex === 1? 'active':''} onClick={this.handleClick.bind(this,1)} to="/shop/add">添加商户</Link>
                    </div> */}
                      <Layout>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                    商品
              </span>
            }
          >
            <Menu.Item key="1"><Link className="tag" to="/shop/">商品列表</Link></Menu.Item>
            <Menu.Item key="2"><Link className="tag" to="/shop/add">商品添加</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>shop</Breadcrumb.Item>
          <Breadcrumb.Item>add</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {
                        this.props.child.map((route,key)=>{
                            return <Route key={key} path={route.path} exact component={route.component} />
                        })
                    }
        </Content>
      </Layout>
    </Layout>
  </Layout>
                </div>
            </div>
        );
    }
}

export default Shop;