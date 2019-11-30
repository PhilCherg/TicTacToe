import React, { Component } from 'react';
import Square from "./Square";

class Board extends Component {
    state = {
        isX: true,
    }

    determineChar = (isX) => {
        if (isX) {
            return "X";
        } else {
            return "O";
        }
    }

    handleClick = (id) => {
        console.log(this.state.isX);
        this.setState({isX: !this.state.isX});
    }

    renderSquare = (id) => {
        return (
            <Square 
                id={id}
                value={this.determineChar(this.state.isX)}
                onClick={this.handleClick}
            />
        )
    }
    
    render() {
        return (
            <div className="board">
                <div className="row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;