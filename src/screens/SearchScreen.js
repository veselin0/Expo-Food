import React from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
	return (
		<View>
			<SearchBar />
			<Text>Search Screen</Text>
		</View>
	);
};

const style = StyleSheet.create({});

export default SearchScreen;
