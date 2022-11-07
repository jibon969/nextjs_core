import {useState} from "react";

const AddStudent = () => {
    const [name, setName] = useState('');
    const [roll, setRoll] = useState('');
    const [dept, setDept] = useState('');

    const handleAddStudent = (event) => {
        event.preventDefault();
        let data = {name, dept, roll};
        fetch(`http://127.0.0.1:8000/student-list/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
            .catch((err) => {
                console.log(err.message)
            })
    };


    return (
        <div>
            <button
                type="button"
                className="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop">
                Add
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                 data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Dept"
                                    name="dept"
                                    value={dept}
                                    onChange={(e) => setDept(e.target.value)}
                                />
                                <input
                                    type="number"
                                    className="form-control mb-3"
                                    placeholder="Roll"
                                    name="roll"
                                    value={roll}
                                    onChange={(e) => setRoll(e.target.value)}
                                />
                                <button
                                    className="btn btn-primary"
                                    onClick={handleAddStudent}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default AddStudent;