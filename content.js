let commandMode = false;
let currentCardIndex = -1;
const HIGHLIGHT_COLOR = '0 0 10px #00f, 0 0 20px #00f';  // neon blue effect

function getAllCards() {
    return Array.from(document.querySelectorAll('.uk-card.msg-card'));
}

function highlightCard(index) {
    const cards = getAllCards();
    // Remove highlight from all cards
    cards.forEach(card => card.style.boxShadow = '');
    
    if (index >= 0 && index < cards.length) {
        cards[index].style.boxShadow = HIGHLIGHT_COLOR;
        cards[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

document.addEventListener('keydown', function(event) {
    if (commandMode) {
        event.preventDefault();  // Prevent all keystrokes in command mode
        
        if (event.key === 'Escape') {
            commandMode = false;
            highlightCard(-1);
            const textarea = document.getElementById('myeditor');
            if (textarea) {
                textarea.focus();
            }
        } else if (event.key === 'j' || event.key === 'ArrowDown') {
            currentCardIndex = Math.min(currentCardIndex + 1, getAllCards().length - 1);
            highlightCard(currentCardIndex);
        } else if (event.key === 'k' || event.key === 'ArrowUp') {
            currentCardIndex = Math.max(currentCardIndex - 1, 0);
            highlightCard(currentCardIndex);
        } else if (event.key === 'x') {
            const cards = getAllCards();
            if (currentCardIndex >= 0 && currentCardIndex < cards.length) {
                const deleteButton = cards[currentCardIndex].querySelector('button[hx-get^="/rm_msg"]');
                if (deleteButton) {
                    deleteButton.click();
                }
            }
        } else if (event.key === 'e') {
            const cards = getAllCards();
            if (currentCardIndex >= 0 && currentCardIndex < cards.length) {
                const editElement = cards[currentCardIndex].querySelector('[title="Click to edit"]');
                if (editElement) {
                    editElement.click();
                    commandMode = false;
                    highlightCard(-1);
                }
            }
        }
    }
    
    if (event.ctrlKey && event.key === 'b') {
        event.preventDefault();
        commandMode = true;
        const cards = getAllCards();
        currentCardIndex = cards.length - 1;
        highlightCard(currentCardIndex);
    }
}, true);

