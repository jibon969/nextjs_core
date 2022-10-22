import {useState, useEffect} from 'react'
import Link from 'next/link'

const Employee = () => {
    const messageLoading = <p className="text-center p-5">Loading ..........</p>;

    const [student, setStudent] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getStudent = () => {

        setTimeout(() => {
            fetch("http://127.0.0.1:8000/student-list/")
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
                    console.log("Data", data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error.message);
                    setLoading(false);
                })
        }, 2000)

    };

    useEffect(() => {
        getStudent()
    }, []);


    const handleDeleteEmployee = (id) => {
        fetch(`http://127.0.0.1:8000/student-details/${id}/`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            }
        }).then((remove) => console.log(remove))
            .catch((err) => {
                console.log(err.message)
            })
    };


    if (student) {
        return (
            <div>
                <div className="container mt-3">
                    <h2 className="text-center">Hello employee</h2>
                    <hr/>
                    <button className="btn btn-primary">
                        <Link href="employee/add-employee">
                            <a>Add</a>
                        </Link>
                    </button>
                    <div className="row">
                        <div className="col">
                            <table className="table table-bordered table-striped">
                                <thead className="bg-dark text-white">
                                <tr className="text-center">
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Dept</th>
                                    <th scope="col">Roll</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    student && student.map((data) => (
                                        <tr className="text-center" key={data.id}>
                                            <th scope="row">{data.id}</th>
                                            <td>{data.name}</td>
                                            <td>{data.dept}</td>
                                            <td>{data.roll}</td>
                                            <td>
                                                <button className="btn btn-primary">Edit</button>
                                                <button className="btn btn-danger" onClick={()=>handleDeleteEmployee(data.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <p className="text-center">{error}</p>
                {isLoading && messageLoading}
            </div>
        )

    }


};

export default Employee;