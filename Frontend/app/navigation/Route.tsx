import React from 'react';
import { ThemeContextProvider } from '../constants/ThemeContext';
import { Text } from 'react-native';
import StackNavigator from './StackNavigator';

const Route = () => {

	return (
		<ThemeContextProvider>
			<StackNavigator/>
		</ThemeContextProvider>
	)
  
}

export default Route;