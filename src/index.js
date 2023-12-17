import 'normalize.css';
import './styles/main.scss';

const tabNav = document.querySelectorAll('.main__btn_tab'),
tabContent = document.querySelectorAll('.tab'),
btn = document.getElementById('btn');
let tabName;

tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav);
    item.addEventListener('click', checkTabs);
});

function selectTabNav() {
    tabNav.forEach(item  => {
        item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    this.classList.add('checked');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
}

function selectTabContent(tabName) {
    tabContent.forEach(item => {
        item.classList.contains(tabName) ? item.classList.add('is-active', 'checked') : item.classList.remove('is-active');
    });
}

function checkTabs() {
    let allTabsClicked = true;
    tabNav.forEach(tab => {
        if (!tab.classList.contains('checked')) {
            allTabsClicked = false;
        }
    });
    if (allTabsClicked) {
        btn.disabled = false;
    }
}
