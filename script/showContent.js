// i want to interact with the buttons and the related content i want to see
const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

// loop each tab to click on
tabs.forEach((tab, index) => {
    tab.addEventListener('click', (event) => {
        const target = event.currentTarget; // use currentTarget to get the clicked tab
        tabs.forEach(t => {t.classList.remove('active');}); // remove when new tab
        tab.classList.add('active');

        all_content.forEach(content => {content.classList.remove('active');});
        all_content[index].classList.add('active');
    });
});
