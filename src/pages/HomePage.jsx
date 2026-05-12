import AddTaskForm from "../components/AddTaskForm"
import FilterBar from "../components/FilterBar"
import SearchBar from "../components/SearchBar"
import TaskList from "../components/TaskList"

function HomePage() {
    return (
        <div>
        <h1>Home Page</h1>

        <AddTaskForm />
        <FilterBar />
        <SearchBar />
        <TaskList />
        </div>
    )
}

export default HomePage