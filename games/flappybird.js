let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

const { random, PI } = Math;
const log = console.log.bind(this);

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

var score = 0;
const rnd = (min, max) => ~~(random() * (max - min + 1)) + min;

function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.velocity = 0;
    this.gravity = 0.6;
    this.size = size;
}
Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * PI);
    ctx.fill();
}
Ball.prototype.up = function() {
    this.y -= 40;
}

Ball.prototype.fall = function() {
    this.y += 2;
    
    if(this.y < 0)
        this.y = -this.y;
    if(this.y > height)
        this.y = height;
}
Ball.prototype.controls = function() {
    let _this = this;
    window.onclick = function(e) {
        e.preventDefault();
        console.log("qq")
        _this.up();
    }    
    window.onkeyup = function(e) {
        if(e.keyCode === 13) {
            _this.up();
        }
    }
}
function Pipe() {
    this.top = rnd(0, height/2);
    this.bottom = rnd(0, height/2);
    this.x = width;
    this.w = 50;
    this.speed = 2;
}
Pipe.prototype.show = function() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, 0, this.w, this.top);
    ctx.fillRect(this.x, height - this.bottom, this.w, this.bottom);
}
Pipe.prototype.update = function() {
    this.x -= this.speed;
}
Pipe.prototype.hits = function() {
    if(bird.y < this.top || bird.y > height - this.bottom) {
        if(bird.x > this.x && bird.x < this.x + this.w)
            return true;
    }
        
}
function drawCanvas() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);
}
function setupPipe() {
    if(count % 50 === 0)
        pipes.push(new Pipe()); 
    for(let i=0; i<pipes.length; i++) {
        pipes[i].show();
        pipes[i].update();
        if(pipes[i].x < 0) {
            pipes.splice(i, 1);
            score++;
        }
        if(pipes[i].hits(bird)) {
            bird.y = height;   
            resetGame();
        }
            
    }
}
function resetGame() {
    bird = new Ball(20, 100, 4, 4, "white", 10);
    pipes = [];
    count = 0;
    score = 0;
}
var bird = new Ball(20, 100, 4, 4, "white", 10);
var pipes = [];
function setupBird() { 
    bird.draw();
    bird.fall();
    bird.controls();
}
let count = 0;
function loop() {
    count++;
    drawCanvas();
    setupBird();
    setupPipe();
    $("p").text(score);
    requestAnimationFrame(loop);
}
loop();



