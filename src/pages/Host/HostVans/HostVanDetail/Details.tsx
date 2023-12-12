import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { ContextVan } from './HostVanDetail';

const Details = () => {
    const van = useOutletContext<ContextVan>();

    return (
        <div>
            <p>
                <strong>Name:</strong>
                <span>{van.name}</span>
            </p>
            <p>
                <strong>Category:</strong>
                <span>{van.type}</span>
            </p>
            <p>
                <strong>Description:</strong>
                <span>{van.description}</span>
            </p>
            <p>
                <strong>Visibility:</strong>
                <span>Public</span>
            </p>
        </div>
    )
}

export default Details
