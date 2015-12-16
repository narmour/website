function makeSummoner(){
    var newSummoner = new Summoner();
     getID(newSummoner);
}

function Summoner(){
    this.sName =$("#sName").val();
    this.sID = 0;


}


function getID (player){
    
    $.ajax({
        url:'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/'+ player.sName+'?api_key=03c8f9d3-d619-4593-ad25-6bdfe94517c1',
        type:'GET',
        dataType:'json',
        data:{},
        success:function(json){
             
             player.sID = json[player.sName].id;
             document.getElementById("number").innerHTML = player.sID;
            
        }
    });
}

function getMostPlayed(player){
    $.ajax({
        url:'https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/'+ sID + '/ranked?season=SEASON2015&api_key=03c8f9d3-d619-4593-ad25-6bdfe94517c1',
        type:'GET',
        dataType:'json',
        data:{},
        success:function(json){
            //loop through all possible champions
             for(var i=0;i<json.champions.length;i++){

             }

}
