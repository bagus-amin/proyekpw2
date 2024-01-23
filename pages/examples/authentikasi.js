//buat fungsi
//ambil nilai username
//ambil nilai password
//cek apakah username dan password benar dengan yang kita tentukan nilainya
//jika benar berikan alert berhasil login dan arahkan ke file index
//jika password dan username kosong 
//maka berikan alert password dan username kosong
//jika password dan username salah 
//tampilkan username dan password salah 
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "kelompok7" && password == "123456") {
        alert('Wellcome');
        window.location = "tampilan1.html"
        return false;
    }
    else if (username ==""|| password=="") {
        alert("ISII DULU !")
        return false;
    }
    else {
        alert("SALAH!!  ")
    }
}