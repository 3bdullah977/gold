import Search from "@/assets/svg/search.svg";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SearchAndCollection() {
  return (
    <View>
      <View className="gap-[15.25px]">
        <View>
          <Text className="text-[#E5E2E1] text-5xl font-bold">Curated</Text>
          <Text className="text-[#D4AF37] text-5xl font-bold">Inventory</Text>
        </View>
        <View>
          <Text className="text-[#D0C5AF] text-lg">
            Exquisite gold pieces, refined through
          </Text>
          <Text className="text-[#D0C5AF] text-lg">
            generations. A collection of sovereign
          </Text>
          <Text className="text-[#D0C5AF] text-lg">
            assets and artisanal adornments.
          </Text>
        </View>
      </View>
      {/* Search */}
      <View className="gap-2">
        <Text className="text-[#F2CA50] text-[10px] tracking-widest">
          Search Collection
        </Text>
        <View className="">
          <TextInput
            className="border border-[#4D4635] p-3 text-base text-[#D0C5AF]"
            placeholder="REF. NUMBER OR TYPE"
            placeholderTextColor="#4D4635"
          />
          <View className="absolute right-4 top-1/3">
            <Search />
          </View>
        </View>
      </View>
      {/* Filter */}
      <View className="flex-row flex-wrap gap-4 mt-8">
        <TouchableOpacity className="px-4 py-2 border border-[#F2CA50]">
          <Text className="text-[#F2CA50] tracking-[1.5px]">ALL OBJECTS</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-4 py-2 border border-[#4d463549]">
          <Text className="text-[#D0C5AF] tracking-[1.5px]">
            Investment Coins
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-4 py-2 border border-[#4d463549]">
          <Text className="text-[#D0C5AF] tracking-[1.5px]">
            Heritage Rings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-4 py-2 border border-[#4d463549]">
          <Text className="text-[#D0C5AF] tracking-[1.5px]">
            Chains & Collars
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
