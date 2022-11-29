import Contact from '../../components/Contact/Contact'

const ContactPage = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center">Contact Us</h2>
                        <hr/>
                        <Contact/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContactPage;