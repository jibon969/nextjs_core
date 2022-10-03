import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'


// Fetching Data
export const getStaticProps = async () => {
    const res = await fetch(`http://127.0.0.1:8000/student-list/`);
    const students_data = await res.json();

    return {
        props: {
            "students": students_data
        }
    }
};


const StudentsPage = ({students}) => {

    const router = useRouter();
    // const {id} = router.query;

    // const getStudents = () => {
    //     setLoading(true);
    //     fetch(`http://127.0.0.1:8000/student-list/`)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(
    //                     `This is an HTTP error: The status is ${response.status}`
    //                 );
    //             }
    //             return response.json();
    //         })
    //         .then((actualData) => {
    //             setStudent(actualData);
    //             setError(null);
    //         })
    //         .catch((err) => {
    //             setError(err.message);
    //             setStudent(null);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // };
    //
    // useEffect(() => {
    //     getStudents()
    // }, []);


    // Post Request
    const [name, setName] = useState('');
    const [dept, setDept] = useState('');
    const [roll, setRoll] = useState('');

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


    // Delete user
    const deleteStudent = (id) => {
        fetch(`http://127.0.0.1:8000/student-details/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        }).then((remove) => console.log("removed :", remove))
            .catch((err) => {
                console.log(err.message)
            })

    };


    return (
        <div>
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
                                students.map((data) => (
                                    <tr className="text-center">
                                        <th scope="row" key={data.id}>{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.dept}</td>
                                        <td>{data.roll}</td>
                                        <td>
                                            <button className="btn btn-primary mx-2" onClick={()=>updateStudent(data.id)}>Edit</button>
                                            <button className="btn btn-danger"
                                                    onClick={() => deleteStudent(data.id)}>Delete
                                            </button>
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
                         tabIndex="-1"
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
                                        <button className="btn btn-secondary" onClick={() => router.push("/students")}>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default StudentsPage;