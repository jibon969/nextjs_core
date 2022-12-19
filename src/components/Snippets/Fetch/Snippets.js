const Snippets = ({snippetData}) => {

    console.log("snippetData :", snippetData);

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
                {
                    snippetData?.data?.map((data, index) => (
                        <tr className="text-center" key={index}>
                            <th scope="row">{data.id}</th>
                            <td>{data.title}</td>
                            <td>{data.code}</td>
                            <td>
                                <button className="btn btn-primary">Delete</button>
                            </td>
                        </tr>
                    ))
                }

                </tbody>
            </table>
        </>
    )
};

export default Snippets;