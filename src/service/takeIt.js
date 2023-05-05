const takeIt = () => {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            return fetch("https://ip-service.onrender.com/api/authentication", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({ip: data.ip})
            })

        });
};

export default takeIt
