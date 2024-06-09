import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView
      style={{
        height: "100%",
        backgroundColor: "#161622",
      }}
    >
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[8.125rem] h-[5.25rem]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[23.75rem] w-full h-[18.75rem]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center max-w-xs">
              Discover Endless{"\n"}Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[4.063rem] h-[0.875rem] absolute -bottom-1.5 -right-1.5"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm mt-7 text-gray-100 font-pregular text-center max-w-sm">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => {
              router.push("/sign-in");
            }}
            containerStyles="w-full mt-7 max-w-sm"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
