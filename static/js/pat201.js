
var playTime = 20;
var numSongs = 15;
var songElement = document.getElementById("song");

//updated for each new song
var songLength = 300;
var startTime = 0;
var songTitle;
var songArtist;

//song removed once chosen
var songData = new Array();
	var song = {title:"Kids", duration:302, artist:"MGMT", path:"Kids.m4a"};
	songData.push(song);
	var song1 = {title:"Idioteque", duration:309, artist:"Radiohead", path:"Idioteque.m4a"};
	songData.push(song1);
	var song2 = {title:"Surge", duration:125, artist:"Amon Tobin", path:"Surge.mp3"};
	songData.push(song2);
	var song3 = {title:"Cindy Electronium", duration:117, artist:"Raymond Scott", path:"Cindy Electronium.m4a"};
	songData.push(song3);
	var song4 = {title:"In the Flowers", duration:322, artist:"Animal Collective", path:"In the Flowers.m4a"};
	songData.push(song4);
	var song5 = {title:"Kontakte (Beginning)", duration:141, artist:"Karlheinz Stockhausen", path:"Kontakte (Beginning).mp3"};
	songData.push(song5);
	var song6 = {title:"Like Spinning Plates", duration:237, artist:"Radiohead", path:"Like Spinning Plates.mp3"};
	songData.push(song6);
	var song7 = {title:"Little Secrets", duration:239, artist:"Passion Pit", path:"Little Secrets.m4a"};
	songData.push(song7);
	var song8 = {title:"Mild und Leise", duration:1099, artist:"Paul Lansky", path:"Mild und Leise.m4a"};
	songData.push(song8);
	var song9 = {title:"No Dice", duration:324, artist:"Beirut", path:"No Dice.m4a"};
	songData.push(song9);
	var song10 = {title:"Pocket Calculator", duration:297, artist:"Kraftwerk", path:"Pocket Calculator.mp3"};
	songData.push(song10);
	var song11 = {title:"Silver Apples Of The Moon Part 1", duration:262, artist:"Morton Subotnick", path:"Silver Apples Of The Moon Pt.1.m4a"};
	songData.push(song11);
	var song12 = {title:"Yoshimi Battles the Pink Robots Part 1", duration:177, artist:"The Flaming Lips", path:"Yoshimi Battle the Pink Robots, Pt. 1.mp3"};
	songData.push(song12);
	var song13 = {title:"Windowlicker", duration:367, artist:"Aphex Twin", path:"Windowlicker.m4a"};
	songData.push(song13);
	var song14 = {title:"Yoshimi Battles the Pink Robots Part 2", duration:285, artist:"The Flaming Lips", path:"Yoshimi Battle the Pink Robots Pt. 2,.mp3"};
	songData.push(song14);

//titleArray and artistArray stay unchanged	
	var titleArray = new Array();
	var artistArray = new Array();
	for(i=0; i<songData.length; i++) {
		titleArray.push(songData[i].title);
		artistArray.push(songData[i].artist);
	}
	titleArray.sort();
	artistArray.sort();

//generate select dropdowns	
	var titleListElement = document.getElementById("titleList");
	for(i=0; i<titleArray.length; i++) {
		var option = document.createElement("option");
		option.value= titleArray[i];
		option.innerHTML = titleArray[i];
		titleListElement.appendChild(option);
	}
	var artistListElement = document.getElementById("artistList");
	for(i=0; i<artistArray.length; i++) {
		var option = document.createElement("option");
		option.value= artistArray[i];
		option.innerHTML = artistArray[i];
		artistListElement.appendChild(option);
	}
//stops infinite loading, apparently
document.close();	
	
newSong();

//Watch title input text for changes, green if matches
$(document).ready(function() {
  $("#titleInput").keyup(validateTitle);
});
function validateTitle() {
	var typedTitle = $("#titleInput").val();
 
    if(typedTitle.toLowerCase() == songTitle.toLowerCase()) {
       $("#titleDiv").addClass("has-success");  
	   $("#titleLabel").text("Title- Correct!");
    }
    else {
        $("#titleDiv").removeClass("has-success");
		$("#titleLabel").text("Title");
    }
}

