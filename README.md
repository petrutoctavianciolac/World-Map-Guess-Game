# World Map Guessing Game

This project is a web-based game where players are challenged to guess and complete a world map by identifying countries. The game is built using JavaScript and HTML, and it includes a ranking system to track and display players' scores, implemented using `localStorage`.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Gameplay Instructions](#gameplay-instructions)
- [Ranking System](#ranking-system)
- [Code Explanation](#code-explanation)

## Overview

The World Map Guessing Game tests your knowledge of global geography. As you guess countries correctly, they are highlighted on the map, and your score increases. The game includes a ranking page where players can see their best scores, saved locally on their devices using `localStorage`.

## Features

- **Interactive World Map**: Players can guess countries, and correct guesses are visually highlighted on the map.
- **Real-time Feedback**: Immediate response when a country is guessed correctly.
- **Time preasure**: Just 15 minutes per game for a more competitive interaction.
- **Score Tracking**: Players' scores are tracked and displayed during gameplay.
- **Ranking Page**: A separate page displays the top scores, stored locally using `localStorage`.
- **Responsive Design**: The game is designed to be playable on various screen sizes.

## Technologies Used

- **HTML5**: Structuring the game interface.
- **CSS3**: Styling the game and making it visually appealing.
- **JavaScript**: Implementing the game logic, country validation, and ranking system.
- **localStorage**: Persisting players' scores for the ranking page.

## Getting Started

### Prerequisites

To run the game locally, you'll need a modern web browser. No additional software or dependencies are required.

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/world-map-guessing-game.git
    ```

2. Navigate to the project directory:

    ```bash
    cd world-map-guessing-game
    ```

3. Open `index.html` in your web browser to start playing the game.

## Gameplay Instructions

1. **Start the Game**: The game begins with a blank world map.
2. **Guess a Country**: Type the name of a country in the input field and press "Enter".
3. **Highlight the Country**: If your guess is correct, the country will be highlighted on the map.
4. **Track Your Score**: The number of countries you've correctly identified is displayed on the screen.
5. **Timer**: Initially given 15 minutes and when the time pass the game is over.
6. **View Rankings**: After finishing the game, you can view the `Ranking` page to see the top scores saved in your browser.

## Ranking System

The ranking system stores and displays the best 10 scores achieved in the game. The scores are saved in the browser's `localStorage`, allowing them to persist even after the page is refreshed or the browser is closed. Players can compete to achieve the highest score and see where they stand on the ranking page.

### Viewing Rankings

1. After completing a round of the game, your score is automatically saved.
2. Visit the `Ranking` page to see the list of top scores.
3. Scores are ranked from highest to lowest(in case of egality the fastest one is the first).

## Code Explanation

### HTML Structure

The project consists of an `index.html` file where the main gameplay takes place, and a `ranking.html` file for the ranking page.

- **index.html**: Contains the map, input field for country names, the timer and the score display.
- **ranking.html**: Displays the top scores saved in `localStorage`.

### JavaScript Logic

- **Map Interaction**: The script listens for keypress events, checks if the entered country is correct, and updates the map.
- **Score Management**: The score is updated in real-time and stored in `localStorage` upon completion.
- **Ranking Display**: The ranking page retrieves and displays scores from `localStorage`.

