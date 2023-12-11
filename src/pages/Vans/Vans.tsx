import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Vans.scss";

export interface IVan {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    type: string;
}

const Vans = () => {
    const [vans, setVans] = useState<IVan[]>([])

    useEffect(() => {
        async function fetchVans() {
            try {
                const result = await fetch("/api/vans").then(response => response.json());      
                setVans(result.vans);
            } catch (error) {
                console.log(error)
            }
        }

        fetchVans();
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>

        </div>
    ))

    return (
        <div className="van-list-container">
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}

export default Vans;
