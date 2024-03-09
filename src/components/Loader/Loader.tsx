import React from 'react'
import LoaderImage from '../../assets/loader.gif'

function Loader() {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-white">
            <div> <img src={LoaderImage} alt="..."/></div>
        </div>
    )
}

export default Loader
