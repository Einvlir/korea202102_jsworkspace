class Block{
    constructor(container, height, width, color, borderColor){
        this.container = container;
        this.width = width;
        this.height = height;
        this.color = color;

        this.div = document.createElement("div")
        this.div.style.height = this.height+"px";
        this.div.style.width = this.width+"px";
        this.div.style.background = this.color;
        this.div.style.border = "1px solid " + borderColor;

        this.container.appendChild(this.div);

    }
}