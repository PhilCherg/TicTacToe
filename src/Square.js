import React, { Component } from 'react';

class Square extends Component {
    state = {
        isClicked: false,
    }
    
    handleClick = () => {
        if (!this.state.isClicked) {
            this.setState({isClicked: true});
            this.props.onClick();
        }
    }

    determineChar = (clicked) => {
        if (clicked) {
            return this.props.value;
        } else {
            return null;
        }
    }
    
    render() {
        return (
            <button 
                className="square"
                onClick={this.handleClick}
            >{this.determineChar(this.state.isClicked)}</button>
        )
    }
}

export default Square;