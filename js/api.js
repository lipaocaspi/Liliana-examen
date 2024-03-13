const URL_API = '154.38.171.54:3001'; /* URL que se vaya a usar */

/* POST */
export async function postData(element) {
    try {
        const response = await fetch(`http://${URL_API}/priceF`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(element)
        });
        return response;
    }
    catch (error) {
        return {}
    }
}