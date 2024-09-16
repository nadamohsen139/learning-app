import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const Practice = () => {
  return (
    <SafeAreaView className="bg-black flex-1 p-5 flex gap-y-3">
      <Text className="text-white font-semibold text-2xl">Practice Zone</Text>
      <Text className="text-gray-400 font-semibold text-lg text-center">
        Where do you want to practice today?
      </Text>
      <View className="flex justify-center items-center gap-y-12">
        <TouchableOpacity className="flex flex-row justify-center items-center gap-x-3 bg-gray-700 rounded-lg p-7">
          <Text className="text-white font-semibold text-xl">Translate</Text>
          <Ionicons name="language" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row justify-center items-center gap-x-3 bg-gray-700 rounded-lg py-7 px-11">
          <Text className="text-white font-semibold text-xl">Match</Text>
          <Ionicons name="checkmark-circle" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row justify-center items-center gap-x-3 bg-gray-700 rounded-lg py-7 px-9">
          <Text className="text-white font-semibold text-xl">Choose</Text>
          <Ionicons name="list-sharp" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Practice;
