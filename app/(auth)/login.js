import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/user/userSlice";

export default function LoginScreen() {
  const { user } = useSelector((state) => state.nonPersisted.user);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    dispatch(
      setUser({ name: "username", email: "nahid@gmail.com", password: "1234" })
    );
    router.push("(main)");
  };
  return (
    <SafeAreaView className="bg-black px-[12px] py-2 flex-1 w-full h-full justify-center items-center">
      <View className="w-full px-4">
        <Text className="text-center font-medium text-white leading-[24px] text-[32px] py-4">
          Log in
        </Text>
        <TextInput
          placeholder="Email"
          className="flex-grow text-white text-[13px] placeholder:!text-white border border-gray-400 px-3 h-[48px] rounded-[6px]"
          placeholderTextColor="gray"
          style={{ fontFamily: "PoppinsMedium" }}
        />
        <TextInput
          placeholder="Password"
          className="flex-grow text-white text-[13px] placeholder:!text-white border border-gray-400 px-3 h-[48px] rounded-[6px] mt-6"
          placeholderTextColor="gray"
          style={{ fontFamily: "PoppinsMedium" }}
        />
        <Text className="text-left mt-1 font-normal text-white leading-[24px] text-[14px]">
          Forgot Password
        </Text>
        <Pressable
          onPress={() => handleLogin()}
          className="px-[20px] py-[12px] bg-primary rounded-[6px] mt-[36px]"
        >
          <Text className="text-center font-medium text-[#010404] leading-[24px] text-[16px]">
            Login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
