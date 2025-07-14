import { useState, type FC } from "react";
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  type ImageSourcePropType,
} from "react-native";

type EmojiListProps = {
  onSelect: (item: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

export const EmojiList: FC<EmojiListProps> = (props) => {
  const emojis = [
    require("../assets/images/emoji1.png"),
    require("../assets/images/emoji2.png"),
    require("../assets/images/emoji3.png"),
    require("../assets/images/emoji4.png"),
    require("../assets/images/emoji5.png"),
  ];

  return (
    <FlatList
      horizontal // 横方向にスクロールするリストを表示
      showsHorizontalScrollIndicator={Platform.OS === "web"} // 横方向のスクロールバーを表示
      data={emojis} // 表示するデータ
      contentContainerStyle={styles.listContainer}
      renderItem={(
        { item, index }, // 各アイテムを表示するコンポーネントを指定
      ) => (
        <Pressable
          onPress={() => {
            props.onSelect(item);
            props.onCloseModal();
          }}
        >
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