//watch artist input text for changes, green if matches
$(document).ready(function() {
  $("#artistInput").keyup(validateArtist);
});
function validateArtist() {
	var typedArtist = $("#artistInput").val();
 
    if(typedArtist.toLowerCase() == songArtist.toLowerCase()) {
       $("#artistDiv").addClass("has-success");  
	   $("#artistLabel").text("Composer- Correct!");
    }

    else {
        $("#artistDiv").removeClass("has-success");
		$("#artistLabel").text("Composer");
    }
}

//shuffle array for random song order
function shuffle(o){ 
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

//"restart" button
function seekReset() {
	songElement.currentTime= startTime;
}

//runs on load and on every new song click
function newSong() {

	$("#titleDiv").removeClass("has-success");
	$("#titleLabel").text("Title");
	document.getElementById("titleInput").value = "";
	document.getElementById("titleList").selectedIndex = 0;
	
	$("#artistDiv").removeClass("has-success");
	$("#artistLabel").text("Composer");
	document.getElementById("artistInput").value = "";
	document.getElementById("artistList").selectedIndex = 0;

	if(songData.length > 0) {
		songData = shuffle(songData);
		var newSong = songData.pop();
		var path;
		
		if( $("input[type='radio'][name='playtype']:checked").val() === "random") {
			startTime = Math.floor( Math.random() * (newSong.duration- playTime) );
			path = "/static/media/" + newSong.path + "#t=" + startTime + "," + String(startTime + playTime);
		}
		else {
			startTime=0;
			path = "/static/media/" + newSong.path;
		}
		songElement.src=path;
		songTitle = newSong.title;
		songArtist = newSong.artist;
	}	
	else {
		//show refresh button
		document.getElementById("refreshButton").style.display="";
	}
	
	var percentDone = Math.ceil(((numSongs - songData.length)/ numSongs) * 100);
	document.getElementById("progressBar").style.width = (percentDone + "%");
}

//hide/show player
function toggleMedia() {
	var mediaDiv = document.getElementById('mediaDiv');
	if (mediaDiv.style.display === 'block' || mediaDiv.style.display === '') {
		mediaDiv.style.display = 'none';  
		}
	  else {
		mediaDiv.style.display = 'block';
		}
  }
  
//play/pause button onlick
function playPause() {
       var song = document.getElementById("song");
       var button = document.getElementById("playPause");
       if (song.paused) {
          song.play();
       } else {
          song.pause();
       }
}

//put title in title text box (on "give up" click)
function fillTitle() {
	var titleInput = document.getElementById('titleInput');
	titleInput.value = songTitle;
}

//put artist in artist text box (on "give up" click)
function fillArtist() {
	var artistInput = document.getElementById('artistInput');
	artistInput.value = songArtist;
}

//runs when cheat dropdown is changed. Makes green if correct
function onCheatTitleSelect() {
	var titleCheatElement = document.getElementById('titleList');
	var selectedIndex = titleCheatElement.selectedIndex;
	var selectedTitle = titleCheatElement.options[selectedIndex].value;
	
	if(songTitle === selectedTitle) {
		$("#titleDiv").addClass("has-success");  
		$("#titleLabel").text("Title- Correct!");
	}
	else {
		$("#titleDiv").removeClass("has-success");  
		$("#titleLabel").text("Title");
	}
}

//runs when cheat dropdown is changed. Makes green if correct
function onCheatArtistSelect() {
	var artistCheatElement = document.getElementById('artistList');
	var selectedIndex = artistCheatElement.selectedIndex;
	var selectedArtist = artistCheatElement.options[selectedIndex].value;
	
	if(songArtist === selectedArtist) {
		$("#artistDiv").addClass("has-success");  
		$("#artistLabel").text("Composer- Correct!");
	}
	else {
		$("#artistDiv").removeClass("has-success");  
		$("#artistLabel").text("Composer");
	}
}

