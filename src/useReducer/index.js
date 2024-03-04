import React,{useReducer, useState} from 'react';

//Reducer function
const reducer=(state,action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            return [...state, action.payload] 
        case 'REMOVE_ITEM':
            return state.filter(item=>item.id!==action.payload)
        default:
            return state   
    }
}

//Component using useReducer
const ItemList=()=>{
    const [items, dispatch]=useReducer(reducer,[]);
    const [inputValue, setInputValue]=useState('')
    const handleAddItem=()=>{
        const newItem={
            id:Date.now(),
            name:inputValue
        }
        dispatch({type:'ADD_ITEM',payload:newItem})
        setInputValue('')
    }
    const handleRemoveItem=(id)=>{
        dispatch({type:'REMOVE_ITEM',payload:id})
    
    }

    return(
        <div>
            <input
                type='text'
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
            />
            <button onClick={handleAddItem}>Add item</button>
            <ul>
            {items.map(item=>(
                <li key={item.id}>
                    {item.name}
                    <button onClick={()=>handleRemoveItem(item.id)}>Remove</button>
                </li>
            ))}
            </ul>
        </div>

    )
}

export default ItemList;