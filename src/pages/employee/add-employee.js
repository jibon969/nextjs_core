import {useState, useEffect} from 'react';

const AddEmployee = () => {

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        event.preventDefault();
        let data = {title, category, description};
        fetch(`http://127.0.0.1:8000/blog/`, {
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
                                    name="title"
                                    value={title}
                                    onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}
                                />
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Department"
                                    name="category"
                                    value={category}
                                    onChange={(e) => {
                                        setCategory(e.target.value)
                                    }}
                                />
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Description"
                                    name="description"
                                    value={description}
                                    onChange={(e) => {
                                        setDescription(e.target.value)
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