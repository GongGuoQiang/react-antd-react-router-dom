import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
import { decreceAction,increceAction } from '../action/index.js';
import '../assets/css/index.css'
import { relative } from 'path';
class Home extends Component{
    constructor(props){
        super(props);//固定写法

        this.state={ 
              mag:'我是home组件'
        }

    }
    
    render(){
        const { count,handleDecrece,handleIncrece } = this.props;
       return(
           <div>
               <Carousel effect="fade" autoplay style={{position:relative}}>
                <div>
                <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1559553160&di=f71429a095bd556d5dd7fc9ab803d94a&src=http://cdn0.hbimg.cn/store/wm/piccommon/1198/11984/D525A3C998BBFFB18A8DBC941A.jpg" />
                </div>
                <div>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559563305335&di=0a8c9f707bdf898c9d122cf8d818ca9c&imgtype=0&src=http%3A%2F%2Fpic2.52pk.com%2Ffiles%2Fallimg%2F090626%2F1553504U2-2.jpg" />
                </div>
                <div>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559563305334&di=e854751098509528efde0ce32fbb78f6&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20140408%2FImg397875090.jpg" />
                </div>
                <div>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559563305333&di=60088864d8ae40e5bb0de0f77f877bb6&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201405%2F17%2F20140517213641_TQBMu.thumb.600_0.jpeg" />
                </div>
            </Carousel>
            <hr style={{borderBottom:'6px solid #f0f0f0',marginBottom:'40px'}} />
               <p>react状态管理库的基本使用</p>
               <p>1.安装react-redux和redux；
                   2.新建action目录并建index.js；
                   3.新建redux目录以及index.js；
                   4.在根目录index.js引入,"createStore，Provider"全局引入store；
                   5.通过提交action改变redux的state;
                </p>
               <h2>加法</h2>
               <button onClick={handleDecrece}>+</button><br/>
               <h2>减法</h2>
               <button onClick={handleIncrece}>-</button>
               <h2>{count}</h2>
           </div>
       )
    }
}

const mapStateToProps = (state)=> ({
    count:state.count
})

const mapDispatchToProps = (dispatch) => ({
    handleDecrece:()=>dispatch(decreceAction(1)),
    handleIncrece:()=>dispatch(increceAction(1))
})

const Increace = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
export default Increace;