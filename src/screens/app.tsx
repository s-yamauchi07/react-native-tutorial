import { type FC } from "react";
import { StyleSheet, View, type ImageSourcePropType } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Button } from "../components/button";
import { ImageViewer } from "../components/image-viewer";

const placeholderImage: ImageSourcePropType = require("../assets/images/background-image.png");

const App: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={placeholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="写真を選択" />
        <Button label="この写真を使用" />
      </View>
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
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

export default App;
