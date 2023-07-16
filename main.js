let upahPerHari = document.getElementById('upahPerHari');
let jamKerjaPerHari = document.getElementById('jamKerjaPerHari');
let waktuKerjaPerUnit = document.getElementById('waktuKerjaPerUnit');
let hasil = document.getElementById('hasil');
let btn = document.getElementById('btn');

// buat event ketika button di klik
btn.addEventListener('click', function () {
  let result =
    (upahPerHari.value * (waktuKerjaPerUnit.value / 60)) /
    jamKerjaPerHari.value;

  let result2 = Math.ceil(result);
  const angkaDenganTitik = result2.toLocaleString('id-ID');
  // bulatkan hasil dengan angka ribuan

  hasil.innerHTML = 'Rp ' + angkaDenganTitik;
});
// tampilkan nilai upahPerHari di html id hasil
console.log(hasil);
