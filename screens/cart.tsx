import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container } from 'native-base';
import { globalStyles } from '../shared/styles/globalStyles';
import { getInCartBookIds } from '../apis/updatePurchaseDetails';
import BookCardList from '../shared/components/list/bookCardList/bookCardList';
import { getBookInfo, Book } from '../apis/fetchBookDetails';

interface CartProps {
  navigation: any;
}

export default function cart(props: CartProps) {
  const getInCartBooks = () => {
    const books: Book[] = [];
    getInCartBookIds().map((bookId: number) => {
      let book = getBookInfo(bookId);
      if (book) books.push();
    });
    return books;
  };

  const inCartBooks: Book[] = getInCartBooks();

  return (
    <Container style={globalStyles.container}>
      <View style={styles.innerContainer}>
        <View style={globalStyles.headerTitleView}>
          <Text style={globalStyles.headerTitleText}>Books In Your Cart</Text>
          {inCartBooks.length == 0 && (
            <Text style={styles.messageBodyText}>Nothing till now</Text>
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
    marginTop: 20,
    color: 'gray',
    fontSize: 18,
  },
});
