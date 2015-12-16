function makeSummoner(){
    var newSummoner = new Summoner();
    getID(newSummoner);
}

function Summoner(){
    this.sName =$("#sName").val();
    document.getElementById("number").innerHTML = this.sName;
    this.sID = 0;

}


function getID (player){
    
    $.ajax({
        url:'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/'+ player.sName+'?api_key=03c8f9d3-d619-4593-ad25-6bdfe94517c1',
        type:'GET',
        dataType:'json',
        data:{},
        success:function(json){
             
             player.sID = json[player.sName].id; //ID does not exist
             //console.log(player.sID);
             document.getElementById("number").innerHTML = player.sID;
            
        }
    });
}

