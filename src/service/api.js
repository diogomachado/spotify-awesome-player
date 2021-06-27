const url = "https://api.spotify.com/v1";

const ApiService = {
    get: function(path) {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('sap_access_token'));

        return fetch(`${url}${path}`, {
            method: "GET",
            headers: myHeaders
        });
    },
    post: function(path, data) {
        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('sap_access_token'));
        myHeaders.append("Content-Type", "application/json");
        
        return fetch(`${url}${path}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: myHeaders
        });
    },
    put: function(path, data) {
        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('sap_access_token'));
        myHeaders.append("Content-Type", "application/json");
        
        return fetch(`${url}${path}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: myHeaders
        });
    }
};

export default ApiService;