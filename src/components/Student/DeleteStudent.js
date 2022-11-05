
const DeleteStudent = ({handleDeleteStudent}) =>{
    console.log("handleDeleteStudent", handleDeleteStudent)
    return(
        <div>
            <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdropDelete">
                Delete
            </button>
            <div className="modal fade" id="staticBackdropDelete" data-bs-backdrop="static"
                 data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabelDelete"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabelDelete">Delete Student</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <h4>Do you want to delete this student ?</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DeleteStudent;