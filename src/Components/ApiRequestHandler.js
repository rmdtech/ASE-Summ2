

export function httpsRequest(apiUrl) {
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

export async function httpRequest(apiUrl) {
    try {
        const result = await fetch(apiUrl);
        const data = await result.json();
        return data;
    } catch (e) {
        return e;
    }
}