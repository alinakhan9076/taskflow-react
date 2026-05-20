import { Link } from "react-router-dom"

function Navbar() {

    return (
        <div className="flex flex-wrap justify-center gap-6 p-5 bg-black 
        text-white shadow-md">

            <Link to="/" 
            className="font-semibold hover:text-cyan-400"> 
            Home </Link>

            <Link to="stats"
            className="font-semibold hover:text-cyan-400">
                 Stats </Link>

            <Link to="settings"
            className="font-semibold hover:text-cyan-400">
                 Settings </Link>
        </div>
    )
}
    

export default Navbar