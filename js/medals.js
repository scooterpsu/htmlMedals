var fadeTime = 300;
var animTime = 18;
var removeTime = 3500;
var medalsPath = 'mods/medals/halo3/';
var playQueue = [];

$.fn.pulse = function() { 
	var i = 0.5, x = 0, medal = this.selector;
	function pulseLoop(medal) { 
		setTimeout(function () {  
			$(medal).css({'transform': 'scale('+ i +','+ i +')', 'opacity': x });
			i+=0.1, x+=0.4;
			if (i < 1.5) { 
				pulseLoop(medal);
			} else if (i = 1.5) {
				$(medal).css({'transform' : 'scale(1.2,1.2)'});   
				setTimeout(function () {  
					$(medal).css({'transform' : 'scale(1,1)'});             
				}, animTime)
			}  
		}, animTime)
	}
	pulseLoop(medal);
};

function display(medal, audio){
	queue_audio(audio);
	display_medal(medal);
}

function queue_audio(audio){
	playQueue.push(medalsPath + audio);
	if(!isPlaying){
		play(playQueue[0]);	
	}
}

var isPlaying = false;
function play(audio){
	isPlaying = true;
	var audioElement = new Audio(audio);
	audioElement.play();
	audioElement.onended = function(){
		isPlaying = false;
		playQueue.splice(0, 1);
		if(playQueue.length > 0){
			play(playQueue[0]);	
		}
	}
}

var medalNum = 0;
function display_medal(medal){
	var currentMedalNum = medalNum;
	$('#medalBox').prepend('<img id="'+ medalNum + '" src="' + medalsPath + medal + '">');
	$("#"+currentMedalNum).pulse();
	setTimeout(function(){
		$("#"+currentMedalNum).fadeOut(fadeTime, function() { $("#"+currentMedalNum).remove(); });
	}, removeTime);
	medalNum++;
}

