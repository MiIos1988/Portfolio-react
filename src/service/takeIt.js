const takeIt = async () => {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        
        await fetch("https://ip-service.onrender.com/api/authentication", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ip: data.ip })
        });
    } catch (error) {
        console.error(" ");
    }
};

export default takeIt;
