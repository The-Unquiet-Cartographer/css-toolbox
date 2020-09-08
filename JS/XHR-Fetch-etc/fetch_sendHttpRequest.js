//Requires fetch.js

//Fetch API has worse browser support and poor error-handling logic.
//So it's basically no better than just your standard way.

const sendHttpRequest = ((method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? {'Content-Type': 'application/json'} : {}
    })
    .then(response => {
        if (response.status >= 400) { 
            // !response.ok
            return response.json().then(errorResponseData => {
                const error = new Error('Uh oh!');
                error.data = errorResponseData;
                throw error;
            });
        }
        return response.json();
    })
    ;
});

const getData = (url) => {
    sendHttpRequest('GET', url)
    .then (responseData => {
        console.log("Do something with response data.");
    })
    ;
};

const sendData = (url, data = {}) => {
    sendHttpRequest('POST', url, data)
    .then (responseData => {
        console.log("Do something with response data.");
    })
    .catch(err => {
        console.log(err);
    })
    ;
};