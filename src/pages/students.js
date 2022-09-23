import React, {useEffect, useState} from 'react';
import Students from '../components/Student/Students'

const StudentPage = () => {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false)
            })
    }, []);


    return (
        <div>
            {data.map((student) => (
                 <Students student={student} />
            ))}

        </div>
    )
};

export default StudentPage;