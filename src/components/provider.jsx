import React from 'react';

const Provider = ({ data }) => {
    if (!data) return null;
    return (
        <React.Fragment>
            <div className="card mb-3 mx-2 flex-row">
                <div className="col-3 p-0">
                    <img
                        src={data['attributes']['card-image']}
                        style={{ height: '100px' }}
                        className="img-fluid"
                        alt={data['attributes']['name']} />
                </div>
                <div className="col">
                    <div className="h5 mt-2 mb-0">
                        {data['attributes']['name']}
                    </div>
                    <div className="sub-specialities">
                        {data['attributes']['subspecialties'].map(s => {
                            return (<span className="badge badge-success m-1" key={s}>{s}</span>
                            )
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Provider;