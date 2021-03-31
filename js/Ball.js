class Ball{

    constructor(container, velX, velY, R_color,ball_img,ballSize){
        this.ballSize = ballSize;
        this.returnSwitX = false;
        this.returnSwitY = false;
        this.container = container;
        this.img = document.createElement("img");
        this.img.style.width = this.ballSize + "px";
        this.img.style.height = this.ballSize + "px";
        // this.img.style.background = R_color;
        this.img.src=ball_img;
        // this.img.style.fontSize = 35 + "px";
        this.img.style.position = "absolute";
        this.img.style.left = 5 + "px";
        this.img.style.top = 5 + "px";
        this.img.style.padding = 0 + "px";

        this.ball_img = ball_img;
        this.velX = velX;
        this.velY = velY;
        this.x = 0;
        this.y = 0;
        this.limitY = parseFloat(this.container.style.height)-parseFloat(this.img.style.height);
        this.limitX = parseFloat(this.container.style.width)-parseFloat(this.img.style.width);
        this.rotateCount = 0;
        this.container.appendChild(this.img);
    }
    
    move(){
        if(parseFloat(this.img.style.left) < 5 || parseFloat(this.img.style.left) > this.limitX){
            this.returnSwitX = !this.returnSwitX
        }    
        if(parseFloat(this.img.style.top) < 5 || parseFloat(this.img.style.top) > this.limitY){
            this.returnSwitY = !this.returnSwitY
        }    
        if(this.returnSwitX){
            this.x = this.x - this.velX;
        }else{
            this.x = this.x + this.velX;
        }
        if(this.returnSwitY){
            this.y = this.y - this.velY;
        }else{
            this.y = this.y + this.velY;
        }
        this.img.style.left = this.x + "px";        
        this.img.style.top = this.y + "px";
        this.img.style.transform="rotate("+this.rotateCount+"deg)"
        this.rotateCount+=30;
    };

}