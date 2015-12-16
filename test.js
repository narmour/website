//constructor
function Summoner(name){
	this.sName = name;

	this.getID = getID;
	this.getMostPlayed = getMostPlayed;
	
}
	

//html submit button calls this function to execute constructor.
function makeSummoner(){
	var input =$("#sName").val();

	var newSummoner = new Summoner(input);
	//window.alert(newSummoner.sName);
	newSummoner.getID();
	newSummoner.sID = $("#number").val();
	window.alert($("#number").val());
	//newSummoner.getMostPlayed();
}


//set Summoner.sID to its actual summoner ID.
function getID(){
	//window.alert(this.sName);
	var name = this.sName;
	$.ajax({
        url:'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/'+ this.sName+'?api_key=03c8f9d3-d619-4593-ad25-6bdfe94517c1',
        type:'GET',
        dataType:'json',
        data:{},
        success:function(json){
        	document.getElementById("number").innerHTML = json[name].id;

        }
    });
   
}



function getMostPlayed(){
	 $.ajax({
        url:'https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/'+ this.sID + '/ranked?season=SEASON2015&api_key=03c8f9d3-d619-4593-ad25-6bdfe94517c1',
        type:'GET',
        dataType:'json',
        data:{},
        success:function(json){
        	//get top 5 most played champs

        	//clone before sorting
        	var clone = json.champions.slice(0);

        	//sort in descending
        	clone.sort(
        		function(x,y){
        		if(x[totalSessionsPlayed] == y[totalSessionsPlayed]) return 0;
        		else if (parseInt(x[totalSessionsPlayed]) < parseInt(y[totalSessionsPlayed])) return 1;
        		else return -1;
        	});

        	clone.slice(0,4||1);
        	
        	}
		});
	}