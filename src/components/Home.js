import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { decreceAction,increceAction } from '../action/index.js';
import '../assets/css/index.css'
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