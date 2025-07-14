import { type FC } from "react";
import { Image, StyleSheet, type ImageSourcePropType } from "react-native";

type ImageViewerProps = {
  placeholderImageSource: ImageSourcePropType;
  selectedImage: string | null;
};

export const ImageViewer: FC<ImageViewerProps> = (props) => {
  // porpsに選択した画像があればそれをimageSourceに設定し、なければplaceholderImageSourceを使用する。
  const imageSource = props.selectedImage
    ? { uri: props.selectedImage }
    : props.placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
