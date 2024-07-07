import React, {useRef} from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  Text,
  TouchableOpacity,
} from 'react-native';
import {scale, moderateScale, verticalScale} from '../../utils/Scaling';
import { COLORS } from '../../Theme/Colors';

const {width} = Dimensions.get('window');

const images = [
  {
    id: '1',
    uri: 'https://images.unsplash.com/photo-1596265371388-43edbaadab94?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    uri: 'https://images.unsplash.com/photo-1528207734449-c5482f81a727?q=80&w=1446&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    uri: 'https://images.unsplash.com/photo-1679398790833-88d26e1d67d3?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Slider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const scaleX = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={[styles.imageContainer, {opacity, transform: [{scaleX}]}]}>
              <Image source={{uri: item.uri}} style={styles.image} />
              <View style={styles.overlay} />
              <TouchableOpacity
                style={styles.button}
                onPress={() => alert('Watch Now')}>
                <Text style={styles.buttonText}>Watch Now</Text>
              </TouchableOpacity>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  imageContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginVertical: verticalScale(20),
    width: '97%',
    height: '80%',
    borderRadius: moderateScale(10),
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: moderateScale(10),
  },
  button: {
    position: 'absolute',
    bottom: verticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.green,
    width: scale(120),
    height: verticalScale(40),
    borderRadius: moderateScale(25),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
});

export default Slider;
