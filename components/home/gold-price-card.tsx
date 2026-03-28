import OverlayBlur from "@/assets/svg/Overlay+Blur.svg";
import ArrowFall from "@/assets/svg/arrow-fall.svg";
import { Text, View } from "react-native";

export default function GoldPriceCard() {
  return (
    <View className="bg-[#1c1b1b] p-3 w-[48%]">
      <View className="absolute -top-3/4 -right-3/4">
        <OverlayBlur />
      </View>
      <View className="gap-6">
        <View className="flex-row justify-between">
          <Text className="text-white text-xl font-bold">24k Gold</Text>
          <View className="flex-row items-center gap-1 bg-[#f2ca5027] rounded-sm p-1">
            <ArrowFall />
            <Text className="text-[10px] text-[#F2CA50]">-1.28%</Text>
          </View>
        </View>
        <View>
          <Text className="text-[#D0C5AF] text-[10px]">Pure .999 FINE</Text>
        </View>
      </View>
      <View>
        <Text className="text-[#D4AF37] text-2xl font-bold">$1,964.12</Text>
      </View>
    </View>
  );
}
