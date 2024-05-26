function getValue() {
    let result1 = document.getElementById("name").value;
    let result2 = document.getElementById("umur").value;
    let result3 = document.getElementById("kota").value;
    let result4 = document.getElementById("WR").value;
    let result5 = document.getElementById("RR").value;
    let result6 = document.getElementById("rank").value;
    let result7 = document.getElementById("role").value;
    let result8 = document.getElementById("ID").value;
    let allResults = [
        `nama : ${result1}`,
        `umur : ${result2}`,
        `asal : ${result3}`,
        `Rank Tertinggi : ${result5}`,
        `Rank saat ini : ${result6}`,
        `Role : ${result7}`,
        `ID : ${result8}`
    ];
    const test = allResults.toString();
    console.log(test);
    const submit = `https://wa.me/6283145372436?text=hallo`;
    location.replace(submit)
    //window.open(submit, "_blank");
}
