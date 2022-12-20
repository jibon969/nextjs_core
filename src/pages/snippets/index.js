import React, {useEffect, useState} from 'react';

import Snippets from '../../components/Snippets/Fetch/Snippets';

const snippets = () => {

    const [snippetData, setSnippets] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const getSnippet = () => {
        fetch('http://127.0.0.1:8000/snippet/')
            .then((res) => {
                if (!res.ok) {
                    throw Error("Fetching is not successful")
                }
                else {
                    return res.json()
                }
            })
            .then((data) => {
                setSnippets(data);
                setIsLoading(false);
            })

            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            })
    };

    useEffect(() => {
        getSnippet()
    }, []);


    if (isLoading) {
        return (
            <div>
                <h3 className="text-center">Loading Data</h3>
            </div>
        )
    }


    if (snippetData) {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <h2 className="text-center my-2">Snippets</h2>
                        <hr/>
                        <div className="col">
                            <Snippets snippetData={snippetData}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <p className="text-center">Error : {error}</p>
            </div>
        )
    }
};

export default snippets;