import React from 'react'
import { Link } from 'react-router-dom'

export default function Aside() {
    return (
        <aside className="bg-gray-700 p-2 animation-left">
            <nav className="flex items-center justify-center gap-2 md:flex-col h-full">
                <Link to="/home" className="bg-blue-600 p-2 rounded text-gray-100 flex items-center justify-center
                    hover:bg-gray-100 hover:text-blue-500 duration-300">
                    <span className="material-icons-round">
                        home
                    </span>
                </Link>
                <Link to="/album" className="bg-blue-600 p-2 rounded text-gray-100 flex items-center justify-center
                    hover:bg-gray-100 hover:text-blue-500 duration-300">
                    <span className="material-icons-round">
                        image
                    </span>
                </Link>
            </nav>
        </aside>
    )
}