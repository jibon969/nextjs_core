import {useState, useEffect} from 'react';

const AddEmployee = () => {

    const [name, setName] = useState('');
    const [dept, setDept] = useState('');
    const [roll, setRoll] = useState('');

    const handleSubmit = () => {
        event.preventDefault();
        let data = {name, dept, roll};
        fetch(`http://127.0.0.1:8000/student-list/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((res) => console.log("adding ....", res))
            .catch((err) => {
                console.log(err.message)
            })
    };

    return (
        <div className="container mt-5">
            <h3 className="text-center">Add Post Request</h3>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <form action="#">
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
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="roll"
                                    name="roll"
                                    value={roll}
                                    onChange={(e) => {
                                        setRoll(e.target.value)
                                    }}
                                />
                                <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default AddEmployee;