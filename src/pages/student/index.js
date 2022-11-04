import React, {useState, useEffect} from 'react';
import Link from 'next/link'


const messageLoading = <h3 className="text-center">Loading...</h3>;

const Student = () => {

    const [student, setStudent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getStudentList = () => {
        fetch('http://127.0.0.1:8000/student-list/')
            .then((res) => {
                if (!res.ok) {
                    throw Error("Fetching is not successful")
                }
                else {
                    return res.json()
                }
            })
            .then((data) => {
                setStudent(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            })
    };

    useEffect(() => {
        getStudentList()
    }, []);


    if (student) {
        return (
            <>
                <h3>{status}</h3>
                <div className="container mt-5">
                    <h4 className="text-center">Student List</h4>
                    <hr/>
                    <div className="row">
                        <div className="col-md-3">
                            <Link href="/student/add-student">
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
                                    <span
                                        className="input-group-text"
                                        id="basic-addon2">Search
                                    </span>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="table-responsive">
                                <table
                                    className="table table-striped table-hover table-bordered ">
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
                                    {
                                        student && student.map(data => (
                                            <tr className="text-center" key={data.id}>
                                                <th scope="row">{data.id}</th>
                                                <td>{data?.name}</td>
                                                <td>{data?.dept}</td>
                                                <td>{data?.roll}</td>
                                                <td className="text-center">
                                                    <button className="btn btn-primary mx-1" onClick={() =>getSingleStudent(data.id)}>
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() => handleDeleteStudent(data.id)}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                    </tbody>
                                </table>
                            </div>
                            <div style={{float: "right"}}>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#">Previous</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <div>
                <p className="text-center">Error : {error}</p>
                {isLoading && messageLoading}
            </div>
        )
    }

};

export default Student;