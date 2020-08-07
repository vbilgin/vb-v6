let eye = document.getElementById('eye');

if (eye !== null) {
  eye.addEventListener('click', () => {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
});
}


