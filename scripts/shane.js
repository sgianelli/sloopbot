module.exports = function (robot) {
    robot.listen(function (message) {
        return message.user.name == "shane" && message.text == "rumba?";
    }, function (response) {
        response.send("Rumba???");
    });
};
