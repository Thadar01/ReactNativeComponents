import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Alert,
  Modal,
  Button,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { JumpingTransition } from "react-native-reanimated";
import { FA5Style } from "@expo/vector-icons/build/FontAwesome5";

const Components = () => {
  const data = [
    {
      id: 0,
      image: require("@/assets/images/image.png"),
      Title: "Tree",
      Description: "It is the beautiful nature of the earth.",
    },
    {
      id: 1,
      image: require("@/assets/images/image2.png"),
      Title: "Flower",
      Description: "It is the little beautiful nature of the earth.",
    },
    {
      id: 2,
      image: require("@/assets/images/image3.png"),
      Title: "Mountain",
      Description: "It is the strong nature of the earth.",
    },
    {
      id: 3,
      image: require("@/assets/images/image.png"),
      Title: "Tree",
      Description: "It is the beautiful nature of the earth.",
    },
    {
      id: 4,
      image: require("@/assets/images/image2.png"),
      Title: "Flower",
      Description: "It is the little beautiful nature of the earth.",
    },
    {
      id: 5,
      image: require("@/assets/images/image3.png"),
      Title: "Mountain",
      Description: "It is the strong beautiful nature of the earth.",
    },
  ];
  const [dataList, setDataList] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSearch = (text: string) => {
    if (searchText === "") {
      setDataList(data);
    } else {
      setDataList(
        dataList.filter(
          (item) => item.Title.toLowerCase() === text.toLowerCase()
        )
      );
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 10 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={"dark-content"} />

        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            margin: 10,
          }}
        >
          <TextInput
            placeholder="Search.."
            value={searchText}
            onChangeText={setSearchText}
            style={{
              backgroundColor: "grey",
              height: 30,
              width: 250,
              borderRadius: 10,
              padding: 10,
              marginRight: 5,
            }}
          />
          <Pressable onPress={() => handleSearch(searchText)}>
            <FontAwesome name="search" size={24} color="black" />
          </Pressable>
        </View>
        <View
          style={{ backgroundColor: "#daeff2", height: 80, marginBottom: 10 }}
        >
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 20 }}
            renderItem={({ item }) => (
              <Pressable
                style={{
                  padding: 7,
                  flexDirection: "row",
                  columnGap: 10,
                  margin: 5,
                }}
                onPress={() => console.log("id=>", item.id)}
              >
                <Image source={item.image} style={{ width: 50, height: 50 }} />
                <View style={{ justifyContent: "center" }}>
                  <Text style={{ fontSize: 20, fontWeight: 600 }}>
                    {item.Title}
                  </Text>
                  <Text>{item.Description}</Text>
                </View>
              </Pressable>
            )}
          />
        </View>

        <View style={{ backgroundColor: "lightblue", height: 450 }}>
          <FlatList
            ItemSeparatorComponent={() => (
              <View style={{ height: 0.5, backgroundColor: "grey" }} />
            )}
            showsVerticalScrollIndicator={false}
            data={dataList}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 20 }}
            renderItem={({ item }) => (
              <View
                style={{
                  padding: 7,
                  flexDirection: "row",
                  columnGap: 10,
                  margin: 5,
                }}
              >
                <Image source={item.image} style={{ width: 50, height: 50 }} />
                <View style={{ justifyContent: "center" }}>
                  <Text style={{ fontSize: 20, fontWeight: 600 }}>
                    {item.Title}
                  </Text>
                  <Text>{item.Description}</Text>
                </View>
              </View>
            )}
          />
        </View>
        <Modal transparent={true} visible={showModal} animationType={"slide"}>
          <SafeAreaView
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View style={{ backgroundColor: "white", height: 210, width: 300 ,borderRadius:25, padding:20,}}>
              <Text style={{alignSelf:"center", fontSize:25, fontWeight:"bold", marginBottom:10}}>Registration</Text>
              <Text style={{fontWeight:"bold"}}>Email</Text>
              <TextInput style={{backgroundColor:"grey", height:30, marginTop:3, borderRadius:10, padding:10}} placeholder="Enter your Email..."/>
              <Text style={{fontWeight:"bold",marginTop:7}}>Password</Text>
              <TextInput style={{backgroundColor:"grey", height:30, marginTop:3, borderRadius:10, padding:10}} placeholder="Enter your Email..."/>
              <Pressable  style={{ backgroundColor:"lightblue", width:150, height:30, borderRadius:10, alignItems:"center", justifyContent:"center",alignSelf:"center" ,margin:10}} onPress={() => setShowModal(false)}>
                <Text>Register</Text>
              </Pressable>
              
            </View>
           
          </SafeAreaView>
        </Modal>

        <Pressable
          style={{
            backgroundColor: "#3aaad6",
            margin: 10,
            width: 200,
            alignSelf: "center",
            alignItems: "center",
            height: 30,
            justifyContent: "center",
            borderRadius: 10,
          }}
          onPress={() => setShowModal(true)}
        >
          <Text style={{ fontSize: 20 }}>Register Here</Text>
        </Pressable>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Components;
