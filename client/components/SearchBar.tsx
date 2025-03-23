import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";
import { useRouter } from "expo-router";

interface Props {
  placeHolder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeHolder, onPress }: Props) => {
  const router = useRouter();

  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode={"contain"}
        tintColor={"#ab8bff"}
      />

      <TextInput
        onPress={onPress}
        placeholder={placeHolder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor={"#ab8bff"}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
