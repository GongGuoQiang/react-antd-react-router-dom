import React,{ Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/css/index.css'

// import New from './components/New.js'
// import List from './components/List.js'
// import Todolist from './components/Todolist.js'
//  import Formlist from './components/Formlist.js'
//  import Todolist2 from './components/Todolist2.js'
//  import Todolist3 from './components/Todolist3.js'

 import routes from './components/model/router.js'
 import { Layout, Menu, Breadcrumb, Icon } from 'antd';

 const { SubMenu } = Menu;
 const { Header, Content, Sider } = Layout;

class App extends Component{


  render(){
      return(
        
        <div className="app">
        <Router>
       <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Link className="tag" to="/">首页</Link></Menu.Item>
              <Menu.Item key="2"><Link className="tag" to="/pcontent">商品</Link></Menu.Item>
              <Menu.Item key="3"><Link className="tag" to="/shop">商户</Link></Menu.Item>
              <Menu.Item key="4"><Link className="tag" to="/news">新闻</Link></Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {
                      routes.map((route,key)=>{
                        if(route.exact){
                          return <Route key={key} exact path={route.path}
                            render={props => (
                              <route.component {...props} child={route.children}/>
                              )}
                            />
                        }else{
                          return <Route key={key} path={route.path}
                          render={props =>(
                              <route.component {...props} child={route.children} />
                              )}
                          />
                        }
                      })
                    }
              </Content>
            </Layout>
          </Layout>
        </Layout>
        </Router>
        </div>
      )
  }
}

export default App;
