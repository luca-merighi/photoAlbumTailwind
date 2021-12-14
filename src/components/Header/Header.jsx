import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
    return (
        <header className="bg-gray-800 p-4 flex items-center justify-start">
            <nav className="nav flex flex-row items-center justify-start gap-2">
                <Link to="/home" >
                    <h1 className="text-gray-100 text-2xl flex items-center gap-1 animation-left">
                        Photo <span className="text-blue-500">Album</span>
                    <span className="material-icons-round text-blue-500 mt-1">camera_alt</span>
                    </h1>
                </Link>
                <div className="w-bar h-6 bg-gray-600"></div>
                <h3 className="text-green-500 text-lg flex items-center gap-1 animation-down">
                    {props.title}
                    <span className="material-icons-round">{props.icon}</span>
                </h3>
            </nav>
        </header>
    )
}