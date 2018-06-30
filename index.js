// Import a library to create component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// create a component

const App = () =>  (
        <Header headerText={'Albums2'} />
);


// render it to device
AppRegistry.registerComponent('albums', () => App);
