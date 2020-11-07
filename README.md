# 计算机图形学--Bezier曲线与二维图形变换

## 概述

利用HTML中的canvas画布进行图形显示，利用JavaScript进行操作，实现：

- Bezier曲线的绘制
- 二维图形的变换：
  - 平移
  - 旋转
  - 缩放

## 代码结构

```
.
|-- README.md 
|-- fm.ico         
|-- graphic.html   
|-- graphic.js
|-- style.css

0 directories, 5 files

```

## 页面配置

![image-20201107154544927](https://github.com/FmKnight/Images/blob/master/2020-11-07-计算机图形学/image-20201107154544927.png)

## 使用说明

### Bezier曲线绘制

#### 技术要点

此处主要利用canvas中的quadraticCurveTo() 方法实现二次Bezier曲线绘制，实现三次曲线，可使用bezierCurveTo() 方法。

quadraticCurveTo() 方法通过使用表示二次贝塞尔曲线的指定控制点，向当前路径添加一个点。

**提示：**二次贝塞尔曲线需要两个点。第一个点是用于二次贝塞尔计算中的控制点，第二个点是曲线的结束点。

![二次贝塞尔曲线](https://airknight.oss-cn-shanghai.aliyuncs.com/img/quadraticcurve.gif)

- 开始点：moveTo(20,20)
- 控制点：quadraticCurveTo(20,100,200,20)
- 结束点：quadraticCurveTo(20,100,200,20)

#### 实现

分别输入起点、控制点、终点x,y坐标，点击Bezier曲线按钮，可在下方canvas中看到二次Bezier曲线。

#### 效果

![image-20201107155149154](https://github.com/FmKnight/Images/blob/master/2020-11-07-计算机图形学/image-20201107155149154.png)

### 二维图形变换

#### 技术要点

| 方法                          | 参数说明                                                     | 描述                                                         |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| scale(scalewidth,scaleheight) | 缩放当前绘图的宽、高度 (1=100%, 0.5=50%, 2=200%, 依次类推)   | 缩放当前绘图至更大或更小                                     |
| rotate(angle)                 | 旋转角度，以弧度计。如需将角度转换为弧度，请使用 degrees*Math.PI/180 公式进行计算。 | 旋转当前绘图                                                 |
| translate(x,y)                | 重新映射画布上(0,0)的位置，类类似于平移。                    | 重新映射画布上的 (0,0) 位置                                  |
| transform(a,b,c,d,e,f)        | 水平缩放、倾斜，垂直倾斜、缩放，水平移动，垂直移动绘图       | 替换绘图的当前转换矩阵。transform() 方法的行为相对于由 rotate(), scale(), translate(), or transform() 完成的其他变换。例如：如果已经将绘图设置为放到两倍，则 transform() 方法会把绘图放大两倍，您的绘图最终将放大四倍。 |
| setTransform(a,b,c,d,e,f)     | 水平缩放、倾斜，垂直倾斜、缩放，水平移动，垂直移动绘图       | 将当前转换重置为单位矩阵。然后运行 transform()。             |



#### 实现

从输入框获取起始点位置，利用for循环实现图形的平移，旋转，缩放等，并利用渐变色突出显示效果。

注：每次进行一种图形变换后，利用以下命令重置画布：

```javascript
function clear(){
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, 800, 500);  
}
```

利用以下函数实现基础图形(此处为圆)绘制:

```javascript
function draw(ctx,fillStyle){
    ctx.fillStyle = fillStyle;
    ctx.beginPath();
    // 以坐标原点（0,0）为圆心,半径为30px,0为开始的角度,Math.PI为结束的角度，即180度，最后一个参数表示顺时针方向绘制
    ctx.arc(0,0,10,0,2*Math.PI,true);
    ctx.closePath();
    ctx.fill();
}   
```

#### 效果

##### 平移

![image-20201107161247145](https://github.com/FmKnight/Images/blob/master/2020-11-07-计算机图形学/image-20201107161247145.png)

##### 旋转

![image-20201107161317182](https://github.com/FmKnight/Images/blob/master/2020-11-07-计算机图形学/image-20201107161317182.png)

##### 缩放

3倍：

![image-20201107161526735](https://github.com/FmKnight/Images/blob/master/2020-11-07-计算机图形学/image-20201107161526735.png)

0.5倍：

![image-20201107161623551](https://github.com/FmKnight/Images/blob/master/2020-11-07-计算机图形学/image-20201107161623551.png)





