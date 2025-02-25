let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
	//1
	input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
	input.splice(4, 1, "Pria", "SMA Internasional Metro");
	console.log(input);

	//2
	let tanggal = input[3];
	let bulan = tanggal.slice(4, 5);
	let namaBulan = "";
	switch (bulan) {
		case "1":
			namaBulan = "Januari";
			break;
		case "2":
			namaBulan = "Februari";
			break;
		case "3":
			namaBulan = "Maret";
			break;
		case "4":
			namaBulan = "April";
			break;
		case "5":
			namaBulan = "Mei";
			break;
		case "6":
			namaBulan = "Juni";
			break;
		case "7":
			namaBulan = "Juli";
			break;
		case "8":
			namaBulan = "Agustus";
			break;
		case "9":
			namaBulan = "September";
			break;
		case "10":
			namaBulan = "Oktober";
			break;
		case "11":
			namaBulan = "November";
			break;
		case "12":
			namaBulan = "Desember";
			break;
		default:
			break;
	}
	console.log(`${namaBulan}`);

	//3
	console.log(tanggal);
	let tanggal2 = tanggal.split("/");
	console.log([tanggal2[2], tanggal2[0], tanggal2[1]]);

	//4
	let nama = input[1];
	console.log(nama);
}

dataHandling(input);
