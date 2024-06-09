function submitData() {
    let nama = document.getElementById("name").value;
    let umur = document.getElementById("umur").value;
    let kota = document.getElementById("kota").value;
    let wr = document.getElementById("WR").value;
    let rr = document.getElementById("RR").value;
    let rank = document.getElementById("rank").value;
    let role = document.getElementById("role").value;
    let id = document.getElementById("ID").value;

    let url = `https://wa.me/6285697102235?text=Nama : ${nama}%0aUmur : ${umur}%0aAsal : ${kota}%0aWinrate : ${wr}%0aRank Tertinggi : ${rr}%0aRank Saat Ini : ${rank}%0aRole : ${role}%0aID ML : ${id}`;
    location.replace(url);
}

function submitData2() {
    let nama = document.getElementById("name").value;
    let umur = document.getElementById("umur").value;
    let kota = document.getElementById("kota").value;
    let wr = document.getElementById("WR").value;
    let rr = document.getElementById("RR").value;
    let rank = document.getElementById("rank").value;
    let role = document.getElementById("role").value;
    let id = document.getElementById("ID").value;
    let url = `https://wa.me/6283145372436?text=Nama : ${nama}%0aUmur : ${umur}%0aAsal : ${kota}%0aWinrate : ${wr}%0aRank Tertinggi : ${rr}%0aRank Saat Ini : ${rank}%0aRole : ${role}%0aID ML : ${id}`;
    location.replace(url);
}
