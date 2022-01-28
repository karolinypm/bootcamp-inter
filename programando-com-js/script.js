let t = [2,4,3,2];
let tomadas;
for(let i = 1; i <= 4; i++){
  tomadas = t.reduce((tomadas, curr) => tomadas + curr);
}
tomadas = tomadas - 3;

console.log(tomadas);