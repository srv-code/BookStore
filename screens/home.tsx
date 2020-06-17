import React, { useState } from 'react';
import { Container, Content } from 'native-base';
import { StyleSheet, View, ScrollView } from 'react-native';
import GenreCard from '../components/cards/genreCard';
import { globalStyles } from '../shared/styles/globalStyles';
import { getBookGenreList } from '../apis/bookList';

interface HomeProps {}

export default function home(props: HomeProps) {
  const genreSelectHandler = (name: string) => {
    console.log(`selected genre: ${name}`);
  };

  const genreList = getBookGenreList();

  return (
    <View style={globalStyles.container}>
      <Container>
        <ScrollView>
          <Content padder>
            <GenreCard
              genreList={genreList}
              onGenreSelect={genreSelectHandler}
            />
          </Content>
        </ScrollView>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({});
