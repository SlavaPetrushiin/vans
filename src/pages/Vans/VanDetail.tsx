import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IVan } from './Vans';

const VanDetail = () => {
    let { id } = useParams();
    const [van, setVan] = useState<IVan | null>();


    useEffect(() => {
        async function fetchVanById() {
            try {
                const result = await fetch("/api/vans/" + id).then(response => response.json());
                console.log(result.vans)
                setVan(result.vans)
            } catch (error) {
                console.log(error)
            }
        }

        fetchVanById();
    }, [id])

    console.log({ id })

    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}

export default VanDetail
