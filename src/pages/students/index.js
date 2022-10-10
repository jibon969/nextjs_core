import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import AddStudent from '../../components/Student/AddStudent'
import DeleteStudent from '../../components/Student/DeleteStudent'
import EditStudent from '../../components/Student/EditStudent'


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

    const [showModal, setShowModal] = useState(false);

    const handleModalShow = () => {
        setShowModal(true)
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
                        <AddStudent/>
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
                                            <EditStudent
                                                showmodal={handleModalShow}
                                                id={data.id}
                                                data={data}
                                            />

                                            <span className="mx-1"/>
                                            <DeleteStudent
                                                showmodal={handleModalShow}
                                                id={data.id}
                                                deleteStudent={deleteStudent}
                                            />
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
        </div>
    )
};


export default StudentsPage;