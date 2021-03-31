//달력의 셀 하나를 구성하는 객체, 일정 등록 및 날짜 표기가 가능하게!
class DateBox{
    constructor(container,width,height, text, color, bg){
        this.container = container
        this.div = document.createElement("div")
        this.width = width;
        this.height = height;
        this.bg = bg;
        this.div.innerText = text;
        this.div.style.color = color;
        this.div.title;
        this.div.content;
        this.init();
        var me = this;
    }
    init(){
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.float = "left";
        this.div.style.background = this.bg;
        this.div.style.border = "1px solid red";
        this.div.style.boxSizing = "border-box";
        this.div.style.fontSize = 30+"px";
        this.div.style.textAlign = "center";
        // this.addEventListener("click",function(){})
        this.container.appendChild(this.div);

        // this.div.addEventListener("mouseover",function(){
        //     this.style.background = "dodgerblue";
        // })
        // this.div.addEventListener("mouseout",function(){
        //     this.style.background = "black";
        // })

    }
}