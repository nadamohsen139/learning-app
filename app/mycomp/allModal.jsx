import {
  View,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { avatars } from "./source";
import FriendModal from "./FriendModal";

const AllModal = ({ visible, onClose }) => {
  const [modalFrVisible, setModalFrVisible] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      transparent={true}
    >
      <ScrollView className="absolute bottom-0 w-full p-8 rounded-2xl bg-black border-t-4 border-gray-500">
        <View className="flex gap-y-6">
          <Text className="text-white text-center font-semibold text-xl">
            Your Friends Progress
          </Text>
          {visible && (
            <View className="flex-row flex-wrap justify-center">
              {avatars.map((item, index) => (
                <TouchableOpacity
                  className="p-2 flex gap-y-3 items-center max-w-[120px]"
                  key={index}
                  onPress={() => {
                    setClickedItem(item);
                    setModalFrVisible(true);
                  }}
                >
                  <View className="rounded-full border-green-300 border-2 ">
                    <Image
                      source={item.avatar}
                      resizeMode="contain"
                      className="w-20 h-20 rounded-full"
                    />
                  </View>
                  <Text className="text-white font-semibold">{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
        {modalFrVisible && clickedItem && (
          <FriendModal
            visible={modalFrVisible}
            onClose={() => setModalFrVisible(false)}
            item={clickedItem}
          />
        )}
      </ScrollView>
    </Modal>
  );
};

export default AllModal;
