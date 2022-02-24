let density = 'Ñ@#W$9876543210?!abc;:+=-,._                         ';
let video;
let asciiDiv;

function setDensity() {
  density = document.getElementById('density').value;
}

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(64, 48);
  asciiDiv = createDiv();
}
 
function draw() {
  video.loadPixels();
  let asciiImage = '';
  for (let i = 0; i < video.height; i++) {
    for (let j = 0; j < video.width; j++) {
      const pixelIndex = (j + i * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];   
      const avg = (r + g + b) / 3;                 
      const charIndex = floor(map(avg, 0, 255, 0, density.length));
      
      const c = density.charAt(charIndex);
      if (c == ' ') asciiImage += '&nbsp;';
      else asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}
