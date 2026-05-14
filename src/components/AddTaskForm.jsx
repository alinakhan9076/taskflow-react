import { useState } from "react" 

function AddTaskForm() {

    const [input, setInput] = useState("")

    function handleChange(event) {
        setInput(event.target.value)
    }

    return (
        <div>

            <input 
            type="text" 
            placeholder="Enter tasks" 
            value={input}
             onChange={handleChange} />

             <button>Add Task</button>
        </div>
    )
}

export default AddTaskForm