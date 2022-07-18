import React from 'react'

const Footer = () => {
    return (
        <footer className="absolute bottom-0 left-[50%] translate-x-[-50%] 
        whitespace-nowrap p-5 text-sm text-gray-500">
            <p>Hecho con 💘 por Yair Carbia, {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer