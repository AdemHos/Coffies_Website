const menuItems = document.getElementById('menu-items');
menuItems.style.maxHeight = '0px';
const menuIcon = document. getElementById('menu-icon');


function menuToggle () {
    if(menuItems.style.maxHeight =='0px') {
        menuItems.style.maxHeight = '200px';
    
    
    }else {
        menuItems.style.maxHeight = '0px';
    }
}




