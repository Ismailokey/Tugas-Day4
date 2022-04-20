let tahun = prompt('masukan tahun');

if (tahun % 400 == 0){
     alert("Kabisat");
} else if (tahun % 100 == 0){
     alert ("Bukan Kabisat")
} else if (tahun % 4 == 0){
     alert ("Kabisat")
} else {
     alert ("Bukan Kabisat")
}