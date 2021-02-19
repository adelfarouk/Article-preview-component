const svg = document.getElementById('svg');
const activeState = document.getElementById('active-state');


// Functions
function showActiveState() {
    activeState.classList.toggle('hidden');
}


// Event listener
svg.addEventListener('click', showActiveState);
