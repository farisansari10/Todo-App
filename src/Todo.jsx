import React, { useState } from 'react'

function Todo() {
    
    const [inputList, setInputList] = useState('');
    const [todoItems, setTodoItems] = useState([]);
    const [num, setNum] = useState(0)
    const [show2, setshow2] = useState([false, false]);
    const [completed, setCompleted] = useState([]);
    
    const handleTodo = (e) => {
        setInputList(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoItems((prevItems) => {
            return [...prevItems, inputList]
        });
        setInputList("");
    }

    const handleCheck = (item, index) => {
        setTodoItems(todoItems.filter((i, idx) => index !== idx));
        setCompleted(preValue => ([...preValue, item]));
    }


    return (
        <div className='mx-auto py-12 flex justify-center'>
            <div className='w-96 h-full border border-gray-200 px-4 py-6'>
                 <div>
                    <p className='font-bold text-3xl leading-9'>December 1, 2021</p>
                    <p className='text-gray-500 text-sm mt-2 mb-4 font-semibold'>{todoItems.length} Incompleted, {completed.length} completed</p>
                    <hr />
                </div>
                <div className='mt-3'>
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleTodo} className='border border-gray-200 px-6 py-3 rounded-lg w-full' value={inputList} type='text' placeholder='Enter Todos' />
                    </form>
                </div>
                <div className='mt-12'>
                    <p className='text-gray-700 font-bold text-lg'>Incomplete</p>
                    <div>
                        <p className='text-lg font-medium text-gray-600'>
                            {
                                todoItems.map((todo, index) => {
                                    return (
                                        <div key={index} id={index} className='flex items-center space-x-3'>
                                            <input onClick={() => handleCheck(todo, index)} className= 'rounded-md text-gray-200' type='checkbox' />
                                            <p>{todo}</p>
                                        </div>
                                    )
                                })   
                            }
                        </p>
                    </div>
                </div>
                 <div className='mt-8'>
                    <p className='text-gray-700 font-bold text-lg'>Complete</p>
                    {completed.length > 0 && (
                        completed.map((item, index) => (
                                                <div key={index} className='flex items-center space-x-3'>
                        <input className='rounded-md' type='checkbox' checked={true} />
                                <p className='text-lg font-medium text-gray-400'>{item}</p>
                    </div>
                        ))
                    )}
                   
                </div>
            </div>
        </div>
    )
}

export default Todo
