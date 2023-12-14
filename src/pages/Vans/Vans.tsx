import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import "./Vans.scss";
import FilterVans, { TypeVan, typeVansValues } from './FilterVans';

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
    let [searchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");

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

    const vansFiltered = typeFilter && typeVansValues.includes(typeFilter as TypeVan)
        ? vans.filter(v => v.type === typeFilter)
        : vans

    const vanElements = vansFiltered.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`${van.id}`}>
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
            <FilterVans />
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}

export default Vans;
