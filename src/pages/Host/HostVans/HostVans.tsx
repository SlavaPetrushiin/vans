import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Van_Result, getVans } from '../../../api/api';
import "./HostVans.scss";

const HostVans = () => {
    const [vans, setVans] = useState<Van_Result[]>([]);

    useEffect(() => {
        getVans()
            .then(res => setVans(res))
            .catch(err => console.error(err))
    }, [])

    const hostVansEls = vans.map(van => (
        <Link
            to={`${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>

                    ) : (
                        <h2>Loading...</h2>
                    )
                }
            </div>
        </section>
    )
}

export default HostVans
