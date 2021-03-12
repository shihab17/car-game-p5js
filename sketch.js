let car;
let obs = [];
function setup(){
    createCanvas(windowWidth, windowHeight - 100);
    car = new Car();
    obs.push(new Obstacle());
}
function draw(){
    background(65, 105, 225);
    
    car.update();
    for (let i = 0; i < obs.length; i++) {
        // const element = obs[i];
        if(obs[i].collides(car)){
            noLoop();
        }
        obs[i].update();
        obs[i].show();
        
    }
    if (frameCount % 70 == 0) {

        // document.getElementById("point").innerText = frameCount;
        obs.push(new Obstacle());
    }
    car.show();
}
function keyPressed(){
    if (key == '.') {
        car.cright();
    }
    if (key == ',') {
        car.cleft();
    }
}