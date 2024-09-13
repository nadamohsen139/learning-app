import { View, Text, Modal, ScrollView, Image } from "react-native";
import React from "react";

const FriendModal = ({ visible, onClose, item }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      transparent={true}
    >
      <ScrollView className="absolute bottom-0 w-full p-8 rounded-2xl bg-black border-t-4 border-gray-500">
        <View className="flex justify-center items-center gap-y-4">
          <View className="rounded-full border-green-300 border-2">
            <Image
              source={item.avatar}
              resizeMode="contain"
              className="w-28 h-28 rounded-full"
            />
          </View>
          <Text className="text-white text-xl font-semibold">{item.name}</Text>
          <View className="rounded-full border-8 border-red-500">
            <Text className="text-3xl font-bold text-white p-5">TR</Text>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default FriendModal;
