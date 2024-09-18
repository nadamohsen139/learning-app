import { View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

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
  const [modalVisible, setModalVisible] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

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

    setUserAnswer(answerBoxString);

    if (answerBoxString.toLowerCase() === correctAnswer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setModalVisible(true);
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View className="absolute top-[30%] w-full p-10 rounded-2xl bg-black">
          <View className="flex gap-y-5 items-center justify-center pt-5">
            {isCorrect ? (
              <>
                <View className="rounded-full bg-green-500 p-2 absolute -top-16 border-8 border-black">
                  <Ionicons name="checkmark-sharp" size={40} color="white" />
                </View>
                <Text className="text-white text-xl font-bold text-center">
                  You are correct!
                </Text>
                <Text className="text-white text-xl font-bold text-center">
                  {correctAnswer}
                </Text>
              </>
            ) : (
              <>
                <View className="rounded-full bg-red-500 p-2 absolute -top-16 border-8 border-black">
                  <Ionicons name="close-sharp" size={40} color="white" />
                </View>
                <Text className="text-white text-xl font-bold text-center">
                  You were close!
                </Text>
                <Text className="text-white text-lg font-bold text-center">
                  Correct Answer is : {correctAnswer}
                </Text>
                <Text className="text-white text-lg font-bold text-center">
                  Your Answer : {userAnswer}
                </Text>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Translate;
