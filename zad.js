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



function tick(){
//wykonuje sie co klatkę
}

function draw(){
//zaktualizuj canvas
}

$(function() {
//po załadowaniu

v = new vector(5, 10);
vv = new vector(12,13);
console.log(v.dist(vv));


});