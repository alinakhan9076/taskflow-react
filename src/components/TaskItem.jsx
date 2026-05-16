function TaskItem(props) {
    return (
        <div className="border p-3 rounded m-2">

            <p>{props.task.text}</p>

        </div>
    )
}

export default TaskItem