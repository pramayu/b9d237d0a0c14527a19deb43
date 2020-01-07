import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';


const SetGrade = (props) => {
    return (
        <View style={{width: '32%', height: '100%', backgroundColor: props.grade === `grade_${props.number}`? '#3951b4' : '#ffffff', 
            borderRadius: 4, borderWidth: 1, borderColor: props.grade === `grade_${props.number}`? '#304497':'#3951b4', elevation: props.grade === `grade_${props.number}`? 25 : 0}}>
            <TouchableOpacity onPress={(e) => props.setHandleGrade(`grade_${props.number}`)} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: props.grade === `grade_${props.number}`? '#ffffff' : '#3951b4'}}>GRADE {props.number}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SetGrade;