import Link from 'next/link'

const IndexPage = () => {
    return (
        <div>
            <footer className="text-center text-lg-start bg-white text-muted">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <Link href="#">
                            <a className="me-4 link-secondary">
                                <i className="fa fa-facebook"/>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="me-4 link-secondary">
                                <i className="fa fa-twitter"/>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="me-4 link-secondary">
                                <i className="fa fa-google"/>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="me-4 link-secondary">
                                <i className="fa fa-instagram"/>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="me-4 link-secondary">
                                <i className="fa fa-linkedin"/>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="me-4 link-secondary">
                                <i className="fa fa-github"/>
                            </a>
                        </Link>
                    </div>
                </section>
                <section className="#">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3 text-secondary"/>Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <Link href="#">
                                        <a className="text-reset">Python</a>
                                    </Link>
                                </p>
                                <p>
                                    <Link href="#">
                                        <a className="text-reset">Django</a>
                                    </Link>
                                </p>
                                <p>
                                    <Link href="#">
                                        <a className="text-reset">React</a>
                                    </Link>
                                </p>
                                <p>
                                    <Link href="#">
                                        <a className="text-reset">Next Js</a>
                                    </Link>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <Link href="#">
                                        <a className="text-reset">Pricing</a>
                                    </Link>
                                </p>
                                <p>
                                    <Link href="#">
                                        <a className="text-reset">Settings</a>
                                    </Link>
                                </p>
                                <p>
                                    <Link href="#">
                                        <a className="text-reset">Orders</a>
                                    </Link>
                                </p>
                                <p>
                                    <Link href="#">
                                        <a className="text-reset">Help</a>
                                    </Link>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fa fa-home me-3 text-secondary"/> Dhaka, Bangladesh</p>
                                <p>
                                    <i className="fa fa-envelope me-3 text-secondary"/>
                                    info@example.com
                                </p>
                                <p><i className="fa fa-phone me-3 text-secondary"/> + 01987132107</p>
                                <p><i className="fa fa-print me-3 text-secondary"/> + 01987132107</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.025)"}}>
                    © 2022 Copyright :
                    <Link href="#">
                        <a className="text-reset fw-bold mx-1">Footer</a>
                    </Link>
                </div>
            </footer>
        </div>
    )
};

export default IndexPage;