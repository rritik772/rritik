import Link from 'next/link';

const Navbar = () => {
    return(
        <nav className='p-5 bg-gray-50 flex justify-between items-center'>
            <div>
                <span className='dm-regular text-2xl tracking-wider'>RRITIK</span>
            </div>
            <div>
                <Link href='/project'>
                    <a className='mont-semibold'>Projects</a>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;
