import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Landing = () => {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 flex gap-y-3 bg-black">
      <Image
        source={require("../assets/images/DALL·E 2024-09-08 11.52.23 - An illustration for a mobile app landing page similar in style to the provided image. The scene should depict a person sitting comfortably, interactin.jpg")}
        resizeMode="cover"
        className="w-full h-[400px]"
      />
      <View className="p-6 flex-1 flex gap-y-12">
        <Text className="text-4xl font-bold text-white text-center">
          LanguApp
        </Text>
        <Text className="text-gray-400 text-center text-xl font-semibold">
          Are you ready to learn languages in the funniest way?
        </Text>
        <TouchableOpacity
          className="bg-indigo-500 rounded-lg p-5 flex justify-center items-center"
          onPress={() => router.replace("/(tabs)/Home")}
        >
          <Text className="font-semibold text-white">Get Started</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Landing;
