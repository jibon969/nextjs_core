const AddStudent = () => {

    return (
        <>
            {/*<button*/}
                {/*type="button"*/}
                {/*className="btn btn-secondary"*/}
                {/*data-bs-toggle="modal"*/}
                {/*data-bs-target="#exampleModal">*/}
                {/*Add*/}
            {/*</button>*/}
            <div className="modal fade" id="exampleModal" tabIndex="-1"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal
                                title
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <form>
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Name"
                                    name="name"
                                    // value={name}
                                    // onChange={(e) => {
                                    //     setName(e.target.value)
                                    // }}
                                />
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Department"
                                    name="dept"
                                    // value={dept}
                                    // onChange={(e) => {
                                    //     setDept(e.target.value)
                                    // }}
                                />
                                <input
                                    type="number"
                                    className="form-control mb-3"
                                    placeholder="Roll"
                                    name="roll"
                                    // value={roll}
                                    // onChange={(e) => {
                                    //     setRoll(e.target.value)
                                    // }}
                                />
                                <button className="btn btn-secondary"
                                        onClick={() => router.push("/students")}>Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AddStudent;