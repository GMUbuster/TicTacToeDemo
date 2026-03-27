function wario(element) {
   if(game[Math.floor(element.id/3)][element.id%3] == 0){
    game[Math.floor(element.id/3)][element.id%3] = player+1;
    player = (player + 1)%2
   }
}
function tile(i) {
   return(game[Math.floor(i/3)][i%3]);
}
let player = 0;
let counter = 0;
let winwin = 0;
let img = ["-","O","X"]
let game = [ [0,0,0], [0,0,0], [0,0,0] ];
let win = [ 
[0,1,2], [6,4,2], 
[3,4,5], [1,4,6], 
[6,7,8], [2,5,7], 
[0,4,8] ];

const tile1 = document.getElementById("0");
const tile2 = document.getElementById("1");
const tile3 = document.getElementById("2");
const tile4 = document.getElementById("3");
const tile5 = document.getElementById("4");
const tile6 = document.getElementById("5");
const tile7 = document.getElementById("6");
const tile8 = document.getElementById("7");
const tile9 = document.getElementById("8");
const winn = document.getElementById("win");

function animate() {
   counter++
   tile1.textContent = img[game[0][0]];
   tile2.textContent = img[game[0][1]];
   tile3.textContent = img[game[0][2]];
   tile4.textContent = img[game[1][0]];
   tile5.textContent = img[game[1][1]];
   tile6.textContent = img[game[1][2]];
   tile7.textContent = img[game[2][0]];
   tile8.textContent = img[game[2][1]];
   tile9.textContent = img[game[2][2]];
   for (let i = 0; i < 7; i++) {
      if(tile(win[i][0]) == tile(win[i][1])){
       if(tile(win[i][1]) == tile(win[i][2])){
        if(tile(win[i][0]) > 0) winn.textContent = img[tile(win[i][0])] + " Win";
       }
      }
   }
   requestAnimationFrame(animate);
}
requestAnimationFrame(animate);