import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Mak. App</span>
        <ul className='list'>
            <li className='listItem'>
                <img src="https://images.pexels.com/photos/6606916/pexels-photo-6606916.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='avatar' />
            </li>
            <li className='listItem'>John Doe</li>
            <li className='listItem'>Logout</li>
        </ul>
    </div>
  )
}

export default Navbar