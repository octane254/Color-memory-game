 let moves = 0;          // How many moves player has made
        let matches = 0;        // How many pairs found
        let flippedCards = [];  // Array to store currently flipped cards
        let canFlip = true;     // Boolean to prevent flipping during checks
        
        // ARRAYS: Lists of related data
        // These are our color themes - arrays of color pairs
        const colorThemes = [
            ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'],
            ['#FF1744', '#00E676', '#2979FF', '#FFC400', '#E91E63', '#00BFA5', '#651FFF', '#FF6D00'],
            ['#FA8072', '#20B2AA', '#9370DB', '#3CB371', '#FF69B4', '#4682B4', '#F0E68C', '#DDA0DD']
        ];
        
        let currentTheme = 0; // Which theme are we using?
        let colors = [...colorThemes[currentTheme]]; // Copy the current theme
        
        // FUNCTIONS: Reusable blocks of code
        
        // Function to shuffle an array (Fisher-Yates algorithm)
        function shuffle(array) {
            // Loop through array backwards
            for (let i = array.length - 1; i > 0; i--) {
                // Pick random index from 0 to i
                const j = Math.floor(Math.random() * (i + 1));
                // Swap elements at i and j
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
        
        // Function to start a new game
        function startGame() {
            // Reset all variables
            moves = 0;
            matches = 0;
            flippedCards = [];
            canFlip = true;
            
            // Update the display
            document.getElementById('moves').textContent = moves;
            document.getElementById('matches').textContent = matches;
            document.getElementById('message').textContent = '';
            
            // Create card pairs: each color appears twice
            const cardColors = [...colors, ...colors]; // ... spreads array
            
            // Shuffle the cards
            shuffle(cardColors);
            
            // Get the board element from HTML
            const board = document.getElementById('board');
            board.innerHTML = ''; // Clear any existing cards
            
            // Create 16 cards (8 pairs)
            // forEach loops through each item in array
            cardColors.forEach((color, index) => {
                // Create a new button element
                const card = document.createElement('button');
                card.className = 'card'; // Add the 'card' class for styling
                card.dataset.color = color; // Store color in data attribute
                card.dataset.index = index; // Store index for identification
                
                // Add click event listener
                // When clicked, call flipCard function
                card.addEventListener('click', () => flipCard(card));
                
                // Add card to board
                board.appendChild(card);
            });
        }
        
        // Function called when a card is clicked
        function flipCard(card) {
            // CONDITIONALS: if/else statements control flow
            
            // Check if we can flip (not during checking phase)
            if (!canFlip) return;
            
            // Check if card is already flipped or matched
            if (card.classList.contains('flipped') || 
                card.classList.contains('matched')) {
                return; // Exit function early
            }
            
            // Flip the card by adding class and showing color
            card.classList.add('flipped');
            card.style.backgroundColor = card.dataset.color;
            
            // Add to flippedCards array
            flippedCards.push(card);
            
            // If two cards are flipped, check for match
            if (flippedCards.length === 2) {
                moves++; // Increment moves
                document.getElementById('moves').textContent = moves;
                checkMatch(); // Check if they match
            }
        }
        
        // Function to check if two flipped cards match
        function checkMatch() {
            canFlip = false; // Prevent more flips during check
            
            const [card1, card2] = flippedCards; // Destructure array
            
            // Check if colors match
            if (card1.dataset.color === card2.dataset.color) {
                // MATCH! 
                card1.classList.add('matched');
                card2.classList.add('matched');
                matches++;
                document.getElementById('matches').textContent = matches;
                document.getElementById('message').textContent = '✨ Match!';
                
                // Check if game is won (all 8 pairs found)
                if (matches === 8) {
                    // setTimeout delays execution
                    setTimeout(() => {
                        document.getElementById('message').textContent = 
                            `🎉 You won in ${moves} moves!`;
                    }, 500);
                }
                
                flippedCards = []; // Clear flipped cards
                canFlip = true; // Allow flipping again
            } else {
                // NO MATCH - flip back after delay
                document.getElementById('message').textContent = '❌ Try again';
                
                setTimeout(() => {
                    // Remove flip and reset background
                    card1.classList.remove('flipped');
                    card2.classList.remove('flipped');
                    card1.style.backgroundColor = '#e0e0e0';
                    card2.style.backgroundColor = '#e0e0e0';
                    
                    flippedCards = [];
                    canFlip = true;
                    document.getElementById('message').textContent = '';
                }, 1000); // Wait 1 second (1000 milliseconds)
            }
        }
        
        // Function to change color theme
        function changeTheme() {
            // Cycle through themes using modulo operator
            currentTheme = (currentTheme + 1) % colorThemes.length;
            colors = [...colorThemes[currentTheme]];
            startGame(); // Start new game with new colors
        }
        
        // Start the game when page loads
        startGame();