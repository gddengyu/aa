import React from 'react';
import { connect } from 'react-redux';


const data = {
    txt:"flower",
    name:'deng',
    bool:!0
}



class Searchbar extends React.Component{
    
    state = {
        bool:0,
        searchInputValue:''
    }
    toggle(){
        //v => M 
        this.refs.input.focus();
        this.setState({
            bool:!this.state.bool
        })
    }
    getSearchValue(e) {
        console.log(e.target.value);
        this.setState({
            searchInputValue: e.target.value
        })

        // 把输入框的值放进仓库里面
        // this.props.dispatch({
        //     type: 'GETSEARCHVALUE',
        //     getSearchValue: e.target.value
        // })
        // this.setState({
        //     searchInputValue: e.target.value
        // })
    }
    render(){
       
        return (
            <div className={
                this.state.bool?'weui-search-bar_focusing weui-search-bar':'weui-sea rch-bar'
            }
             id="searchBar">
                <form className="weui-search-bar__form">
                    <div className="weui-search-bar__box">
                        <i className="weui-icon-search"></i>
                        <input  type="search" ref="input" value={this.state.searchInputValue} className="weui-search-bar__input" id="searchInput" placeholder="搜索"  onChange={
                            this.getSearchValue.bind(this)
                        } required="" />
                        <button className="weui-icon-clear" id="searchClear" style={{border:'none'}} onClick={
                            ()=>{
                                this.setState({
                                    searchInputValue:''
                                })
                            }
                            
                        }></button>
                    </div>
                    <label onClick={this.toggle.bind(this)} className="weui-search-bar__label" id="searchText">
                        <i className="weui-icon-search"></i>
                        <span>{data.txt}</span>                        
                    </label>
                </form>
                <a href="#top" className="weui-search-bar__cancel-btn" id="searchCancel" onClick={this.toggle.bind(this)}>取消</a>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.refs.input);
    }
}


export default connect(
    (state) =>{
        return state
    }
)(Searchbar);
