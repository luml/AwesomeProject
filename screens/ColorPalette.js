import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPlaette = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 18,
  },
});

export default ColorPlaette;
