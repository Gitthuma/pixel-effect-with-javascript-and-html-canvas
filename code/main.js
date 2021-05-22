/*Reference canvas using getElementById*/
const canvas = document.getElementById('canvas1');

/*Reference ctx (short for context) using canvas variable and getContext 2d. This makes ctx an instance of canvas 2d api object and we can call all built-in canvas methods on the variable such as ctx fill rectangle to draw a rectangle*/
const ctx = canvas.getContext('2d');

/*Set canvas width and height to be the same as those set on the css file for correct scaling*/
canvas.width = 800;
canvas.height = 450;

/*Create a constant variable image1 and set it to new Image().'new' is a special key word in Javascript and 'Image()' is a special built in class constructor. This will create a new blank object and assign it values and properties, based on built-in JavaScript image blue print. Simply said, we just created blank new image object which comes with src property*/
const image1 = new Image();

