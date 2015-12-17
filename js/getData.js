
// Works

//auto fill in my name
$("document").ready(function() {
    $("input[type = 'text']#sName").val("GooocheyMang");

    //when submit button is pushed, get summoner data.
    $('#submitbutton').on("click", getSummonerInfo);

    //make the list of stats look nice
    $("#summonerInfo").menu({
        position: {
            my: "center top",
            at:"center bottom"
        }
    });

    //keep table hidden until submit is pressed
    $('.mostPlayed th').hide();

        
});
        



function getSummonerInfo(){
        //get basic summonerInfo    ID and Level
        var sID;
        $('#summonerInfo').empty();
        var name = $('#sName').val();
        var summonerInfo = $('#summonerInfo');
         $.ajax({
                async: false,
                type: 'GET',
                url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/'+name+'?api_key=03c8f9d3-d619-4593-ad25-6bdfe94517c1',
                success: function(data){
                    console.log(data);
                    $.each(data, function(i, item){
                        summonerInfo.append('<li>ID: '+item.id+'</li>');
                        summonerInfo.append('<li>Name: '+item.name+'</li>');
                        summonerInfo.append('<li>Level: '+item.summonerLevel+'</li>');
                        sID = item.id;
                    });
                    
                },
                error: function(){
                    $summonerInfo.append('<li>Please enter a summoner name</li>');
                }
                
        });
         
         getMostPlayed(sID);
}


function getMostPlayed(ID){
    //show the table now
     $('.mostPlayed th').show();


    //this isnt working how I want it to.
    //Forgot what you had here
    console.log(ID);
    alert(ID);

    /*
     $.ajax({
        url:'https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/'+ sID + '/ranked?season=SEASON2015&api_key=03c8f9d3-d619-4593-ad25-6bdfe94517c1',
        type:'GET',
        dataType:'json',
        data:{},
        success:function(json){
            console.log("CALLED");
        }
    });
*/
}

    







