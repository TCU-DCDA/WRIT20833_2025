// Slide1 p5 sketch — CSS properties morphing into rhetorical devices
// Canvas 1200x675, left = code, right = visual rhetoric

let tokens = [];
let visuals = [];
let tStart;
const W = 1200, H = 675;
const leftW = W * 0.44;
const rightX = leftW + 40;
const purple = '#9b59b6';
const amber = '#f1c40f';

function setup() {
  const canvas = createCanvas(W, H);
  canvas.parent('container');
  textFont('Courier, monospace');
  initTokens();
  initVisuals();
  tStart = millis();
}

function initTokens() {
  tokens = [
    { key: 'font-size', val: '24px', y: 120, color: purple },
    { key: 'color', val: '#e74c3c', y: 200, color: purple },
    { key: 'position', val: 'center', y: 280, color: purple },
    { key: 'spacing', val: '1.5rem', y: 360, color: purple }
  ];
  // add positions (left column)
  for (let i=0;i<tokens.length;i++){
    tokens[i].x = 30;
    tokens[i].t = i * 300; // stagger animation
    tokens[i].state = 0; // 0 waiting, 1 moving, 2 arrived
    tokens[i].hover = false;
  }
}

function initVisuals() {
  visuals = {
    fontsize: { x: rightX + 200, y: 120, size: 90, angle: 0, targetAngle: PI*0.5 },
    color: { x: rightX + 200, y: 220, swatches: ['#e74c3c','#2ecc71','#3498db','#95a5a6'], pulse: 0 },
    position: { x: rightX + 120, y: 320, boxSize: 110, posState: 0 }, // posState 0=margin,1=center
    spacing: { x: rightX + 200, y: 440, gap: 8, groupSize: 5 }
  };
}

function draw() {
  background(28, 8, 48);
  drawDivider();
  drawLeftHeader();
  drawTokens();
  drawVisuals();
  animateTokens();
  annotate();
}

function drawDivider() {
  push();
  noStroke();
  fill(255, 255, 255, 10);
  rect(leftW + 10, 20, 2, H - 40);
  pop();
}

function drawLeftHeader() {
  push();
  textFont('Helvetica');
  noStroke();
  fill(200);
  textAlign(LEFT, TOP);
  textSize(20);
  text('CSS (code) — neutral syntax?', 30, 24);
  pop();
}

function drawTokens() {
  for (let tk of tokens) {
    // hit detection for hover
    let w = leftW - 60;
    let h = 40;
    tk.hover = (mouseX > tk.x && mouseX < tk.x + w && mouseY > tk.y - 12 && mouseY < tk.y + 18);
    // token box
    push();
    translate(tk.x, tk.y);
    noStroke();
    fill(tk.hover ? color(155,89,182,220) : color(155,89,182,150));
    rect(0, -18, leftW - 60, 36, 6);
    fill(20);
    textSize(16);
    fill(255);
    text(`${tk.key}: ${tk.val};`, 12, 0);
    pop();
  }
}

function animateTokens() {
  const t = millis() - tStart;
  for (let i=0;i<tokens.length;i++){
    let tk = tokens[i];
    if (t > tk.t && tk.state === 0) {
      tk.state = 1;
      tk.startX = tk.x;
      tk.startY = tk.y;
      tk.endX = visualsPositionFor(tk.key).x;
      tk.endY = visualsPositionFor(tk.key).y;
    }
    if (tk.state === 1) {
      // ease toward end
      const duration = 1200;
      const p = constrain((t - tk.t) / duration, 0, 1);
      const eased = easeOutCubic(p);
      tk.x = lerp(tk.startX, tk.endX, eased);
      tk.y = lerp(tk.startY, tk.endY, eased);
      if (p >= 1) {
        tk.state = 2;
        // trigger visual arrival effect
        onArrival(tk.key);
      }
    }
  }
}

function visualsPositionFor(key) {
  if (key === 'font-size') return { x: visuals.fontsize.x - 40, y: visuals.fontsize.y };
  if (key === 'color') return { x: visuals.color.x - 40, y: visuals.color.y };
  if (key === 'position') return { x: visuals.position.x - 40, y: visuals.position.y };
  if (key === 'spacing') return { x: visuals.spacing.x - 40, y: visuals.spacing.y };
  return { x: rightX + 60, y: 100 };
}

function onArrival(key) {
  if (key === 'font-size') {
    visuals.fontsize.angle = 0;
    visuals.fontsize.targetAngle = PI * 0.85; // knob turns to louder
  }
  if (key === 'color') {
    visuals.color.pulse = 1;
  }
  if (key === 'position') {
    visuals.position.posState = 1; // move to center for emphasis
  }
  if (key === 'spacing') {
    visuals.spacing.gap = 28; // become generous first
  }
}

