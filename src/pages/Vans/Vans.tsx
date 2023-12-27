import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Van_Result, getVans } from '../../api/api';
import FilterVans, { TypeVan, typeVansValues } from './FilterVans';
import "./Vans.scss";


const Vans = () => {
    const [searchParams] = useSearchParams();
    const [vans, setVans] = useState<Van_Result[]>([])
    const typeFilter = searchParams.get("type");

    useEffect(() => {
        async function fetchVans() {
            try {
                const vans = await getVans();
                setVans(vans);
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
            <Link
                to={`${van.id}`}
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter
                }}
            >
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
