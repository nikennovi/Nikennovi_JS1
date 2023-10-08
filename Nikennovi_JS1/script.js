// if, else, dan nested if

var nilai = 75;
// If, else
if (nilai >= 80) {
    console.log("Nilai Anda A");
} else if (nilai >= 70) {
    console.log("Nilai Anda B");
} else if (nilai >= 60) {
    console.log("Nilai Anda C");
} else {
    console.log("Anda tidak lulus");
}

// Nested if
var angka = 10;

if (angka > 0) {
    if (angka % 2 === 0) {
        console.log("Angka positif dan genap");
    } else {
        console.log("Angka positif dan ganjil");
    }
} else if (angka < 0) {
    console.log("Angka negatif");
} else {
    console.log("Angka adalah nol");
}

// switch case
var hari = 3;

switch (hari) {
    case 0:
        console.log("Ini hari Minggu");
        break;
    case 1:
        console.log("Ini hari Senin");
        break;
    case 2:
        console.log("Ini hari Selasa");
        break;
    case 3:
        console.log("Ini hari Rabu");
        break;
    case 4:
        console.log("Ini hari Kamis");
        break;
    case 5:
        console.log("Ini hari Jumat");
        break;
    case 6:
        console.log("Ini hari Sabtu");
        break;
    default:
        console.log("Hari yang Anda masukkan tidak valid");
}

// for
for (var i = 0; i <= 10; i++) {
    console.log(i);
}

//while
var i = 1;
while (i <= 8) {
    console.log(i);
    i++;
}

// do while
var j = 1;

do {
    console.log(j);
    j++;
} while (j <= 8);

// function
function bagi(angka1, angka2) {
    if (angka2 !== 0) {
        return angka1 / angka2;
    } else {
        return "Pembagian oleh nol tidak valid";
    }
    var hasilBagi = bagi(8, 2);
    console.log("Hasil Pembagian: " + hasilBagi);
}
