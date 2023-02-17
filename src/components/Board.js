import React from 'react';
import Square from "./Square";

const boarderStyle = {
    border: '3px solid black',
    width: '300px',
    height: '300px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto'
}

const Board = (props) => {
    return (
    <div style={boarderStyle}>
        {props.board.map((el, i) => (
            <Square key={i} el={el} index={i} handleMove={props.handleMove}/>))}
    </div>
    )
};

export default Board;
