//Requires axios.js

//Axios provides wrappers for all this stuff so you don't have to. Neat!

const getData = (url) => {
    axios.get(url).then(response => {
        console.log(response);
    });
};

const sendData = (url, data = {}) => {
    axios
        .post (
            url, 
            data, 
            { headers: 
                {'Content-Type': 'application/json'}
            }
        )
        .then (response => {
          console.log(response);  
        })
        .catch(err => {
            console.log(err, err.response);
        })
    ;
};