// draw right-side visuals
function drawVisuals() {
  push();
  textSize(18);
  textAlign(LEFT, CENTER);
  fill(amber);
  text('Style = Argument', rightX + 10, 50);
  noFill();
  // font-size → volume dial
  drawVolumeDial(visuals.fontsize);
  // color → swatches
  drawColorSwatches(visuals.color);
  // position → power box
  drawPowerBox(visuals.position);
  // spacing → cluster boxes
  drawSpacingGroup(visuals.spacing);
  pop();
}

function drawVolumeDial(d) {
  push();
  translate(d.x, d.y);
  stroke(200);
  fill(50);
  ellipse(0, 0, d.size);
  // ticks
  stroke(120);
  for (let i=0;i<8;i++){
    let a = map(i,0,7,-PI*0.7,PI*0.7);
    let sx = cos(a) * (d.size/2 - 8);
    let sy = sin(a) * (d.size/2 - 8);
    stroke(120);
    line(sx, sy, cos(a) * (d.size/2 - 2), sin(a) * (d.size/2 -2));
  }
  // knob
  d.angle = lerp(d.angle, d.targetAngle, 0.06);
  stroke(amber);
  strokeWeight(3);
  line(0,0, cos(d.angle)*(d.size*0.32), sin(d.angle)*(d.size*0.32));
  noStroke();
  fill(amber);
  ellipse(cos(d.angle)*(d.size*0.32), sin(d.angle)*(d.size*0.32), 12);
  // label
  noStroke();
  fill(200);
  textSize(12);
  textAlign(CENTER, TOP);
  text('font-size → voice (loud ⇢ quiet)', 0, d.size/2 + 10);
  pop();
}

function drawColorSwatches(c) {
  push();
  translate(c.x, c.y);
  // animate pulse
  c.pulse = lerp(c.pulse, 0, 0.03);
  let sw = 28;
  for (let i=0;i<c.swatches.length;i++){
    let x = i*(sw+10) - ((c.swatches.length-1)*(sw+10))/2;
    fill(c.swatches[i]);
    stroke(255, 200);
    rect(x, -sw/2, sw, sw, 4);
  }
  // small labels and pulse
  if (c.pulse > 0.01) {
    noFill();
    stroke(255, 200 * c.pulse);
    strokeWeight(3);
    ellipse(0,0,sw*4 * (1 + c.pulse*0.4));
  }
  noStroke();
  fill(200);
  textSize(12);
  textAlign(CENTER, TOP);
  text('color → emotional palette', 0, sw/2 + 10);
  pop();
}

function drawPowerBox(p) {
  push();
  // animate posState between 0 and 1
  p.posState = lerp(p.posState, p.posState, 0.1); // keeps same unless changed
  // subtle bounce to center if state 1
  let targetX = rightX + 70 + (p.posState > 0.5 ? 90 : 0);
  let cx = lerp(p.x, targetX, 0.08);
  translate(cx, p.y);
  // box
  noStroke();
  fill(p.posState > 0.5 ? '#2ecc71' : '#95a5a6');
  rectMode(CENTER);
  rect(0, 0, p.boxSize + (p.posState>0.5?40:0), p.boxSize - (p.posState>0.5?0:10), 8);
  // label
  fill(20);
  textSize(12);
  textAlign(CENTER, CENTER);
  text(p.posState>0.5 ? 'center: primary' : 'margin: marginal', 0, 0);
  noFill();
  pop();
}

function drawSpacingGroup(s) {
  push();
  translate(s.x, s.y);
  // gap oscillates if arrival
  s.gap = lerp(s.gap, s.gap, 0.06);
  // show cluster
  const count = s.groupSize;
  const box = 22;
  const total = (count*box) + ((count-1) * s.gap);
  let start = -total/2 + box/2;
  for (let i=0;i<count;i++){
    let x = start + i*(box + s.gap);
    fill('#ffffff22');
    rect(x, 0, box, box, 4);
  }
  fill(200);
  textSize(12);
  textAlign(CENTER, TOP);
  text('spacing → value (generous ⇢ cramped)', 0, box/2 + 14);
  pop();
}

function annotate() {
  push();
  fill(200);
  textSize(14);
  textAlign(LEFT, TOP);
  text('Left: CSS tokens (code) — Right: styling choices as rhetorical devices', rightX + 10, 20);
  pop();
}

function easeOutCubic(t){ return 1 - pow(1-t, 3); }

function mousePressed() {
  // restart animation
  tStart = millis();
  initTokens();
  initVisuals();
}

function windowResized() {
  // no-op: fixed canvas size for slide preview
}
