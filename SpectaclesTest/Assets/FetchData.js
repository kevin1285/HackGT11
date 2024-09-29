//@input Asset.RemoteServiceModule rsm

//script.fetchUsers = function () {
//    const req = RemoteServiceHttpRequest.create();
//    req.url = "https://hackgt11-server.onrender.com/users";
//    req.method = RemoteServiceHttpRequest.HttpRequestMethod.Get;
//
//    script.rsm.performHttpRequest(req, res => print(res.body));
//    print("test");
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
        // You can now work with the fetched users here
    } catch (error) {
        print("Failed to fetch data: " + error);
    }
}