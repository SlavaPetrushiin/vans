import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { IVan } from './Vans';
import CustomLink from '../../components/CustomLink/CustomLink';

const VanDetail = () => {
    const { id } = useParams();
    // const { state } = useLocation();
    const location = useLocation();
    const [van, setVan] = useState<IVan | null>();

    // function getPathWithSearhParams(state: any): string {
    //     if (!state || !state.search) return "";

    //     let sp = new URLSearchParams(state.search);
    //     return `?${sp.toString()}`;
    // }

    useEffect(() => {
        async function fetchVanById() {
            try {
                const result = await fetch("/api/vans/" + id).then(response => response.json());
                setVan(result.vans)
            } catch (error) {
                console.log(error)
            }
        }

        fetchVanById();
    }, [id])

    const search = location.state?.search || "";
    const textBtnBack = location.state?.type || "all vans"

    return (
        <div className="van-detail-container">
            <div className={'go-to-back'}>
                {/* <CustomLink to={".." + getPathWithSearhParams(state)} relative='path'  >
                    Back to all vans
                </CustomLink> */}
                <CustomLink to={".." + search} relative='path'  >
                    Back to {textBtnBack} vans
                </CustomLink>
            </div>
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
