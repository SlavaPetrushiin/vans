import { NavLink, Link, useSearchParams } from 'react-router-dom';
import "./Vans.scss";

const FilterVans = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    let vanType = searchParams.get("type");

    const genNewSearchParamString = (key: "type", value: TypeVan | null): string => {
        const sp = new URLSearchParams(searchParams);
        if (value === null) {
            sp.delete(key);
        } else {
            sp.set(key, value);
        }
        return `?${sp.toString()}`;
    }

    const handleFilterChange = (key: "type", value: TypeVan | null) => {
        setSearchParams((prevParams) => {

            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }

            return prevParams
        })
    }



    return (
        // <select
        //     placeholder='Add filter'
        //     value={vanType || filterOptions[0].value}
        //     onChange={e => handleChangeType(e.target.value as TypeVan)} 
        // >
        //     {filterOptions.map((option) => {
        //         return <option key={option.label} value={option.value}>{option.label}</option>
        //     })}
        // </select>
        <div className='filters-wrap'>
            <div>
                <NavLink to={genNewSearchParamString("type", "simple")} className={() => vanType === "simple" ? "active" : ""}>Simple</NavLink>
                <NavLink to={genNewSearchParamString("type", "luxury")} className={() => vanType === "luxury" ? "active" : ""}>Luxury</NavLink>
                <NavLink to={genNewSearchParamString("type", "rugged")} className={() => vanType === "rugged" ? "active" : ""}>Rugged</NavLink>
                {vanType && <Link to={genNewSearchParamString("type", null)}>Clear</Link>}
            </div>
            <div>
                <button
                    onClick={() => handleFilterChange("type", 'simple')}
                    className={"van-type simple " + `${vanType === "simple" ? "active" : ""}`}
                >
                    Simple
                </button>
                <button
                    onClick={() => handleFilterChange("type", 'luxury')}
                    className={"van-type luxury " + `${vanType === "luxury" ? "active" : ""}`}
                >
                    Luxury
                </button>
                <button
                    onClick={() => handleFilterChange("type", 'rugged')}
                    className={"van-type rugged " + `${vanType === "rugged" ? "active" : ""}`}
                >
                    Rugged
                </button>
                {vanType && <button
                    className='van-type clear-filters'
                    onClick={() => handleFilterChange("type", null)}
                >Clear</button>}
            </div>
        </div>
    )
}

enum TypeVans {
    // All,
    Simple,
    Rugged,
    Luxury
}

export type TypeVan = Lowercase<keyof typeof TypeVans>;
interface ITypesVan {
    label: TypeVan;
    value: TypeVan;
}

const filterOptions: ITypesVan[] = [
    // { label: "all", value: "all" },
    { label: "simple", value: "simple" },
    { label: "luxury", value: "luxury" },
    { label: "rugged", value: "rugged" },
];

export const typeVansValues = filterOptions.map(v => v.value);

export default FilterVans;
