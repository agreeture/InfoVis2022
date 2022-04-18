class Vec3 {
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	min(){
		const m =  this.x < this.y ? this.x : this.y;
		return m < this.z ? m : this.z;
	}

	max(){
		const m =  this.x < this.y ? this.y : this.x;
		return m < this.z ? this.z : m;
	}
	
	sum(){
		return this.x + this.y + this.z;
	}
	
	mid(){
		return this.sum() - this.min() - this.max();
	}
}