
// Works

//auto fill in my name
$("document").ready(function() {
    $("input[type = 'text']#sName").val("GooocheyMang");

    //when submit button is pushed, get the summonerID
    $('#submitbutton').click(function(){
        $('#stats').empty();
        var name = $('#sName').val();
        var $statList = $('#stats');
         $.ajax({
                type: 'GET',
                url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/'+name+'?api_key=03c8f9d3-d619-4593-ad25-6bdfe94517c1',
                success: function(data){
                    console.log(data);
                    $.each(data, function(i, item){
                        $statList.append('<li>ID: '+item.id+'</li>');
                        $statList.append('<li>Name: '+item.name+'</li>');
                        $statList.append('<li>Level: '+item.summonerLevel+'</li>');
                    });
                },
                error: function(){
                    $statList.append('<li>Please enter a summoner name</li>');
                }
        });
    });

    //make the list of stats look nice
    $("#stats").menu({
        position: {
            my: "center top",
            at:"center bottom"
        }
    });

});





