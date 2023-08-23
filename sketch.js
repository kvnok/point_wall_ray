let screen_width = 960;
let screen_height = 960;
let box_size = 64;
let player_size = box_size/4;
let amount_of_blocks = screen_width/box_size;
let dude;
let blocks;
let playerAngle;
const numRays = 100;
const rayLength = box_size * 5;
let map;

function drawRay(x1, y1, x2, y2)
{
	stroke('#fca903');
	strokeWeight(5);
	line(x1, y1, x2, y2);
	strokeWeight(1);
	stroke('#000000');
}

function setup() {
	createCanvas(screen_width, screen_height);
	playerAngle = 60.0; 
	dude = new Player(screen_width/2 - player_size/2, screen_height/2 - player_size/2);
	blocks = new Array(amount_of_blocks);
	map = new Array(amount_of_blocks);
	for (let y = 0; y < amount_of_blocks; y++)
	{
		map[y] = new Array(amount_of_blocks);
		blocks[y] = new Array(amount_of_blocks);
		for (let x = 0; x < amount_of_blocks; x++)
		{
			map[y][x] = random([0, 1]);
			blocks[y][x] = new Block(x * box_size, y * box_size, '#FFFFFF', map[y][x]);
		}
	}
}
	
function draw()
{
	background('#FFFFFF');
	fill('#FFFFFF');
	for (let y = 0; y < amount_of_blocks; y++)
		for (let x = 0; x < amount_of_blocks; x++)
			blocks[y][x].display();
	dude.display();
	dude.move();
	dude.castRays(playerAngle, numRays, rayLength);
}