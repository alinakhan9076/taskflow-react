function TaskItem(props) {

    function handleDelete() {
        props.deleteTask(props.task.id)
    }

    return (
        <div className="border p-3 rounded m-2 flex justify-between">

            <p>{props.task.text}</p>

            <button 
            onClick={handleDelete} 
            className="bg-red-500 text-white px-3 rounded">
                Delete
            </button>

        </div>
    )
}

export default TaskItem