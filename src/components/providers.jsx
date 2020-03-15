import React from 'react';
import Provider from './provider';

const Providers = ({ data: allProviders }) => {
    if (!allProviders) return null;
    return (
        <React.Fragment>
            <div className="row">
                {allProviders.map(provider => {
                    return (
                        <div className="col-md-4" key={provider.id}>
                            <Provider data={provider} />
                        </div>
                    )
                })}
            </div>

        </React.Fragment>
    );
}

export default Providers;