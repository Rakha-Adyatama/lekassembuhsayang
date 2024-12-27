onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('Lekas Sembuh Araku Sayang,Semoga Selalu Di kelilingi Orang Orang Baik Di setiap Langkahmu,Love You Anymore♥️🫶').split('')
        const titleElement = document.getElementById('title');
        let index = 0;

        function appendTitle() {
            if (index < titles.length) {
                titleElement.innerHTML += titles[index];
                index++;
                setTimeout(appendTitle, 100); // 1000ms delay
            }
        }

        appendTitle();

        clearTimeout(c);
    }, 1000);
};