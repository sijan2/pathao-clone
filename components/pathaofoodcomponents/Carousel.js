import React, {
  useState,
  useEffect,
  createRef,
  useCallback,
  useRef,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";
import { event } from "react-native-reanimated";
import sanityClient, { urlFor } from "../../sanity";
import CarouselItem from "./CarouselItem";

const { width, height } = Dimensions.get("window");

let flatListRef = createRef();

const infiniteScroll = (data) => {
  const numberOfData = data.length;
  let scrollValue = 0,
    scrolled = 0;
  setInterval(() => {
    scrolled++;
    if (scrolled < numberOfData) {
      scrollValue = scrollValue + width * 0.65;
    } else {
      scrolled = 0;
      scrollValue = 0;
    }
    flatListRef.current.scrollToOffset({
      offset: scrollValue,
      animated: true,
    });
  }, 3000);
};

// let flatList;

// function infiniteScroll(dataList) {
//   const numberOfData = dataList.length;
//   let scrollValue = 0,
//     scrolled = 0;

// setInterval(function () {
//   scrolled++;
//   if (scrolled < numberOfData) scrollValue = scrollValue + width;
//   else {
//     scrollValue = 0;
//     scrolled = 0;
//   }

const Carousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  let position = Animated.divide(scrollX, width * 0.65);
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "categories"]
          `
      )
      .then((data) => {
        setDataList(data);
      });
  }, []);

  // useEffect(() => {
  //   infiniteScroll(dataList);
  // });

  if (dataList && dataList.length) {
    return (
      <View>
        <Animated.FlatList
          ref={flatListRef}
          data={dataList}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          contentContainerStyle={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            paddingHorizontal: 15,
          }}
          scrollEnabled
          snapToInterval={width * 0.65}
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItem imgUrl={urlFor(item.image).url()} />;
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
        />

        <View className="flex-row left-40">
          {dataList.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 6,
                  width: 6,
                  backgroundColor: "#595959",
                  marginRight: 6,
                  borderRadius: 5,
                }}
              />
            );
          })}
          {/* <Animated.View
            className="w-3 h-3 rounded-full border-[#333]"
            style={{
              borderWidth: 1,
              top: -3,
              left: -3,
              position: "absolute",
              transform: [
                {
                  translateX: Animated.divide(
                    scrollX,
                    width * 0.65
                  ).interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 12],
                  }),
                },
              ],
            }}
          /> */}
        </View>
      </View>
    );
  }
  return null;
};

export default Carousel;
