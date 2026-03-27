import OverlayBlur from "@/assets/svg/Overlay+Blur.svg";
import { Text, View } from "react-native";

export default function GoldPriceCard() {
  return (
    <View className="bg-[#1c1b1b] p-6 w-[47.5%]">
      <View className="absolute -top-full -right-3/4">
        <OverlayBlur />
      </View>
      <View className="gap-6">
        <Text className="text-white text-xl font-bold">24k Gold</Text>
        <Text className="text-[#D0C5AF] text-[10px]">Pure .999 FINE</Text>
      </View>
      <View>
        <Text className="text-[#D4AF37] text-2xl font-bold">$1,964.12</Text>
      </View>
    </View>
  );
}
