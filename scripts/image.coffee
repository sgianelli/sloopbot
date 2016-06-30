module.exports = (robot) ->
    robot.respond /image me (.*)/i, (res) ->
        query = res.match[1]
        # need to add API Key to header Ocp-Apim-Subscription-Key
        # guide on the new Bing Image search api here: https://msdn.microsoft.com/en-us/library/dn760784.aspx
        robot.http("https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=#{query}&count=1")
            .header('Accept', 'application/json')
            .get() (err, res, body) ->
                # do something with the results
                # I'm using this robot.http thing blindly, so it's likely I'm not doing it right