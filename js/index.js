var startGame;//计时器
var score = 0;//总分
var time;//倒计时
var timeVal;//时间间隔
var curr_td = '';

//难度改变，对应其实分数改变
function changeTimeValue(){
    var diff = document.getElementById("diffculty").value;
    if(diff == 'high'){
        document.getElementById("time").value = 30;
    }else if(diff == 'normal'){
        document.getElementById("time").value = 30;
    }else{
        document.getElementById("time").value = 30;
    };
}

//开始游戏
function showMouse(){
    var diff = document.getElementById("diffculty").value;

    // 重置分数为 0
    score = 0;
    document.getElementById("score").value = score;

    if(diff == 'high'){
        time = 30;
        timeVal = 500;
    }else if(diff == 'normal'){
        time = 30;
        timeVal = 750;
    }else{
        time = 30;
        timeVal = 1000;
    }
    //开始游戏之后禁用开始游戏和选择难度
    document.getElementById("start").disabled = true;
    document.getElementById("diffculty").disabled = true;

    startGame = window.setInterval(function(){
        //清空所有表格里的img
        var itemArr = document.getElementsByTagName('td');
        for (var i = 0; i < itemArr.length; i++) {
            itemArr[i].style.backgroundColor = '#FF5500';
            itemArr[i].innerHTML = '';
        };
        //生成一个1~25的随机数
        var mouse = parseInt(Math.random()*25+1);
        var index = 'item_'+mouse;

        time = time - 1;
        document.getElementById("time").value = time;
        if(time <= 0){
            document.getElementById("score").value = 0;
            changeTimeValue();
            window.clearInterval(startGame); 
            alert('Game End! Your score is '+score);
            //游戏结束之后重新启用开始游戏和选择难度
            document.getElementById("start").disabled = false;
            document.getElementById("diffculty").disabled = false;
            return false;
        }

        //操作dom
        document.getElementById(index).style.backgroundColor = '#ffffff';
        document.getElementById(index).innerHTML = '<img src="./image/mouse.jpg" height="50px;" width="50px;">';
    },timeVal);
};
//停止游戏
function stop(){
    var itemArr = document.getElementsByTagName('td');
     window.clearInterval(startGame); 
     for (var i = 0; i < itemArr.length; i++) {
            itemArr[i].style.backgroundColor = '#FF5500';
            itemArr[i].innerHTML = '';
    };
    document.getElementById("score").value = 0;
    changeTimeValue();
    alert('Game End! Your score is '+score); 
    //点击停止结束之后重新启用开始游戏和选择难度
    document.getElementById("start").disabled = false;
    document.getElementById("diffculty").disabled = false;
};
//打地鼠
function bump(itemid){
    //防止多次点击
    if(curr_td == itemid){
        return false;
    };
    curr_td = itemid;

    var itemId = 'item_' + itemid;
    if(document.getElementById(itemId).innerHTML != ''){
        score = score + 1;
        document.getElementById("score").value = score;
    };
}



