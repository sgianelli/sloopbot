module.exports = function (robot) {
    robot.hear(/^slutty$/, function (response) {
        console.log("response: " + JSON.stringify(response));
        response.emit('slack.reaction', { message: "response", name: "+1" });
    });

    robot.hear(/^r\/(\w+)$/i, function (response) {
        response.send("http://reddit.com/" + response.match[0]);
    });

    robot.listen(function (message) {
        return message.user.name == "shane" && message.text.toLowerCase() == "rumba?";
    }, function (response) {
        response.send("@benjin: Rumba???");
    });

    robot.listen(function (message) {
        return message.user.name == "benjin" && message.text.toLowerCase() == "rumba?";
    }, function (response) {
        response.send("@shane: Rumba???");
    });
};
