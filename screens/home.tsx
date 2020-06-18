import React, { useState } from 'react';
import { Container, Content, Badge, Text } from 'native-base';
import { StyleSheet, View, ScrollView } from 'react-native';
import GenreListCard from '../components/cards/genreListCard';
import { globalStyles } from '../shared/styles/globalStyles';
import { getBookGenres } from '../apis/bookList';

interface HomeProps {}

export default function home(props: HomeProps) {
  const genreSelectHandler = (name: string) => {
    console.log(`selected genre: ${name}`);
  };

  const genreList = getBookGenres();

  return (
    <Container style={globalStyles.container}>
      <ScrollView>
        <Content padder>
          <GenreListCard
            genreList={genreList}
            onGenreSelect={genreSelectHandler}
          />

          <View style={{ alignItems: 'center' }}>
            <Text style={styles.textTopCollections}>Top Collections</Text>
          </View>

          

          {/* <BookCard /> */}
        </Content>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  textTopCollections: {
    backgroundColor: 'dodgerblue',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 50,
    width: 300,
    marginTop: 10,
    marginBottom: 7,
    borderRadius: 50,
    fontSize: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
