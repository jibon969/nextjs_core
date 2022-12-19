import Snippets from '../../components/Snippets/Fetch/Snippets';

const snippets = () => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h2 className="text-center my-2">Snippets</h2>
                    <hr/>
                    <div className="col">
                        <Snippets/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default snippets;