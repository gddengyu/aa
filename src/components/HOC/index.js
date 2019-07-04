import React,{Fragment} from 'react';
import Child from '../child/';
import {connect} from 'react-redux';


class HOC extends React.Component{
    render(){
        return (
            <div>
                HOC
                <button onClick={this.changeNews.bind(this)}>仓库名字</button>
                {
                    this.HOC(<Child/>)
                }
            </div>
        )
    }
    HOC(component){
        return (
            <Fragment>
                <p>HOC高阶组件</p>
                {component}
            </Fragment>
        )
    }
    changeNews(){
        this.props.dispatch({
type : 'SET',
            myself : 'zheng'
        })
    }
    componentDidMount(){
        console.log(this);
    }
}

export default connect(
    (state) =>{
        return {myself:state.myself};
    }
)(HOC);