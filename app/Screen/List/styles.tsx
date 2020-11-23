import { Dimensions, ImageStyle, ViewStyle } from 'react-native';
import { TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheet';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window')

export const styles = {
    ROOT: {
        flex: 1,
        backgroundColor: 'white',
    } as ViewStyle,
    INPUT_VIEW: {
        margin: 10,
        alignSelf: 'center',
    } as ViewStyle,
    INPUT: {
        width: SCREEN_WIDTH * 0.95,
        height: SCREEN_WIDTH * 0.15,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 30
    } as TextStyle,
    CELL: {
        flexDirection: 'row',
        margin: 10,
        height: SCREEN_WIDTH * 0.3,
        width: SCREEN_WIDTH,
    } as ViewStyle,
    AVATAR: {
        height: SCREEN_WIDTH * 0.3,
        width: SCREEN_WIDTH * 0.3
    } as ImageStyle,
    LINE: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    } as ViewStyle,
    COL2: {
        justifyContent: 'center',
        height: SCREEN_WIDTH * 0.3,
        marginHorizontal: 10
    } as ViewStyle,
    ROW: {
        flexDirection: 'row'
    } as ViewStyle,
}