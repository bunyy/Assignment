/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import RootNavigation from './app/Navigators/RootNavigation';

AppRegistry.registerComponent(appName, () => RootNavigation);
