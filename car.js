class Car {
    constructor(){
        this.x = width / 2;
        this.y = height / 2;
        this.r = 50;
        this.gravity = 0.25;
        this.velocity = 0;
    }
    show() {
        fill(255, 255, 0);
        stroke(0)
        strokeWeight(4);
        // ellipse(this.x, this.y, this.r * 2);
        rect(this.x, this.y, this.r, 100);

    }
    update(){
        // this.velocity +=  this.gravity;
        // this.x = this.velocity;
        this.velocity += this.gravity; 
        this.x += this.velocity;
        // console.log(this.velocity)
        if(this.x > width - this.r ){
            this.x = width - this.r;
            this.velocity = 0;
        }
        if (this.x < this.r) {
            this.x = this.r;
            this.velocity = 0;
        }
    }
    up() {
        this.velocity -= 5;
    }
    cright(){
        this.velocity -= 10;
    }
    cright() {
        this.velocity += 10;
        
    }
}