import React from 'react';

export default class Example extends React.Component{
    state = {
        style:{display:'block',color:'red',weak:'foible'},
        bool: !0
    }
    render(){
        return (
            <div>
                <p style={this.state.style}>Who are you? you is mine!</p>
                <button style={{display:this.state.bool ? 'block':'none'}}>a half of all students</button>
                <p onClick={
                    ()=>{
                        this.setState({
                            bool : !this.state.bool
                        })                        
                    }
                   
                }>是显示</p>
            </div>
        )
    }
}