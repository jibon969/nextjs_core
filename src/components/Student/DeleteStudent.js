const DeleteStudent = ({id, deleteStudent, handleModalClose}) => {

    return (
        <>
            <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                Delete
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Delete Student
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <div className="text-center">
                                <h6 className="mb-4">
                                    Are you sure you want to delete this item ?
                                </h6>
                                <button className="btn btn-danger" onClick={() => deleteStudent(id) }>Yes</button>
                                <span className="mx-1"/>
                                <button className="btn btn-primary">No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default DeleteStudent;