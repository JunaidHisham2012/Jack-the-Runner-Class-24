//Jack the Runner




//creates the variables [var]
var bg,bgimg
var lasergroup, laserimg, laser
var player
var coingroup, coinimg, coin
var rockgroup, rockimg, rock
var platform, platformimg, platformgroup
var restart
var gemgroup, gemimg, gem
var gameend
var invisibleground_bottom, invisibleground_top
var runner, runner_jumping, runner_running_right, runner_running_left
var gamestate = "play"
var score = 0
var life = 3

//loads the images and the animations [fuction preload]
function preload() {
    bgimg = loadImage("assets/bg2.png")
    runner_running_right = loadAnimation("assets/chr1.png","assets/chr2.png","assets/chr3.png","assets/chr4.png")
    runner_running_left = loadAnimation("assets/chl1.png","assets/chl2.png","assets/chl3.png","assets/chl4.png")
    runner_jumping = loadImage("assets/chr2.png")
    platformimg = loadImage("assets/platform.png")
    coinimg = loadAnimation("assets/coin1.png","assets/coin2.png","assets/coin3.png","assets/coin4.png","assets/coin5.png","assets/coin6.png")
    laserimg = loadImage("assets/laser.png")
    gemimg = loadImage("assets/gem.png")
    rockimg = loadImage("assets/rock.png")
}
//sets everything up [function setup]
function setup() {
    createCanvas(1700,1080)
    bg = createSprite(500,250,1700,1080)
    bg.addImage("bg",bgimg)
    runner = createSprite(80,470,60,60)
    runner.addAnimation("runningright",runner_running_right)
    runner.addAnimation("runningleft",runner_running_right)
    runner.addImage("runnerjumping",runner_jumping)
    runner.scale=0.4
    coingroup = new Group()
    rockgroup = new Group()
    lasergroup = new Group()
    gemgroup = new Group()
    platformgroup = new Group()
    invisibleground_bottom = createSprite(20,580,30000,20)
    invisibleground_bottom.visible = false
}
//draws all the sprites [function draw]
function draw() {
    background("black")
    drawSprites()
    if(gamestate==="play") {
        bg.velocityX = -2
        if(bg.x<0) {
            bg.x=1000
        }
        camera.position.x=runner.x
        camera.position.y=runner.y
        if(runner.position.x<=0) {
            runner.position.x=0
        }
        if(keyDown("up")) {
            runner.velocityY = -10
            runner.changeImage("runnerjumping")
            
        }
        runner.velocityY +=0.8
        if(keyDown("down")) {
            runner.y +=10
            runner.changeAnimation("runningright")
        }
        if(keyDown("right")) {
            runner.x +=5
            runner.changeAnimation("runningright")
        }
        if(keyDown("left")) {
            runner.x -=5
            runner.changeAnimation("runningleft")
        }
        
    }
    if(gamestate==="end") {

    }
    runner.collide(invisibleground_bottom)
    
} 
