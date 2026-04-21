class Woopy {
    constructor(config) {
        if (!config.token) {
            throw new Error("Token is required to initialize Woopy!");
        }
        this.token = config.token;
        this.baseUrl = "https://api.woopy.dev/api/v1";
    }

    async alert(data = {}) {
        const response = await fetch(`${this.baseUrl}/notifications`, {
            method: "POST",
            headers: {
                "X-App-Token": `${this.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(`Woopy Error: ${error.message}`);
        }

        return await response.json();
    }
}

module.exports = Woopy;