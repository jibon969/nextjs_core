// import react from 'react'

const Employee = () => {


  

    const getEmployee = () => {
        console.log("Hello Function ");
        const employee = fetch('http://127.0.0.1:8000/blog/');
        console.log("Employee :", employee)
    };

    return (
        <div>
            <div className="container mt-3">
                <h2 className="text-center" onClick={getEmployee}>Hello employee</h2>
                <hr/>
                <div className="row">
                    <div className="col">
                        <table className="table table-bordered table-striped">
                            <thead className="bg-dark text-white">
                            <tr className="text-center">
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Image</th>
                                <th scope="col">Category</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="text-center">
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Employee;