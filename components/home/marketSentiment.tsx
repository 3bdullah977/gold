import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { BarChart, Grid, XAxis } from "react-native-svg-charts";

const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 270, mobile: 290 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-05", desktop: 300, mobile: 260 },
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  // ... add the rest of your dataset
];

export default function ChartBarInteractive() {
  const [activeChart, setActiveChart] = useState("desktop");

  const total = useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    [],
  );

  const data = chartData.map((item: any) => item[activeChart]);

  return (
    <ScrollView className="flex-1 bg-[#1c1b1b]">
      {/* Header */}
      <Text className="text-2xl font-bold mx-3 text-[#E5E2E1]">
        24-Hour Trend
      </Text>
      <Text className="text-2xl font-bold mx-3 text-[#E5E2E1]">
        Performance
      </Text>

      {/* Toggle buttons */}
      <View className="flex-row mx-3 space-x-2 mt-4">
        <Pressable
          onPress={() => setActiveChart("desktop")}
          className={`flex-1 p-3 rounded ${
            activeChart === "desktop" ? "bg-[#D4AF37]" : "bg-gray-200"
          }`}>
          <Text
            className={`text-center font-semibold ${
              activeChart === "mobile" ? "text-[#D4AF37]" : "text-gray-200"
            }`}>
            GOLD 24K
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setActiveChart("mobile")}
          className={`flex-1 p-3 rounded ${
            activeChart === "mobile" ? "bg-[#D4AF37]" : "bg-gray-200"
          }`}>
          <Text
            className={`text-center font-semibold ${
              activeChart === "desktop" ? "text-[#D4AF37]" : "text-gray-200"
            }`}>
            GOLD 21K
          </Text>
        </Pressable>
      </View>

      {/* Chart */}
      <View className="h-64 m-5">
        <BarChart
          style={{ flex: 1 }}
          data={data}
          svg={{ fill: activeChart === "desktop" ? "purple" : "orange" }}
          contentInset={{ top: 20, bottom: 20 }}>
          <Grid />
        </BarChart>

        <XAxis
          className="mt-2"
          data={chartData}
          formatLabel={(value, index) => {
            const date = new Date(chartData[index].date);
            return `${date.getMonth() + 1}/${date.getDate()}`;
          }}
          contentInset={{ left: 20, right: 20 }}
          svg={{ fontSize: 10, fill: "black" }}
        />
      </View>
    </ScrollView>
  );
}
