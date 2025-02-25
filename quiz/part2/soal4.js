function pasanganTerbesar(num) {
	// you can only write your code here!
	let text = num.toString();
	let trbesar = 0;
	for (let i = 0; i < text.length; i++) {
		const pasang = parseInt(text[i] + text[i + 1]);
		if (pasang > trbesar) {
			trbesar = pasang;
		}
	}
	return trbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
