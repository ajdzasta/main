async function register_api(username) {
    const payload = {"username": username};
  
    const response = await fetch("http://34.118.3.130:8080/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })

    const data = await response.json();
    return data;
}

async function updateScore(userid,score) {
    const payload = {
        "userid": userid,
        "score": score
    };
  
    const response = await fetch("http://34.118.3.130:8080/api/score", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })

    const data = await response.json();
    return data;
}