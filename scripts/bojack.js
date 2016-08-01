module.exports = function (robot) {
    var links = [
        "http://i.imgur.com/SpIy8VY.gif",
        "http://i.imgur.com/9WHKphD.gif",
        "http://i.imgur.com/oL9vjID.gif",
        "http://i.imgur.com/7p8Jtls.gif",
        "http://i.imgur.com/KQDQ4tv.gif",
        "http://i.imgur.com/aYlk8Hq.gif",
        "http://i.imgur.com/X9e0kfC.gif",
        "http://i.imgur.com/Olhs2Ns.gif",
        "http://i.imgur.com/CLl92RA.gif",
        "http://i.imgur.com/d1EN5XB.gif",
        "http://i.imgur.com/GMlCdCo.gif",
        "http://i.imgur.com/a3WOSg2.gif",
        "http://i.imgur.com/Vi92YLs.gif",
        "http://i.imgur.com/hz2Nl3C.gif",
        "http://i.imgur.com/kwxVMW3.gif",
        "http://i.imgur.com/AOnpk3W.gif",
        "http://i.imgur.com/8DlXJSi.gif",
        "http://i.imgur.com/RsffiXS.gif",
        "http://i.imgur.com/LqNB1qz.gif",
        "http://i.imgur.com/Jb5RjSN.gif",
        "http://i.imgur.com/l6usFqz.gif",
        "http://i.imgur.com/MaUdf1W.gif",
        "http://i.imgur.com/IwEFZQX.gif",
        "http://i.imgur.com/cU8CcJx.gif",
        "http://i.imgur.com/nT3UlCd.gif",
        "http://i.imgur.com/gftkHoS.gif",
        "http://i.imgur.com/vR83AFj.gif",
        "http://i.imgur.com/TcjKeOf.gif",
        "http://i.imgur.com/QKcKpFb.gif",
        "http://i.imgur.com/uOqUXr3.gif",
        "http://i.imgur.com/oXD41ZC.gif",
        "http://i.imgur.com/n2yBzrq.gif",
        "http://i.imgur.com/REcxwgG.gif",
        "http://i.imgur.com/Mj4NCrx.gif",
        "http://i.imgur.com/2eB3AiC.gif",
        "http://i.imgur.com/CoVwuQZ.gif",
        "http://i.imgur.com/IlzJJdm.gif",
        "http://i.imgur.com/zFHDUGj.gif",
        "http://i.imgur.com/F4f7qfr.gif",
        "http://i.imgur.com/0vK32U4.gif",
        "http://i.imgur.com/GtUZmVS.gif",
        "http://i.imgur.com/SvDWpey.gif",
        "http://i.imgur.com/VA0vgoQ.gif",
        "http://i.imgur.com/pyYXhXq.gif",
        "http://i.imgur.com/DKg8qvj.gif",
        "http://i.imgur.com/nepJAQS.gif",
        "http://i.imgur.com/lOhJfNL.gif",
        "http://i.imgur.com/G80glPZ.gif"
    ];

    robot.hear(/bojack me/i, function (response) {
        var imageUrl = links[Math.floor(Math.random() * links.length)];
        console.log("Image url: " + imageUrl);
        console.log("links: " + links);
        response.send(imageUrl);
    });
};
