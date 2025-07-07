// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    document.getElementById('mobile-drawer').classList.remove('drawer-closed');
    document.getElementById('mobile-drawer').classList.add('drawer-open');
});

document.getElementById('close-drawer').addEventListener('click', function() {
    document.getElementById('mobile-drawer').classList.remove('drawer-open');
    document.getElementById('mobile-drawer').classList.add('drawer-closed');
});

// Modal handling
const signupButtons = document.querySelectorAll('.signup-btn');
signupButtons.forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('signup-modal').classList.remove('hidden');
    });
});

document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('signup-modal').classList.add('hidden');
});

document.getElementById('cancel-modal').addEventListener('click', function() {
    document.getElementById('signup-modal').classList.add('hidden');
});

// Tab functionality
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('tab-active'));
        this.classList.add('tab-active');
    });
});

// Skill chip addition
const skillInputs = document.querySelectorAll('input[placeholder="Add a skill"]');
skillInputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value.trim() !== '') {
            const container = this.parentElement;
            const chip = document.createElement('span');
            chip.className = 'skill-chip bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full';
            chip.textContent = this.value.trim();
            
            // Add remove button
            const removeBtn = document.createElement('button');
            removeBtn.innerHTML = '&times;';
            removeBtn.className = 'ml-1 text-indigo-600 hover:text-indigo-800';
            removeBtn.addEventListener('click', function() {
                chip.remove();
            });
            
            chip.appendChild(removeBtn);
            container.insertBefore(chip, this);
            this.value = '';
        }
    });
}); 