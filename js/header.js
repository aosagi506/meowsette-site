
fetch('header.html')
    .then(res => res.text())
    .then(data => {
        const header = document.getElementById('header');
        header.innerHTML = data;
        header.classList.add("loaded");
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            setTimeout(() => {
                overlay.classList.add('loaded');
            }, 100);
        }
    }).catch(err => console.error('読み込みエラー', err));
function spMenu() {
    document.getElementById('spMenuHidden').style.display = 'none';
    document.getElementById('spMenuVisible').style.display = 'block';
}
function spMenu2() {
    document.getElementById('spMenuHidden').style.display = 'block';
    document.getElementById('spMenuVisible').style.display = 'none';
}
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        document.getElementById('spMenuHidden').style.display = '';
        document.getElementById('spMenuVisible').style.display = '';
    }
});
function CharaPush(){
    sessionStorage.setItem('modalOpen','false');
}
