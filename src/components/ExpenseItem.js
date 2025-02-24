import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FcPlus } from 'react-icons/fc';
import { AiFillMinusCircle } from 'react-icons/ai';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    
    const reduceAllocation = (name) => {
        const expense = {
             name: name,
             cost: 10,
        };
    
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FcPlus size ='2.2em' color='green' onClick={event=> increaseAllocation(props.name)}></FcPlus></td>
        <td><AiFillMinusCircle size ='2.2em' color='red' onClick={event=> reduceAllocation(props.name)}></AiFillMinusCircle></td>
        <td><TiDelete size='2.2em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
