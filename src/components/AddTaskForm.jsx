import { useState } from "react"

function AddTaskForm(props) {

    const [input, setInput] = useState("")

    const [newCategory, setNewCategory] = useState("Study")

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit() {

        if(input.trim() === "") {
            return
        }

        props.addTask(input, newCategory)

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

            <select value={newCategory}
                onChange={(event) => { setNewCategory(event.target.value)}}
                className="border p-2" >
                    <option value="Study">Study</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>

             <button onClick={handleSubmit}
             className="border px-3">
                Add Task</button>
                
        </div>
    )
}

export default AddTaskForm