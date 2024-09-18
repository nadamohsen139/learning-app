import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Match = () => {
  const vocabPairs = [
    { english: "Father", turkish: "Baba" },
    { english: "Mother", turkish: "Anne" },
    { english: "Brother", turkish: "Kardeş" },
    { english: "Sister", turkish: "Kız kardeş" },
    { english: "Elder brother", turkish: "Abi" },
    { english: "Elder sister", turkish: "Abla" },
    { english: "Grandfather", turkish: "Dede" },
    { english: "Grandmother", turkish: "Büyükanne" },
    { english: "Grandchild", turkish: "Torun" },
    { english: "Husband", turkish: "Koca" },
    { english: "Wife", turkish: "Hanım" },
    { english: "Spouse", turkish: "Eş" },
    { english: "Son", turkish: "Oğul" },
    { english: "Daughter", turkish: "Kız" },
  ];

  return (
    <SafeAreaView className="bg-black flex-1 p-5 flex gap-y-7">
      <Text className="text-white font-semibold text-2xl">
        Match The Following :
      </Text>
      {vocabPairs && (
        <ScrollView className="">
          <View className="flex flex-row flex-wrap gap-3 justify-center items-center">
            {vocabPairs.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="rounded-xl border-2 border-gray-700 p-5"
              >
                <Text className="text-white font-semibold text-lg text-center">
                  {item.english}
                </Text>
              </TouchableOpacity>
            ))}
            {vocabPairs.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="rounded-xl border-2 border-gray-700 p-5"
              >
                <Text className="text-white font-semibold text-lg text-center">
                  {item.turkish}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Match;
