import React, {useState} from 'react';

const AddStudent = () => {
    const [name, setName] = useState('');
    const [roll, setRoll] = useState('');
    const [dept, setDept] = useState('');

    const handleAddStudent = (event) => {
        event.preventDefault();
        let data = {name, dept, roll};
        fetch(`http://127.0.0.1:8000/student-list/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
            .catch((err) => {
                console.log(err.message)
            })
    };

    return (
        <>
            <div className="container mt-5">
                <h4 className="text-center">Added New Student</h4>
                <hr/>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <form action="">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        name="dept"
                                        value={dept}
                                        onChange={(e) => setDept(e.target.value)}
                                    />
                                    <input
                                        type="number"
                                        className="form-control mb-3"
                                        name="roll"
                                        value={roll}
                                        onChange={(e) => setRoll(e.target.value)}
                                    />
                                    <button className="btn btn-primary" onClick={handleAddStudent}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AddStudent;