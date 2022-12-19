const Snippets = () => {

    return (
        <>
            <table className="table table-bordered">
                <thead className="bg-dark text-white">
                <tr className="text-center">
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Code</th>
                    <th scope="col">Action</th>
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
        </>
    )
};

export default Snippets;