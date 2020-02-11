import React from 'react';
import {
    View, Text, Dimensions, TouchableOpacity, Image
} from 'react-native';

const {width, height} = Dimensions.get('window');

const TeacherPsi = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
            <TouchableOpacity style={{width: 55, height: 55, borderRadius: 100, backgroundColor: '#ededed', elevation: 8, borderWidth: 1.5, borderColor: '#fff', marginRight: 31}}>
                <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius:100}}
                    source={{uri: 'https://cdn.dribbble.com/users/1787323/screenshots/9028692/shot-cropped-1576296649496.png'}} />
            </TouchableOpacity>
            <TouchableOpacity style={{width: 55, height: 55, borderRadius: 100, backgroundColor: '#ededed', elevation: 8, borderWidth: 1.5, borderColor: '#fff', marginRight: 31}}>
                <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius:100}}
                    source={{uri: 'https://instagram.fdps5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/71784535_157473108844311_3763393540683523523_n.jpg?_nc_ht=instagram.fdps5-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=smmVMhWL8XkAX8TRYui&oh=739dcd202d17b71c5bc6781451935ed1&oe=5EC8FEDD'}} />
            </TouchableOpacity>
            <TouchableOpacity style={{width: 55, height: 55, borderRadius: 100, backgroundColor: '#ededed', elevation: 8, borderWidth: 1.5, borderColor: '#fff', marginRight: 31}}>
                <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius:100}}
                    source={{uri: 'https://cdn.dribbble.com/users/113499/screenshots/9841293/rice-kitty.png'}} />
            </TouchableOpacity>
            <TouchableOpacity style={{width: 55, height: 55, borderRadius: 100, backgroundColor: '#ededed', elevation: 8, borderWidth: 1.5, borderColor: '#fff', marginRight: 31}}>
                <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius:100}}
                    source={{uri: 'https://cdn.dribbble.com/users/113499/screenshots/7042167/image.png'}} />
            </TouchableOpacity>
            <TouchableOpacity style={{width: 55, height: 55, borderRadius: 100, backgroundColor: '#ededed', elevation: 8, borderWidth: 1.5, borderColor: '#fff', marginRight: 31}}>
                <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius:100}}
                    source={{uri: 'https://cdn.dribbble.com/users/44324/screenshots/9006584/spacecat_2x.jpg'}} />
            </TouchableOpacity>
        </View>
    )
}

export default TeacherPsi;