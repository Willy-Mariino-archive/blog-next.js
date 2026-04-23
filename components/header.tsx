import Link from 'next/link'

function Header() {

    return (
        <>

            <div className='header-container'>

                <h1>Next Blog </h1>

                <nav className="header-nav">
                    <Link href="/" className="nav-link">Home </Link>
                    <Link href="/about" className="nav-link">About</Link>
                    <Link href="/contacts" className="nav-link">Contacts</Link>
                </nav>

            </div>
        </>
    )

}

export default Header