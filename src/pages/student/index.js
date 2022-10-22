import Link from 'next/link'

const student = () => {
    return (
        <>
            <div className="container mt-5">
                <h4 className="text-center">Student List</h4>
                <hr/>
                <div className="row">
                    <div className="col-md-3">
                        <Link href="/student">
                            <a className="btn btn-primary">Add</a>
                        </Link>
                    </div>
                    <div className="col-md-6"/>
                    <div className="col-md-3">
                        <form action="#">
                            <div className="input-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Here"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text" id="basic-addon2">Search</span>
                            </div>

                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="table-responsive">
                            <table className="table table-striped table-hover table-bordered ">
                                <thead className="bg-dark text-white">
                                <tr className="text-center">
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Dept</th>
                                    <th scope="col">Roll</th>
                                    <th scope="col">Active</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td className="text-center">@mdo</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div style={{float: "right"}}>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default student;