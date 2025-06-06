const axios = require("axios");

class Server {
    constructor({ ip, port }) {
        if (!ip) {
            throw new Error("Please provide an IP.");
        }
        if (!port) {
            throw new Error("Please provide a port.");
        }
        this.baseUrl = `http://${ip}:${port}`;
    }

    async getNumberPlayers() {
        try {
            const url = `${this.baseUrl}/players.json`;
            const response = await axios.get(url);
            return response.data.length;
        } catch (error) {
            console.error("Error fetching number of players:", error);
            throw new Error("Unable to fetch number of players");
        }
    }

    async getPlayers() {
        try {
            const url = `${this.baseUrl}/players.json`;
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error("Error fetching players:", error);
            throw new Error("Unable to fetch players");
        }
    }

    async getMaxPlayers() {
        try {
            const url = `${this.baseUrl}/info.json`;
            const response = await axios.get(url);
            return response.data.vars.sv_maxClients;
        } catch (error) {
            console.error("Error fetching max players:", error);
            throw new Error("Unable to fetch max players");
        }
    }

    async getResources() {
        try {
            const url = `${this.baseUrl}/info.json`;
            const response = await axios.get(url);
            return response.data.resources;
        } catch (error) {
            console.error("Error fetching resources:", error);
            throw new Error("Unable to fetch resources");
        }
    }

    async getDeveloper() {
        try {
            const url = `${this.baseUrl}/info.json`;
            const response = await axios.get(url);
            return response.data.vars.Developer;
        } catch (error) {
            console.error("Error fetching developer info:", error);
            throw new Error("Unable to fetch developer info");
        }
    }

    async getDiscord() {
        try {
            const url = `${this.baseUrl}/info.json`;
            const response = await axios.get(url);
            return response.data.vars.Discord;
        } catch (error) {
            console.error("Error fetching Discord info:", error);
            throw new Error("Unable to fetch Discord info");
        }
    }

    async getOwners() {
        try {
            const url = `${this.baseUrl}/info.json`;
            const response = await axios.get(url);
            return response.data.vars.Owners;
        } catch (error) {
            console.error("Error fetching owners:", error);
            throw new Error("Unable to fetch owners");
        }
    }

    async getActivitypubFeed() {
        try {
            const url = `${this.baseUrl}/info.json`;
            const response = await axios.get(url);
            return response.data.vars.activitypubFeed;
        } catch (error) {
            console.error("Error fetching activitypub feed:", error);
            throw new Error("Unable to fetch activitypub feed");
        }
    }

    async getConnectingBanner() {
        try {
            const url = `${this.baseUrl}/info.json`;
            const response = await axios.get(url);
            return response.data.vars.banner_connecting;
        } catch (error) {
            console.error("Error fetching connecting banner:", error);
            throw new Error("Unable to fetch connecting banner");
        }
    }

    async getDetailBanner() {
        try {
            const url = `${this.baseUrl}/info.json`;
            const response = await axios.get(url);
            return response.data.vars.banner_detail;
        } catch (error) {
            console.error("Error fetching detail banner:", error);
            throw new Error("Unable to fetch detail banner");
        }
    }

    async getGameName() {
        try {
            const url = `${this.baseUrl}/info.json`;
            const response = await axios.get(url);
            return response.data.vars.gamename;
        } catch (error) {
            console.error("Error fetching game name:", error);
            throw new Error("Unable to fetch game name");
        }
    }

    async getLocale() {
        try {
            const url = `${this.baseUrl}/info.json`;
            const response = await axios.get(url);
            return response.data.vars.locale;
        } catch (error) {
            console.error("Error fetching locale:", error);
            throw new Error("Unable to fetch locale");
        }
    }

    async getOnesync() {
        try {
            const url = `${this.baseUrl}/info.json`;
            const response = await axios.get(url);
            return response.data.vars.onesync_enabled;
        } catch (error) {
            console.error("Error fetching onesync status:", error);
            throw new Error("Unable to fetch onesync status");
        }
    }

    async getLicenseKeyToken() {
        try {
            const url = `${this.baseUrl}/info.json`;
            const response = await axios.get(url);
            return response.data.vars.sv_licenseKeyToken;
        } catch (error) {
            console.error("Error fetching license key token:", error);
            throw new Error("Unable to fetch license key token");
        }
    }

    async getProjectDesc() {
        try {
            const url = `${this.baseUrl}/info.json`;
            const response = await axios.get(url);
            return response.data.vars.sv_projectDesc;
        } catch (error) {
            console.error("Error fetching project description:", error);
            throw new Error("Unable to fetch project description");
        }
    }

    async getProjectName() {
        try {
            const url = `${this.baseUrl}/info.json`;
            const response = await axios.get(url);
            return response.data.vars.sv_projectName;
        } catch (error) {
            console.error("Error fetching project name:", error);
            throw new Error("Unable to fetch project name");
        }
    }

    async getscriptHook() {
        try {
            const url = `${this.baseUrl}/info.json`;
            const response = await axios.get(url);
            return response.data.vars.sv_scriptHookAllowed;
        } catch (error) {
            console.error("Error fetching script hook status:", error);
            throw new Error("Unable to fetch script hook status");
        }
    }

    async getTags() {
        try {
            const url = `${this.baseUrl}/info.json`;
            const response = await axios.get(url);
            return response.data.vars.tags;
        } catch (error) {
            console.error("Error fetching tags:", error);
            throw new Error("Unable to fetch tags");
        }
    }

    async getTxAdminVersion() {
        try {
            const url = `${this.baseUrl}/info.json`;
            const response = await axios.get(url);
            return response.data.vars.txAdmin-version;
        } catch (error) {
            console.error("Error fetching txAdmin version:", error);
            throw new Error("Unable to fetch txAdmin version");
        }
    }

    async getVersion() {
        try {
            const url = `${this.baseUrl}/info.json`;
            const response = await axios.get(url);
            return response.data.version;
        } catch (error) {
            console.error("Error fetching version:", error);
            throw new Error("Unable to fetch version");
        }
    }

    async getServerStatus() {
        try {
            const url = `${this.baseUrl}/info.json`;
            await axios.get(url);
            return 'online';
        } catch (error) {
            return 'offline';
        }
    }
}

module.exports = { Server };