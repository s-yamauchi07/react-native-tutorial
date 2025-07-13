import { type FC } from "react";
import { StyleSheet, View, type ImageSourcePropType } from "react-native";
import { StatusBar } from "expo-status-bar";

import { ImageViewer } from "../components/image-viewer";

const placeholderImage: ImageSourcePropType = require("../assets/images/background-image.png");

const App: FC = () => {
  return (
    <View style={styles.container}>
      <ImageViewer placeholderImageSource={placeholderImage} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});

export default App;
