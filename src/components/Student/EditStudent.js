import React, {useState, useEffect} from "react";
import {useRouter} from 'next/router'

const EditStudent = ({id}) => {
    console.log("ID :", id);

    const router = useRouter();
    // const {id} = router.query;
    const [name, setName] = useState('');
    const [dept, setDept] = useState('');
    const [roll, setRoll] = useState('');

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/student-details/${id}/`)
            .then(res => res.json())
            .then(data => {
                setName(data.name);
                setDept(data.dept);
                setRoll(data.roll);

            })
    }, []);

    const updateStudent = (event) => {
        event.preventDefault();
        let data = {name, dept, roll};
        fetch(`http://127.0.0.1:8000/student-details/${id}/`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((res) => {
            setName(res.name);
            setDept(res.dept);
            setRoll(res.roll);
            router.push("/students")
        })
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
                data-bs-target="#updateModal">
                Edit
            </button>
            <div className="modal fade" id="updateModal" tabIndex="-1"
                 aria-labelledby="updateLeModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="updateLeModalLabel">
                                Update Student Info
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <div className="text-center">
                                <form>
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
                                    <button onClick={(event) => updateStudent(event)} type="submit" className="btn btn-secondary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default EditStudent;