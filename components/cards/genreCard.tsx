import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CardItem, Card, Text, Body, Button } from 'native-base';

interface GenreCardProps {
  genreList: string[];
  onGenreSelect: (text: string) => void;
}

export default function genreCard(props: GenreCardProps) {
  let itemIdx = 0;
  const colorSet = [
    'brown',
    'blueviolet',
    'cadetblue',
    'chartreuse',
    'chocolate',
    'coral',
    'cornflowerblue',
    'darkblue',
    'darkgoldenrod',
    'darkcyan',
    'dodgerblue',
  ];

  return (
    <Card>
      <CardItem header bordered>
        <Text style={styles.genreText}>Genre</Text>
      </CardItem>
      <CardItem bordered>
        <Body style={styles.cardBody}>
          {props.genreList.map((name: string, idx: number) => {
            let color = colorSet[itemIdx % colorSet.length];

            return (
              <Button
                key={itemIdx++}
                rounded
                bordered
                style={{ margin: 4, borderColor: color }}
                onPress={() => props.onGenreSelect(name)}>
                <Text uppercase={false} style={{ color: color }}>
                  {name}
                </Text>
              </Button>
            );
          })}
        </Body>
      </CardItem>
    </Card>
  );
}

const styles = StyleSheet.create({
  genreText: {
    fontSize: 20,
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});
