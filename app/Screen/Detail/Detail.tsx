import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export interface DetailProps {

}

export interface DetailState {
    detail: object
}

class Detail extends React.Component<DetailProps, DetailState> {
    constructor(props: DetailProps) {
        super(props);
        this.state = { detail: props.route.params.item };
    }
    render() {
        return (
            <View style={styles.ROOT}>
                <Image source={{ uri: this.state.detail.avatarfull }} style={styles.AVATAR} />
                <View style={styles.ROW}>
                    <Text style={styles.NAME_TEXT}>Name : </Text>
                    <Text style={styles.VALUE_TEXT}>{this.state.detail.personaname}</Text>
                </View>
                <View style={styles.ROW}>
                    <Text style={styles.NAME_TEXT}>Team : </Text>
                    <Text style={styles.VALUE_TEXT}>{this.state.detail.team_name}</Text>
                </View>
                <View style={styles.ROW}>
                    <Text style={styles.NAME_TEXT}>Country Code : </Text>
                    <Text style={styles.VALUE_TEXT}>{this.state.detail.country_code}</Text>
                </View>
                <View style={styles.ROW}>
                    <Text style={styles.NAME_TEXT}>Local Country Code : </Text>
                    <Text style={styles.VALUE_TEXT}>{this.state.detail.loccountrycode}</Text>
                </View>
                <View style={styles.ROW}>
                    <Text style={styles.NAME_TEXT}>Stream Id : </Text>
                    <Text style={styles.VALUE_TEXT}>{this.state.detail.steamid}</Text>
                </View>
                <View style={styles.ROW}>
                    <Text style={styles.NAME_TEXT}>Team Id : </Text>
                    <Text style={styles.VALUE_TEXT}>{this.state.detail.team_id}</Text>
                </View>
            </View>
        );
    }
}

export default Detail;