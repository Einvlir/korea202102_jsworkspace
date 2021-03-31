class Bullet{
    constructor(container,src,width,height,x,y,velX,velY){
        this.img = document.createElement("img");
        this.src = src;
        this.container = container;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;

        this.img.src = this.src;
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        this.img.style.position = "absolute";
        
        this.container.appendChild(this.img);
    }
    tick(){
        this.x += this.velX;
        this.y += this.velY;
        for(i = 0 ; i < enemyArray.length; i++){
            var hitResult = collisionCheck(this.img,enemyArray[i].img)
            if(hitResult){
                removeObject(this.container, this.img, bulletArray, bulletArray.indexOf(this))
                removeObject(this.container, enemyArray[i].img, enemyArray, i)
                killcount += 1;
            };
        }
        if(this.x > screen.width){
            // var index = bulletArray.
            removeObject(this.container, this.img, bulletArray, bulletArray.indexOf(this));
        }
    }
    render(){
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
    }
}