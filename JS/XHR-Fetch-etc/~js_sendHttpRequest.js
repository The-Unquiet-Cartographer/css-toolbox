//Basic format for a request method
//Notice nothing happens with the data, the response is simply logged in the method.
//  In the real example, we would want getData or sendData to do something with the data.
//This method is promise-less

/*
const sendHttpRequest = (method, url) => {
    const xhr = new XMLHTTPRequest();
    xhr.open(method, url);

    xhr.responseType = 'json';

    xhr.onload = () => {
        const data = xhr.response;
        console.log(data);
    };

    xhr.send();
}

const getData = (url) => {
    sendHttpRequest('GET', url);
}

const sendData = (url) => {
    sendHttpRequest('POST', url);
}
*/


//Promise method
//This returns the response within a promise, after which something can be done with the data.

const sendHttpRequest = (method, url, data) => {

    const promise = new Promise( (P_resolve, P_reject) => {
        const xhr = new XMLHTTPRequest();
        xhr.open(method, url);

        xhr.responseType = 'json';

        xhr.onload = () => {
            if (xhr.status >= 400) {    //<== Technically the server might recieve the data even if it's invalid, making it a successful request. This conditional helps.
                P_reject(xhr.response);     //<== We reject the promise, but use the xhr response data in the rejection.
            } else {             
                P_resolve(xhr.response);        // So, you resolve the promise with the xhr response.
            }
        };

        if (data) {                     //<== Only do this if data is not undefined, i.e. if you are 'POST'ing.
            xhr.setRequestHeader('Content-Type', 'application/json')
        }

        xhr.onerror = () => {           //<== Catch any other xhr errors.
            P_reject("Insert rejection notice here.");
        }

        xhr.send(JSON.stringify(data));
    });
    return promise;                             //...aaand returns the promise, containing the response.
};

const getData = (url) => {
    sendHttpRequest('GET', url)
    .then(promiseReturn_resolve => 
        {
            console.log(promiseReturn_resolve);                      //.then to use the response data returned in the promise.
        }
    );

}

const sendData = (url, data) => {
    sendHttpRequest('POST', url, data)
    .then(promiseReturn_resolve => 
        {
            console.log(promiseReturn_resolve);                      //.then to use the response data returned in the promise.
        }
    ).catch(promiseReturn_reject)

    ;
}

//In this example, we added a new argument, "data", which does not get used by 'GET' but does get used by 'POST'.