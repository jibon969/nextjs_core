import React, {useState} from 'react';
import Button from 'rsuite/Button';
import {useRouter} from 'next/router'
import {Message} from 'rsuite'
import {useToaster} from 'rsuite/toaster';

const Contact = () => {
    const toaster = useToaster();
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleContact = () => {
        let data = {name, email, subject, message};
        fetch(`http://127.0.0.1:8000/contact-list/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
            .then(() => {

                router.reload()
            })
            .catch((err) => {
                console.log(err.message)
            })
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col my-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <input
                                            type="text"
                                            name="name"
                                            value={name}
                                            className="form-control mb-4"
                                            placeholder="Name"
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="col">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control mb-4"
                                            placeholder="E-mail"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <input
                                    type="text"
                                    name="subject"
                                    className="form-control mb-4"
                                    placeholder="Subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                                <textarea
                                    name="message"
                                    cols="10"
                                    rows="4"
                                    className="form-control mb-2"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                <div className="btn btn-primary" onClick={handleContact}>Submit</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;