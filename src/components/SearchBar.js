import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {Feather} from '@expo/vector-icons';

const SearchBar = () => {
	return (
		<View style={styles.background}>
			<Feather name="search" size={32} />
			<Text>Search Bar</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: "#bbc0c7",
		height: 50,
		borderRadius: 8,
		marginHorizontal: 16,
	},
});

export default SearchBar;
