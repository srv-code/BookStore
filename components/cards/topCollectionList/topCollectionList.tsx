import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CardItem, Card, Text, Body, Button, Icon } from 'native-base';
import { colorSet } from '../../../shared/styles/globalStyles';
import BookCard from '../../../shared/components/card/bookCard/bookCard';

interface TopCollectionListProps {}

export default function topCollectionList(props: TopCollectionListProps) {
  return (
    <View>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          width: '100%',

          justifyContent: 'space-between',
          // paddingLeft: 10,
          // paddingRight: 10,
        }}>
        <Text style={styles.genreHeaderText}>Fiction</Text>
        <Icon
          name='arrow-forward'
          style={{ textAlignVertical: 'center' }}
          onPress={() => console.log('Show all genre items')}
        />
      </View>

      <BookCard onCartAdd={() => console.log('added to cart')} />
    </View>
  );
}

const styles = StyleSheet.create({
  genreHeaderText: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,

    marginVertical: 10,

    // borderColor: 'red',
    // borderWidth: 1,
    // padding: 10,
    // borderRadius: 50,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
  },
});
