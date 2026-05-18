import { useState } from "react" 

function AddTaskForm(props) {

    const [input, setInput] = useState("")

    function handleChange(event) {
        setInput(event.target.value)
    }

    function handleSubmit() {

        if(input.trim() === "") {
            return
        }

        props.addTask(input)

        setInput("")
    }

    return (
        <div className="flex gap-2 mb-4">

            <input 
            type="text" 
            placeholder="Enter tasks" 
            value={input}
             onChange={handleChange}
             className="border p-2 "
              />

             <button onClick={handleSubmit}
             className="border px-3">
                Add Task</button>
        </div>
    )
}

export default AddTaskForm