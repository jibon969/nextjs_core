const Students = ({data}) => {
    console.log("Data :", data);
    return (
        <>
            <div className="container my-4">
                <h2 className="text-center">Student List</h2>
                <hr/>
                <div className="row">
                    <div className="col-md-3">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#addStaticBackdrop">
                            Add
                        </button>
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

                <div className="row">
                    {/*Model Design */}
                    <div className="modal fade"
                         id="addStaticBackdrop"
                         data-bs-backdrop="static"
                         data-bs-keyboard="false"
                         tabindex="-1"
                         aria-labelledby="addStaticBackdropLabel"
                         aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="addStaticBackdropLabel">Student Form</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"/>
                                </div>
                                <div className="modal-body">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    placeholder="Enter Name"
                                                    className="form-control mb-3"
                                                />
                                            </div>
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    placeholder="Enter Department"
                                                    className="form-control mb-3"/>
                                            </div>
                                        </div>
                                        <input type="text" placeholder="Enter Roll" className="form-control mb-3"/>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                        Close
                                    </button>
                                    <button type="button" className="btn btn-primary">

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Students;