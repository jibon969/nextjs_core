import {useState} from 'react';
import Link from 'next/link'


const index = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h3>How to Build Dynamic Forms in React</h3>
                        <h5>
                            <Link href="/tryNextjs/dynamic-form">
                                <a>Dynamic Forms</a>
                            </Link>
                        </h5>
                        <hr/>
                    </div>
                </div>

            </div>
        </>
    )
};

export default index;