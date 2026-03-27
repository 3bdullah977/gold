const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  const nativeWindConfig = withNativeWind(config, { input: "./global.css" });

  // Add SVG transformer
  nativeWindConfig.transformer.babelTransformerPath =
    require.resolve("react-native-svg-transformer");

  // Allow SVG imports
  nativeWindConfig.resolver.assetExts =
    nativeWindConfig.resolver.assetExts.filter((ext) => ext !== "svg");

  nativeWindConfig.resolver.sourceExts.push("svg");

  return nativeWindConfig;
})();
