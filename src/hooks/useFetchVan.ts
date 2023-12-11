import { useEffect, useState } from "react";
import { IVan } from "../pages/Vans/Vans";

export const useFetchVan = (url: string): IVan | null => {
    const [van, setVan] = useState<IVan | null>(null);

    useEffect(() => {
        async function fetchVanById() {
            try {
                const result = await fetch(url).then(response => response.json());
                setVan(result.vans)
            } catch (error) {
                console.log(error)
            }
        }

        fetchVanById();
    }, [url])

    return van;
}