import { type FC } from "react";
import { type ImageSourcePropType } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type EmojiStickerProps = {
  stickerSource: ImageSourcePropType | undefined;
  imageSize: number;
};

export const EmojiSticker: FC<EmojiStickerProps> = (props) => {
  // useSharedValueでステッカーのサイズを管理。
  const scaleImage = useSharedValue(props.imageSize);
  const translateX = useSharedValue(0); // Xの初期値を設定
  const translateY = useSharedValue(0); // yの初期値を設定

  // ドラッグをしたら画像配置をしているX軸とY軸の値を移動した文だけ追加
  const drag = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ] as const, // Typescriptにtransformの型であることを固定する。
    };
  });

  // useAnimatedStyleを用いてどのようなanimationにするかを指定できる。
  // withSpringを使用してバネのような動きをさせる。scaleImageの値が更新されるたびにAnimationが起こる。
  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  const doubleTap = Gesture.Tap() //Gesture.Tap()でタップジェスチャーを定義
    .numberOfTaps(2) // 2を付与することでダブルタップを表現する
    .onStart(() => {
      // ダブルタップを行なったら、ステッカーサイズの拡大をする。
      if (scaleImage.value !== props.imageSize + 2) {
        scaleImage.value = scaleImage.value * 2;
      }
    });

  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={props.stickerSource}
            resizeMode="contain"
            style={[
              imageStyle, // animationで変化するスタイル(幅と高さ)
              { width: props.imageSize, height: props.imageSize }, // 初期値
            ]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
};
