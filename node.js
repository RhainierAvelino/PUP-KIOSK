document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    const displayInfo = document.getElementById('display-info');
    const menu = document.getElementById('menu');

    function displayInfoBox(imageSrc, title, description, event) {
        // Get the mouse position
        const x = event.pageX; 
        const y = event.pageY;

        displayInfo.innerHTML = `
            <div class="info-box" style="left: ${x + 10}px; top: ${y + 10}px;">
                <img src="${imageSrc}" alt="${title}">
                <h2>${title}</h2>
                <p>${description}</p>
            </div>
        `;
    }

    function exitInfoBox() {
        // Clear the info box
        displayInfo.innerHTML = '';
    }

    function toggleMenu() {
        // Toggle the menu link: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    }

    function showLocationInfo(pinId, imageSrc, title, description) {
        // Get the pin position
        const pin = document.getElementById(pinId);
        // Get the position of the pin
        const rect = pin.getBoundingClientRect();
        // Get the scroll position
        const x = rect.left + window.scrollX; 
        const y = rect.top + window.scrollY; 

        displayInfo.innerHTML = `
            <div class="info-box" style="left: ${x + 10}px; top: ${y + 10}px;">
                <img src="${imageSrc}" alt="${title}">
                <h2>${title}</h2>
                <p>${description}</p>
            </div>
        `;
        menu.style.display = 'none';
    }

    window.displayInfoBox = displayInfoBox;
    window.exitInfoBox = exitInfoBox;
    window.toggleMenu = toggleMenu;
    window.showLocationInfo = showLocationInfo;
});