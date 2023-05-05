const takeIt = () => {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            console.log(data.ip)
            return fetch("http://localhost:5050/api/authentication", {
                method: 'POST',
                body: JSON.stringify({ip: data.ip})
            })

        });
}

export default takeIt
