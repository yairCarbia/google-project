import React from 'react'
import Head from 'next/head'
import SearchHeader from '../components/SearchHeader'
import SearchResults from '../components/SearchResults'
import { useRouter } from 'next/router'
const search = ({ resultados }) => {
    const router = useRouter();

    console.log(resultados);
    return (
        <div>

            <Head>
                <title>{router.query.termino}-Search Page</title>
            </Head>

            <SearchHeader />
            <SearchResults
                resultados={resultados} />
        </div>


    )
}

export default search

export async function getServerSideProps(context) {
    const mockData = false
    const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.termino}${context.query.searchType && "searchType=image"}`;
    const data = mockData ? Response : await fetch(url)
        .then(resp => resp.json())

    return {
        props: {
            resultados: data
        }
    }

}