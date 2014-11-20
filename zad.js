function vector(x, y) {
    //konstruuje wektor
    this.x = x;
    this.y = y;
    this.add = function(v){
        return new vector(this.x+v.x, this.y+v.y);
    }
    this.dist = function(v){
        dx = this.x - v.x;
        dy = this.y - v.y;

        return Math.sqrt(dx*dx+dy*dy);
    }
}


function planet(place, size){
    //konstruuje planetę
    this.place = place;
    this.size = size;

    this.dist = function(v){
        return this.place.dist(v);
    }
}

var planets = [];
var canvas;
var ctx;

function tick(){
//wykonuje sie co klatkę
}

function draw(){
//zaktualizuj canvas
for (var i = planets.length - 1; i >= 0; i--) {
    planets[i]
    centerX = planets[i].place.y;
    centerY = planets[i].place.x;
    radius = planets[i].size;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
};
}

$(function() {
//po załadowaniu
canvas = document.getElementById("board");
ctx = canvas.getContext("2d");

planets.push(new planet(new vector(5, 5), 10));
planets.push(new planet(new vector(50, 500), 20));
planets.push(new planet(new vector(300, 5), 10));
planets.push(new planet(new vector(5, 455), 10));
planets.push(new planet(new vector(70, 70), 10));


draw();
});