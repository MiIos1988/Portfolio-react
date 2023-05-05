const takeIt = () => {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            return fetch("http://localhost:5050/api/authentication", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({ip: data.ip})
            })

        });
};

export default takeIt
