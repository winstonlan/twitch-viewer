var streamList = ["ESL_SC2", "EULCS_1", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","brunofin","comster404"];
var url = "https://api.twitch.tv/kraken/streams/";

streamList.forEach(function(streamName) {
    $.getJSON(url + streamName + "?callback=?", function(json) {
        var html = "";

        if (json.status == 422) {
            html += "<a href=\"https://www.twitch.tv/\"" + streamName + "\" class=\"list-group-item list-group-item-danger\">" + streamName + " <i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i></a>";
            $("#offline-streams").append(html);
        } else if (json.stream == null) {
            html += "<a href=\"https://www.twitch.tv/\"" + streamName + "\" class=\"list-group-item list-group-item-danger\">" + streamName + "</a>";
            $("#offline-streams").append(html);
        } else {
            html += "<a href=\"https://www.twitch.tv/" + streamName + "\" class=\"list-group-item list-group-item-success\">" + streamName + " - " + json.stream.channel.status + "</a>";
            $('#online-streams').append(html);
        }

    });
});
