var medalNum = 0;
var fadeTime = 300;
var removeTime = 3000;
var medalsPath = 'mods/medals/halo3/';
var playQueue = [];

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

function display_medal(medal){
	$('#medalBox').append('<img id="'+ medalNum + '" src="' + medalsPath + medal +	'">')
	$("#"+currentMedalNum).hide().fadeIn(fadeTime);
	var currentMedalNum = medalNum;
	setTimeout(function(){
		$("#"+currentMedalNum).fadeOut(fadeTime, function() { $("#"+currentMedalNum).remove(); });
	}, removeTime);
	medalNum++;
}

function game_event(eventID){
	if (eventID == 14112 ){
		queue_audio("audio/suicide.mp3", false)
	} else if (eventID == 14114 ){
		queue_audio("audio/betrayed.mp3", false)
	} else if (eventID == 14115 ){
		queue_audio("audio/betrayal.mp3", false)
	} else if (eventID == 14350 ){
		queue_audio("audio/bomb_dropped.mp3", false)
	} else if (eventID == 14355 || eventID == 14366 || eventID == 14356 ){
		queue_audio("audio/bomb_reset.mp3", false)
	} else if (eventID == 14349 || eventID == 18106 ){
		queue_audio("audio/bomb_taken.mp3", false)
	} else if (eventID == 14351 || eventID == 14354 || eventID == 14352 ){
		queue_audio("audio/bomb_returned.mp3", false)
	} else if (eventID == 14361 || eventID == 14362 ){
		queue_audio("audio/bomb_detonated.mp3", false)
	} else if (eventID == 14357 || eventID == 14358 || eventID == 14359 ){
		queue_audio("audio/bomb_armed.mp3", false)
	} else if (eventID == 14363 || eventID == 14364 || eventID == 14365 ){
		queue_audio("audio/bomb_disarmed.mp3", false)
	} else if (eventID == 14335 ){
		queue_audio("audio/destination_moved.mp3", false)
	} else if (eventID == 393408 ){
		queue_audio("audio/hill_moved.mp3", false)
	} else if (eventID == 16048 ){
		queue_audio("audio/hill_moved.mp3", false)
	} else if (eventID == 14318 ){
		queue_audio("audio/hill_controlled.mp3", false)
	} else if (eventID == 14321 ){
		queue_audio("audio/hill_contested.mp3", false)
	} else if (eventID == 14320 ){
		queue_audio("audio/hill_controlled.mp3", false)
	} else if (eventID == 14322 ){
		queue_audio("audio/hill_contested.mp3", false)
	} else if (eventID == 14300 ){
		queue_audio("audio/flag_reset.mp3", false)
	} else if (eventID == 14302 ){
		queue_audio("audio/flag_recovered.mp3", false)
	} else if (eventID == 14304 ){
		queue_audio("audio/flag_taken.mp3", false)
	} else if (eventID == 14305 ){
		queue_audio("audio/flag_stolen.mp3", true)
	} else if (eventID == 14307 ){
		queue_audio("audio/flag_dropped.mp3", true)
	} else if (eventID == 14312 ){
		queue_audio("audio/ball_taken.mp3", false)
	} else if (eventID == 14313 ){
		queue_audio("audio/ball_dropped.mp3", false)
	} else if (eventID == 14314 ){
		queue_audio("audio/play_ball.mp3", false)
	} else if (eventID == 14315 ){
		queue_audio("audio/ball_reset.mp3", false)
	} else if (eventID == 14178 ){
		display_medal("images/laser_kill.png")
	} else if (eventID == 14147 ){
		display_medal("images/grenade_stick.png")
	} else if (eventID == 14180 ){
		display_medal("images/incineration.png")
	} else if (eventID == 14268 ){
		display("images/killjoy.png", "audio/killjoy.mp3")
	} else if (eventID == 14172 ){
		display_medal("images/from_the_grave.png")
	} else if (eventID == 14155 ){
		display_medal("images/assassin.png")
	} else if (eventID == 14141 ){
		display_medal("images/beat_down.png")
	} else if (eventID == 14199 ){
		display("images/extermination.png", "audio/extermination.mp3")
	} else if (eventID == 14171 ){
		display_medal("images/bulltrue.png")
	} else if (eventID == 14221 ){
		display("images/killing_spree.png", "audio/killing_spree.mp3")
	} else if (eventID == 14223 ){
		display("images/killing_frenzy.png", "audio/killing_frenzy.mp3")
	} else if (eventID == 14225 ){
		display("images/running_riot.png", "audio/running_riot.mp3")
	} else if (eventID == 14227 ){
		display("images/rampage.png", "audio/rampage.mp3")
	} else if (eventID == 14229 ){
		display("images/untouchable.png", "audio/untouchable.mp3")
	} else if (eventID == 14231 ){
		display("images/invincible.png", "audio/invincible.mp3")
	} else if (eventID == 14203 ){
		display("images/double_kill.png", "audio/double_kill.mp3")
	} else if (eventID == 14205 ){
		display("images/triple_kill.png", "audio/triple_kill.mp3")
	} else if (eventID == 14207 ){
		display("images/overkill.png", "audio/overkill.mp3")
	} else if (eventID == 14209 ){
		display("images/killtacular.png", "audio/killtacular.mp3")
	} else if (eventID == 14211 ){
		display("images/killtrocity.png", "audio/killtrocity.mp3")
	} else if (eventID == 14213 ){
		display("images/killimanjaro.png", "audio/killimanjaro.mp3")
	} else if (eventID == 14215 ){
		display("images/killtastrophe.png", "audio/killtastrophe.mp3")
	} else if (eventID == 14217 ){
		display("images/killpocalypse.png", "audio/killpocalypse.mp3")
	} else if (eventID == 14219 ){
		display("images/killionaire.png", "audio/killionaire.mp3")
	} else if (eventID == 14151 ){
		display_medal("images/sniper_kill.png")
	} else if (eventID == 14233 ){
		display("images/sniper_spree.png", "audio/sniper_spree.mp3")
	} else if (eventID == 14235 ){
		display("images/sharpshooter.png", "audio/sharpshooter.mp3")
	} else if (eventID == 14237 ){
		display("images/shotgun_spree.png", "audio/shotgun_spree.mp3")
	} else if (eventID == 14239 ){
		display("images/open_season.png", "audio/open_season.mp3")
	} else if (eventID == 14245 ){
		display("images/sword_spree.png", "audio/sword_spree.mp3")
	} else if (eventID == 14247 ){
		display("images/slice_n_dice.png", "audio/slice_n_dice.mp3")
	} else if (eventID == 14137 ){
		display_medal("images/splatter.png")
	} else if (eventID == 14241 ){
		display("images/splatter_spree.png", "audio/splatter_spree.mp3")
	} else if (eventID == 14243 ){
		display("images/vehicular_manslaughter.png", "audio/vehicular_manslaughter.mp3")
	} else if (eventID == 14183 ){
		display_medal("images/wheelman.png")
	} else if (eventID == 14174 ){
		display_medal("images/hijacker.png")
	} else if (eventID == 14176 ){
		display_medal("images/skyjacker.png")
	} else if (eventID == 14182 ){
		display_medal("images/vehicle_kill.png")
	} else if (eventID == 14328 ){
		display_medal("images/vip_kill.png")
	} else if (eventID == 14361 ){
		display("images/bomb_planted.png")
	} else if (eventID == 22083 ){
		display_medal("images/bomb_carrier_kill.png")
	} else if (eventID == 14299 ){
		display("images/flag_captured.png", "audio/flag_captured.mp3")
	} else if (eventID == 22082 ){
		display_medal("images/flag_carrier_kill.png")
	} else if (eventID == 24984 ){
		display_medal("images/flag_kill.png")
	} else if (eventID == 14261 ){
		display("images/hail_to_the_king.png", "audio/hail_to_the_king.mp3")
	} else if (eventID == 24991 ){
		display_medal("images/oddball_kill.png")
	} else if (eventID == 14201 ){
		display("images/perfection.png", "audio/perfection.mp3")
	} else if (eventID == 14339 ){
		display_medal("images/juggernaut_kill.png")
	} else if (eventID == 14249 ){
		display("images/juggernaut_spree.png", "audio/juggernaut_spree.mp3")
	} else if (eventID == 14251 ){
		display("images/unstoppable.png", "audio/unstoppable.mp3")
	} else if (eventID == 14367 ){
		display("images/last_man_standing.png", "audio/last_man_standing.mp3")
	} else if (eventID == 14253 ){
		display("images/infection_spree.png", "audio/infection_spree.mp3")
	} else if (eventID == 14255 ){
		display("images/mmm_brains.png", "audio/mmm_brains.mp3")
	} else if (eventID == 14257 ){
		display("images/zombie_killing_spree.png", "audio/zombie_killing_spree.mp3")
	} else if (eventID == 14259 ){
		display("images/hells_janitor.png", "audio/hells_janitor.mp3")
	} else if (eventID == 14316 ){
		queue_audio("audio/king_of_the_hill.mp3", false)
	} else if (eventID == 14296 ){
		queue_audio("audio/capture_the_flag.mp3", false)
	} else if (eventID == 14311 ){
		queue_audio("audio/oddball.mp3", false)
	} else if (eventID == 14368 ){
		queue_audio("audio/infection.mp3", false)
	} else if (eventID == 14341 ){
		queue_audio("audio/territories.mp3", false)
	} else if (eventID == 14348 ){
		queue_audio("audio/assault.mp3", false)
	} else if (eventID == 14294 ){
		queue_audio("audio/slayer.mp3", false)
	} else if (eventID == 14297 ){
		queue_audio("audio/defense.mp3", false)
	} else if (eventID == 14123 ){
		queue_audio("audio/thirty_mins_remaining.mp3", false)
	} else if (eventID == 14124 ){
		queue_audio("audio/fifteen_mins_remaining.mp3", false)
	} else if (eventID == 14125 ){
		queue_audio("audio/five_mins_remaining.mp3", false)
	} else if (eventID == 14126 ){
		queue_audio("audio/one_min_remaining.mp3", false)
	} else if (eventID == 14134 ){
		queue_audio("audio/thirty_secs_remaining.mp3", false)
	} else if (eventID == 14135 ){
		queue_audio("audio/ten_secs_remaining.mp3", false)
	} else if (eventID == 14344 ){
		queue_audio("audio/territory_captured.mp3", false)
	} else if (eventID == 14347 || eventID == 14346 || eventID == 14345 ){
		queue_audio("audio/territory_lost.mp3", false)
	} else if (eventID == 24959 ){
		queue_audio("audio/target_changed.mp3", false)
	} else if (eventID == 14337 || eventID == 14338 ){
		queue_audio("audio/new_juggernaut.mp3", false)
	} else if (eventID == 14373 || eventID == 14374 ){
		queue_audio("audio/new_zombie.mp3", false)
	} else if (eventID == 14326 || eventID == 14327 ){
		queue_audio("audio/new_vip.mp3", false)
	} else if (eventID == 14328 || eventID == 14329 || eventID == 14330 ){
		queue_audio("audio/vip_killed.mp3", false)
	} else if (eventID == 14119 || eventID == 14121 ){
		queue_audio("audio/lost_the_lead.mp3", false)
	} else if (eventID == 22088 || eventID == 22089 || eventID == 22090 || eventID == 22091 ){
		queue_audio("audio/invincible.mp3", false)
	} else if (eventID == 14120 || eventID == 14122 ){
		queue_audio("audio/gained_the_lead.mp3", false)
	} else if (eventID == 14127 ){
		queue_audio("audio/game_over.mp3", false)
	} else if (eventID == 14108 ){
		queue_audio("audio/round_over.mp3", false)
	} else if (eventID == 14145 ){
		queue_audio("audio/sudden_death.mp3", false)
	}
}