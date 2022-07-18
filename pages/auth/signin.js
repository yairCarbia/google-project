import React from 'react'
import Header from '../../components/Header'
import { getProviders, signIn } from "next-auth/react"

const Sigin = ({ providers }) => {
    return (
        <>
            <Header />
            <div className='mt-40'>
                {Object.values(providers).map(provider => (
                    <div key={provider.name} className="flex flex-col items-center">
                        <img className='w-52 object-cover' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' alt="google-logo" />
                        <p className='text-sm italic my-10 text-center'>Este sitio fue creado con propositos de aprendizaje </p>
                        <button className='bg-red-500 rounded-lg text-white p-3 hover:bg-red-700' onClick={() => signIn(provider.id, { callbackUrl: "/" })}>Sign In whit {provider.name}</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Sigin

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: { providers },
    }
}