import React, {useState} from 'react';
export const ToDoForm=({addTodo})=>
{
    const [value, setValue] = useState("");
    let [total, setTotal] = useState(0);
    //const [complete, setComplete] = useState(0);
    const handleChange=()=>
    {
        if(value !== null && value !== "")
        {
            //console.log(value);
            //console.log(total);
            setTotal(total+1);

        }
        
    }
    const handleSubmit= e =>
    {
        e.preventDefault();
        addTodo(value);
        setValue("")
    }
    return(
    <div>
    <p className='text-white'>Total Tasks: {total}</p>
        <form onSubmit={handleSubmit}>
            <input style={{border: "1px solid #845AFC", color: "#666587", outline: "none"}} className="w-80 h-8 bg-transparent mt-5 mb-5 p-2" type="text" placeholder="Enter your task" value={value} onChange={(e)=>setValue(e.target.value)} required/>
            <button className="h-8 w-24" style={{backgroundColor: "#845AFC"}} type='submit' onClick={handleChange}>Add Task</button>
        </form>
    </div>
    )
}