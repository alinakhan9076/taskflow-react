function TaskItem(props) {

    function handleDelete() {
        props.deleteTask(props.task.id)
    }

    function handleToggle() {
        props.toggleTask(props.task.id)
    }

    return (
        <div className="border p-3 rounded m-2 flex justify-between items-center">

            <div className="flex items-center gap-2">

                <input type="checkbox"
                checked={props.task.completed}
                onChange={handleToggle}/>

                <p 
                style={{textDecoration : props.task.completed ? 
                "line-through"
                    : "none"
                }}
                >
                    {props.task.text}
                </p>
            </div>

            <button 
            onClick={handleDelete} 
            className="bg-red-500 text-white px-3 rounded">
                Delete
            </button>

        </div>
    )
}

export default TaskItem 