// Loader fade out after page load
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if(loader){
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 500);
  }
});
