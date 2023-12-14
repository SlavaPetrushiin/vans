import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { ContextVan } from './HostVanDetailLayout';

const Photos = () => {
    const van = useOutletContext<ContextVan>();

    return (
        <img src={van.imageUrl} className="host-van-detail-image" />
    )
}

export default Photos
