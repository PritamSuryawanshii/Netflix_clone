const tabItems = document.querySelectorAll(`.tab-item`);
const tabContentItems = document.querySelectorAll(`.tab-content-item`);


function selectItem(e){
    removeBorder();
    removeShow();
    this.classList.add(`tab-border`);
    
    const tabContentItems = document.querySelector(`#${this.id}-content`);
    tabContentItems.classList.add(`show`)
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove(`tab-border`))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove(`show`))
}

tabItems.forEach(item =>  item.addEventListener('click', selectItem));

