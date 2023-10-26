import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#112131',
        paddingBottom: 5,
        marginBottom: 10,
    },
    nameContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    name: {
        fontSize: 24,
        fontFamily: 'Helvetica-Bold',
    },
    subtitle: {
        fontSize: 10,
        fontFamily: 'Helvetica',
        marginTop: 2,
    },
});

const Header = ({ name, subtitle }) => (
    <View style={styles.container}>
        <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    </View>
);

export default Header;

