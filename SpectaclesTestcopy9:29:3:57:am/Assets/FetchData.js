//@input Asset.RemoteServiceModule rsm

//script.fetchUsers = function () {
//    const req = RemoteServiceHttpRequest.create();
//    req.url = "https://hackgt11-server.onrender.com/users";
//    req.method = RemoteServiceHttpRequest.HttpRequestMethod.Get;
//    var a;
//    script.rsm.performHttpRequest(req, res => {a=res.body});
//    print(a);
//}


script.fetchUsers = async function (path) {
    const fetch = () => {
        return new Promise((resolve, reject) => {
            const req = RemoteServiceHttpRequest.create();
            req.url = "https://hackgt11-server.onrender.com/" + path;
            req.method = RemoteServiceHttpRequest.HttpRequestMethod.Get;

            // Perform the HTTP request asynchronously
            script.rsm.performHttpRequest(req, (res) => {
                if (res.statusCode === 200) {
                    resolve(res.body);  // Resolve the promise with the response body
                } else {
                    reject("Error: " + res.statusCode);  // Reject the promise in case of error
                }

            });
        });
    };

    try {
        const users = await fetch();
        print("fetched: data" + users);
        //return await users.json();
        return '[{"lastActionTaken":{"action":"Notified nurse","takenAt":"2024-09-28T12:00:00.000Z"},"_id":"66f8e702a9f1b923bfb226d9","description":"High heart rate detected","priority":"high","userId":"66f840880bf0055c2c4ec688","status":"active","triggeredAt":"2024-09-29T05:34:58.340Z","__v":0}]';
        // You can now work with the fetched users here
    } catch (error) {
        print("Failed to fetch data: " + error);
    }
}