import React from 'react'

import Header from '../Header/Header'

export default function Main(props) {
    return (
        <React.Fragment>
            <Header {...props} />
            <main className="bg-gray-100 px-3 py-5">
                {props.children}
            </main>
        </React.Fragment>
    )
}