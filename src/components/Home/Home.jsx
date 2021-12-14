import React from 'react'
import Main from '../Main/Main'

import reactImg from '../../img/reactJS.svg'
import sassImg  from '../../img/sass.svg'
import bootstrapImg  from '../../img/bootstrap.svg'
import swiperImg  from '../../img/swiperJS.svg'

const headerProps = {
    title: 'Home',
    icon: 'home'
}

export default function Home() {
    return (
        <Main {...headerProps}>
            <div className="bg-white h-full px-3 py-4 shadow-xl flex flex-col gap-16 animation-appear
                lg:px-5 lg:py-6">
                <header className="flex flex-col gap-3">
                    <p className="text-2xl font-medium text-gray-800 notebook:text-3xl">
                        Bem <span className="text-green-500">Vindo!</span>
                    </p>
                    <div className="w-full h-divider bg-green-500"></div>
                    <p className="text-gray-500 notebook:text-xl">
                        Sistema construído para exemplificar <br/>
                        um carrossel de imagens.
                    </p>
                </header>
                <div className="flex flex-col gap-2">
                    <p className="text-gray-800 text-lg notebook:text-2xl">
                        Este site foi construído com:
                    </p>
                    <ul className="flex items-center gap-2">
                        <li>
                            <img src={reactImg} alt="" />
                        </li>
                        <li>
                            <img src={sassImg} alt="" />
                        </li>
                        <li>
                            <img src={bootstrapImg} alt="" />
                        </li>
                        <li>
                            <img src={swiperImg} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </Main>
    )
}