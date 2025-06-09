
# Server Information API

**Author**: MR-FIX  
**Discord**: [dev.mrfix](https://discord.com/users/dev.mrfix)  
**GitHub**: [mrfix-dz](https://github.com/mrfix-dz)  
**NpmJs**: [mrfix.dz](https://www.npmjs.com/package/mrfix.dz)

This package allows you to interact with a server to retrieve various pieces of information such as the number of players, server status, resources, and other details from the server API.

## Features

- Get the number of players currently connected to the server.
- Get the full list of players connected to the server.
- Retrieve the server's maximum player limit.
- Fetch server resources and configuration.
- Check if the server is online or offline.
- Retrieve various server-related details like developer, project name, version, etc.

## Installation

To install this package, run the following command:

```bash
npm install @mrfix.dz/fivem-status
```

## Available Methods

### `getNumberPlayers()`
Returns the number of players currently connected to the server.

### `getPlayers()`
Returns the full list of players connected to the server.

### `getMaxPlayers()`
Returns the server's maximum player limit.

### `getResources()`
Fetches server resources and configuration.

### `getServerStatus()`
Returns the status of the server, either `online` or `offline`.

### `getDeveloper()`
Returns the server's developer information.

### `getProjectName()`
Returns the project's name.

### `getTags()`
Returns the server’s tags.

### `getVersion()`
Returns the server's version.

### `getLocale()`
Returns the server’s locale.

### `getTxAdminVersion()`
Returns the server's txAdmin version.

### `getLicenseKeyToken()`
Returns the server’s license key token.

### `getActivitypubFeed()`
Returns the ActivityPub feed of the server.

### `getConnectingBanner()`
Returns the banner shown when connecting to the server.

### `getDetailBanner()`
Returns the banner shown on the server details page.

### `getOnesync()`
Returns whether Onesync is enabled on the server.

### `getscriptHook()`
Returns whether script hooks are allowed on the server.

### `getDiscord()`
Returns the Discord link for the server.

### `getOwners()`
Returns the server owners.

### `getProjectDesc()`
Returns the project description.

## Usage

Here’s an example of how you can use the API:

```javascript
const { Server } = require('@mrfix.dz/fivem-status');

// Initialize the server with its IP address and port
const server = new Server({ ip: '127.0.0.1', port: 30120 });

// Fetching the number of connected players
server.getNumberPlayers()
  .then(numberOfPlayers => {
    console.log(`Number of players connected: ${numberOfPlayers}`);
  })
  .catch(error => console.error(error));

// Fetching the server's maximum player limit
server.getMaxPlayers()
  .then(maxPlayers => {
    console.log(`Max players allowed: ${maxPlayers}`);
  })
  .catch(error => console.error(error));

// Fetching server status (online/offline)
server.getServerStatus()
  .then(status => {
    console.log(`Server status: ${status}`);
  })
  .catch(error => console.error(error));

// Fetching other details like developer info
server.getDeveloper()
  .then(developer => {
    console.log(`Developer: ${developer}`);
  })
  .catch(error => console.error(error));
```
