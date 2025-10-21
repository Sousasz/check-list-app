import { useRef } from 'react';
import { Animated } from 'react-native';

export default function useAnimations() {
  const animations = useRef(new Map()).current;

  const getAnimation = (id) => {
    if (!animations.has(id)) {
      animations.set(id, new Animated.Value(0));
    }
    return animations.get(id);
  };

  const animateIn = (id) => {
    const anim = getAnimation(id);
    Animated.timing(anim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const animateOut = (id, callback) => {
    const anim = getAnimation(id);
    Animated.timing(anim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      callback();
      animations.delete(id);
    });
  };

  return {
    getAnimation,
    animateIn,
    animateOut,
  };
}
