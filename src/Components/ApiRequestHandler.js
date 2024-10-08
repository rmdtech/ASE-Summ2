export async function httpRequest(apiUrl) {
    try {
        const result = await fetch(apiUrl);
        const data = await result.json();
        return data;
    } catch (e) {
        return e;
    }
}