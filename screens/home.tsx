import React, { useState } from 'react';
import { Container, Content, Icon, Text } from 'native-base';
import { StyleSheet, View, ScrollView } from 'react-native';
import GenreListCard from '../components/cards/genreListCard/genreListCard';
import TopCollectionList from '../components/cards/topCollectionList/topCollectionList';
import { globalStyles } from '../shared/styles/globalStyles';
import { getBookGenres, getBooksByGenre, Book } from '../apis/bookList';
import BookCardList from '../shared/components/list/bookCardList/bookCardList';

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

          {genreList.map((genre: string, idx: number) => {
            const topBooks: Book[] = getBooksByGenre(genre, 3);
            console.log(`top books of ${genre} genre: %o`, topBooks);

            return (
              <View key={idx}>
                <View style={styles.topGenreHeader}>
                  <Text style={styles.topGenreHeaderText}>{genre}</Text>
                  <Icon
                    name='arrow-forward'
                    style={styles.arrowImage}
                    onPress={() => console.log(`Show all ${genre} genre items`)}
                  />
                </View>

                <BookCardList horizontal books={topBooks} />
              </View>
            );
          })}

          {/* <TopCollectionList /> */}
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
    // marginBottom: 7,
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

  topGenreHeader: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  topGenreHeaderText: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    marginVertical: 10,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
  },
  arrowImage: {
    textAlignVertical: 'center',
  },
});
