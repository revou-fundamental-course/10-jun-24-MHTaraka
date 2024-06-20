let jenisC = document.getElementById('jenisKonversiC');
let jenisF = document.getElementById('jenisKonversiF');

let suhuAwal = document.getElementById('firstDeg');
let suhuAkhir = document.getElementById('secDeg');
let rumusPerhitungan = document.getElementById('rumus');
let kondisi = 1;

let labelAwal = document.querySelector('#labelAwal');
let labelAkhir = document.querySelector('#labelAKhir');

jenisC.style.display = 'block';
jenisF.style.display = 'none';

let judulCaraC = document.getElementById('judulCaraC')
let judulCaraF = document.getElementById('judulCaraF')

judulCaraC.style.display = 'block';
judulCaraF.style.display = 'none';

let keteranganC = document.getElementById('keteranganC')
let keteranganF = document.getElementById('keteranganF')

keteranganC.style.display = 'block';
keteranganF.style.display = 'none';

let rumusAsliC = document.getElementById('rumusAsliC')
let rumusAsliF = document.getElementById('rumusAsliF')

rumusAsliC.style.display = 'block';
rumusAsliF.style.display = 'none';

function Konversi() {
    if (kondisi==1){
        suhuAkhir.value = (suhuAwal.value * 9/5) + 32;
        rumusPerhitungan.value = `(${suhuAwal.value} x 9/5) + 32 = ${suhuAkhir.value}`;
    } else {
        suhuAkhir.value = (suhuAwal.value - 32) * 5/9;
        rumusPerhitungan.value = `(${suhuAwal.value} - 32) x 5/9 = ${suhuAkhir.value}`;
    }
}

function Restart() {
    suhuAkhir.value = "";
    suhuAwal.value = "";
    rumusPerhitungan.value = "";
}

function Switch() {
    Restart()
    kondisi = kondisi*-1;
    let label1 = labelAwal.textContent;
    let label2 = labelAkhir.textContent;
    labelAwal.textContent = label2;
    labelAkhir.textContent = label1;
    if (kondisi==-1) {
        jenisC.style.display = 'none';
        jenisF.style.display = 'block';
        judulCaraF.style.display = 'block';
        judulCaraC.style.display = 'none';
        keteranganF.style.display = 'block';
        keteranganC.style.display = 'none';
        rumusAsliF.style.display = 'block';
        rumusAsliC.style.display = 'none';
    } else {
        jenisC.style.display = 'block';
        jenisF.style.display = 'none';
        judulCaraC.style.display = 'block';
        judulCaraF.style.display = 'none';
        keteranganC.style.display = 'block';
        keteranganF.style.display = 'none';
        rumusAsliC.style.display = 'block';
        rumusAsliF.style.display = 'none';
    }
}