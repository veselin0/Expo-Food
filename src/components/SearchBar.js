import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Search"
				style={styles.inputStyle}
				value={term}
				onChangeText={onTermChange}
				onBlur={onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop: 16,
		backgroundColor: "#bbc0c7",
		height: 52,
		borderRadius: 8,
		marginHorizontal: 16,
		flexDirection: "row",
	},
	inputStyle: {
		flex: 1,
		fontSize: 24,
	},
	iconStyle: {
		fontSize: 36,
		alignSelf: "center",
		marginHorizontal: 16,
	},
});

export default SearchBar;
