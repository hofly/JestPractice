import React, { PureComponent } from 'react'
import { Text, View, Image } from 'react-native'

import users from './../configuration/User.list';
import defaultAvatar from './../../assets/user.png';

class User extends PureComponent {
    
    render() {
        const { params } = this.props.navigation.state;

        const { userType } = params;
        const data = users[userType];

        return (
            <View style={{ justifyContent: 'center', alignItems : 'center', paddingTop: 100 }}>
                <Text style={{ paddingVertical: 10 }}>User</Text>

                <Text style={{ fontWeight: 'bold', fontSize: 18 }}> Name: { data.name }</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}> Age: { data.age }</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}> Type: { data.userType }</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}> Avatar</Text>
                <View>
                { data.avatar !== null && 
                        <Image source={defaultAvatar} style={{ width: 50, height: 50 }}/>
                }
                </View>
            </View>
        );
    }
}

export default User;