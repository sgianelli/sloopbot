module.exports = function (robot) {
    robot.respond(/bojack me foo/i, function (message) {
        message.reply("Fuck yeah");
    });
};
