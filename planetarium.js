var FACE_DIR = {
	LEFT:0,
	RIGHT:1
}

function Position(_x,_y){
	this.x = _x;
	this.y =_y;
}


function rocket(){
	this.position = new Position(0,0);
	this.imageLink = "images/spaceship.png,images/spaceship2.png";
	this.facing = FACE_DIR.LEFT;
	this.setPosition = function(_x,_y){
		this.position.x = _x;
		this.position.y = _y;
	}
}
spaceship = new rocket();

 function spaceHover(){
      var music = new Audio("spaceHover.mp3");
	music.play();

    }
	
	function bgMusic(){
	var music = new Audio("bgmusic.mp3")
	music.play()
}
	
