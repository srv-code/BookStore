import React, { useState } from 'react';
import { Container, Content } from 'native-base';
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
          <GenreListCard genreList={genreList} onGenreSelect={genreSelectHandler} />

          {/* <BookCard /> */}
        </Content>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({});
