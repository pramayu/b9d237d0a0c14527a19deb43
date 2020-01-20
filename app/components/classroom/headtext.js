import React from 'react';
import {
    View, Text, Image
} from 'react-native';

const HeadText = (props) => {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
                <View style={{width: '18%'}}>
                    <View style={{width: 45, height: 45, borderRadius: 100, backgroundColor: '#fff', elevation: props.elevation === false ? 0 : 10, borderColor: '#fff', borderWidth: .5}}>
                        <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 100}}
                        source={{uri: 'https://cdn.dribbble.com/users/1355613/screenshots/6317190/smoking_hot_2x.jpg'}}/>
                    </View>
                </View>
                <View style={{width: '82%'}}>
                    <Text style={{fontFamily: 'Brandon_Medium', fontSize: 16, color: '#444'}}>Ms.Marandina</Text>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 4, backgroundColor: '#3d72de'}}>Tutor</Text>
                </View>
            </View>
            {/* <Text style={{fontFamily: 'Brandon_Regular', fontSize: 24, color: '#444'}}>What would you like to learn today?</Text> */}
        </View>
    )
}

export default HeadText;