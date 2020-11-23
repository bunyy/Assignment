import { Dimensions, ImageStyle, ViewStyle } from 'react-native';
import { TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheet';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window')

export const styles = {
    ROOT: {
        flex: 1,
        backgroundColor: 'white',
    } as ViewStyle,
    AVATAR: {
        height: SCREEN_WIDTH * 0.7,
        width: SCREEN_WIDTH
    } as ImageStyle,
    ROW: {
        flexDirection: 'row',
        margin: 10
    } as ViewStyle,
    NAME_TEXT: {
        fontSize: 18,
        fontWeight: 'bold'
    } as TextStyle,
    VALUE_TEXT: {
        fontSize: 18
    } as TextStyle,
}