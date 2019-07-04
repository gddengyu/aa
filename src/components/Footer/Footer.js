import React from 'react';

const data = {
    text:'无状态数据'
}

class Footer extends React.Component{
    state = {
        text : '有状态数据',
        color: 'red'
    }
    setColor(){
        console.log(this);
        this.setColor({
             text : 'this is a page',
             color:'#58bc58'
        })
       

    }
    render(){
        console.log(this)
        return (
            <div>
                <p>存放数据</p>
                {data.text}
                <h5>{this.state.color}</h5>
                <button onClick={this.setColor.bind(this)}>更改状态 {this.state.color}</button>
            </div>
        )
    }
}


export default Footer ; 