function Drop() {
	this.x = random(width);
	this.y = random(-100, height);
	this.z = random(0, 20);
	this.length = map(this.z, 0, 20, 10, 40);
	this.yspeed = map(this.z, 0, 20, 3, 10);

	this.fall = function () {
		this.y += this.yspeed;
		var grav = map(this.z, 0, 20, 0.01, 0.2);
		this.yspeed += 0.05
		if (this.y > height) {
			this.x = random(width);
			this.y = random(-200, -100);
			this.yspeed = map(this.z, 0, 20, 4, 7);
		}
	}

	this.show = function () {
		var thick = map(this.z, 0, 20, 1, 3);
		strokeWeight(thick);
		stroke(138, 43, 226);
		line(this.x, this.y, this.x, this.y + this.length);
	}
}