import { Image, Pressable, Text, TextInput, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/userSlice";

export default function TinderScreen() {
  const dispatch = useDispatch();

  const handleLogin = async () => {
    dispatch(
      setUser({ name: "username", email: "nahid@gmail.com", password: "1234" })
    );
    router.push("(main)");
  };
  return (
    <View className="w-full h-full flex-1">
      <Image
        source={require("../../assets/images/auth/tinderbg.jpg")}
        resizeMode="cover"
        className="h-full w-full"
      />
      <SafeAreaView className="px-[12px] py-2 flex-1 w-full h-full justify-center items-center absolute top-0 bottom-0">
        <View>
          <Image
            source={require("../../assets/images/initial/tinder.png")}
            resizeMode="contain"
            className="w-[180px] h-[100px]"
          />
        </View>
        <View className="w-full px-4 mt-[75px]">
          <TextInput
            placeholder="Email"
            className="flex-grow text-white text-[13px] placeholder:!text-white border border-white px-3 h-[48px] rounded-[6px]"
            placeholderTextColor="white"
            style={{ fontFamily: "PoppinsMedium" }}
          />
          <TextInput
            placeholder="Password"
            className="flex-grow text-white text-[13px] placeholder:!text-white border border-white px-3 h-[48px] rounded-[6px] mt-6"
            placeholderTextColor="white"
            style={{ fontFamily: "PoppinsMedium" }}
          />
          <Text className="text-left mt-1 font-normal text-white leading-[24px] text-[14px]">
            Forgot Password
          </Text>
          <Pressable
            onPress={() => handleLogin()}
            className="px-[20px] py-[12px] bg-white rounded-[6px] mt-[36px]"
          >
            <Text className="text-center font-medium text-[#010404] leading-[24px] text-[16px]">
              Login
            </Text>
          </Pressable>
          <View className="mt-[22px]">
            <Text className="text-center font-normal text-gray-100 text-[14px]">
              By login, you agree to our{" "}
              <Text className="underline">Terms</Text>. See how we use
            </Text>
            <Text className="text-center font-normal text-gray-100 text-[14px]">
              your data in our{" "}
              <Text className="underline">Privacy Policy.</Text>
            </Text>
            <Text className="text-center font-normal text-gray-100 text-[14px]">
              We never post to Facebook
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
