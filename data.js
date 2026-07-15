const namaSaya = "Zalfa Hidayat";
let usiaSaya =10;

let Profil = document.getElementById("Profil");

function tampilkanProfil() {
    let generasi;

    if (usiaSaya > 10 && usiaSaya <15) {
        generasi = "generasi remaja";
    } 
    else if (usiaSaya > 15 && usiaSaya < 25) {
        generasi = "generasi dewasa";
    }
    else if (usiaSaya > 25 && usiaSaya < 40) {
        generasi = "generasi tua";
    }
    else if (usiaSaya > 2  && usiaSaya < 10) {
        generasi = "generasi anak";
    }
    else {
        generasi = "generasi bayi";
    }

   return Profil.innerHTML = generasi;
}

console.log(namaSaya);
console.log(usiaSaya);

tampilkanProfil();