import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { ContextVan } from './HostVanDetail';

const Pricing = () => {
    const van = useOutletContext<ContextVan>();

    return (
        <h3 className="host-van-price">${van.price}<span>/day</span></h3>
    )
}

export default Pricing
