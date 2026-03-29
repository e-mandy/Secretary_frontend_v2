import { Search } from "lucide-react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="flex h-full items-center justify-between px-4">
      <div>
        <Link to="/">Dashboard</Link>
      </div>
      <div className="flex gap-3 p-3 rounded-full bg-red-300 md:w-1/4">
        <Search size={20} />
        <input type="text" placeholder="Rechercher" className="outline-none" /> 
      </div>
    </div>
  )
}

export default NavBar
