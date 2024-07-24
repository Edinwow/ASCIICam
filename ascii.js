let density = 'Ñ@#W$9876543210?!abc;:+=-,._                         ';
//let density = '@@@@@@@@@@@@%%%%%%%%#########********+++++++++====                               ';
let video;
let asciiDiv;

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(64, 48);
  asciiDiv = createDiv();
}
 
function draw() {

  video.loadPixels();
  let asciiLine = '';

  //Line
  for (let i = 0; i < video.height; i++) {

    //Columns
    for (let j = 0; j < video.width; j++) {

      //Pixels comes in an array with four values to each pixel[red, green, blue, alpha, red, green, blue, alpha...], this is why multiply by 4
      const pixelIndex = (j + i * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      //Pixel brightness
      const avarage = (r + g + b) / 3; 

      //Choose character from 'density' 
      const charIndex = floor(map(avarage, 0, 255, 0, density.length));
      
      //Add average character at line
      const character = density.charAt(charIndex);
      if (character == ' ') asciiLine += '&nbsp;';
      else asciiLine += character;

    }

    asciiLine += '<br/>';

  }

  //Shows line
  asciiDiv.html(asciiLine);

}