function doMedal(eventString){
	if (eventString == "suicide"){
		queue_audio("audio/suicide.mp3")
	} else if (eventString == "betrayed"){
		queue_audio("audio/betrayed.mp3")
	} else if (eventString == "betrayal"){
		queue_audio("audio/betrayal.mp3")
	} else if (eventString == "bomb_dropped"){
		queue_audio("audio/bomb_dropped.mp3")
	} else if (eventString == "bomb_reset"){
		queue_audio("audio/bomb_reset.mp3")
	} else if (eventString == "bomb_taken"){
		queue_audio("audio/bomb_taken.mp3")
	} else if (eventString == "bomb_returned"){
		queue_audio("audio/bomb_returned.mp3")
	} else if (eventString == "bomb_detonated"){
		queue_audio("audio/bomb_detonated.mp3")
	} else if (eventString == "bomb_armed"){
		queue_audio("audio/bomb_armed.mp3")
	} else if (eventString == "bomb_disarmed"){
		queue_audio("audio/bomb_disarmed.mp3")
	} else if (eventString == "destination_moved"){
		queue_audio("audio/destination_moved.mp3")
	} else if (eventString == "hill_moved"){
		queue_audio("audio/hill_moved.mp3")
	} else if (eventString == "hill_controlled"){
		queue_audio("audio/hill_controlled.mp3")
	} else if (eventString == "hill_contested"){
		queue_audio("audio/hill_contested.mp3")
	} else if (eventString == "flag_reset"){
		queue_audio("audio/flag_reset.mp3")
	} else if (eventString == "flag_recovered"){
		queue_audio("audio/flag_recovered.mp3")
	} else if (eventString == "flag_taken"){
		queue_audio("audio/flag_taken.mp3")
	} else if (eventString == "flag_stolen"){
		queue_audio("audio/flag_stolen.mp3")
	} else if (eventString == "flag_dropped"){
		queue_audio("audio/flag_dropped.mp3")
	} else if (eventString == "ball_taken"){
		queue_audio("audio/ball_taken.mp3")
	} else if (eventString == "ball_dropped"){
		queue_audio("audio/ball_dropped.mp3")
	} else if (eventString == "play_ball"){
		queue_audio("audio/play_ball.mp3")
	} else if (eventString == "ball_reset"){
		queue_audio("audio/ball_reset.mp3")
	} else if (eventString == "laser_kill"){
		display_medal("images/laser_kill.png")
	} else if (eventString == "grenade_stick"){
		display_medal("images/grenade_stick.png")
	} else if (eventString == "incineration"){
		display_medal("images/incineration.png")
	} else if (eventString == "killjoy"){
		display("images/killjoy.png", "audio/killjoy.mp3")
	} else if (eventString == "from_the_grave"){
		display_medal("images/from_the_grave.png")
	} else if (eventString == "assassin"){
		display_medal("images/assassin.png")
	} else if (eventString == "beat_down"){
		display_medal("images/beat_down.png")
	} else if (eventString == "extermination"){
		display("images/extermination.png", "audio/extermination.mp3")
	} else if (eventString == "bulltrue"){
		display_medal("images/bulltrue.png")
	} else if (eventString == "killing_spree"){
		display("images/killing_spree.png", "audio/killing_spree.mp3")
	} else if (eventString == "killing_frenzy"){
		display("images/killing_frenzy.png", "audio/killing_frenzy.mp3")
	} else if (eventString == "running_riot"){
		display("images/running_riot.png", "audio/running_riot.mp3")
	} else if (eventString == "rampage"){
		display("images/rampage.png", "audio/rampage.mp3")
	} else if (eventString == "untouchable"){
		display("images/untouchable.png", "audio/untouchable.mp3")
	} else if (eventString == "invincible"){
		display("images/invincible.png", "audio/invincible.mp3")
	} else if (eventString == "double_kill"){
		display("images/double_kill.png", "audio/double_kill.mp3")
	} else if (eventString == "triple_kill"){
		display("images/triple_kill.png", "audio/triple_kill.mp3")
	} else if (eventString == "overkill"){
		display("images/overkill.png", "audio/overkill.mp3")
	} else if (eventString == "killtacular"){
		display("images/killtacular.png", "audio/killtacular.mp3")
	} else if (eventString == "killtrocity"){
		display("images/killtrocity.png", "audio/killtrocity.mp3")
	} else if (eventString == "killimanjaro"){
		display("images/killimanjaro.png", "audio/killimanjaro.mp3")
	} else if (eventString == "killtastrophe"){
		display("images/killtastrophe.png", "audio/killtastrophe.mp3")
	} else if (eventString == "killpocalypse"){
		display("images/killpocalypse.png", "audio/killpocalypse.mp3")
	} else if (eventString == "killionaire"){
		display("images/killionaire.png", "audio/killionaire.mp3")
	} else if (eventString == "sniper_kill"){
		display_medal("images/sniper_kill.png")
	} else if (eventString == "sniper_spree"){
		display("images/sniper_spree.png", "audio/sniper_spree.mp3")
	} else if (eventString == "sharpshooter"){
		display("images/sharpshooter.png", "audio/sharpshooter.mp3")
	} else if (eventString == "shotgun_spree"){
		display("images/shotgun_spree.png", "audio/shotgun_spree.mp3")
	} else if (eventString == "open_season"){
		display("images/open_season.png", "audio/open_season.mp3")
	} else if (eventString == "sword_spree"){
		display("images/sword_spree.png", "audio/sword_spree.mp3")
	} else if (eventString == "slice_n_dice"){
		display("images/slice_n_dice.png", "audio/slice_n_dice.mp3")
	} else if (eventString == "splatter"){
		display_medal("images/splatter.png")
	} else if (eventString == "splatter_spree"){
		display("images/splatter_spree.png", "audio/splatter_spree.mp3")
	} else if (eventString == "vehicular_manslaughter"){
		display("images/vehicular_manslaughter.png", "audio/vehicular_manslaughter.mp3")
	} else if (eventString == "wheelman"){
		display_medal("images/wheelman.png")
	} else if (eventString == "hijacker"){
		display_medal("images/hijacker.png")
	} else if (eventString == "skyjacker"){
		display_medal("images/skyjacker.png")
	} else if (eventString == "vehicle_kill"){
		display_medal("images/vehicle_kill.png")
	} else if (eventString == "vip_kill"){
		display_medal("images/vip_kill.png")
	} else if (eventString == "bomb_planted"){
		display("images/bomb_planted.png")
	} else if (eventString == "bomb_carrier_kill"){
		display_medal("images/bomb_carrier_kill.png")
	} else if (eventString == "flag_captured"){
		display("images/flag_captured.png", "audio/flag_captured.mp3")
	} else if (eventString == "flag_carrier_kill"){
		display_medal("images/flag_carrier_kill.png")
	} else if (eventString == "flag_kill"){
		display_medal("images/flag_kill.png")
	} else if (eventString == "hail_to_the_king"){
		display("images/hail_to_the_king.png", "audio/hail_to_the_king.mp3")
	} else if (eventString == "oddball_kill"){
		display_medal("images/oddball_kill.png")
	} else if (eventString == "perfection"){
		display("images/perfection.png", "audio/perfection.mp3")
	} else if (eventString == "juggernaut_kill"){
		display_medal("images/juggernaut_kill.png")
	} else if (eventString == "juggernaut_spree"){
		display("images/juggernaut_spree.png", "audio/juggernaut_spree.mp3")
	} else if (eventString == "unstoppable"){
		display("images/unstoppable.png", "audio/unstoppable.mp3")
	} else if (eventString == "last_man_standing"){
		display("images/last_man_standing.png", "audio/last_man_standing.mp3")
	} else if (eventString == "infection_spree"){
		display("images/infection_spree.png", "audio/infection_spree.mp3")
	} else if (eventString == "mmm_brains"){
		display("images/mmm_brains.png", "audio/mmm_brains.mp3")
	} else if (eventString == "zombie_killing_spree"){
		display("images/zombie_killing_spree.png", "audio/zombie_killing_spree.mp3")
	} else if (eventString == "hells_janitor"){
		display("images/hells_janitor.png", "audio/hells_janitor.mp3")
	} else if (eventString == "king_of_the_hill"){
		queue_audio("audio/king_of_the_hill.mp3")
	} else if (eventString == "capture_the_flag"){
		queue_audio("audio/capture_the_flag.mp3")
	} else if (eventString == "oddball"){
		queue_audio("audio/oddball.mp3")
	} else if (eventString == "territories"){
		queue_audio("audio/territories.mp3")
	} else if (eventString == "assault"){
		queue_audio("audio/assault.mp3")
	} else if (eventString == "slayer"){
		queue_audio("audio/slayer.mp3")
	} else if (eventString == "defense"){
		queue_audio("audio/defense.mp3")
	} else if (eventString == "thirty_mins_remaining"){
		queue_audio("audio/thirty_mins_remaining.mp3")
	} else if (eventString == "fifteen_mins_remaining"){
		queue_audio("audio/fifteen_mins_remaining.mp3")
	} else if (eventString == "five_mins_remaining"){
		queue_audio("audio/five_mins_remaining.mp3")
	} else if (eventString == "one_min_remaining"){
		queue_audio("audio/one_min_remaining.mp3")
	} else if (eventString == "thirty_secs_remaining"){
		queue_audio("audio/thirty_secs_remaining.mp3")
	} else if (eventString == "ten_secs_remaining"){
		queue_audio("audio/ten_secs_remaining.mp3")
	} else if (eventString == "territory_captured"){
		queue_audio("audio/territory_captured.mp3")
	} else if (eventString == "territory_lost"){
		queue_audio("audio/territory_lost.mp3")
	} else if (eventString == "target_changed"){
		queue_audio("audio/target_changed.mp3")
	} else if (eventString == "new_juggernaut"){
		queue_audio("audio/new_juggernaut.mp3")
	} else if (eventString == "new_zombie"){
		queue_audio("audio/new_zombie.mp3")
	} else if (eventString == "new_vip"){
		queue_audio("audio/new_vip.mp3")
	} else if (eventString == "vip_killed"){
		queue_audio("audio/vip_killed.mp3")
	} else if (eventString == "invincible"){
		queue_audio("audio/invincible.mp3")
	} else if (eventString == "gained_the_lead"){
		queue_audio("audio/gained_the_lead.mp3")
	} else if (eventString == "game_over"){
		queue_audio("audio/game_over.mp3")
	} else if (eventString == "round_over"){
		queue_audio("audio/round_over.mp3")
	} else if (eventString == "sudden_death"){
		queue_audio("audio/sudden_death.mp3")
	}
	//dew.show();
}