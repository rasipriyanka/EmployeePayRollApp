function makeServiceCall(methodType, url, async = true, data = null) {
    console.log(url, methodType, data)
    return new Promise((resolve, reject) => {
        // #1 -- initiating the connection
        const xhttp = new XMLHttpRequest();
        //xhttp.open("PUT", url+'/12', true);
        //check if the connection is right or not with the help of ready state & status
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status >=
                    200 && xhttp.status < 300) {
                    resolve(xhttp.responseText);
                } else {
                    reject(new Error("rejected"));
                }
            }
        }
        // #2 -- Opening the connection with server   
        xhttp.open(methodType, url);

        // #3 -- Exchanging data with server
        if (data) {
            xhttp.setRequestHeader("Content-Type", "application/json");
            xhttp.send(JSON.stringify(data));
        } else {
            xhttp.send();
        }
    })
}