import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetchVan } from '../../../hooks/useFetchVan';

const HostVanDetail = () => {
    let { vanId } = useParams();
    const currentVan = useFetchVan("/api/host/vans/" + vanId)

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='card card-host-van'>
            <img src={currentVan.imageUrl} width={150} />
            <div className='van-description'>
                <span className={`van-type ${currentVan.type} selected`}>{currentVan.type}</span>
                <h2 className='van-caption'>{currentVan.name}</h2>
                <p className="van-price"><span>${currentVan.price}</span>/day</p>
            </div>
        </div>
    )
}

export default HostVanDetail
