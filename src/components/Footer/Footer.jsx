import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-800 w-full p-2 flex items-center justify-center animation-up 
            notebook:justify-end notebook:px-4">
            <address className="text-gray-100 not-italic font-light">
                Desenvolvido por @
                <span className="text-green-500 font-medium">luca</span>.
                <span className="text-green-500 font-medium">merighii</span>
            </address>
        </footer>
    )
}