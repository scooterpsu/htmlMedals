api_version = "1.0.0"

function register_callbacks()
	register_callback(cb['H3_GAME_EVENT'], "game_event")
end

function display(name, sound, low_priority)
	low_priority = low_priority or false 
	queue_audio(sound, low_priority)
	display_medal(name)
end

function game_event(id)
	if id == 14112 then
		queue_audio("audio/suicide.mp3", false)
	elseif id == 14114 then
		queue_audio("audio/betrayed.mp3", false)
	elseif id == 14115 then
		queue_audio("audio/betrayal.mp3", false)
	elseif id == 14350 then
		queue_audio("audio/bomb_dropped.mp3", false)
	elseif id == 14355 or id == 14366 or id == 14356 then
		queue_audio("audio/bomb_reset.mp3", false)
	elseif id == 14349 or id == 18106 then
		queue_audio("audio/bomb_taken.mp3", false)
	elseif id == 14351 or id == 14354 or id == 14352 then
		queue_audio("audio/bomb_returned.mp3", false)
	elseif id == 14361 or id == 14362 then
		queue_audio("audio/bomb_detonated.mp3", false)
	elseif id == 14357 or id == 14358 or id == 14359 then
		queue_audio("audio/bomb_armed.mp3", false)
	elseif id == 14363 or id == 14364 or id == 14365 then
		queue_audio("audio/bomb_disarmed.mp3", false)
	elseif id == 14335 then
		queue_audio("audio/destination_moved.mp3", false)
	elseif id == 393408 then
		queue_audio("audio/hill_moved.mp3", false)
	elseif id == 16048 then
		queue_audio("audio/hill_moved.mp3", false)
	elseif id == 14318 then
		queue_audio("audio/hill_controlled.mp3", false)
	elseif id == 14321 then
		queue_audio("audio/hill_contested.mp3", false)
	elseif id == 14320 then
		queue_audio("audio/hill_controlled.mp3", false)
	elseif id == 14322 then
		queue_audio("audio/hill_contested.mp3", false)
	elseif id == 14300 then
		queue_audio("audio/flag_reset.mp3", false)
	elseif id == 14302 then
		queue_audio("audio/flag_recovered.mp3", false)
	elseif id == 14304 then
		queue_audio("audio/flag_taken.mp3", false)
	elseif id == 14305 then
		queue_audio("audio/flag_stolen.mp3", true)
	elseif id == 14307 then
		queue_audio("audio/flag_dropped.mp3", true)
	elseif id == 14312 then
		queue_audio("audio/ball_taken.mp3", false)
	elseif id == 14313 then
		queue_audio("audio/ball_dropped.mp3", false)
	elseif id == 14314 then
		queue_audio("audio/play_ball.mp3", false)
	elseif id == 14315 then
		queue_audio("audio/ball_reset.mp3", false)
	elseif id == 14178 then
		display_medal("images/laser_kill.png")
	elseif id == 14147 then
		display_medal("images/grenade_stick.png")
	elseif id == 14180 then
		display_medal("images/incineration.png")
	elseif id == 14268 then
		display("images/killjoy.png", "audio/killjoy.mp3")
	elseif id == 14172 then
		display_medal("images/from_the_grave.png")
	elseif id == 14155 then
		display_medal("images/assassin.png")
	elseif id == 14141 then
		display_medal("images/beat_down.png")
	elseif id == 14199 then
		display("images/extermination.png", "audio/extermination.mp3")
	elseif id == 14171 then
		display_medal("images/bulltrue.png")
	elseif id == 14221 then
		display("images/killing_spree.png", "audio/killing_spree.mp3")
	elseif id == 14223 then
		display("images/killing_frenzy.png", "audio/killing_frenzy.mp3")
	elseif id == 14225 then
		display("images/running_riot.png", "audio/running_riot.mp3")
	elseif id == 14227 then
		display("images/rampage.png", "audio/rampage.mp3")
	elseif id == 14229 then
		display("images/untouchable.png", "audio/untouchable.mp3")
	elseif id == 14231 then
		display("images/invincible.png", "audio/invincible.mp3")
	elseif id == 14203 then
		display("images/double_kill.png", "audio/double_kill.mp3")
	elseif id == 14205 then
		display("images/triple_kill.png", "audio/triple_kill.mp3")
	elseif id == 14207 then
		display("images/overkill.png", "audio/overkill.mp3")
	elseif id == 14209 then
		display("images/killtacular.png", "audio/killtacular.mp3")
	elseif id == 14211 then
		display("images/killtrocity.png", "audio/killtrocity.mp3")
	elseif id == 14213 then
		display("images/killimanjaro.png", "audio/killimanjaro.mp3")
	elseif id == 14215 then
		display("images/killtastrophe.png", "audio/killtastrophe.mp3")
	elseif id == 14217 then
		display("images/killpocalypse.png", "audio/killpocalypse.mp3")
	elseif id == 14219 then
		display("images/killionaire.png", "audio/killionaire.mp3")
	elseif id == 14151 then
		display_medal("images/sniper_kill.png")
	elseif id == 14233 then
		display("images/sniper_spree.png", "audio/sniper_spree.mp3")
	elseif id == 14235 then
		display("images/sharpshooter.png", "audio/sharpshooter.mp3")
	elseif id == 14237 then
		display("images/shotgun_spree.png", "audio/shotgun_spree.mp3")
	elseif id == 14239 then
		display("images/open_season.png", "audio/open_season.mp3")
	elseif id == 14245 then
		display("images/sword_spree.png", "audio/sword_spree.mp3")
	elseif id == 14247 then
		display("images/slice_n_dice.png", "audio/slice_n_dice.mp3")
	elseif id == 14137 then
		display_medal("images/splatter.png")
	elseif id == 14241 then
		display("images/splatter_spree.png", "audio/splatter_spree.mp3")
	elseif id == 14243 then
		display("images/vehicular_manslaughter.png", "audio/vehicular_manslaughter.mp3")
	elseif id == 14183 then
		display_medal("images/wheelman.png")
	elseif id == 14174 then
		display_medal("images/hijacker.png")
	elseif id == 14176 then
		display_medal("images/skyjacker.png")
	elseif id == 14182 then
		display_medal("images/vehicle_kill.png")
	elseif id == 14328 then
		display_medal("images/vip_kill.png")
	elseif id == 14361 then
		display("images/bomb_planted.png")
	elseif id == 22083 then
		display_medal("images/bomb_carrier_kill.png")
	elseif id == 14299 then
		display("images/flag_captured.png", "audio/flag_captured.mp3")
	elseif id == 22082 then
		display_medal("images/flag_carrier_kill.png")
	elseif id == 24984 then
		display_medal("images/flag_kill.png")
	elseif id == 14261 then
		display("images/hail_to_the_king.png", "audio/hail_to_the_king.mp3")
	elseif id == 24991 then
		display_medal("images/oddball_kill.png")
	elseif id == 14201 then
		display("images/perfection.png", "audio/perfection.mp3")
	elseif id == 14339 then
		display_medal("images/killed_juggernaut.png")
	elseif id == 14249 then
		display("images/juggernaut_spree.png", "audio/juggernaut_spree.mp3")
	elseif id == 14251 then
		display("images/unstoppable.png", "audio/unstoppable.mp3")
	elseif id == 14367 then
		display("images/last_man_standing.png", "audio/last_man_standing.mp3")
	elseif id == 14253 then
		display("images/infection_spree.png", "audio/infection_spree.mp3")
	elseif id == 14255 then
		display("images/mmm_brains.png", "audio/mmm_brains.mp3")
	elseif id == 14257 then
		display("images/zombie_killing_spree.png", "audio/zombie_killing_spree.mp3")
	elseif id == 14259 then
		display("images/hells_janitor.png", "audio/hells_janitor.mp3")
	elseif id == 14316 then
		queue_audio("audio/king_of_the_hill.mp3", false)
	elseif id == 14296 then
		queue_audio("audio/capture_the_flag.mp3", false)
	elseif id == 14311 then
		queue_audio("audio/oddball.mp3", false)
	elseif id == 14368 then
		queue_audio("audio/infection.mp3", false)
	elseif id == 14341 then
		queue_audio("audio/territories.mp3", false)
	elseif id == 14348 then
		queue_audio("audio/assault.mp3", false)
	elseif id == 14294 then
		queue_audio("audio/slayer.mp3", false)
	elseif id == 14297 then
		queue_audio("audio/defense.mp3", false)
	elseif id == 14123 then
		queue_audio("audio/thirty_mins_remaining.mp3", false)
	elseif id == 14124 then
		queue_audio("audio/fifteen_mins_remaining.mp3", false)
	elseif id == 14125 then
		queue_audio("audio/five_mins_remaining.mp3", false)
	elseif id == 14126 then
		queue_audio("audio/one_min_remaining.mp3", false)
	elseif id == 14134 then
		queue_audio("audio/thirty_secs_remaining.mp3", false)
	elseif id == 14135 then
		queue_audio("audio/ten_secs_remaining.mp3", false)
	elseif id == 14344 then
		queue_audio("audio/territory_captured.mp3", false)
	elseif id == 14347 or id == 14346 or id == 14345 then
		queue_audio("audio/territory_lost.mp3", false)
	elseif id == 24959 then
		queue_audio("audio/target_changed.mp3", false)
	elseif id == 14337 or id == 14338 then
		queue_audio("audio/new_juggernaut.mp3", false)
	elseif id == 14373 or id == 14374 then
		queue_audio("audio/new_zombie.mp3", false)
	elseif id == 14326 or id == 14327 then
		queue_audio("audio/new_vip.mp3", false)
	elseif id == 14328 or id == 14329 or id == 14330 then
		queue_audio("audio/vip_killed.mp3", false)
	elseif id == 14119 or id == 14121 then
		queue_audio("audio/lost_the_lead.mp3", false)
	elseif id == 22088 or id == 22089 or id == 22090 or id == 22091 then
		queue_audio("audio/invincible.mp3", false)
	elseif id == 14120 or id == 14122 then
		queue_audio("audio/gained_the_lead.mp3", false)
	elseif id == 14127 then
		queue_audio("audio/game_over.mp3", false)
	elseif id == 14108 then
		queue_audio("audio/round_over.mp3", false)
	elseif id == 14145 then
		queue_audio("audio/sudden_death.mp3", false)
	end
end