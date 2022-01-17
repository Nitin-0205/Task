import React from 'react'
import { useState } from 'react';
import './index.css';

const Task = () => {
    const [noteVal, setnoteVal] = useState('');
    const [notedItems, setnotedItems] = useState([]);



    function AddItem() {
        if (noteVal !== '') {
            setnotedItems((oldItem) => {
                return [...notedItems, noteVal]
            });
        }
        setnoteVal('');
        console.log(notedItems);

    }
    function DeleteItem(Itmindex){
            setnotedItems((olditem) => {
                return olditem.filter((elements, index) => {
                    console.log(index != Itmindex);
                    console.log(elements);
                    return index != Itmindex;
                })
            })
    }
    return (
        <div id = "body">
            <div className="addNote">
                <input type='text' className = "inputNote" placeholder='Enter Notes' value={noteVal} onChange={(e) => {
                    setnoteVal(e.target.value);
                }}></input>
                <input type='button' value='Save' className = "saveBtn" onClick={AddItem}></input>
            </div>
            <div className="cardCont">
                {
                    notedItems.map(
                        (val, ind) => {
                            return (
                                <div className="cardBox" key={ind}>
                                    <p className='label'>Task {ind+1}</p>
                                    <h1>{val}</h1>
                                    <button className = 'deleteBtn' onClick={()=>{
                                        DeleteItem(ind)
                                    }}> delete</button>
                                </div>
                            )

                        }
                    )
                }
            </div>
        </div>
    )
}

export default Task
