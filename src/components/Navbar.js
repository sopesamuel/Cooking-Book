// import React from 'react'
// import './Navbar.css'
// import { Link } from 'react-router-dom'
// import Searchbar from './Searchbar'
// import { useContext } from 'react'
// import { ThemeContext } from './context/ThemeContext'

// export default function Navbar() {

//   const {color} = useContext(ThemeContext)

//   return (
//     <div className='navbar' style={{ background: color }}>
//     <nav>
// <Link to="/" className='brand'>
//     <h1>Cooking Ninja</h1>
// </Link>
// <Searchbar />
// <Link to="/create"><h1>Create Recipe</h1></Link>
//     </nav>
//     </div>
//   )
// }
import { ThemeContext } from '/Users/mac/Documents/Cook Ninja/my-app/src/components/context/ThemeContext.js'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

// styles
import './Navbar.css'
import Searchbar from './Searchbar'

export default function Navbar() {
  const { color } = useContext(ThemeContext)

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  )
}