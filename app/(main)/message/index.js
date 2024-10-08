import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import SingleChat from "../../../components/message/chats/SingleChat";
import { chats } from "../../../constants/data";
import BottomTab from "../../../components/shared/BottomTab";
import { useSelector } from "react-redux";

export default function MessageScreen() {
  const { user } = useSelector((state) => state.nonPersisted.user);
  const [fontsLoaded] = useFonts({ PoppinsRegular: Poppins_400Regular });
  const router = useRouter();

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  const handleChat = (selectChat) => {
    router.push(`message/${selectChat?.id}`);
  };
  return (
    <SafeAreaView className="bg-screenbg h-full w-full px-[12px]">
      <View className="min-h-[72px] w-full flex-row justify-between items-center">
        <View className="flex-row items-center gap-x-[12px]">
          <Image
            source={require("../../../assets/images/message/msgHeader.png")}
            className="w-[40px] h-[40px]"
          />
          <Text className="font-medium text-[20px] leading-[28px] text-white font-poppins">
            Matches
          </Text>
        </View>

        {user && user?.image ? (
          <Image
            source={{ uri: user?.image }}
            resizeMode="cover"
            className="w-[40px] h-[40px] rounded-full"
          />
        ) : (
          <Image
            source={require("../../../assets/images/message/chat/profile1.png")}
            className="w-[40px] h-[40px] rounded-full"
          />
        )}
      </View>

      <ScrollView
        alwaysBounceVertical={true}
        showsVerticalScrollIndicator={true}
        className=""
      >
        {chats.map((item, index) => (
          <SingleChat key={index} data={item} handleChat={handleChat} />
        ))}
      </ScrollView>
      <View
        className="fixed bottom-0 w-full right-0 left-0 bg-opacity-0"
        style={{ backgroundColor: "transparent" }}
      >
        <BottomTab currentTab="Message" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
