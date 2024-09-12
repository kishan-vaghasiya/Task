import React from 'react';
import {View, Text, StyleSheet, StatusBar, FlatList, Image} from 'react-native';
import {COLORS} from '../../Theme/Colors';
import {moderateScale, scale} from '../../utils/Scaling';

const data = [
  {
    id: '1',
    image: 'https://reactnative.dev/img/logo-og.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchangedIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently',
  },
  {
    id: '2',
    image: 'https://xclcamps.com/wp-content/uploads/coding-difference-1.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchangedIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently',
  },
  {
    id: '3',
    image:
      'https://www.multidots.com/wp-content/uploads/2020/01/26-Importance-of-Coding-Standard-and-Code-Quality-in-Software-Development.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchangedIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently',
  },
  {
    id: '4',
    image:
      'https://www.springboard.com/blog/wp-content/uploads/2022/06/coding.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchangedIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently',
  },
  {
    id: '5',
    image:
      'https://media.licdn.com/dms/image/D5612AQFlxMRpK-On8g/article-cover_image-shrink_720_1280/0/1670602482212?e=2147483647&v=beta&t=1HWOX81_1_mfqzP2kdHty9dnCVgb-dmVsMuYhBKCnRQ',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchangedIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently',
  },
];

const Home = () => {
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.White} barStyle="dark-content" />
      <View style={styles.HeaderContainer}>
        <Text style={styles.header}>Home Screen</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  HeaderContainer: {
    backgroundColor: COLORS.White,
    elevation: 10,
  },
  header: {
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    color: COLORS.Black,
    marginBottom: scale(16),
    marginHorizontal: scale(12),
  },
  listContainer: {
    flexGrow: 1,
    paddingHorizontal: scale(12),
  },
  itemContainer: {
    backgroundColor: COLORS.White,
    padding: scale(16),
    marginVertical: scale(8),
    borderRadius: scale(8),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: scale(2)},
    shadowOpacity: 0.1,
    shadowRadius: scale(4),
  },
  image: {
    width: '100%',
    height: scale(200),
    borderRadius: scale(8),
    marginBottom: scale(8),
  },
  textContainer: {
    marginTop: scale(8),
  },
  description: {
    fontSize: scale(14),
    color: COLORS.Black,
    lineHeight: scale(18),
  },
});

export default Home;
