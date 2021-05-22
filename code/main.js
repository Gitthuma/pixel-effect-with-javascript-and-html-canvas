/*Reference canvas using getElementById*/
const canvas = document.getElementById('canvas1');

/*Reference ctx (short for context) using canvas variable and getContext 2d. This makes ctx an instance of canvas 2d api object and we can call all built-in canvas methods on the variable such as ctx fill rectangle to draw a rectangle*/
const ctx = canvas.getContext('2d');

/*Set canvas width and height to be the same as those set on the css file for correct scaling*/
canvas.width = 800;
canvas.height = 450;

