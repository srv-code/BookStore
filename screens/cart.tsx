import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../shared/styles/globalStyles';
import { getInCartBookIds } from '../apis/updatePurchaseDetails';
import { Button, Container } from 'native-base';
import BookCardList from '../shared/components/list/bookCardList/bookCardList';
import { getBookInfo, Book } from '../apis/fetchBookDetails';

interface CartProps {}

export default function cart(props: CartProps) {
  const showCartItems = () => {
    const inCartBookIds = getInCartBookIds();
    console.log(`inCartBookIds=${inCartBookIds}`);
  };

  React.useEffect(() => {
    console.log(`loaded cart screen`);
  }, []);

  const getInCartBooks = () => {
    const books: Book[] = [];
    getInCartBookIds().map((bookId: number) => {
      books.push(getBookInfo(bookId));
    });
    return books;
  };

  const inCartBooks: Book[] = getInCartBooks();

  return (
    <Container style={globalStyles.container}>
      <View style={styles.innerContainer}>
        {/* <View style={globalStyles.topGenreHeader}>
          <Text
            style={{
              color: genreColor,
              borderColor: genreColor,
              ...globalStyles.topGenreHeaderText,
            }}>
            {selectedGenre}
          </Text>
        </View> */}

        <View style={globalStyles.headerTitleView}>
          <Text style={globalStyles.headerTitleText}>Books In Your Cart</Text>
          {inCartBooks.length == 0 && (
            <Text style={styles.messageBodyText}>None</Text>
          )}
        </View>

        {inCartBooks.length > 0 && (
          <View style={styles.listContainer}>
            <BookCardList
              showPayButton
              showCartRemoveButton
              books={inCartBooks}
            />
          </View>
        )}
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
  messageBodyText: {
    color: 'lightgray',
    fontSize: 18,
  },
});
