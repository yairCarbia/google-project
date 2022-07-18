import React from 'react'
import Parser from 'html-react-parser'
const SearchResults = ({ resultados }) => {
    // <p> {Parser(result.htmlSnippet)}</p>
    return (
        <div className='w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-[5%]'>
            <p className='text-gray-500 text-sm mb-5 mt-3'>
                About {resultados.searchInformation.formattedTotalResults} results ( {resultados.searchInformation.searchTime} seconds)</p>
            {resultados.items.map(result => (
                <div key={result.link} className='max-w-xl mb-8'>
                    <div className='group'>
                        <a className='text-sm truncate text-blue-500' href={result.link}>{result.formattedUrl}</a>
                        <a className='group-hover:underline decoration-blue-800' href={result.link}>
                            <h2 className='truncate text-xl font-medium text-blue-800'>{result.title}</h2
                            ></a>
                    </div>
                    <p className='text-gray-600'> {Parser(result.htmlSnippet)}</p>
                </div>
            ))
            }

        </div>
    )
}

export default SearchResults