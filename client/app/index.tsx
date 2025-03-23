import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-primary font-semibold">Welcome</Text>
      <Text className="text-3xl text-accent font-thin mt-4">
        to my movie app
      </Text>

      {/* <Text className="text-xl text-dark-100 font-thin mt-4">example text</Text> */}
    </View>
  );
}
