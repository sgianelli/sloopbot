module.exports = function (robot) {
    var Links = {
        "all i am": "http://i.imgur.com/SpIy8VY.gifv",
        "cavity search": "http://i.imgur.com/9WHKphD.gifv",
        "comic sans": "http://i.imgur.com/oL9vjID.gifv",
        "let my guard down": "http://i.imgur.com/7p8Jtls.gifv",
        "closing doors": "http://i.imgur.com/KQDQ4tv.gifv",
        "focus": "http://i.imgur.com/aYlk8Hq.gifv",
        "celebration": "http://i.imgur.com/Olhs2Ns.gifv",
        "business factory": "http://i.imgur.com/CLl92RA.gifv",
        "vincent": "http://i.imgur.com/X9e0kfC.gifv",
        "hooray": "http://i.imgur.com/d1EN5XB.gifv",
        "hooray2": "http://i.imgur.com/kwxVMW3.gifv",
        "bad news": "http://i.imgur.com/GMlCdCo.gifv",
        "nothing": "http://i.imgur.com/a3WOSg2.gifv",
        "bowl of bourbon": "http://i.imgur.com/Vi92YLs.gifv",
        "mailmen": "http://i.imgur.com/hz2Nl3C.gifv",
        "absinthe": "http://i.imgur.com/AOnpk3W.gifv",
        "lighter": "http://i.imgur.com/8DlXJSi.gifv",
        "smart": "http://i.imgur.com/RsffiXS.gifv",
        "reindeer": "http://i.imgur.com/LqNB1qz.gifv",
        "vajelly": "http://i.imgur.com/Jb5RjSN.gifv",
        "pancakes": "http://i.imgur.com/l6usFqz.gifv",
        "911": "http://i.imgur.com/MaUdf1W.gifv",
        "happiness": "http://i.imgur.com/IwEFZQX.gifv",
        "shapes": "http://i.imgur.com/cU8CcJx.gifv",
        "shapes2": "http://i.imgur.com/zFHDUGj.gifv",
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

    var Categories = {
        "bojack": [
            "all i am",
            "cavity search",
            "comic sans",
            "closing doors",
            "focus",
            "celebration",
            "nothing",
            "bowl of bourbon",
            "absinthe",
            "lighter",
            "reindeer",
            "911",
            "happiness",
            "shapes",
            "shapes2",
            "naked",
            "drunk",
            "muffins",
            "real me",
            "stamos",
            "stamos2",
            "show",
            "when"
        ],
        "mr. peanutbutter": [
            "mailmen",
            "smart",
            "void"
        ],
        "sarah lynn": [
            "vajelly",
            "dumbshit"
        ],
        "todd": [
            "let my guard down",
            "hooray",
            "hooray2",
            "bad news",
            "shut up",
            "angry nap"
        ],
        "vincent": [
            "a business",
            "vincent"
        ],
        "princess carolyn": [
            "sloth"
        ]
    };

    function random() {
        var list = Object.keys(Links).map(function (key) { return Links[key] });
        var imageUrl = list[Math.floor(Math.random() * list.length)];

        return imageUrl;
    }

    robot.hear(/^bojack me( (.*))?$/i, function (response) {
        var word = response.match[2].toLowerCase();
        var match = Links[word];
        var cMatch = Categories[word];

        if (word == "help") {
            var text = "bojackbot -- `bojack me [phrase]`\n\n`phrase` can be either a keyword or category\n\nKeywords:\n\n" + Object.keys(Links).sort().join("\n") + "\n\nCategories:\n\n" + Object.keys(Categories).sort().join("\n");

            response.send(text);
        } else if (cMatch) {
            var word = cMatch[Math.floor(Math.random() * cMatch.length)];

            response.send(Links[word]);
        } else if (match) {
            response.send(match);
        } else {
            response.send(random());
        }
    });
};
