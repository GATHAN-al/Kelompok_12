window.addEventListener('scroll', function() { /* Ketika user scoll, function akan berjalan */
    const navbar = document.querySelector('.navbar'); /* Ambil class 'navbar' dri index dan menyimpannya ke variabel navbar */
    if (window.scrollY > 50) { /* Jika halaman yg di scroll > 50px, kondisi = true */
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
