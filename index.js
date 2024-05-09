const { Client } = require('@xhayper/discord-rpc');

const clientId = '1238131925672001608';
const client = new Client({ clientId });

const buttonUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

client.on('ready', () => {
    console.log('Logged in & ready');

    client.user?.setActivity({
        largeImageKey: "icon",
        startTimestamp: Date.now(),
        buttons: [{label: "Example Button", url: buttonUrl}]
    });
});

client.login();