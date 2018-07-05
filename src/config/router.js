import { createStackNavigator } from 'react-navigation'; 
import HomeView from './../components/HomeView';
import ArtistDetail from './../components/ArtistDetail';

export const RootStack = createStackNavigator({

	Home: {
		screen: HomeView,
		navigationOptions: {
			header: null,
		},
	},
	Details: {
		screen: ArtistDetail,
		navigationOptions: {
			header: null,
		}
	},
});