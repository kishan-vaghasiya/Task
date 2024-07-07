import React, { useRef, useState, useEffect } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
  PanResponder,
} from 'react-native';
import { COLORS } from '../../Theme/Colors';

export default function Images() {
  const [modalVisible, setModalVisible] = useState(false);
  const [imagePosition, setImagePosition] = useState(new Animated.ValueXY());
  const imageRef = useRef(null);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: imagePosition.x,
            dy: imagePosition.y,
          },
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Open Image Viewer</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Animated.View
              {...panResponder.panHandlers}
              style={[
                styles.imageContainer,
                {
                  transform: [
                    { translateX: imagePosition.x },
                    { translateY: imagePosition.y },
                  ],
                },
              ]}>
              <Image
                ref={imageRef}
                source={require('../../Assets/Images/IMG.webp')}
                style={styles.image}
              />
            </Animated.View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close Viewer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  button: {
    padding: 10,
    backgroundColor: COLORS.green,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    height: '80%',
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  imageContainer: {
    width: 200,
    height: 200,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  closeButton: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    position: 'absolute',
    bottom: 30,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
