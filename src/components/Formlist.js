import React, { Component } from 'react';
class Formlist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                name:'',
                sex:'1',
                msg:'react表单',
                city:'上海',
                citys:[
                    '北京','上海',"深圳"
                ],
                hobbyed:'睡觉',
                hobby:[
                    {
                        'title':'睡觉',
                        'checked':true
                    },
                    {
                        'title':'吃饭',
                        'checked':false
                    },
                    {
                        'title':'敲代码',
                        'checked':true
                    }
                ],
                info:''
         };
    }
    handelName=(e)=>{
          this.setState({
            name:e.target.value
          })
          console.log(this.state.name)
    }
    handelSubmit=(e)=>{
        //阻止表单默认提交事件
        e.preventDefault();
        console.log(this.state)
    }
    handelSex=(e)=>{
       this.setState({
           sex:e.target.value
       })
    }
    handelSelected=(e)=>{
        this.setState({
            city:e.target.value
        })
    }
    handelChecked(key,envent){
        let hobby = this.state.hobby;
        hobby[key].checked=!hobby[key].checked;
        this.setState({
            hobby:hobby
        })
        console.log(this.state.hobby)
    }
    handleInfo=(e)=>{
        this.setState({
            info:e.target.value
        })
    }
    render() {
        return (
            <div>
             <h1>表单</h1>
             {/* mvvm */}
             <form onSubmit={this.handelSubmit}>
                用户名：<input type="text" value={this.state.name} onChange={this.handelName} /><br/>
                性别：<input type="radio" value='1' checked={this.state.sex==1} onChange={this.handelSex} />男
                <input type="radio" value='2' checked={this.state.sex==2} onChange={this.handelSex} />女<br/>
                城市：<select value={this.state.city} selected={this.state.city} onChange={this.handelSelected}>
                    {
                        this.state.citys.map(function(item,key){
                            return <option key={key}>{item}</option>
                        })
                    }
                    </select><br/>
                爱好：{
                        this.state.hobby.map((item,key)=>{
                            return(
                            <span key={key}>
                            <input type="checkbox" checked={item.checked} onChange={this.handelChecked.bind(this,key)} />{item.title}
                            </span>
                            )
                            
                        })
                    }
                    <br/>
                备注：<textarea value={this.state.info} onChange={this.handleInfo}></textarea>      
                <input type="submit" defaultValue="提交" />
            </form>
            </div>
            
        );
    }
}

export default Formlist;

