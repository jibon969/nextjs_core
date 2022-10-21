import {useState, useEffect} from 'react'

const Employee = () => {
    const messageLoading = <p className="text-center p-5">Loading ..........</p>;


    const [employee, setEmployee] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getEmployee = () => {

        setTimeout(() => {
            fetch("http://127.0.0.1:8000/blogee/")
                .then((res) => {
                    if (!res.ok) {
                        throw Error("Fetching is not successful")
                    }
                    else {
                        return res.json()
                    }
                })
                .then((data) => {
                    setEmployee(data);
                    console.log("Data", data);
                    setLoading(false);
                })
                .catch((error) =>{
                    setError(error.message);
                    setLoading(false);
                })
        }, 3000)

    };

    useEffect(() => {
        getEmployee()
    }, []);


    if (employee) {
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
                                    employee && employee.results.map((data) => (
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
    }
    else {
        return (
            <div>
                <p>Error : {error}</p>
                {isLoading && messageLoading}
            </div>
        )

    }


};

export default Employee;