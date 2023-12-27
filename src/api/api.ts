/* eslint-disable no-throw-literal */

export interface Van_Result {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    type: string;
}

export async function getVans(): Promise<Van_Result[]> {
    const response = await fetch("/api/vans")
    if (!response.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: response.statusText,
            status: response.status
        }
    }
    const data = await response.json();
    return data.vans;
}

export async function getVan(id: string): Promise<Van_Result> {
    const response = await fetch("/api/vans/" + id)
    if (!response.ok) {
        throw {
            message: "Failed to fetch van",
            statusText: response.statusText,
            status: response.status
        }
    }
    const data = await response.json();
    return data.vans;
}

// export async function getVans(): Promise<Van_Result[]> {
//     const response = await fetch("/api/host/vans");
//     if (!response.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: response.statusText,
//             status: response.status
//         }
//     }
//     const data = await response.json();
//     return data.vans;
// }

// export async function getHostVan(id: string): Promise<Van_Result> {
//     const response = await fetch("/api/host/vans/" + id)
//     if (!response.ok) {
//         throw {
//             message: "Failed to fetch van",
//             statusText: response.statusText,
//             status: response.status
//         }
//     }
//     const data = await response.json();
//     return data.vans;
// }