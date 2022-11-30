import Link from 'next/link'
import Header from '../layouts/Header'

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="text-center">
                                        <Link href="/student">
                                            <a>Student List</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;

