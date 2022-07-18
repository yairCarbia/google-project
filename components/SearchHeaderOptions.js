import React from 'react'
import SearchHeaderOption from './SearchHeaderOption'
import { SearchIcon, PhotographIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
const SearchHeaderOp = () => {
    const router = useRouter()
    return (
        <div className='flex space-x-8 select-none w-full justify-center text-gray-500 lg:pl-5 lg:justify-start border-b'>
            <SearchHeaderOption title="All"
                Icon={SearchIcon}
                selected={router.query.searchType === "" || !router.query.searchType} />
            <SearchHeaderOption title="Image"
                Icon={PhotographIcon}
                selected={router.query.searchType === "image"}
            />
        </div>
    )
}

export default SearchHeaderOp