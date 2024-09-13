import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";

const CustomSelect = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: "Spanish", value: "es" },
    { label: "German", value: "de" },
    { label: "Turkish", value: "tr" },
    { label: "French", value: "fr" },
    { label: "English", value: "en" },
    { label: "Italian", value: "it" },
    { label: "Chinese", value: "zh" },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.selectButtonText}>
          {selectedOption ? selectedOption.label : "Turkish"}
        </Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              scrollEnabled={true}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.option,
                    selectedOption?.value === item.value &&
                      styles.selectedOption,
                  ]}
                  onPress={() => handleSelect(item)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedOption?.value === item.value &&
                        styles.selectedOptionText,
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.value}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  selectButton: {
    backgroundColor: "#1e2030",
    padding: 10,
    borderRadius: 5,
  },
  selectButtonText: {
    color: "white",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#1e2030",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    maxHeight: "80%",
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#2a2d3e",
  },
  selectedOption: {
    backgroundColor: "#3a3d4e",
  },
  optionText: {
    color: "#8e8e8e",
    fontSize: 16,
  },
  selectedOptionText: {
    color: "white",
  },
});

export default CustomSelect;
