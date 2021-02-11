class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visablitly = 220
  }
  display(){
    console.log(this.body.speed)
    if(this.body.speed < 3){
      super.display();
    }
    else{
      World.remove(world,this.body)
      push();
      this.visablitly = this.visablitly - 5
      tint(0,this.visablitly);
      image(this.image,this.body.position.x,this.body.posistion.y)
      pop();
    }
  }
};