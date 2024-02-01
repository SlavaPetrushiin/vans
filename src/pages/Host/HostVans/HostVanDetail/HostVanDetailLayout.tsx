import React, { useEffect, useState } from 'react'
import { Outlet, Params, useLoaderData, useParams } from 'react-router-dom';
import CustomLink from '../../../../components/CustomLink/CustomLink';
import { Van_Result, getVan } from '../../../../api/api';
import { requireAuth } from '../../../../utils';


export type ContextVan = Van_Result;

export async function loader({params}: {params: Params<"vanId">}){
    await requireAuth();
    return  getVan(params.vanId!);
} 

const HostVanDetailLayout = () => {
    //let { vanId } = useParams();
    const currentVan =  useLoaderData() as Van_Result;

    // useEffect(() => {
    //     getVan(vanId!)
    //         .then(res => setCurrentVan(res))
    //         .catch(err => console.error(err))
    // }, [vanId])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <div className={'go-to-back'}>
                <CustomLink to=".." relative='path'  >
                    Back to all vans
                </CustomLink>

            </div>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
                <nav>
                    <CustomLink to="." end>Details</CustomLink>
                    <CustomLink to="pricing">Pricing</CustomLink>
                    <CustomLink to="photos">Photos</CustomLink>
                </nav>
                <div>
                    <Outlet context={currentVan} />
                </div>
            </div>
        </section>
    )
}

export default HostVanDetailLayout


