window.addEventListener('load',main);

console.time('var');
let position = {
  left: 0,
  top: 0
}
console.timeEnd('var');

function main() {
    eventListener();
}

function eventListener(){
    document.addEventListener('keydown', moveCircle);
}

function moveCircle(event){
    switch (event.key){
      case 'ArrowUp':
          position.top -= 1; break;
      case 'ArrowDown':
          position.top += 1; break;
      case 'ArrowLeft':
          position.left -= 1; break;
      case 'ArrowRight':
          position.left += 1; break;
      default: console.log('use arrow keys');
    }
    updateCirclePosition();
}

function updateCirclePosition(){
  console.time('dom');
    const circle = document.getElementById('c');
    console.timeEnd('dom');
    circle.style.left = position.left  + '%';
    circle.style.top = position.top  + '%';
}

