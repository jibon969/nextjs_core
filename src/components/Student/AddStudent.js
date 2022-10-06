import {useState} from "react";
import {useRouter} from "next/router";

const AddStudent = () => {

    const router = useRouter();

    // Post Request
    const [name, setName] = useState('');
    const [dept, setDept] = useState('');
    const [roll, setRoll] = useState('');

    // const [showModal, setShowModal] = useState(false);
    // const handleModalShow = () => {
    //     setShowModal(true)
    // };

    const addStudent = (event) => {
        event.preventDefault();
        fetch(`http://127.0.0.1:8000/student-list/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": name,
                "dept": dept,
                "roll": roll,
            })
        }).then((res) => console.log("adding ....", res))
            .catch((err) => {
                console.log(err.message)
            })

    };

    return (
        <>
            <button
                type="button"
                className="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#addModal">
                Add
            </button>
            <div className="modal fade" id="addModal" tabIndex="-1"
                 aria-labelledby="addModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addModalLabel">
                                Added New Student
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={addStudent}>
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                />
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Department"
                                    name="dept"
                                    value={dept}
                                    onChange={(e) => {
                                        setDept(e.target.value)
                                    }}
                                />
                                <input
                                    type="number"
                                    className="form-control mb-3"
                                    placeholder="Roll"
                                    name="roll"
                                    value={roll}
                                    onChange={(e) => {
                                        setRoll(e.target.value)
                                    }}
                                />
                                <div className="text-center">
                                    <button className="btn btn-secondary"
                                            onClick={() => router.push("/students")}>Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AddStudent;