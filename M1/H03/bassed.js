class Jajan{
	constructor(nama, warna){
		this.nama = nama;
		this.warna = warna;
	}

	getName(){
		return this.nama+" "+this.warna;
		console.log(nama+" "+warna);
	}
}

class Roti extends Jajan{
	getName(){
		return super.getName();
	}
}

let inputroti = new Roti("Kukus", "Hijau");
inputroti.getName();
console.log(inputroti.getName());