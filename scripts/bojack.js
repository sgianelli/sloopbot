module.exports = function (robot) {
    var links = {
        "all i am": "http://i.imgur.com/SpIy8VY.gifv",
        "cavity search": "http://i.imgur.com/9WHKphD.gifv",
        "comic sans": "http://i.imgur.com/oL9vjID.gifv",
        "let me guard down": "http://i.imgur.com/7p8Jtls.gifv",
        "closing doors": "http://i.imgur.com/KQDQ4tv.gifv",
        "focus": "http://i.imgur.com/aYlk8Hq.gifv",
        "vincent": "http://i.imgur.com/X9e0kfC.gifv",
        "celebration": "http://i.imgur.com/Olhs2Ns.gifv",
        "business factory": "http://i.imgur.com/CLl92RA.gifv",
        "hooray": "http://i.imgur.com/d1EN5XB.gifv",
        "bad news": "http://i.imgur.com/GMlCdCo.gifv",
        "nothing": "http://i.imgur.com/a3WOSg2.gifv",
        "bowl of bourbon": "http://i.imgur.com/Vi92YLs.gifv",
        "mailmen": "http://i.imgur.com/hz2Nl3C.gifv",
        "hooray2": "http://i.imgur.com/kwxVMW3.gifv",
        "absinthe": "http://i.imgur.com/AOnpk3W.gifv",
        "lighter": "http://i.imgur.com/8DlXJSi.gifv",
        "smart": "http://i.imgur.com/RsffiXS.gifv",
        "reindeer": "http://i.imgur.com/LqNB1qz.gifv",
        "vajelly": "http://i.imgur.com/Jb5RjSN.gifv",
        "pancakes": "http://i.imgur.com/l6usFqz.gifv",
        "911": "http://i.imgur.com/MaUdf1W.gifv",
        "happiness": "http://i.imgur.com/IwEFZQX.gifv",
        "shapes": "http://i.imgur.com/cU8CcJx.gifv",
        "dollars": "http://i.imgur.com/nT3UlCd.gifv",
        "naked": "http://i.imgur.com/gftkHoS.gifv",
        "drugs": "http://i.imgur.com/vR83AFj.gifv",
        "argentina": "http://i.imgur.com/TcjKeOf.gifv",
        "anything": "http://i.imgur.com/QKcKpFb.gifv",
        "drunk": "http://i.imgur.com/uOqUXr3.gifv",
        "a business": "http://i.imgur.com/oXD41ZC.gifv",
        "shutup": "http://i.imgur.com/n2yBzrq.gifv",
        "feelings": "http://i.imgur.com/REcxwgG.gifv",
        "sloth": "http://i.imgur.com/Mj4NCrx.gifv",
        "muffins": "http://i.imgur.com/2eB3AiC.gifv",
        "internet": "http://i.imgur.com/CoVwuQZ.gifv",
        "real me": "http://i.imgur.com/IlzJJdm.gifv",
        "shapes2": "http://i.imgur.com/zFHDUGj.gifv",
        "step off": "http://i.imgur.com/F4f7qfr.gifv",
        "angry nap": "http://i.imgur.com/0vK32U4.gifv",
        "stamos": "http://i.imgur.com/GtUZmVS.gifv",
        "stamos2": "http://i.imgur.com/SvDWpey.gifv",
        "steak": "http://i.imgur.com/VA0vgoQ.gifv",
        "shower": "http://i.imgur.com/pyYXhXq.gifv",
        "when": "http://i.imgur.com/DKg8qvj.gifv",
        "words": "http://i.imgur.com/nepJAQS.gifv",
        "dumbshit": "http://i.imgur.com/lOhJfNL.gifv",
        "void": "http://i.imgur.com/G80glPZ.gifv"
    };

    function random() {
        var list = Object.keys(links).map(function (key) { return links[key] });
        var imageUrl = list[Math.floor(Math.random() * list.length)];

        return imageUrl;
    }

    robot.hear(/^bojack me( (.*))?$/i, function (response) {
        var word = response.match[2].toLowerCase();
        var match = links[word];

        if (word == "help") {
            response.send(Object.keys(links).join("\n"));
        } else if (match) {
            response.send(match);
        } else {
            response.send(random());
        }
    });
};
