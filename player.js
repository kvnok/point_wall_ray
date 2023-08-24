class Player
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
		this.size = player_size;
		this.speed = 4;
	}

	move()
	{
		if (keyIsDown('W'.charCodeAt(0)))
			this.y -= this.speed;
		if (keyIsDown('A'.charCodeAt(0)))
			this.x -= this.speed;
		if (keyIsDown('S'.charCodeAt(0)))
			this.y += this.speed;
		if (keyIsDown('D'.charCodeAt(0)))
			this.x += this.speed;
		if (keyIsDown(LEFT_ARROW))
			playerAngle -= 3.25;
		if (keyIsDown(RIGHT_ARROW))
			playerAngle += 3.25;
	}

	display()
	{
		fill('#000000');
		rect(this.x, this.y, this.size);
	}

	castRays(playerAngle, numRays, rayLength)
	{
		for (let y = 0; y < amount_of_blocks; y++)
		{
			for (let x = 0; x < amount_of_blocks; x++)
			{
				blocks[y][x].reset_color();
			}
		}
		// 360.0
		const angleIncrement =  60.0 / numRays;
		for (let rayIndex = 0; rayIndex < numRays; rayIndex++)
		{
			let rayDirection = (playerAngle % 360) - 90.0 + rayIndex * angleIncrement;
			let radianAngle = radians(rayDirection);
			let endX = this.x + rayLength * cos(radianAngle);
			let endY = this.y + rayLength * sin(radianAngle);
			drawRay(this.x + this.size/2, this.y + this.size/2, endX, endY);
			for (let i = 0; i < rayLength/box_size * 10; i++)
			{
				collision_check(this.x + (box_size / 10) * i * cos(radianAngle), this.y + (box_size / 10) * i * sin(radianAngle));
			}
		}
	}
}
