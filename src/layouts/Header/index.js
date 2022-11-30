import Link from 'next/link'
import styles from './Header.module.css'


const Index = () => {
    return (
        <>
            <section className={styles.headerSection}>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#">NextjsCore</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon text-white"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <Link href="/">
                                        <a className="nav-link text-white" href="#">About</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href={`/blog`}>
                                        <a className="nav-link text-white">Blog</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href={`/contact`}>
                                        <a className="nav-link text-white">Contact</a>
                                    </Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
};

export default Index;