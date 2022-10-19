import {useState, useEffect} from 'react'

const Employee = () => {

    const [employee, setEmployee] = useState(null);

    const getEmployee = () => {
        const res = fetch('http://127.0.0.1:8000/blog/')
            .then((response) => response.json())
            .then((data) => (
                setEmployee(data
                )
            ));
    };
    useEffect(() => {
        getEmployee()
    }, []);

    console.log("Data :", employee);

    return (
        <div>
            <div className="container mt-3">
                <h2 className="text-center">Hello employee</h2>
                <hr/>
                <div className="row">
                    <div className="col">
                        <table className="table table-bordered table-striped">
                            <thead className="bg-dark text-white">
                            <tr className="text-center">
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Category</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                employee?.results.map((data) => (
                                    <tr className="text-center" key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.title}</td>
                                        <td>{data.category}</td>
                                        <td>{data.description}</td>
                                        <td>Edit</td>
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
};

export default Employee;