import { useState } from "react"

export const ToDo=({task, toggleComplete, deleteTodo})=>
{
    return (
        <>
        <center>
        <div className="flex justify-between pl-2 pr-2 text-white h-10 items-center" style={{backgroundColor: "#845AFC", width: "68%"}}>
            <p>{task.task}</p>
            <div>
                <p className="cursor-pointer" onClick={()=>deleteTodo(task.id)}><i class="fa-solid fa-trash"></i></p>
            </div>
        </div>
        <br/>
        </center>
        </>
    )
}