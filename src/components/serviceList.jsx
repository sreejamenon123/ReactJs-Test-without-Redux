import React from 'react';
import className from "classnames";
import { get as _get } from "lodash";

const ServiceList = ({ data: allServices, onServiceSelect, currentService }) => {
    if (!allServices) return null;
    return (
        <React.Fragment>
            <ul className="list-group">
                {
                    allServices.map((service) => {
                        const serviceName = _get(service, ['attributes', 'name']) || service.id;
                        return (<li
                            className={className('list-group-item clickable',
                                { 'active': serviceName === currentService })}
                            key={serviceName}
                            onClick={() => onServiceSelect(serviceName)}>
                            {serviceName}
                        </li>
                        )
                    })
                }

            </ul>
        </React.Fragment>
    );
}

export default ServiceList;