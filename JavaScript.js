// Saat dokumen dimuat, tambahkan event listener untuk mendeteksi scrolling
window.onload = function() {
    window.addEventListener('scroll', scrollFunction);
  };
  
  // Fungsi untuk menampilkan/menyembunyikan tombol kembali ke atas berdasarkan posisi scroll
  function scrollFunction() {
    var mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // Fungsi untuk menggulir kembali ke atas saat tombol diklik
  function topFunction() {
    document.body.scrollTop = 0; // Untuk Safari
    document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
  }
  