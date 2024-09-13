import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  Modal,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { avatars } from "./source";
import AllModal from "./allModal";
import FriendModal from "./FriendModal";

const ModalScreen = ({ visible, onClose, item }) => {
  const router = useRouter();
  const [modalAllVisible, setModalAllVisible] = useState(false);
  const [modalFrVisible, setModalFrVisible] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const [clickedFrItem, setClickedFrItem] = useState(null);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      transparent={true}
    >
      <ScrollView className="absolute bottom-0 w-full p-8 rounded-2xl bg-black border-t-4 border-gray-500">
        <View className="flex gap-y-10">
          <View className="flex flex-row items-center gap-x-5">
            <Image
              source={item.icon}
              resizeMode="contain"
              className="w-16 h-16"
            />
            <View className="flex gap-y-2">
              <Text className="text-white font-semibold text-lg">
                {item.name}
              </Text>
              <Text className="text-gray-300">{item.desc}</Text>
            </View>
          </View>
          <View className="flex flex-row gap-x-6 items-center justify-center">
            <View className="flex gap-y-3 items-center py-4 px-6 rounded-lg border border-gray-700">
              <Ionicons name="document-text-outline" size={40} color="white" />
              <Text className="text-white font-semibold">Read</Text>
            </View>
            <View className="flex gap-y-3 items-center py-4 px-6 rounded-lg border border-gray-700">
              <Ionicons name="language" size={40} color="white" />
              <Text className="text-white font-semibold">Translate</Text>
            </View>
            <View className="flex gap-y-3 items-center py-4 px-6 rounded-lg border border-gray-700">
              <Ionicons name="checkmark-circle" size={40} color="white" />
              <Text className="text-white font-semibold">Match</Text>
            </View>
          </View>
          <TouchableOpacity
            className="bg-indigo-500 rounded-lg p-5 flex justify-center items-center w-full"
            onPress={() => router.replace("/(tabs)/Practice")}
          >
            <Text className="font-semibold text-white">Start</Text>
          </TouchableOpacity>

          <View className="flex flex-row items-center justify-between">
            <Text className="text-white font-semibold text-lg">
              Your Friends Progress
            </Text>
            <TouchableOpacity
              onPress={() => {
                setClickedItem(item);
                setModalAllVisible(true);
              }}
            >
              <Text className="text-indigo-500 font-semibold text-lg">All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={avatars}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="p-2 flex gap-y-3 items-center"
                onPress={() => {
                  setClickedFrItem(item);
                  setModalFrVisible(true);
                }}
              >
                <View className="rounded-full border-green-300 border-2">
                  <Image
                    source={item.avatar}
                    resizeMode="contain"
                    className="w-20 h-20 rounded-full"
                  />
                </View>
                <Text className="text-white font-semibold">{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {modalAllVisible && clickedItem && (
          <AllModal
            visible={modalAllVisible}
            onClose={() => setModalAllVisible(false)}
            item={clickedItem}
          />
        )}
        {modalFrVisible && clickedFrItem && (
          <FriendModal
            visible={modalFrVisible}
            onClose={() => setModalFrVisible(false)}
            item={clickedFrItem}
          />
        )}
      </ScrollView>
    </Modal>
  );
};

export default ModalScreen;
