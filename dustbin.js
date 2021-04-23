class dustbin{
constructor (){
    this.x=x;
    this.y=y;
    this.dustbinWidth=200;
    this.dustbinHeight=213;
    this.wallThickness=20;
    this.image=loadImage("pictures/dustbin.png")
    this.bottomBody = Bodies .rectangle (this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true})
    this.leftWallBody=bodies.rectangle(this.x-this.dustbinWdith/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
    this.rightWallBody=bodies.rectangle(this.x+this.dustbinWdith/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
World.add(world,this.bottomBody)
World.add(world,this.rightWallBody)
World.add(world,this.leftWallBody)
}


display(){
    var posBottom=this.bottomBoddy.position
    var posLeft=this.leftWallBoddy.position
    var posRight=this.rightWallBoddy.position
    push()
    translate (posLeft.x,posLeft.y)
    angleMode(RADIANS)
    rectMode (CENTER)
    fill("violet")
    roatate (this.angle)
    pop ()
    push()
    translate (posRight.x,posRight.y)
    angleMode(RADIANS)
    rectMode (CENTER)
    fill("violet")
    roatate ( -1*this.angle)
    pop ()
    push()
    translate (posBottom.x,posBottom.y)
    angleMode(RADIANS)
    rectMode (CENTER)
    fill("violet")
    imageMode (CENTER)
    image(this.image,o,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight )
    pop ()
}
}