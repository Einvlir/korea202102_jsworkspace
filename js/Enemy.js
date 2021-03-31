class Enemy{
    constructor(container, src, width, height, x, y, velX, velY){
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
        if(this.x < -this.width){
            removeObject(this.container, this.img, enemyArray, enemyArray.indexOf(this));
        }
    }
    render(){
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";    
    }
}