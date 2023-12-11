import { NavLink, NavLinkProps } from "react-router-dom";
import { FunctionComponent } from "react";
import "./CustomLink.scss";

interface ICustomLinkProps extends NavLinkProps { }

const CustomLink: FunctionComponent<ICustomLinkProps> = ({ to, children, ...otherProps }) => {
    return (
        <NavLink
            {...otherProps}
            to={to}
            className={({ isActive }) => (isActive ? "link link__active" : "link")}
        >
            {children}
        </NavLink>
    )
}

export default CustomLink
