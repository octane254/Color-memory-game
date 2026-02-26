# 🎨 Color Memory Game

A classic memory matching game built with vanilla HTML, CSS, and JavaScript. Match pairs of colored cards to win!

![Game Status](https://img.shields.io/badge/status-in%20development-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📖 Table of Contents

- [About](#about)
- [Features](#features)
- [How to Play](#how-to-play)
- [Installation](#installation)
- [Game Mechanics](#game-mechanics)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Learning Objectives](#learning-objectives)
- [Current Status](#current-status)
- [Roadmap](#roadmap)
- [Contributing](#contributing)


---

## 🎯 About

This is a browser-based memory card game where players flip cards to find matching pairs of colors. The game tracks moves and matches, providing an engaging way to learn fundamental web development concepts.

**Built as a learning project to demonstrate:**
- HTML structure and semantic markup
- CSS Grid layout and modern styling
- Vanilla JavaScript fundamentals
- DOM manipulation
- Event handling
- Game logic and state management

---

## ✨ Features

### Current Features
- ✅ 4×4 grid with 16 cards (8 color pairs)
- ✅ Responsive design (works on mobile and desktop)
- ✅ Beautiful gradient background
- ✅ Smooth hover effects and transitions
- ✅ Score tracking (moves and matches)
- ✅ Card shuffle algorithm for random gameplay
- ✅ New Game button to restart

### Planned Features
- ⏳ Flip animation
- ⏳ Timer to track game duration
- ⏳ Best score/time tracking
- ⏳ Difficulty levels (3×4, 4×4, 6×6 grids)
- ⏳ Sound effects
- ⏳ Winning celebration animation
- ⏳ Theme switcher (different color palettes)

---

## 🎮 How to Play

1. **Start the Game**: Click "New Game" to shuffle and begin
2. **Flip Cards**: Click any card to reveal its color
3. **Find Matches**: Click a second card to find its pair
   - ✅ **Match**: Cards stay flipped
   - ❌ **No Match**: Cards flip back after 1 second
4. **Win**: Match all 8 pairs to complete the game
5. **Challenge Yourself**: Try to win in the fewest moves!

---

## 🚀 Installation

### Option 1: Direct Download
1. Download `memory-game.html`
2. Open the file in any modern web browser
3. No server or dependencies required!

### Option 2: Clone Repository
```bash
git clone https://github.com/yourusername/color-memory-game.git
cd color-memory-game
open memory-game.html
```

### Option 3: Live Server (for development)
```bash
# If using VS Code with Live Server extension
# Right-click on memory-game.html → Open with Live Server
```

---

## 🧠 Game Mechanics

### How It Works

**1. Initialization**
- 8 colors defined in JavaScript array
- Colors duplicated to create pairs (8 × 2 = 16 cards)
- Fisher-Yates shuffle algorithm randomizes positions

**2. Card Flipping**
- Click event listener on each card
- First click: Flip and store card
- Second click: Compare with first card

**3. Match Logic**
```
IF colors match:
  - Keep both cards flipped
  - Add to match count
  - Check for win condition
ELSE:
  - Wait 1 second (show mismatch)
  - Flip both cards back
```

**4. Win Condition**
- All 8 pairs matched (matches === 8)
- Display winning message with move count

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Structure and semantic markup |
| **CSS3** | Styling, Grid layout, animations |
| **JavaScript (ES6+)** | Game logic, DOM manipulation, events |

### Key JavaScript Concepts
- Variables (`let`, `const`)
- Arrays and array methods
- Functions and arrow functions
- Loops (`for`, `forEach`)
- Event listeners
- DOM manipulation
- Conditionals (`if`/`else`)
- `setTimeout` for delays
- Data attributes

### Key CSS Concepts
- CSS Grid (`display: grid`)
- Flexbox centering
- CSS transitions
- Hover effects
- Box shadows
- Gradient backgrounds
- Responsive design

---

## 📁 Project Structure

```
color-memory-game/
│
├── memory-game.html          # Main game file (HTML + CSS + JS)
├── README.md                 # Project documentation
│
└── (future files)
    ├── style.css             # Separated CSS
    ├── script.js             # Separated JavaScript
    └── assets/               # Images, sounds, etc.
```

**Current Setup**: All code in a single HTML file for simplicity and portability.

---

## 📚 Learning Objectives

This project is designed to teach:

### HTML
- Semantic HTML structure
- IDs vs Classes
- Data attributes (`data-*`)

### CSS
- CSS Grid for layouts
- Responsive design principles
- State-based styling (`:hover`, classes)
- Transitions and animations
- Box model and spacing

### JavaScript
- **Variables**: `let` and `const`
- **Arrays**: Creation, manipulation, spread operator
- **Functions**: Declaration, parameters, return values
- **Loops**: `for` loops and `forEach`
- **DOM Manipulation**: 
  - `getElementById()`
  - `createElement()`
  - `appendChild()`
  - `classList` methods
- **Events**: `addEventListener`
- **Conditionals**: `if`/`else` logic
- **Timing**: `setTimeout()`
- **Algorithms**: Fisher-Yates shuffle

---

## 📊 Current Status

### Completed ✅
- [x] HTML structure
- [x] CSS styling and layout
- [x] Variable declarations
- [x] Shuffle function
- [x] startGame() function
- [x] Card creation and rendering

### In Progress 🚧
- [ ] flipCard() function
- [ ] checkMatch() function
- [ ] Win condition logic

### Not Started ⏳
- [ ] Animations
- [ ] Timer
- [ ] Sound effects
- [ ] Additional features

**Progress**: ~60% complete

---

## 🗺️ Roadmap

### Phase 1: Core Functionality ⚡
- [x] Setup and structure
- [ ] Complete game logic
- [ ] Basic gameplay working

### Phase 2: Polish ✨
- [ ] Smooth flip animations
- [ ] Better win screen
- [ ] Timer feature
- [ ] Move counter optimization

### Phase 3: Enhancements 🚀
- [ ] Multiple difficulty levels
- [ ] Theme customization
- [ ] Local storage for high scores
- [ ] Sound effects and music
- [ ] Accessibility improvements

### Phase 4: Advanced 🎯
- [ ] Multiplayer mode
- [ ] Online leaderboards
- [ ] Custom card images
- [ ] Progressive Web App (PWA)

---

## 🎓 Code Comments

This project is **heavily commented** for educational purposes. Each section includes:
- **What** the code does
- **Why** it's written that way
- **How** it works
- Real-world analogies

Perfect for beginners learning web development!

---

## 🤝 Contributing

This is a learning project, but contributions are welcome!

**Ways to contribute:**
1. Report bugs or issues
2. Suggest new features
3. Improve documentation
4. Add comments or explanations
5. Optimize code

**To contribute:**
```bash
1. Fork the repository
2. Create a feature branch (git checkout -b feature/AmazingFeature)
3. Commit changes (git commit -m 'Add some AmazingFeature')
4. Push to branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
```

---

## 🙏 Acknowledgments

- Built as a learning project for web development fundamentals
- Inspired by classic memory card games
- Fisher-Yates shuffle algorithm
- Color palette inspired by modern UI design

---

## 📧 Contact

**Questions or feedback?**
- Open an issue on GitHub
- Email: mbithieri@gmail.com
- Twitter: @_ericmbithi

---


**Happy Coding! 🚀**

Built with ❤️ and lots of ☕