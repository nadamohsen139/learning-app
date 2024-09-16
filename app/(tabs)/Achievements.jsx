import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const Achievements = () => {
  return (
    <SafeAreaView className="bg-black flex-1 p-5 flex gap-y-4">
      <Text className="text-white font-semibold text-2xl">
        Your Achievements
      </Text>
      <View className="flex flex-row flex-wrap justify-center items-center gap-5">
        <View className="flex items-center gap-y-3">
          <View className="bg-gray-700 rounded-lg p-5 ">
            <Ionicons name="trophy-sharp" size={40} color="white" />
          </View>
          <Text className="text-white font-semibold text-lg">Champion</Text>
        </View>
        <View className="flex items-center gap-y-3">
          <View className="bg-gray-700 rounded-lg p-5 ">
            <Ionicons name="medal-sharp" size={40} color="white" />
          </View>
          <Text className="text-white font-semibold text-lg">Medal Holder</Text>
        </View>
        <View className="flex items-center gap-y-3">
          <View className="bg-gray-700 rounded-lg p-5 ">
            <Ionicons name="ribbon-sharp" size={40} color="white" />
          </View>
          <Text className="text-white font-semibold text-lg">Succesful</Text>
        </View>
        <View className="flex items-center gap-y-3">
          <View className="bg-gray-700 rounded-lg p-5 ">
            <Ionicons name="book-sharp" size={40} color="white" />
          </View>
          <Text className="text-white font-semibold text-lg">Translator</Text>
        </View>
        <View className="flex items-center gap-y-3">
          <View className="bg-gray-700 rounded-lg p-5 ">
            <Ionicons name="create-sharp" size={40} color="white" />
          </View>
          <Text className="text-white font-semibold text-lg">Fleunt</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Achievements;
