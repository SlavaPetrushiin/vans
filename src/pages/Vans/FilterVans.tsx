import { useSearchParams } from 'react-router-dom';
import "./Vans.scss";

const FilterVans = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    let vanType = searchParams.get("type");

    const handleChangeType = (value: TypeVan) => {
            const params = new URLSearchParams();
            params.append('type', value)
            const query = params.size ? "?" + params.toString() : '';
            setSearchParams(query);   
    };

    return (
        <select
            placeholder='Add filter'
            value={vanType || filterOptions[0].value}
            onChange={e => handleChangeType(e.target.value as TypeVan)} 
        >
            {filterOptions.map((option) => {
                return <option key={option.label} value={option.value}>{option.label}</option>
            })}
        </select>
    )
}

enum TypeVans {
    All,
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
    { label: "all", value: "all" },
    { label: "simple", value: "simple" },
    { label: "luxury", value: "luxury" },
    { label: "rugged", value: "rugged" },
];

export const typeVansValues = filterOptions.map(v => v.value);

export default FilterVans;
