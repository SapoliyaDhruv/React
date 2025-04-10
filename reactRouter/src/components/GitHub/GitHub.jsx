import { useState } from 'react'
import { useLoaderData } from 'react-router';
function GitHub() {

    const data = useLoaderData()
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Folloewrs:{data.followers}
        <img src={data.avatar_url} alt='Profile Pic' width={300}></img>
        </div>
    );
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
