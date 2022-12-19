import Link from 'next/link'
import styles from './Header.module.css'


const Index = () => {
    return (
        <>
            <section className={styles.headerSection}>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
                    <div className="container-fluid">
                        <Link href="#">
                            <a className="navbar-brand text-white" >NextJsCore</a>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon text-white"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link href="#">
                                        <a className="nav-link active text-white" aria-current="page">Home</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="#">
                                        <a className="nav-link text-white">About</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href={`/blog`}>
                                        <a className="nav-link text-white">Blog</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href={`/snippets`}>
                                        <a className="nav-link text-white">Snippets</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href={`/contact`}>
                                        <a className="nav-link text-white">Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
};

export default Index;