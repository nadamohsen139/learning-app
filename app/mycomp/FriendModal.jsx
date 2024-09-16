import { View, Text, Modal, ScrollView, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const FriendModal = ({ visible, onClose, item }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      transparent={true}
    >
      <ScrollView className="absolute bottom-0 w-full p-8 rounded-2xl bg-black border-t-4 border-gray-500">
        <View className="flex justify-center items-center gap-y-7">
          <View className="flex gap-y-3 items-center">
            <View className="rounded-full border-green-300 border-2">
              <Image
                source={item.avatar}
                resizeMode="contain"
                className="w-28 h-28 rounded-full"
              />
            </View>
            <Text className="text-white text-xl font-semibold">
              {item.name}
            </Text>
          </View>
          <View className="flex flex-row gap-x-4 w-full items-center">
            <View className="border-8 rounded-full border-indigo-500">
              <Text className="text-3xl font-bold text-white p-3">TR</Text>
            </View>
            <View className="flex gap-y-3">
              <View className="flex flex-row items-center gap-x-5">
                <Text className="text-lg font-bold text-white">Reading</Text>
                <View className="h-1 bg-white rounded-full w-1/2">
                  <View
                    className="h-1 rounded-full"
                    style={{
                      backgroundColor: "#38b5a9",
                      width: `${item.read}%`,
                    }}
                  ></View>
                </View>
              </View>
              <View className="flex flex-row items-center gap-x-3">
                <Text className="text-lg font-bold text-white">Listening</Text>
                <View className="h-1 bg-white rounded-full w-1/2">
                  <View
                    className="h-1 rounded-full"
                    style={{
                      backgroundColor: "#2f58ba",
                      width: `${item.listen}%`,
                    }}
                  ></View>
                </View>
              </View>
              <View className="flex flex-row items-center gap-x-3">
                <Text className="text-lg font-bold text-white">Speaking</Text>
                <View className="h-1 bg-white rounded-full w-1/2">
                  <View
                    className="h-1 rounded-full"
                    style={{
                      backgroundColor: "#d18232",
                      width: `${item.speak}%`,
                    }}
                  ></View>
                </View>
              </View>
              <View className="flex flex-row items-center gap-x-3">
                <Text className="text-lg font-bold text-white">Grammar</Text>
                <View className="h-1 bg-white rounded-full w-1/2">
                  <View
                    className="h-1 rounded-full"
                    style={{
                      backgroundColor: "#e6e347",
                      width: `${item.grammar}%`,
                    }}
                  ></View>
                </View>
              </View>
            </View>
          </View>
          <Text className="text-white font-bold text-2xl">Achievements</Text>
          <View className="flex flex-row justify-center items-center gap-x-3">
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
              <Text className="text-white font-semibold text-lg">
                Medal Holder
              </Text>
            </View>
            <View className="flex items-center gap-y-3">
              <View className="bg-gray-700 rounded-lg p-5 ">
                <Ionicons name="ribbon-sharp" size={40} color="white" />
              </View>
              <Text className="text-white font-semibold text-lg">
                Succesful
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default FriendModal;
