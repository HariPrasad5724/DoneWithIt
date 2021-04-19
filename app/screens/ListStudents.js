import React,{Component} from 'react'
import {StyleSheet,Text,View,FlatList, ActivityIndicator} from 'react-native'
import Card from "../component/Card";

export default class ListStudents extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource : [],
    }
  }


  componentDidMount() {
    console.log(this.props.route.params.id);
    return fetch(`http://192.168.0.103:5000/Classroom/${this.props.route.params.id}`)
    .then ( (response) => response.json() )
    .then( (responseJson) => {
console.log(responseJson);
      this.setState({
        isLoading:false,
        dataSource: responseJson.users,
      })
    })
    .catch((error)=>{
      console.log(error)
    });  
  }



  render(){
    return <View styles={{ backgroundColor: "royalblue" }}>
    {this.state.dataSource && (
      <FlatList
        data={this.state.dataSource}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          (!item.isStaff) &&
          <Card
            key={item.RegisterNo}
            title={item.RegisterNo}
            onPress={() => this.props.navigation.navigate("ListUserDocs",{id:item._id})
            }
          />
        )}
      />
    )}
  </View>
}
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    flex: 1,
    alignSelf: 'stretch',
  }
})
