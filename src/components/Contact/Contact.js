const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <input type="text" name="name" className="form-control mb-4" placeholder="Name"/>
                        <input type="email" name="email" className="form-control mb-4" placeholder="E-mail"/>
                        <input type="text" name="subject" className="form-control mb-4" placeholder="Subject"/>
                        <textarea name="Message" id="" cols="10" rows="4" className="form-control mb-2"/>
                        <div className="btn btn-primary">Submit</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;