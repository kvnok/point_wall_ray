class Block
{
	constructor(x, y, color, n)
	{
		this.x = x;
		this.y = y;
		this.size = box_size;
		this.color = color;
		if (n == 1)
			this.color = '#6f7a72';
		this.n = n;
	}

	change_color(color)
	{
		this.color = color;
	}

	reset_color()
	{
		if (this.n == 1)
			this.color = '#6f7a72';
		if (this.n == 0)
			this.color = '#FFFFFF';
	}

	display()
	{
		fill(this.color);
		rect(this.x, this.y, this.size);
	}
}
