import React from "react";
import Card from "./card";

function GameBoard({ cards, flippedCards, matchedCards, handleCardClick, difficulty }) {
    if (!cards || cards.length === 0) {
        return <p>Loading cards...</p>; // Debugging: If no cards, show message
    }

    // Apply the correct grid size based on difficulty
    const gridSize = difficulty === "4x4" ? "grid-4x4" : difficulty === "6x6" ? "grid-6x6" : "grid-8x8";

    return (
        <div className={`game-board ${gridSize}`}>
            {cards.map((symbol, index) => (
                <Card
                    key={index}
                    index={index}
                    symbol={symbol}
                    isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
                    handleCardClick={handleCardClick} />
            ))}
        </div>
    );
}

export default GameBoard;
