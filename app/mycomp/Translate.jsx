import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Translate = () => {
  const words = [
    { id: "1", text: "I" },
    { id: "2", text: "drink" },
    { id: "3", text: "and" },
    { id: "4", text: "eat" },
    { id: "5", text: "rice" },
    { id: "6", text: "breakfast" },
    { id: "7", text: "water" },
    { id: "8", text: "the" },
    { id: "9", text: "food" },
    { id: "10", text: "coffee" },
    { id: "11", text: "juice" },
  ];

  const [selectionBox, setSelectionBox] = useState(words);

  const [answerBox, setAnswerBox] = useState([]);

  const handleWordPress = (wordObj) => {
    const { id } = wordObj;

    // If the word is in the selection box, move it to the answer box
    if (selectionBox.some((item) => item?.id === id)) {
      // Replace the word in the selection box with a placeholder (null)
      const updatedSelectionBox = selectionBox.map((item) =>
        item?.id === id ? null : item
      );
      setSelectionBox(updatedSelectionBox);
      setAnswerBox([...answerBox, wordObj]);
    }
    // If the word is in the answer box, move it back to its original position in the selection box
    else if (answerBox.some((item) => item.id === id)) {
      setAnswerBox(answerBox.filter((item) => item.id !== id));

      // Find the original index of the word in the initialWords array
      const originalIndex = words.findIndex((item) => item.id === id);

      // Restore the word at its original position in the selection box
      const updatedSelectionBox = [...selectionBox];
      updatedSelectionBox[originalIndex] = wordObj; // Replace the placeholder with the original word
      setSelectionBox(updatedSelectionBox);
    }
  };

  const correctAnswer = "i eat and drink";

  const handleCheck = () => {
    const answerBoxString = answerBox
      .map((item) => item.text)
      .join(" ")
      .trim()
      .toLowerCase();
    const formattedCorrectAnswer = correctAnswer.trim().toLowerCase();

    if (answerBoxString === formattedCorrectAnswer) {
      console.log("Correct answer!");
    } else {
      console.log("Incorrect answer");
    }
  };

  return (
    <SafeAreaView className="bg-black flex-1 p-5 flex gap-y-11">
      <Text className="text-white font-semibold text-2xl">
        Translate The Phrase
      </Text>
      <Text className="text-white font-bold text-xl text-center">
        Ben yerim ve icerim
      </Text>
      <View className="bg-gray-700 rounded-lg p-3 min-h-[30%]">
        {answerBox && (
          <View className="flex-row flex-wrap gap-3">
            {answerBox.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="bg-black rounded-lg p-2"
                onPress={() => handleWordPress(item)}
              >
                <Text className="text-white font-semibold text-lg">
                  {item.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      {selectionBox && (
        <View className="flex-row flex-wrap justify-center gap-3">
          {selectionBox.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="bg-gray-700 rounded-lg p-2"
              onPress={() => item && handleWordPress(item)}
            >
              <Text className="text-white font-semibold text-lg">
                {item ? item.text : ""}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <TouchableOpacity
        className="bg-indigo-500 rounded-lg p-5 flex justify-center items-center"
        onPress={handleCheck}
      >
        <Text className="font-semibold text-white text-lg">Check it</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Translate;
