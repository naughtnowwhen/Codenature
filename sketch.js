'use strict';

var EllipseMaker = function(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.make = function(){

    for(var i = 0; i < 100; i ++){
      ellipse(this.x,this.y,this.w,this.h);
      let randDirection = function(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      };

      let rand = randDirection(0,4);


      if (rand === 0){
        this.x ++;
      }
      else if(rand === 1){
        this.x --;
      }
      else if(rand === 2){
        this.y ++;
        console.log(this.y);
      }
      else if (rand === 3){
        this.y --;
      }
    }
  };
};


var el1 = new EllipseMaker(200,700,15,15);


function setup() {
  createCanvas(800, 800);
  // el1.make();
  // el1.move();
}


function draw() {
  background(150);
  el1.make();
}