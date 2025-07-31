let sudahDibuka = false;

function bukaAmplop() {
  if (sudahDibuka) return; // Cegah agar tidak dibuka ulang
  sudahDibuka = true;

  const amplop = document.querySelector('.amplop');
  const tutup = document.querySelector('.tutup');
  const isi = document.getElementById('isiSurat');
  const musik = document.getElementById('musik');

  // Animasi getar dulu
  amplop.classList.add('shake');

  // Setelah getar, baru buka
  setTimeout(() => {
    amplop.classList.remove('shake');
    tutup.style.transform = "rotateX(-180deg)";
    isi.style.opacity = 1;
    musik.play();
    buatBalon();
  }, 700);
}

function buatBalon() {
  const balonContainer = document.getElementById('balonContainer');

  setTimeout(() => {
    for (let i = 0; i < 15; i++) {
      const balon = document.createElement('div');
      balon.classList.add('balon');
      balon.style.left = Math.random() * 100 + 'vw';
      balon.style.backgroundColor = getRandomColor();
      balon.style.animationDuration = 4 + Math.random() * 3 + 's';
      balonContainer.appendChild(balon);

      // Hapus balon setelah 6 detik
      setTimeout(() => {
        balon.remove();
      }, 6000);
    }
  }, 400); // Tunggu sedikit sebelum balon naik
}

function getRandomColor() {
  const colors = ['#ff69b4', '#87CEFA', '#FFD700', '#FFB6C1', '#98FB98'];
  return colors[Math.floor(Math.random() * colors.length)];
}
