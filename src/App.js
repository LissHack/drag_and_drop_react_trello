import React, {useState} from 'react';
import './App.css';

const App = () => {
    const [boards, setBoards] = useState([
        {
            id: 1,
            title: 'Сделать',
            items: [{id: 1, title: 'Пойти в магазин',}, {id: 2, title: 'Выкинуть мусор',}, {id: 3, title: 'Покушать',}]
        },
        {
            id: 2,
            title: 'Проверить',
            items: [{id: 4, title: 'Код ревью',}, {id: 5, title: 'Задача на факториал',}, {id: 6, title: 'Задачи',}]
        },
        {
            id: 3,
            title: 'Сделано',
            items: [{id: 7, title: 'Сделать уборку',}, {id: 8, title: 'Поспать',}, {id: 9, title: 'Убраться',}]
        },

    ])

    function dragStartHandler(e, board, item) {

    }

    function dragLeaveHandler(e) {
        e.target.style.boxShadow = 'none'

    }

    function dragEndHandler(e) {
        e.target.style.boxShadow = 'none'

    }

    function dragOverHandler(e) {
        e.preventDefault()
        if (e.target.className == 'item') {
            e.target.style.boxShadow = '0 2px 3px gray'
        }
    }

    function dropHandler(e, board, item) {
        e.preventDefault()
    }


    return (
        <div className='app'>
            {boards.map(board =>
                <div className='board'>
                    <div className="board__title">{board.title}</div>
                    {board.items.map(item =>
                        <div
                            onDragStart={(e) => dragStartHandler(e, board, item)}
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDrop={(e) => dropHandler(e, board, item)}
                            draggable={true}
                            className='item'
                        >
                            {item.title}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default App;