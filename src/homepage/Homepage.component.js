import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// import users from './../configuration/User.list';

import styles from './Homepage.component.styles';

class Homepage extends PureComponent {

    state = {
        isTrial: false,
        title: ''
    }

    componentWillMount() {
        this.setMessageTitleForHomepage()
    }

    setMessageTitleForHomepage() {
        this.setState({
            title: 'Welcome to user board'
        })
    }

    navigateToAnonymousUser = () => {

        this.setState({
            isTrial : true
        })
        const { navigation } = this.props;
        navigation.navigate('user', { userType: 'anonymous' });
    }

    navigateToProUser = () => {
        const { navigation } = this.props;
        navigation.navigate('user', { userType: 'professional' });
    }

    navigateToPremiumUser = () => {
        const { navigation } = this.props;
        navigation.navigate('user', { userType: 'premium' });
    }


    render() {
        const { title } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.bottomFrame}>
                    <TouchableOpacity onPress={this.navigateToAnonymousUser}>
                        <View style={styles.userType}>
                            <Text>Anonymous Users</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateToProUser}>
                    <View style={styles.userType}>
                        <Text>Professional Users</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateToPremiumUser}>
                    <View style={styles.userType}>
                        <Text>Premium Users</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Homepage;