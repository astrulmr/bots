const ascii = require('ascii-art');

// Command Handler
exports.run = (client, message, args) => {
    
    // First, we need to actually generate the font the command will use
    ascii.font(args.join(' '), 'Doom', function(rendered) {
        // args holds the array of the words following the command, so if we join them we get a string of words following the command

        // The `rendered` variable contains our output
        // Although, there is usualy a few spaces on the end
        rendered = rendered.trimRight(); // This will remove the white space on the right side of the string

        // Now, we need to check if the string exceeds the max characters
        if (rendered.length > 2000) return message.channel.send('Sorry, that message is too long!');

        // Finally, if it didn't return any error, send the message
        message.channel.send(rendered, {
            code: 'md'
        }); // The code option at the end specifies that the message should be in a code block
    });
};