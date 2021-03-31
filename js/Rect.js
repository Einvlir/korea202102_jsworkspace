class Rect{
    constructor(container, width, height, x, y, bg){
        this.container = container;
        this.div = document.createElement("div");
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.bg = bg;
        this.init();
    }
    init(){
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.div.style.background = this.bg;
        this.div.style.boxSizing = "border-box";
        this.div.style.border = "1px solid black";

        this.div.addEventListener("click",function(){
            this.style.opacity = 0;
          
        })

        this.container.appendChild(this.div);
    }
}