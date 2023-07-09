import Link from 'next/link'
import Image from 'next/image'
import ToggleButton from './toggleButton'
export default function Header() {
    return (
        <header className='max-w-2xl m-auto w-full pt-8'>
            <div className='flex justify-between mb-8'>
                <h1 className='text-3xl font-bold dark:text-white'>
                    <Link href="/">Overreacted</Link>
                </h1>
                <ToggleButton />
            </div>
            <div className='flex mb-16 items-center'>
                <Image src="/profile-pic.jpg" alt="Dan Abramov" className='w-14 rounded-full' width='48' height='48' />
                <p className='pl-3 dark:text-white'>Personal blog by
                    <a href="https://mobile.twitter.com/dan_abramov" target='_blank' className='dark:text-pink-300 text-pink-700'>Dan Abramov</a>. <br />
                    I&nbsp;explain with words and code.</p>
            </div>
        </header>
    )
}
