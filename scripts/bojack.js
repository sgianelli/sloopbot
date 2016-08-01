module.exports = function (robot) {
    var links = [
        "http://i.imgur.com/SpIy8VY.gifv",
        "http://i.imgur.com/9WHKphD.gifv",
        "http://i.imgur.com/oL9vjID.gifv",
        "http://i.imgur.com/7p8Jtls.gifv",
        "http://i.imgur.com/KQDQ4tv.gifv",
        "http://i.imgur.com/aYlk8Hq.gifv",
        "http://i.imgur.com/X9e0kfC.gifv",
        "http://i.imgur.com/Olhs2Ns.gifv",
        "http://i.imgur.com/CLl92RA.gifv",
        "http://i.imgur.com/d1EN5XB.gifv",
        "http://i.imgur.com/GMlCdCo.gifv",
        "http://i.imgur.com/a3WOSg2.gifv",
        "http://i.imgur.com/Vi92YLs.gifv",
        "http://i.imgur.com/hz2Nl3C.gifv",
        "http://i.imgur.com/kwxVMW3.gifv",
        "http://i.imgur.com/AOnpk3W.gifv",
        "http://i.imgur.com/8DlXJSi.gifv",
        "http://i.imgur.com/RsffiXS.gifv",
        "http://i.imgur.com/LqNB1qz.gifv",
        "http://i.imgur.com/Jb5RjSN.gifv",
        "http://i.imgur.com/l6usFqz.gifv",
        "http://i.imgur.com/MaUdf1W.gifv",
        "http://i.imgur.com/IwEFZQX.gifv",
        "http://i.imgur.com/cU8CcJx.gifv",
        "http://i.imgur.com/nT3UlCd.gifv",
        "http://i.imgur.com/gftkHoS.gifv",
        "http://i.imgur.com/vR83AFj.gifv",
        "http://i.imgur.com/TcjKeOf.gifv",
        "http://i.imgur.com/QKcKpFb.gifv",
        "http://i.imgur.com/uOqUXr3.gifv",
        "http://i.imgur.com/oXD41ZC.gifv",
        "http://i.imgur.com/n2yBzrq.gifv",
        "http://i.imgur.com/REcxwgG.gifv",
        "http://i.imgur.com/Mj4NCrx.gifv",
        "http://i.imgur.com/2eB3AiC.gifv",
        "http://i.imgur.com/CoVwuQZ.gifv",
        "http://i.imgur.com/IlzJJdm.gifv",
        "http://i.imgur.com/zFHDUGj.gifv",
        "http://i.imgur.com/F4f7qfr.gifv",
        "http://i.imgur.com/0vK32U4.gifv",
        "http://i.imgur.com/GtUZmVS.gifv",
        "http://i.imgur.com/SvDWpey.gifv",
        "http://i.imgur.com/VA0vgoQ.gifv",
        "http://i.imgur.com/pyYXhXq.gifv",
        "http://i.imgur.com/DKg8qvj.gifv",
        "http://i.imgur.com/nepJAQS.gifv",
        "http://i.imgur.com/lOhJfNL.gifv",
        "http://i.imgur.com/G80glPZ.gifv"
    ];

    robot.hear(/bojack me/i, function (response) {
        var imageUrl = links[Math.floor(Math.random() * links.length)];
        console.log("Image url: " + imageUrl);
        console.log("links: " + links);
        response.send(imageUrl);
    });
};
