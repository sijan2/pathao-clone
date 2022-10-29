import { View, Text, Modal, Pressable, Dimensions } from "react-native";
import React, { useEffect } from "react";
import InviteDetailsCard from "./InviteDetailsCard";
import { selectInvite } from "../feature/inviteSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

const BottomSheet = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const items = useSelector(selectInvite);


 

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      statusBarTranslucent={true}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
        <Pressable
          style={{ flex: 1 }}
          onPress={() => {
            setModalVisible(!modalVisible);
            //if (!haveOutsideTouch) return;
            // closePopup()
          }}
        ></Pressable>

        <View
          style={{
            bottom: 0,
            position: "absolute",
            width: "100%",
            backgroundColor: "white",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            height: Dimensions.get("window").height * 0.5,
          }}
        >
          {items.image && (
            <InviteDetailsCard
              title={items.title}
              description={items.description}
              image={items.image}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default BottomSheet;
