function TaskItem(props) {

    function handleDelete() {
        props.deleteTask(props.task.id)
    }

    function handleToggle() {
        props.toggleTask(props.task.id)
    }

    return (
        <div className="bg-white border border-gray-200 p-5 rounded-2xl mb-4 
        flex flex-col md:flex-row justify-between 
        md:items-center gap-4 shadow">

            <div className="flex items-center gap-4">

                <input type="checkbox"
                checked={props.task.completed}
                onChange={handleToggle}
                 className="w-5 h-5"/>
               
            <div>
                <p 
                className="text-xl font-semibold text-black"
                style={{textDecoration : props.task.completed ? 
                "line-through"
                    : "none"
                }}
                >
                    {props.task.text}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                    {props.task.category}</p>
            </div>

         </div>

            <button 
            onClick={handleDelete} 
            className="bg-cyan-600 hover:bg-cyan-700 text-white 
            px-5 py-2 rounded-xl w-full md:w-auto">
                Delete
            </button>

        </div>
    )
}

export default TaskItem 