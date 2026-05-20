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
        <div className="flex flex-col md:flex-row gap-3 mb-6">

            <input 
            type="text" 
            placeholder="Enter tasks" 
            value={input}
             onChange={handleChange}
             className="flex-1 border border-gray-300 p-4 rounded-xl 
             outline-none text-lg text-black "
              />

            <select value={newCategory}
                onChange={(event) => { setNewCategory(event.target.value)}}
                className="bg-cyan-600 text-white px-4 rounded-xl outline-none" >
                    <option value="Study" className="text-black">
                        Study</option>
                    <option value="Work" className="text-black">
                        Work</option>
                    <option value="Personal" className="text-black">
                        Personal</option>
                </select>

             <button onClick={handleSubmit}
             className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3
             rounded-xl font-semibold">
                Add</button>
                
        </div>
    )
}

export default AddTaskForm