import React from 'react'
import { useMetamask } from '@thirdweb-dev/react'

function Login() {
    const connnectToMetaMusk = useMetamask()
    return (
        <div className='bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center'>
            <div className='flex flex-col items-center mb-10'>
                <img className='h-56 w-56 rounded-full mb-10' src='https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg' />
                <h1 className='text-6xl text-white font-bold'>Lucky Draw</h1>
                <h1 className='text-white py-2 px-2'>Get started by logging in by MetaMusk</h1>
                <button onClick={connnectToMetaMusk} className='bg-white px-8 py-5 hover:bg-sky-700 rounded-lg shadow-lg font-bold'>Login With MetaMask</button>
            </div>
        </div>

    )
}

export default Login