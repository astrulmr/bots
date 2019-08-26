exports.run = async (client, message, args, ops) => {

    if (message.author.id !== ops.ownerID) return message.channel.send('Sorry, only the owner of the bot can execute this command!');

    // Delete from Cache
    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)]
    } catch (e) {
        return message.channel.send(`Unable to reload: ${args[0]}`);
    }

    message.channel.send(`Successfully reloaded: ${args[0]}`);

}