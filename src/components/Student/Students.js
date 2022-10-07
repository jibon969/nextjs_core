const Students = () => {
    return (
        <>
            <div className="container my-4">
                <h2 className="text-center">Student List</h2>
                <hr/>
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6"/>
                    <div className="col-md-3">
                        <form action="#">
                            <div className="input-group mb-3">
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
                        <table className="table table-bordered table-striped table-responsive">
                            <thead className="bg-dark text-white">
                            <tr className="text-center">
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Roll</th>
                                <th scope="col">Dept</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                data.map((student) => (
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{student.name}</td>
                                        <td>{student.dept}</td>
                                        <td>{student.roll}</td>
                                        <td>
                                            <button className="btn btn-primary mx-2">Edit</button>
                                            <button className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
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
    );
};

export default Students;