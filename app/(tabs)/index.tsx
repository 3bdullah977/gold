import GoldPriceCard from "@/components/home/gold-price-card";
import ChartBarInteractive from "@/components/home/marketSentiment";
import Nav from "@/components/nav";
import "@/global.css";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#131313]">
      <View>
        <Nav />
      </View>
      <ScrollView className="px-6">
        <View
          className="bg-gradient-to-b from-darkTop to-darkBottom h-24"
          key={5}
        />
        <View className="gap-6">
          <View className="flex-row flex-wrap gap-3">
            <GoldPriceCard />
            <GoldPriceCard />
            <GoldPriceCard />
            <GoldPriceCard />
          </View>
          <View>
            <ChartBarInteractive />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
