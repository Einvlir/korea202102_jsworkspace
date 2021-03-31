
/*----------------------------------
매우 유용한 코드는 모아놓으면 좋다!
----------------------------------*/

/*
매개변수 n : 0~n 미만까지의 랜덤값을 반환
*/ 
function getRandom(n){
    var r = parseInt(Math.random() * n);
    return r;
    // console.log(r);
}
/*
container : 어떤 부모요소인지
child : 부모로부터 지우고 싶은 요소
arr : 어떤 배열인가
index : 몇 번째 요소인가
*/
function removeObject(container, child, arr, index){
    container.removeChild(child);
    arr.splice(index, 1);
}

function collisionCheck(obj1,obj2){
    var result = false;
    //물체의 왼쪽 시작값(가로)
    var x1 = parseInt(obj1.style.left);
    var x2 = parseInt(obj2.style.left);
    //물체의 가로길이
    var w1 = parseInt(obj1.style.width);
    var w2 = parseInt(obj2.style.width);
    //물체의 왼쪽 시작값(세로)
    var y1 = parseInt(obj1.style.top);
    var y2 = parseInt(obj2.style.top);
    //물체의 세로길이
    var h1 = parseInt(obj1.style.height);
    var h2 = parseInt(obj2.style.height);
    check1 = (x1+w1) >= x2 && (y1+h1) >= y2 && x1 <= (x2+w2) && y1 < (y2+h2)
    result = check1
    return result;


}

function hitTest(me, target) {
    //두물체간 충돌 여부 판단 
    me_x= parseInt(me.style.left);
    me_y= parseInt(me.style.top);
    me_width=parseInt(me.style.width);
    me_height=parseInt(me.style.height);

    target_x= parseInt(target.style.left);
    target_y= parseInt(target.style.top);
    target_width=parseInt(target.style.width);
    target_height=parseInt(target.style.height);


    var result1=(me_x >= target_x) && (me_x <= (target_x+target_width));//나의 x좌표위치가 타겟의 x range 내에 있는지 판단 
    var result2=(me_x+me_width >= target_x) && (me_x+me_width <= (target_x+target_width));  //나의 가로폭이 타겟의 가로폭 내에 있는지 판단
    var result3=(me_y >= target_y) && (me_y <= (target_y+target_height));//나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
    var result4=(me_y+me_height >= target_y) && (me_y+me_height <= (target_y+target_height));//나의 y폭이 타겟의 세로폭 내에 있는지 판단
    
    return (result1 || result2) && (result3 || result4);
}

class StoreInfo{
    constructor(info,src){
        this.info = info;
        this.src = src;
    }
}
// 한 자릿수의 경우 앞애 0 붙이기
function getZeroString(n){
    var result = (n >= 10) ? n: "0"+ n;
    return result;
}