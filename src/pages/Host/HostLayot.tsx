import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import "./HostLayot.scss";
import CustomLink from '../../components/CustomLink/CustomLink';

const HostLayot = () => {
    return (
        <div className="container-host">
            <div className='host-nav'>
                <CustomLink to="/host" end>Dashboard</CustomLink>
                <CustomLink to="income">Income</CustomLink>
                <CustomLink to="vans">Vans</CustomLink>
                <CustomLink to="reviews">Reviews</CustomLink>
            </div>
            <Outlet />
        </div>
    )
}

export default HostLayot
