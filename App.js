import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import styled from 'styled-component';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Container>
            <Text>HEllo World</Text>
          </Container>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;

const Container = styled.View`
  flex: 3;
`;
