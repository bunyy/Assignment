import * as React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';

export interface ListProps {

}

export interface ListState {
    proPlayersData: object[]
    searchText: string
    filterData: object[]
}

class List extends React.Component<ListProps, ListState> {
    constructor(props) {
        super(props);
        this.state = {
            proPlayersData: [],
            searchText: '',
            filterData: [],
        };
    }

    componentDidMount = () => {
        fetch("https://api.opendota.com/api/proPlayers")
            .then(response => {
                return response.json()
            }).then(result => {
                this.setState({
                    proPlayersData: result,
                    filterData: result
                })
                //   console.log("data---->", result)
            })
    };

    onChangeSearchText = (e) => {
        this.setState({ searchText: e })
        let text = e.toLowerCase()
        let trucks = this.state.filterData
        let filteredData = trucks.filter((item) => {
            return item.personaname.toLowerCase().match(text)
        })
        console.log("filter",filteredData)
        if (!text || text === '') {
            this.setState({
                filterData: this.state.proPlayersData
            })
        } else if (!Array.isArray(filteredData) && !filteredData.length) {
            this.setState({
                noData: true
            })
        } else if (Array.isArray(filteredData)) {
            this.setState({
                noData: false,
                filterData: filteredData
            })
        }
    }

    renderItem = (item, index) => {
        return (
            <TouchableOpacity style={styles.CELL} onPress={() => this.props.navigation.navigate('detail', { item })}>
                <View>
                    <Image source={{ uri: item.avatarfull }} style={styles.AVATAR} />
                </View>
                <View style={styles.COL2}>
                    <View style={styles.ROW}>
                        <Text>Name : </Text>
                        <Text>{item.personaname}</Text>
                    </View>
                    <View style={styles.ROW}>
                        <Text>Team : </Text>
                        <Text>{item.team_name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.ROOT}>
                <View style={styles.INPUT_VIEW}>
                    <TextInput
                        style={styles.INPUT}
                        value={this.state.searchText}
                        onChangeText={(text) => this.onChangeSearchText(text)}
                        placeholder="Search Players"
                    />
                </View>
                <FlatList
                    data={this.state.filterData}
                    renderItem={({ item, index }) => this.renderItem(item, index)}
                    keyExtractor={item => item.personaname}
                    ItemSeparatorComponent={() => (<View style={styles.LINE} />)}
                    extraData={this.state.searchText}
                />
            </View>
        );
    }
}

export default List;