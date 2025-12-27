const canvas = document.querySelector("canvas");
const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const eragerBtn = document.getElementById("eraser-btn");
const destroyBtn = document.getElementById("clear-btn");
const modeBtn = document.getElementById("mode-btn");
//const colorOption = document.getElementsByClassName("color-option"); 
const colorOption = Array.from( //위상태로 데려오면 그저 htmlCollection. Arrry가 필요
    document.getElementsByClassName("color-option")
);
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
// ctx는 붓의 역할. 반드시 2d < 소문자로 쓸것!!!
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";

////////////////////////////// 2.1 붙잡고 있을때 그리기

let isPainting = false;
//마우스가 움직이고 있고, 동시에 누르고 있을때(떼지 않고) 그림그리고 있을때만 작동
let isFilling = false;
let filledColor = "white";


function colorChange(color) {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function onMove(event) {
    if (isPainting && isFilling!==true) { //페인팅중이라면, 선을 그리고
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }// 페인팅 중이 아니라면, 브러쉬 이동만
    ctx.moveTo(event.offsetX, event.offsetY);
};

function startPainting() {
    isPainting = true;
};
function cancelPainting() {
    isPainting = false;
    ctx.beginPath(); //2.2 lineWidth 변경해도 전에것도 변하지 않도록 사이사이 끊기
    colorChange(color.value);
};

//2.2  lineWidth
function onLineWidthChange(event){
    //console.log(event.target.value); // 변화값 확인
    ctx.lineWidth = event.target.value;
}

//2.3 color change
function onColorChange(event) {
    //console.log(event.target.value);
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
};
//////////////////// 2.4 color option
function onColorClick(event) {
//console.dir(event.target);
//console.dir(event.target.dataset.color);
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
};

///////////////////////// 2.5 Filling Mode
function onModeClick() {
    if (isFilling) {
        isFilling = false;
        modeBtn.innerText = "Draw";
    } else {
        isFilling = true;
        modeBtn.innerText = "Fill";
    }
};
function onCanvasClick() {
    if (isFilling) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        filledColor = ctx.fillStyle;
    }
}

///////////////////////// 2.6 Eraser

function onClear() {
    // ctx.fillStyle = "white";
    // ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    colorChange(color.value);
}
function onEragerClick() {
    ctx.strokeStyle = "white";
    ctx.strokeStyle = filledColor;
    isFilling = false;
}

/////////////////////////// 3.0 adding images
function onFileChanger(event) {
    //console.dir(event.target);
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    //console.log(url);
    const image = new Image();
    image.src = url;
    image.onload = function () {
        //ctx.drawImage(image, 200, 200); //이미지, x좌표,y좌표,크기,크기//
        //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = null;
    }
};

/////////////////////////// 3.1 adding Text
function onDoubleClick(event) {
    //console.log(event.offsetX, event.offsetY);
    const text = textInput.value;
    if (text !== "") {
        ctx.save(); // 색깔 등 모두 저장 
        //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save
        ctx.lineWidth = 1;
        ctx.font = "48px serif";
        ctx.fillText(text, event.offsetX, event.offsetY);
        ctx.restore();//저장한 거 모두 가져오기
        //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/restore
    }
}

///////////////////////////// 3.2 saving image
function onSaveClick() {
    //console.log(canvas.toDataURL());
    //https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "myDrawing.png";
    a.click();
};


/////////////////// 3.2 Adding Text
canvas.addEventListener("dblclick",onDoubleClick)

// canvas.onmousemove = onMove; //같은거임
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting); //// 캔버스 나가서도 꼬이는 문제 해결
canvas.addEventListener("click", onCanvasClick);

//////////////////// 2.2 lineWidth
lineWidth.addEventListener("change", onLineWidthChange);

//////////////////// 2.3 color change
color.addEventListener("change", onColorChange);

//////////////////// 2.4 color option
//console.log(colorOption);
colorOption.forEach(color => color.addEventListener("click", onColorClick));

///////////////////////// 2.5 Filling Mode
modeBtn.addEventListener("click", onModeClick);

///////////////////////// 2.6 Eraser
destroyBtn.addEventListener("click", onClear);
eragerBtn.addEventListener("click", onEragerClick);

/////////////////////////// 3.0 adding images
fileInput.addEventListener("change", onFileChanger);

///////////////////////////// 3.2 saving image
saveBtn.addEventListener("click", onSaveClick);