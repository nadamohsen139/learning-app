import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-black flex-1 p-5">
      <ScrollView className="flex gap-y-7">
        <Text className="text-white font-semibold text-2xl">Your Profile</Text>
        <View className="flex justify-center items-center gap-y-2">
          <Ionicons name="person-circle" size={100} color="white" />
          <Text className="text-white font-semibold text-xl text-center">
            Nada Mohsen
          </Text>
          <Text className="text-gray-400 font-semibold text-xl text-center">
            Egypt
          </Text>
        </View>
        <Text className="text-white font-semibold text-xl">
          Personal Information
        </Text>
        <View className="flex bg-gray-700 rounded-xl p-5 divide-y-2">
          <TouchableOpacity className="flex flex-row justify-between items-center pb-6">
            <Text className="text-gray-300 font-semibold">Account</Text>
            <Text className="text-white font-semibold">
              mohsennada139@gmail.com
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row justify-between items-center py-6">
            <Text className="text-gray-300 font-semibold">Phone</Text>
            <Text className="text-white font-semibold">*************</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row justify-between items-center pt-6">
            <Text className="text-gray-300 font-semibold">Location</Text>
            <Text className="text-white font-semibold">Egypt</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-white font-semibold text-xl">
          General Settings
        </Text>
        <View className="flex bg-gray-700 rounded-xl p-5 divide-y-2">
          <TouchableOpacity className="flex flex-row justify-between items-center pb-6">
            <Text className="text-gray-300 font-semibold">Preferences</Text>
            <Ionicons name="arrow-forward-sharp" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row justify-between items-center py-6">
            <Text className="text-gray-300 font-semibold">Notifications</Text>
            <Ionicons name="arrow-forward-sharp" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row justify-between items-center py-6">
            <Text className="text-gray-300 font-semibold">Courses</Text>
            <Ionicons name="arrow-forward-sharp" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row justify-between items-center py-6">
            <Text className="text-gray-300 font-semibold">Privacy</Text>
            <Ionicons name="arrow-forward-sharp" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            className="flex flex-row justify-between items-center pt-6"
            onPress={() => router.replace("/")}
          >
            <Text className="text-red-500 font-semibold">Logout</Text>
            <Ionicons name="log-out" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
