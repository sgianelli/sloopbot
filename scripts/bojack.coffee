module.exports = (robot) ->

  robot.hear /bojack me random/i, (res) ->
    res.send "Random!"

