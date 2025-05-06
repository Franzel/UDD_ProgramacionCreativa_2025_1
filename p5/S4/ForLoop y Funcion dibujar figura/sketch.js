function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  // dibujemos varias veces para el lado
  for (let i = 0; i < 15; i++) {
    miFigura(i * 30, 50, 35, color(255 - i * 20, 20, 0));
  }


  //dibujemos varias veces en filas y columnas
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      miFigura(i * 30, j * 30, 35, color(255 - i * 20, 20 * j, 0));
    }
  }
}

function miFigura(cx, cy, t, col) {
  fill(col);
  circle(cx, cy, t / 2);
  circle(cx, cy, t / 20);
  line(cx - t / 2, cy - t / 2, cx + t / 2, cy + t / 2);
  line(cx + t / 2, cy - t / 2, cx - t / 2, cy + t / 2);
}
