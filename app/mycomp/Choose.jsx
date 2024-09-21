import { View, Text, ScrollView, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const Choose = () => {
  const answers = ["I eat vegetables", "I drink water", "I eat eggs"];

  const correctAnswer = "I eat eggs";

  const [clicked, setClicked] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleChoose = (item) => {
    setClicked(item);
    if (item === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setModalVisible(true);
  };

  return (
    <SafeAreaView className="bg-black flex-1 p-5">
      <ScrollView className="flex gap-y-10">
        <Text className="text-white font-semibold text-2xl">
          Choose The Correct Answer
        </Text>
        <Text className="text-gray-400 text-xl text-center font-semibold">
          Ben yumurtaği yerim
        </Text>
        <Text className="text-white text-xl font-semibold">
          This Sentence means :
        </Text>
        {answers.map((item, index) => {
          const isCorrectAnswer = clicked === item && item === correctAnswer;
          const isWrongAnswer = clicked === item && item !== correctAnswer;
          return (
            <TouchableOpacity
              className={`rounded-xl bg-gray-700 flex justify-center items-center p-5 ${
                isCorrectAnswer
                  ? "bg-green-500"
                  : isWrongAnswer
                  ? "bg-red-500"
                  : "bg-gray-700"
              }`}
              key={index}
              onPress={() => handleChoose(item)}
              disabled={clicked !== ""}
            >
              <Text className="text-white text-lg font-semibold">{item}</Text>
            </TouchableOpacity>
          );
        })}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
            setClicked("");
          }}
        >
          <View className="absolute bottom-0 w-full p-10 rounded-2xl bg-black">
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
                    The answer is : {correctAnswer}
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
                    Your Answer : {clicked}
                  </Text>
                </>
              )}
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Choose;
