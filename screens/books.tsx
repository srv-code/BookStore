import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { globalStyles } from '../shared/styles/globalStyles';
import { getBooksByGenre } from '../apis/fetchBookDetails';
import BookCardList from '../shared/components/list/bookCardList/bookCardList';
import { Container } from 'native-base';

interface BooksProps {
  navigation: any;
}

export default function books(props: BooksProps) {
  const selectedGenre = props.navigation.getParam('genre');
  const genreColor = props.navigation.getParam('color');
  const allBooks = getBooksByGenre(selectedGenre);

  return (
    <Container style={globalStyles.container}>
      <View style={styles.innerContainer}>
        <View style={globalStyles.topGenreHeader}>
          <Text
            style={{
              color: genreColor,
              borderColor: genreColor,
              ...globalStyles.topGenreHeaderText,
            }}>
            {selectedGenre}
          </Text>
        </View>

        <View style={styles.listContainer}>
          <BookCardList showCartAddButton books={allBooks} />
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  listContainer: {
    flex: 1,
  },
});
