function submitData() {
    let nama = document.getElementById("name").value;
    let umur = document.getElementById("umur").value;
    let kota = document.getElementById("kota").value;
    let wr = document.getElementById("WR").value;
    let rr = document.getElementById("RR").value;
    let rank = document.getElementById("rank").value;
    let role = document.getElementById("role").value;
    let id = document.getElementById("ID").value;

    if (
        nama === "" ||
        umur === "" ||
        kota === "" ||
        wr === "" ||
        rr === "" ||
        role === ""
    ) {
        alert("Please fill in all the fields.");
    } else if (!isNaN(id)) {
        alert("ID must be a number.");
    } else if (!isNaN(rank) && !isNaN(rank.split(" ")[1])) {
        alert("Rank must be a number followed by text.");
    } else {
        let url = `https://wa.me/6281234567890?text=Nama : ${nama}%0aUmur : ${umur}%0aAsal : ${kota}%0aWinrate : ${wr}%0aRank Tertinggi : ${rr}%0aRank Saat Ini : ${rank}%0aRole : ${role}%0aID ML : ${id}`;
        location.replace(url);
    }
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

    if (
        nama === "" ||
        umur === "" ||
        kota === "" ||
        wr === "" ||
        rr === "" ||
        role === ""
    ) {
        alert("Please fill in all the fields.");
    } else if (!isNaN(id)) {
        alert("ID must be a text.");
    } else if (!isNaN(rank) && !isNaN(rank.split(" ")[1])) {
        alert("Rank must be a number followed by text.");
    } else {
        let url = `https://wa.me/6289876543210?text=Nama : ${nama}%0aUmur : ${umur}%0aAsal : ${kota}%0aWinrate : ${wr}%0aRank Tertinggi : ${rr}%0aRank Saat Ini : ${rank}%0aRole : ${role}%0aID ML : ${id}`;
        location.replace(url);
    }
}
