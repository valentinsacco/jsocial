import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import Spinner from 'components/Spinner'

const Navbar = () => {

    const { data: session, status } = useSession()
    const router = useRouter()

    return (
        <header className="fixed top-0 left-0 w-full h-20 bg-gray-100">
            <nav className="flex flex-row items-center justify-between h-full px-20">
                <div>
                    Logo
                </div>
                <div className="flex flex-row gap-6">
                    { !router.pathname.includes('/discover') && (
                        <div>
                            <Link href={'/discover'}>
                                <a className='text-text'>Discover</a>
                            </Link>
                        </div>
                    ) }
                    <div>
                        { (status !== 'loading' && !session) ? (
                            <Link href={'/login'}>
                                <a className='text-text'>Login</a>
                            </Link>
                        ) : (
                            <div>
                                { status === 'loading' ? (
                                    <Spinner size={20} color='#000000'/>
                                ) : (
                                    <div className='flex flex-row items-center'>
                                        { session?.user?.image && <Image src={session?.user?.image} height={30} width={30} className='rounded-full'/> }
                                        <span className='ml-2 text-base font-semibold text-text'>{session?.user?.name}</span>
                                    </div>
                                ) }
                            </div>
                        ) }
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
