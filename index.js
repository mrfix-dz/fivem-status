const axios = require("axios");

class Server {
    constructor({ ip, port, timeout = 5000 }) {
        if (!ip) {
            throw new Error("Please provide an IP.");
        }
        if (!port) {
            throw new Error("Please provide a port.");
        }
        this.baseUrl = `http://${ip}:${port}`;
        this.timeout = timeout;
    }

    async fetchData(url) {
        try {
            const response = await axios.get(url, { timeout: this.timeout });
            if (!response.data || typeof response.data !== 'object') {
                throw new Error('Invalid response data');
            }
            return response.data;
        } catch (error) {
            console.error(`Error fetching data from ${url}:`, error);
            throw new Error(`Unable to fetch data from ${url}`);
        }
    }

    async getNumberPlayers() {
        const url = `${this.baseUrl}/players.json`;
        const data = await this.fetchData(url);
        return data.length;
    }

    async getPlayers() {
        const url = `${this.baseUrl}/players.json`;
        return this.fetchData(url);
    }

    async getMaxPlayers() {
        const url = `${this.baseUrl}/info.json`;
        const data = await this.fetchData(url);
        return data.vars.sv_maxClients;
    }

    async getResources() {
        const url = `${this.baseUrl}/info.json`;
        const data = await this.fetchData(url);
        return data.resources;
    }

    async getDeveloper() {
        const url = `${this.baseUrl}/info.json`;
        const data = await this.fetchData(url);
        return data.vars.Developer;
    }

    async getDiscord() {
        const url = `${this.baseUrl}/info.json`;
        const data = await this.fetchData(url);
        return data.vars.Discord;
    }

    async getOwners() {
        const url = `${this.baseUrl}/info.json`;
        const data = await this.fetchData(url);
        return data.vars.Owners;
    }

    async getActivitypubFeed() {
        const url = `${this.baseUrl}/info.json`;
        const data = await this.fetchData(url);
        return data.vars.activitypubFeed;
    }

    async getConnectingBanner() {
        const url = `${this.baseUrl}/info.json`;
        const data = await this.fetchData(url);
        return data.vars.banner_connecting;
    }

    async getDetailBanner() {
        const url = `${this.baseUrl}/info.json`;
        const data = await this.fetchData(url);
        return data.vars.banner_detail;
    }

    async getGameName() {
        const url = `${this.baseUrl}/info.json`;
        const data = await this.fetchData(url);
        return data.vars.gamename;
    }

    async getLocale() {
        const url = `${this.baseUrl}/info.json`;
        const data = await this.fetchData(url);
        return data.vars.locale;
    }

    async getOnesync() {
        const url = `${this.baseUrl}/info.json`;
        const data = await this.fetchData(url);
        return data.vars.onesync_enabled;
    }

    async getLicenseKeyToken() {
        const url = `${this.baseUrl}/info.json`;
        const data = await this.fetchData(url);
        return data.vars.sv_licenseKeyToken;
    }

    async getProjectDesc() {
        const url = `${this.baseUrl}/info.json`;
        const data = await this.fetchData(url);
        return data.vars.sv_projectDesc;
    }

    async getProjectName() {
        const url = `${this.baseUrl}/info.json`;
        const data = await this.fetchData(url);
        return data.vars.sv_projectName;
    }

    async getscriptHook() {
        const url = `${this.baseUrl}/info.json`;
        const data = await this.fetchData(url);
        return data.vars.sv_scriptHookAllowed;
    }

    async getTags() {
        const url = `${this.baseUrl}/info.json`;
        const data = await this.fetchData(url);
        return data.vars.tags;
    }

    async getTxAdminVersion() {
        const url = `${this.baseUrl}/info.json`;
        const data = await this.fetchData(url);
        return data.vars.txAdmin - version;
    }

    async getVersion() {
        const url = `${this.baseUrl}/info.json`;
        const data = await this.fetchData(url);
        return data.version;
    }

    async getServerStatus() {
        const url = `${this.baseUrl}/info.json`;
        try {
            await axios.get(url, { timeout: this.timeout });
            return 'online';
        } catch (error) {
            return 'offline';
        }
    }
}

module.exports = { Server };
