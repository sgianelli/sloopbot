module.exports = function (robot) {
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
