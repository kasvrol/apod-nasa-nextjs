export async function ApiNasaGov(date: string) {
    const response: any = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=3oJxNtB9Kez0obSunOfeSpROAwbPU9pd6zCgYWIf&date=${date}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    return response;
}

export async function ApiNasaGovImage01(date: any) {
    const response: any = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=3oJxNtB9Kez0obSunOfeSpROAwbPU9pd6zCgYWIf&date=${date}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    return response;
}

export async function ApiNasaGovImage02(date: any) {
    const response: any = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=3oJxNtB9Kez0obSunOfeSpROAwbPU9pd6zCgYWIf&date=${date}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    return response;
}

export async function ApiNasaGovImage03(date: any) {
    const response: any = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=3oJxNtB9Kez0obSunOfeSpROAwbPU9pd6zCgYWIf&date=${date}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    return response;
}
