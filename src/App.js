import './App.css';
import React, {useEffect, useState} from "react";
import Board from "./components/Board";

function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [playerX, setPlayerX] = useState(true);
    const [winner, setWinner] = useState(undefined);

    useEffect(() => {
        winnerResult()
    }, [board])

    const handleMove = (ind, el) => {
        if (el === null) {
            const player = playerX ? 'X' : 'O';
            setBoard(board.map((el, i) => i === ind ? player : el))
            setPlayerX(!playerX)
        }
    }
    const winnerResult = () => {
        const calculateResult = [
            [0, 4, 8],
            [2, 4, 6],
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ]
        for (let i = 0; i < calculateResult.length; i++) {
            const [a, b, c] = calculateResult[i];
            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                setWinner(`${board[a]} won!`)
            }
        }
    }
    return (
        <div className="App">
            <h1>Tic Tac Toe</h1>
            <Board board={board} handleMove={handleMove}/>
            <h2>{winner}</h2>
        </div>
    );
}

export default App;
