var Ball = function(x, y, speed, z) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.z = z;

    this.show = function() {
        noStroke();
        fill(255, 51, 51, this.z);
        ellipse(this.x, this.y, 50, 50);
      };
    this.moveUp = function() {
        this.x = this.x + (speed);
        this.y = this.y - (speed);
      };
    this.moveDown = function() {
        this.x = this.x - (speed);
        this.y = this.y + (speed);
      };
    };