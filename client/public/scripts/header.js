const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'grid header-container';

// Left section
const headerLeft = document.createElement('div')
headerLeft.className = 'header-left';

const logo = document.createElement('img');
logo.src = '/logo.png';
headerLeft.appendChild(logo);

// Center section
const headerCenter = document.createElement('div');
headerCenter.className = 'header-center';

const headerTitle = document.createElement('h1');
headerTitle.textContent = 'My Main Marvel Rivals Heroes';
headerCenter.appendChild(headerTitle);

// Right section
const headerRight = document.createElement('div');
headerRight.className = 'header-right';
const headerButton = document.createElement('button');
headerButton.textContent = 'Home';

headerButton.setAttribute('role', 'button');
headerButton.addEventListener('click', function handleClick(event) {
    window.location = '/'
});
headerRight.appendChild(headerButton);

    
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerCenter);
headerContainer.appendChild(headerRight);

header.appendChild(headerContainer);

