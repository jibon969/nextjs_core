import Link from 'next/link'

export default function Home() {
    return (

        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h4>
                                <Link href="employee">
                                    <a>Employee</a>
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h4>
                                <Link href="students">
                                    <a>Student Modal</a>
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h4>
                                <Link href="students">
                                    <a>Blog</a>
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

