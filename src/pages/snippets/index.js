const snippets = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h2 className="text-center my-2">Snippets</h2>
                    <hr/>
                    <div className="col">
                        <table className="table table-bordered">
                            <thead className="bg-dark text-white">
                            <tr className="text-center">
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="text-center">
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
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

export default snippets;