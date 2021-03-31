class Plane{
    constructor(container, src, width, height, x, y, velX, velY){
        this.container = container;
        this.img = document.createElement("img");
        this.src = src;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;

        this.img.src = this.src;
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";
        this.img.style.position = "absolute";
        this.img.style.left = this.x +"px";
        this.img.style.top = this.y +"px";
        
        this.container.appendChild(this.img);
    }   
    // tick(){

    // }
    //그래픽 처리
    tick(){
        this.x += this.velX;
        this.y += this.velY;
        if(this.x <= 0){
            this.x = 0;
        }else if(this.x >= window.innerWidth - parseInt(this.width)){
            this.x = window.innerWidth - parseInt(this.width)
        }
        if(this.y >= 600-parseInt(this.height)){
            this.y = 600-parseInt(this.height);
        }else if(this.y <= 0){
            this.y = 0;
        }
        for(var i = 0; i < enemyArray.length; i++){
            var hitResult = collisionCheck(this.img,enemyArray[i].img)
            if(hitResult){
                removeObject(this.container,enemyArray[i].img,enemyArray,i);
                removeObject(info,hpArray[hpArray.length-1].img,hpArray,hpArray.length-1);


            }
        }
        //1번템 : 무기업
        //2번템 : 회복
        //3번템 : 속도
        //4번 : 파괴
        for(var i = 0; i < itemArray.length; i++){
            var hitResult = collisionCheck(this.img, itemArray[i].img)
            if(hitResult){
                var itemRole = itemArray[i].itemRole;
                removeObject(this.container,itemArray[i].img,itemArray,i)
                switch(itemRole.role){
                    case 0 : changeWeapon();break;
                    case 1 : clearEnemy();break;
                    case 2 : increaseHp();break;
                    case 3 : speedUp();break;
                }
            }
        }
    }
    render(){
        this.img.style.left = this.x +"px";
        this.img.style.top = this.y +"px";
    }   
}