import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {

    return (
        <Card>
            <CardSection>
                <View></View>
                <View style={styles.textContainerStyle}>
                    <Text>{props.record.title}</Text>
                    <Text>{props.record.artist}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    textContainerStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column',
    }
};

export default AlbumDetail;
