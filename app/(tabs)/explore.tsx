import CurateCard from "@/components/curate/curate-card";
import SearchAndCollection from "@/components/curate/search&Collection";
import Nav from "@/components/nav";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#131313]">
      <View>
        <Nav />
      </View>
      <ScrollView className="px-6">
        <View
          className="bg-gradient-to-b from-darkTop to-darkBottom h-16"
          key={6}
        />
        <View>
          <SearchAndCollection />
        </View>
        <View className="mt-16">
          <CurateCard />
          <CurateCard />
          <CurateCard />
          <CurateCard />
          <CurateCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
