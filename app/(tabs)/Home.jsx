import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomSelect from "../mycomp/customSelect";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import ModalScreen from "../mycomp/lessonModal";
import { lessons } from "../mycomp/source";

const Home = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  const handlelistone = () => {
    setFirst(true);
    setSecond(false);
    console.log("first:", first, "second:", second);
  };
  const handlelisttwo = () => {
    setSecond(true);
    setFirst(false);
    console.log("first:", first, "second:", second);
  };

  return (
    <SafeAreaView className="bg-black flex-1 p-5">
      <ScrollView>
        <View className="bg-gray-700 rounded-2xl p-4 flex">
          <View className="flex flex-row justify-between items-center">
            <CustomSelect />
            <Ionicons name="person-circle" size={48} color="white" />
          </View>
          <Text className="text-white text-lg p-2">Welcome Nada,</Text>
          <Text className="text-white text-2xl p-2 font-semibold text-center">
            Continue Learning Turkish!
          </Text>
        </View>
        <View className="p-4">
          <View className="flex flex-row justify-between items-center p-3 py-7">
            <Text className="text-white text-xl font-semibold">
              Your Lessons
            </Text>
            <View className="flex flex-row gap-2 items-center">
              <TouchableOpacity onPress={handlelistone}>
                <Ionicons name="apps-sharp" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handlelisttwo}>
                <Ionicons name="menu" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {first && (
              <View className="flex-row flex-wrap justify-center gap-3">
                {lessons.map((item, index) => (
                  <TouchableOpacity
                    className="p-3 bg-gray-700 rounded-xl flex gap-y-3"
                    key={index}
                    onPress={() => {
                      setClickedItem(item);
                      setModalVisible(true);
                      if (clickedItem) {
                        lessons.find((item) => clickedItem.id == item.id);
                      }
                    }}
                  >
                    <Image
                      source={item.icon}
                      resizeMode="contain"
                      className="w-12 h-12"
                    />
                    <Text className="text-white font-semibold text-lg">
                      {item.name}
                    </Text>
                    <Text className="text-gray-300 max-w-[150px]">
                      {item.desc}
                    </Text>
                    <View className="h-1 bg-white rounded-full w-full">
                      <View
                        className="h-1 rounded-full"
                        style={{
                          backgroundColor: item.color,
                          width: `${item.ratio}%`,
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
            {second && (
              <View className="flex gap-3 p-2">
                {lessons.map((item, index) => (
                  <TouchableOpacity
                    className="p-4 bg-gray-700 rounded-xl flex flex-row items-center gap-x-5"
                    key={index}
                    onPress={() => {
                      setClickedItem(item);
                      setModalVisible(true);
                      if (clickedItem) {
                        lessons.find((item) => clickedItem.id == item.id);
                      }
                    }}
                  >
                    <Image
                      source={item.icon}
                      resizeMode="contain"
                      className="w-12 h-12"
                    />
                    <View className="flex gap-y-3">
                      <Text className="text-white font-semibold text-lg">
                        {item.name}
                      </Text>
                      <Text className="text-gray-300">{item.desc}</Text>
                      <View className="h-1 bg-white rounded-full w-full">
                        <View
                          className="h-1 rounded-full"
                          style={{
                            backgroundColor: item.color,
                            width: `${item.ratio}%`,
                          }}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
        {modalVisible && clickedItem && (
          <ModalScreen
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            item={clickedItem}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
