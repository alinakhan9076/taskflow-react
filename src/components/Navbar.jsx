import { Link } from "react-router-dom"

function Navbar() {

    return (
        <div className="flex gap-4 p-4 border-b mb-5">

            <Link to="/"> Home </Link>

            <Link to="stats"> Stats </Link>

            <Link to="settings"> Settings </Link>
        </div>
    )
}
    

export default Navbar