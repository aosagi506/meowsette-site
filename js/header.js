
fetch('header.html')
    .then(res => res.text())
    .then(data => {
        const header = document.getElementById('header');
        header.innerHTML = data;
        header.classList.add("loaded");
    })
    .catch(err => console.error('読み込みエラー',err));