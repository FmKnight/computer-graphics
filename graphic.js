var ctx = document.getElementById('myCanvas').getContext("2d");    


$("#s_scale").val(1); 

function draw(ctx,fillStyle){
    ctx.fillStyle = fillStyle;
    ctx.beginPath();
    // 以坐标原点（0,0）为圆心,半径为30px,0为开始的角度,Math.PI为结束的角度，即180度，最后一个参数表示顺时针方向绘制
    ctx.arc(0,0,10,0,2*Math.PI,true);
    ctx.closePath();
    ctx.fill();
}   
      
function translate(x,y){   
    ctx.translate(x,y);
    // 循环10次，表明有10个伞状图形
    for(var i=0;i<5;i++){
        ctx.save();
        // 水平方向发生偏移
        ctx.translate(40*i,0);
        draw(ctx,"rgb("+(30*i)+","+(255-30*i)+",255)");
        ctx.restore();
    }
}

function rotate(x,y){
    ctx.translate(x,y);
    for (var i=1;i<9;i++)
    {
        ctx.save();
        ctx.rotate(Math.PI*(1/4+i/4));
        ctx.translate(0,-30);
        draw(ctx,"rgb("+(30*i)+","+(255-30*i)+",255)");
        ctx.restore();
    }
}

function scale(x,y,s){
    // 垂直方向和水平方向发生了偏移
    ctx.translate(x,y);
    for(var i=1;i<5;i++){
        ctx.save();
        ctx.scale(s,s);
        draw(ctx,"rgb("+(30*i)+","+(255-30*i)+",255)");
        ctx.restore();}
}


function clear(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, 800, 500);    
}

$("#translate").click(function(){
    clear();
    var x = $("#x_pos").val();
    var y = $("#y_pos").val();    
    translate(x,y);
});



$("#rotate").click(function(){
    clear();
    var x = $("#x_pos").val();
    var y = $("#y_pos").val();    
    rotate(x,y);
    });


$("#scale").click(function(){
    clear();
    var x = $("#x_pos").val();
    var y = $("#y_pos").val();    
    var s = $("#s_scale").val();    
    scale(x,y,s);
});


$("#bezier").click(function(){
    clear();
    var x = $("#x_pos").val();
    var y = $("#y_pos").val();  
    var ctr_x = $("#ctr_x_pos").val(); 
    var ctr_y = $("#ctr_y_pos").val();    
    var des_x = $("#des_x_pos").val();
    var des_y = $("#des_y_pos").val();
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.quadraticCurveTo(ctr_x,ctr_y,des_x,des_y);
    ctx.stroke();
});
