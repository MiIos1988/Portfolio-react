const takeIt = () => {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {

            const ip = data.ip;
            return console.log(ip)

        });
}

export default takeIt