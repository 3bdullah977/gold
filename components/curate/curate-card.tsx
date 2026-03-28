import Ring from "@/assets/svg/Ring.svg";
import { Text, TouchableOpacity, View } from "react-native";

export default function CurateCard() {
  return (
    <View>
      <TouchableOpacity>
        <View>
          <Ring />
          <View className="absolute top-8 left-4 bg-[#F2CA50] px-3 py-[3.5px] rounded-sm">
            <Text className="text-[#3C2F00] tracking-tighter">IN STOCK</Text>
          </View>
        </View>
        <View className="flex-row justify-between mt-6">
          <Text className="text-[#E5E2E1] text-2xl">Aurelian Signet</Text>
          <Text className="text-[#F2CA50] text-sm font-bold">$3,420</Text>
        </View>
        <View className="mt-4">
          <Text className="text-[#D0C5AF] text-sm">
            Hand-forged investment grade gold, featuring a
          </Text>
          <Text className="text-[#D0C5AF] text-sm">
            polished mirror finish and architectural
          </Text>
          <Text className="text-[#D0C5AF] text-sm">silhouette.</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
