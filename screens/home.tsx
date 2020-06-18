import React, { useState } from 'react';
import { Container, Content, Icon, Text } from 'native-base';
import { StyleSheet, View, ScrollView } from 'react-native';
import { globalStyles } from '../shared/styles/globalStyles';
import { getBookGenres, getBooksByGenre, Book } from '../apis/fetchBookDetails';
import { colorSet } from '../shared/styles/globalStyles';
import GenreListCard from '../components/cards/genreListCard/genreListCard';
import BookCardList from '../shared/components/list/bookCardList/bookCardList';

interface HomeProps {
  navigation: any;
}

export default function home(props: HomeProps) {
  const openGenreBookListHandler = (genre: string, color: string) => {
    // console.log(`Opening ${genre} genre book list`);
    props.navigation.push('Books', { genre: genre, color: color });
  };

  const genreList = getBookGenres();

  return (
    <Container style={globalStyles.container}>
      <ScrollView>
        <Content padder>
          <GenreListCard
            genreList={genreList}
            onGenreSelect={openGenreBookListHandler}
          />

          <View style={globalStyles.headerTitleView}>
            <Text style={globalStyles.headerTitleText}>Top Collections</Text>
          </View>

          {genreList.map((genre: string, idx: number) => {
            const topBooks: Book[] = getBooksByGenre(genre, 3);
            // console.log(`top books of ${genre} genre: %o`, topBooks);
            if (topBooks.length == 0) return null;
            const genreColor = colorSet[idx % colorSet.length];
            // console.log(`idx=${idx}, genreColor=${genreColor}`);

            return (
              <View key={idx}>
                <View style={globalStyles.topGenreHeader}>
                  <Text
                    style={{
                      color: genreColor,
                      borderColor: genreColor,
                      ...globalStyles.topGenreHeaderText,
                    }}>
                    {genre}
                  </Text>
                  <Icon
                    name='arrow-forward'
                    style={styles.arrowImage}
                    onPress={() => openGenreBookListHandler(genre, genreColor)}
                  />
                </View>

                <BookCardList horizontal showCartAddButton books={topBooks} />
              </View>
            );
          })}
        </Content>
      </ScrollView>
    </Container>
  );
}

export const styles = StyleSheet.create({
  arrowImage: {
    textAlignVertical: 'center',
  },
});
