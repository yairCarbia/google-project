import React from 'react'
import { useRouter } from 'next/router'

const SearchHeaderOption = ({ title, Icon, selected }) => {
    const router = useRouter()
    const selectedTittle = (title) => {
        router.push(`
        /search?termino=${router.query.termino}&searchType=${title === "Image" ? "image" : ""}`)
    }
    return (
        <div onClick={() => selectedTittle(title)} className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-700 
        cursor-pointer hover:border-blue-500 pb-3 ${selected && "text-blue-600 border-blue-500"}`}>
            <Icon className="h-4" />
            <p>{title}</p>

        </div >
    )
}

export default SearchHeaderOption