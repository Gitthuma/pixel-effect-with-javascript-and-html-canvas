/*Reference canvas using getElementById*/
const canvas = document.getElementById('canvas1');

/*Reference ctx (short for context) using canvas variable and getContext 2d. This makes ctx an instance of canvas 2d api object and we can call all built-in canvas methods on the variable such as ctx fill rectangle to draw a rectangle*/
const ctx = canvas.getContext('2d');

/*Set canvas width and height to be the same as those set on the css file for correct scaling*/
canvas.width = 780; /*Changed canvas width to match image width*/
canvas.height = 440; /*Changed canvas height to match image height*/

/*Create a constant variable image1 and set it to new Image().'new' is a special key word in Javascript and 'Image()' is a special built in class constructor. This will create a new blank object and assign it values and properties, based on built-in JavaScript image blue print. Simply said, we just created blank new image object which comes with src property*/
const image1 = new Image();

/*Set path to image1 using src property. image path must be relative to the location of main.js file inside the project structure for JavaScript to be able to see the image*/
image1.src = '../images/disney-junior-T-O-T-S.jpg'; /*Changed image path*/

/*Draw image using ctx and the built in drawImage method and give it three arguments. The first argument is the image I want to draw, the image1 variable from line 12. The second and third arguments are the horizontal x coordinate and the vertical y coordinate, respectively, where I want to draw it on canvas. Iwant the image to start from coordinates (0,0), which is the top left corner*/

/*Give image1 an event lister that listens for the load event then draws the image. The event listener waits for the image to be loaded then uses a function to call the draw image method to draw the image.*/

/*drawImage built-in method has three version. The method used here is the simplest with three arguments. It can also take five arguments with the fourth and the fifth arguments being canvas.width and canvas.height that can be used to control the scale of the image. Th third versin has nine arguments and can be used to crop out pieces of sprite sheets*/

/*Use getImageData built-in method inside the event listener function to scan and analyse the color of each indivudual pixel that makes up the image. This method takes in four arguments which defines the area of canvas to be scanned for pixel informantion. The first two arguments are the (x,y) coordinates for the canvas starting point while the last two are (canvas.width, canvas.height) for the canvas end point. This method scans all pixels on canvas, it goes from left to right, row by row from top to bottom. The order is important if you want to determine coordinates for each pixel.*/

/*Add console.log inside the event listener function for the getImageData built-in method to return an image data object. Put simply, the console.log command prints out the results of the getImageData built-in method on to the console.*/

/*Save the data component of the scannedImage data object into the scannedData variable. The data component is an array in Uint8ClampedArray format representing all the pixels that make up the image. In Uint8ClampedArray format, every set of four elements in an array, represents the four rgba values of a pixel. This is the data that will be used to manipulate colors in the image.*/
image1.addEventListener('load', function() {
    ctx.drawImage(image1, 0, 0);
    const scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(scannedImage);
    const scannedData = scannedImage.data;
})



