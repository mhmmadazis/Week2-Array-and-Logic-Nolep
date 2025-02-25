function angkaPalindrome(num) {
	let angka = num.toString();
	let result = "";
	for (let i = angka.length - 1; i >= 0; i--) {
		result += angka[i];
		if (result !== angka) {
			for (let j = angka; j != result; j++) {
				return result;
			}
		} else {
			return result;
		}
	}
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
