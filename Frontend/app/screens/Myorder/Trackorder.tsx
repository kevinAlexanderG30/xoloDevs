import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text,  ScrollView, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import Header from '../../layout/Header';
import { COLORS,FONTS } from '../../constants/theme';
import { IMAGES } from '../../constants/Images';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';


type TrackorderScreenProps = StackScreenProps<RootStackParamList, 'Trackorder'>;

const Trackorder = ({navigation} : TrackorderScreenProps)  => {

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    return (
        <View style={{backgroundColor:colors.card,flex:1}}>
            <Header
                title='Tracking Orders'
                leftIcon='back'
                titleRight
                //titleLeft
            />
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View
                    style={[GlobalStyleSheet.container,styles.TrackCard]}
                >
                    <View 
                        style={[GlobalStyleSheet.flex,{padding:30}]}
                    >
                        <View style={{flexDirection:'row',alignItems:'center',gap:20}}>
                            <Image
                                style={{
                                    height:50,
                                    width:50,
                                    borderRadius:50
                                }}
                                source={IMAGES.small6}
                            />
                            <View>
                                <Text style={[styles.cardtitle,{color:COLORS.card}]}>Mr. Shandy</Text>
                                <Text style={{...FONTS.fontRegular,fontSize:14,color:COLORS.card}}>ID 2445556</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Call')}
                                activeOpacity={0.8}
                                style={styles.cardimage}
                            >
                                <Image
                                    style={[GlobalStyleSheet.image3]}
                                    source={IMAGES.call}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Singlechat')}
                                activeOpacity={0.8}
                                style={styles.cardimage}
                            >
                                <Image
                                    style={[GlobalStyleSheet.image3,{tintColor:COLORS.card}]}
                                    source={IMAGES.chat}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={[
                            GlobalStyleSheet.container,styles.TrackCard2,
                            {
                                backgroundColor:theme.dark ? colors.background :COLORS.card,
                            }
                        ]}
                    >
                         <View style={{alignItems:'center',marginVertical:10}}>
                            <View
                                style={{
                                    height:6,
                                    width:60,
                                    borderRadius:20,
                                    backgroundColor:'#DDDDDD'
                                }}
                            />
                        </View>
                        <View style={[styles.flex,{marginTop:5}]}>
                            <View
                                style={[styles.cardcricle,{
                                    backgroundColor:'#D9EDE6',
                                }]}
                            >
                                <Image
                                    style={[GlobalStyleSheet.image3,{tintColor:COLORS.primary}]}
                                    source={IMAGES.map}
                                />
                            </View>
                            <View>
                                <Text style={[styles.cardtitle,{color:colors.title}]}>Sweet Corner St. </Text>
                                <Text style={[styles.cardsubtitle,{color:'#747475'}]}>SFranklin Avenue 2263</Text>
                            </View>
                        </View>
                        <View style={[styles.trackLine,{borderColor:'#C4C4C4',}]}></View>
                        <View style={[styles.flex,{marginTop:40}]}>
                            <View
                                style={[styles.cardcricle,{
                                    borderWidth:1,
                                    borderColor:'#CFCFCF',
                                    backgroundColor:colors.card
                                }]}
                            >
                                <Image
                                    style={[GlobalStyleSheet.image3,{tintColor:colors.title}]}
                                    source={IMAGES.home}
                                />
                            </View>
                            <View>
                                <Text style={[styles.cardtitle,{color:colors.title}]}>Ombe Coffee Shop</Text>
                                <Text style={[styles.cardsubtitle,{color:'#747475'}]}>Sent at 08:23 AM</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:undefined,
        width: '100%',
        aspectRatio:1/1.2
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    TrackCard:{
        flex:1,
        padding:0,
        backgroundColor:COLORS.primary,
        borderTopLeftRadius:34,
        borderTopRightRadius:34,
        marginTop:20
    },
    TrackCard2:{
        flex:1,
        padding:0,
        backgroundColor:COLORS.card,
        borderTopLeftRadius:34,
        borderTopRightRadius:34,
        paddingHorizontal:30
    },
    flex:{
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 20
    },
    cardtitle:{
        ...FONTS.fontMedium, 
        fontSize: 16, 
        color: COLORS.title
    },
    cardsubtitle:{
        ...FONTS.fontRegular, 
        fontSize: 12, 
        color: COLORS.title
    },
    cardimage:{
        height:50,
        width:50,
        borderRadius:50,
        backgroundColor:'#1F9D71',
        alignItems:'center',
        justifyContent:'center'
    },
    cardcricle:{
        height:57,
        width:57,
        borderRadius:60,
        backgroundColor:'#D9EDE6',
        alignItems:'center',
        justifyContent:'center'
    },
    trackLine:{
        height: 39, 
        width: 2, 
        position: 'absolute', 
        left: 57,
        top: 87,
        borderWidth:1,
        borderColor:'#C4C4C4',
        borderStyle:'dashed',
        zIndex:-1
    },
})

export default Trackorder