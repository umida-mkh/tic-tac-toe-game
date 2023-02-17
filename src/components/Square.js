import React from 'react';

const styleSquare = {
    border: '2px solid black',
    fontWeight: 'bold',
    fontSize: '20px',
    cursor: 'pointer',
}
const Square = (props) => {

    return (
        <button style={styleSquare} onClick={() => props.handleMove(props.index, props.el)}>
            {props.el}
        </button>
    );
};

export default Square;
