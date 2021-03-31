
class Bar{
    constructor(container,width,height,x,y,bg,targetH){
        this.container = container;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.bg = bg;
        this.a = 0.1;
        this.targetH = targetH;

        this.div = document.createElement("div");
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";

        this.div.style.border = "1px solid black"
        this.div.style.boxSizing = "border-box"
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.div.style.background = this.bg;
        this.div.style.transform = "rotate(180deg)";
        this.container.appendChild(this.div);

        
    }
    render(){
        //기존위치 + 비율 * (목표지점 - 기존위치)
        this.div.style.height = parseFloat(this.div.style.height) + this.a*(this.targetH - parseFloat(this.div.style.height))+"px";
        this.div.innerText = parseFloat(this.div.style.height);
    }
}