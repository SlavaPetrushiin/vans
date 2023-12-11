import { useEffect, useState } from "react";
import { IVan } from "../pages/Vans/Vans";

export const useFetchVans = (url: string): IVan[] => {
    const [vans, setVans] = useState<IVan[]>([]);

    useEffect(() => {
        async function fetchVans() {
            try {
                const result = await fetch(url).then(response => response.json());
                setVans(result.vans);
            } catch (error) {
                console.log(error)
            }
        }

        fetchVans();
    }, [url]);

    return vans;
}