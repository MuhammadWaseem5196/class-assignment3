import Link from 'next/link'

const Navbar = ()=> {
    
  return (
    <>
    <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
            <div className='flex item-center'>
                <div className='flex-shrink-0'>
                    <Link href="/" className='text-white text-2xl'>Salwa's Portfolio</Link>
                </div>
            </div>
            <div className='hidden md:block'>
                <div className='ml-4 flex items-center space-x-4'>
                    <Link href="/" className='text-white hover:bg-white hover:text-gray-800 rounded-lg p-2'>Home</Link>
                    <Link href="/about" className='text-white hover:bg-white hover:text-gray-800 rounded-lg p-2'>About</Link>
                    <Link href="/services" className='text-white hover:bg-white hover:text-gray-800 rounded-lg p-2'>Services</Link>
                    <Link href="/projects" className='text-white hover:bg-white hover:text-gray-800 rounded-lg p-2'>Projects</Link>
                    <Link href="/contact" className='text-white hover:bg-white hover:text-gray-800 rounded-lg p-2'>Contact</Link>
                </div>
            </div>
            
                </div>
            </div>
    </nav>
    </>
  )
}

export default Navbar