import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Match = () => {
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth / 3;

  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [wrongPair, setWrongPair] = useState(false);
  const [shuffledPairs, setShuffledPairs] = useState([]);

  const vocabPairs = [
    { english: "Father", turkish: "Baba" },
    { english: "Mother", turkish: "Anne" },
    { english: "Brother", turkish: "Kardeş" },
    { english: "Sister", turkish: "Kız kardeş" },
    { english: "Elder brother", turkish: "Abi" },
    { english: "Elder sister", turkish: "Abla" },
    { english: "Grand father", turkish: "Dede" },
    { english: "Grand mother", turkish: "Büyük anne" },
    { english: "Grand child", turkish: "Torun" },
    { english: "Husband", turkish: "Koca" },
    { english: "Wife", turkish: "Hanım" },
    { english: "Spouse", turkish: "Eş" },
    { english: "Son", turkish: "Oğul" },
    { english: "Daughter", turkish: "Kız" },
  ];

  // Shuffle pairs only once when the component mounts
  useEffect(() => {
    const shuffled = vocabPairs
      .flatMap((pair) => [
        { word: pair.english, key: pair.english, match: pair.turkish },
        { word: pair.turkish, key: pair.turkish, match: pair.english },
      ])
      .sort(() => 0.5 - Math.random());

    setShuffledPairs(shuffled);
  }, []);

  const handleCardClick = (card) => {
    if (selectedCards.length < 2) {
      setSelectedCards((prev) => [...prev, card]);
    }

    if (selectedCards.length === 1) {
      checkMatch(selectedCards[0], card);
    }
  };

  const checkMatch = (firstCard, secondCard) => {
    if (firstCard.match === secondCard.word) {
      // Match found
      setMatchedCards((prev) => [...prev, firstCard.word, secondCard.word]);
      setTimeout(() => {
        setSelectedCards([]); // Reset selected cards after a match
      }, 1000);
    } else {
      // No match
      setWrongPair(true);
      setTimeout(() => {
        setSelectedCards([]); // Reset cards after wrong match
        setWrongPair(false);
      }, 1000);
    }
  };

  return (
    <SafeAreaView className="bg-black flex-1 p-5">
      <ScrollView className="flex gap-y-7">
        <Text className="text-white font-semibold text-2xl">
          Match The Following:
        </Text>
        <View className="flex flex-row flex-wrap gap-3 justify-center items-center">
          {shuffledPairs.map((item, index) => {
            const isSelected = selectedCards.some(
              (card) => card.word === item.word
            );
            const isMatched = matchedCards.includes(item.word);
            const isWrongPair = wrongPair && isSelected;

            return (
              <TouchableOpacity
                key={index}
                className={`rounded-xl border-2 min-h-[100px] border-gray-700 p-7 shadow-lg flex justify-center items-center ${
                  isMatched
                    ? "bg-green-500"
                    : isSelected
                    ? isWrongPair
                      ? "bg-red-500"
                      : "bg-gray-500"
                    : "bg-black"
                }`}
                style={{
                  width: cardWidth,
                }}
                disabled={isMatched}
                onPress={() => handleCardClick(item)}
              >
                <Text className="text-white font-semibold text-center">
                  {item.word}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Match;
