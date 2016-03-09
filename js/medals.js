var medalNum = 0;
var fadeTime = 300;
var removeTime = 3000;

function showMedal(gameEvent){
	var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', 'mods/medals/halo3/audio/' + gameEvent + '.mp3');
	audioElement.setAttribute('autoplay', 'autoplay');	
	$('#medalBox').append('<img id="'+ medalNum + '" src="mods/medals/halo3/images/' + gameEvent + '.png">')
	$("#"+currentMedalNum).hide().fadeIn(fadeTime);
	var currentMedalNum = medalNum;
	setTimeout(function(){
		$("#"+currentMedalNum).fadeOut(fadeTime, function() { $("#"+currentMedalNum).remove(); });
	}, removeTime);
	medalNum++;
}