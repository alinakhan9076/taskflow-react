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
        <div>

            <input 
            type="text" 
            placeholder="Enter tasks" 
            value={input}
             onChange={handleChange}
              />

             <button onClick={handleSubmit}>
                Add Task</button>
        </div>
    )
}

export default AddTaskForm