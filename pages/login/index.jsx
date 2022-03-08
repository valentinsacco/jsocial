import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useSession, signIn } from 'next-auth/react'

import GitHubLogo from 'assets/icons/github-logo.svg'
import GoogleLogo from 'assets/icons/google-logo.svg'

const GITHUB_PROVIDER_NAME = 'github'
const GOOGLE_PROVIDER_NAME = 'google'

const Login = () => {

    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status !== 'loading' && session?.user) {
            return router.push('/')
        }
    }, [status, session])

    const handleLogin = (provider) => {
        signIn(provider)
    }

    return (
        <div className='grid w-screen h-screen place-items-center'>
            <div className='py-6 w-72'>
                <h1 className='text-xl text-center'>Login</h1>
                <div className='flex flex-col gap-4 py-10'>
                    <button onClick={() => handleLogin(GOOGLE_PROVIDER_NAME)} className='flex flex-row items-center justify-center w-full h-12 bg-gray-100 rounded-md'>
                        <Image src={GoogleLogo} height={20} width={20}/>
                        <span className='ml-2 font-semibold text-gray-700'>Login with Google</span>
                    </button>
                    <button onClick={() => handleLogin(GITHUB_PROVIDER_NAME)} className='flex flex-row items-center justify-center w-full h-12 bg-gray-100 rounded-md'>
                        <Image src={GitHubLogo} height={20} width={20}/>
                        <span className='ml-2 font-semibold text-gray-700'>Login with GitHub</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login