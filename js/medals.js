var loader = new ZipLoader('mods/medals/halo4.zip');

$(document).ready(function() {
	$("#temp").attr('src', loader.loadImage('files.zip://images/assassination.png'));
});