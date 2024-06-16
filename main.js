function submitData(phoneNumber) {
    let nama = document.getElementById("name").value;
    let umur = document.getElementById("umur").value;
    let kota = document.getElementById("kota").value;
    let wr = document.getElementById("WR").value;
    let rr = document.getElementById("RR").value;
    let rank = document.getElementById("rank").value;
    let role = document.getElementById("role").value;
    let id = document.getElementById("ID").value;

    if (!nama ||!umur ||!kota ||!wr ||!rr ||!rank ||!role ||!id) {
        alert("isi semua forms yang disediakan");
        return;
    }

    if (!/^[a-zA-Z0-9 ]+$/.test(rank)) {
        alert("isi rank sama bintang");
        return;
    }

    if (!/^[a-zA-Z0-9 ]+$/.test(rr)) {
        alert("isi rank sama bintang");
        return;
    }
/*
    if (rr >= "50") {
        let url = `https://wa.me/${phoneNumber}?text=Nama : ${nama}%0aUmur : ${umur}%0aAsal : ${kota}%0aWinrate : ${wr}%0aRank Tertinggi : ${rr}%0aRank Saat Ini : ${rank}%0aRole : ${role}%0aID ML : ${id}%0aMasuk NXL1`;
    } else {
        let url = `https://wa.me/${phoneNumber}?text=Nama : ${nama}%0aUmur : ${umur}%0aAsal : ${kota}%0aWinrate : ${wr}%0aRank Tertinggi : ${rr}%0aRank Saat Ini : ${rank}%0aRole : ${role}%0aID ML : ${id}%0aMasuk NXL2`;
    }
    */
    let url = `https://wa.me/${phoneNumber}?text=Nama : ${nama}%0aUmur : ${umur}%0aAsal : ${kota}%0aWinrate : ${wr}%0aRank Tertinggi : ${rr}%0aRank Saat Ini : ${rank}%0aRole : ${role}%0aID ML : ${id}`;
    location.replace(url);
}
