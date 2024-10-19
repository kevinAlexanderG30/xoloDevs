import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text,Image, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { IMAGES } from '../../constants/Images';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import Button from '../../components/Button/Button';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { ScrollView } from 'react-native-gesture-handler';
import CheckoutItems from '../../components/CheckoutItems';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/reducer/cartReducer';
import Swiper from 'react-native-swiper/src';
import { Feather } from '@expo/vector-icons';


const ItemImages = [IMAGES.vacasCards1, IMAGES.vacasCards1, IMAGES.vacasCards1];

type ProductsDetailsScreenProps = StackScreenProps<RootStackParamList, 'ProductsDetails'>;

const ProductsDetails = ({navigation} : ProductsDetailsScreenProps) => {


    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addToCart({
            id:"15",
            image:IMAGES.vacasCards1,
            title:"Razas Guernsey",
            price:"$1200",
            brand:"Guernsey",
        } as any ));
    }

    return (
       <View style={{backgroundColor:colors.background,flex:1}}>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View
                    style={[styles.imagecard,]}
                >
                    <Swiper
                        autoplay={true}
                        autoplayTimeout={2}
                        showsPagination={Platform.OS === "android" ? false : false}
                        loop={false}
                    >
                        {ItemImages.map((data, index) => (
                            <View
                                key={index}
                            >
                                <Image
                                    style={{
                                        height:350,
                                        width: '100%',
                                        resizeMode:'contain'
                                    }}
                                    source={data}
                                />
                            </View>
                        ))}
                    </Swiper>
                    <View
                        style={[styles.toparre]}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={[styles.backbtn,{backgroundColor:'rgba(246,246,246,.3)'}]}
                        >
                                <Feather size={24} color={COLORS.card} name={'arrow-left'} />
                        </TouchableOpacity>
                        <Text style={{...FONTS.fontSemiBold,fontSize:20,color:COLORS.card}}>Detalles</Text>
                        <TouchableOpacity
                             onPress={() => {addItemToCart(); navigation.navigate('MyCart')}}
                            style={[styles.backbtn,{backgroundColor:'rgba(246,246,246,.3)'}]}
                        >
                                <Feather size={20} color={COLORS.card} name={'shopping-cart'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.bottomcard,{backgroundColor:theme.dark ? colors.background :colors.card}]}>
                    <View style={[GlobalStyleSheet.container,{paddingHorizontal:30}]}>
                        <View style={{alignItems:'center',marginBottom:20}}>
                            <View
                                style={{
                                    height:6,
                                    width:60,
                                    borderRadius:20,
                                    backgroundColor:'#DDDDDD'
                                }}
                            />
                        </View>
                        <View
                            style={[styles.rattingcard]}
                        >
                            <Text style={{...FONTS.fontSemiBold,fontSize:24,color:COLORS.card,lineHeight:34}}>4.5</Text>
                        </View>
                        <Text style={[styles.brandTitle,{color:colors.title}]}>Guernsey</Text>
                        <Text style={[styles.subtitle,{color:theme.dark ? 'rgba(255,255,255,.7)':'#4E4E4E',paddingVertical:15}]}>“En venta, ofrecemos una vaca de raza Guernsey con trazabilidad completa y garantizada. Esta vaca cuenta con un seguimiento exhaustivo desde su nacimiento, garantizando su origen, estado de salud y alimentación controlada. {"\n"}Se garantiza libre de mastitis y otras afecciones que puedan afectar su productividad.
                            Movimientos: Todos los movimientos de la vaca han sido registrados, facilitando la trazabilidad en caso de inspección o para satisfacer los estándares de exportación.</Text>
                        <View style={[GlobalStyleSheet.flex,{paddingVertical:15}]}>
                            <View
                                style={{
                                    flexDirection:'row',
                                    alignItems:'center',
                                    gap:10
                                }}
                            >
                                <View style={{flexDirection:'row', gap:5 }}>
                                    <Text style={[styles.subtitle2,{fontSize:14,color:colors.title}]}>$</Text>
                                    <Text style={[styles.subtitle2,{color:colors.title,lineHeight:30}]}>$1200</Text>
                                </View>
                                <Text style={{...FONTS.fontMedium,fontSize:16,color:'#9A9A9A'}}>$2200</Text>
                            </View>
                            <View>
                                <CheckoutItems
                                    productList={true}
                                />
                            </View>
                        </View>
                        <Text style={{...FONTS.fontLight,fontSize:12,color:theme.dark ? 'rgba(255,255,255,.7)':'#4E4E4E',marginTop:5}}> Alimentación: Alimentada con una dieta equilibrada y controlada, lo que asegura que produce leche rica en grasa y beta-caroteno, característica distintiva de la leche de vaca Guernsey. Todos los detalles de su alimentación están documentados para garantizar la máxima calidad de la leche.</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={[GlobalStyleSheet.container,{paddingTop:0}]}>
                <Button
                    onPress={() => navigation.navigate('DeliveryAddress')}
                    title='Place order'
                    color={COLORS.primary}
                    text={COLORS.card}
                    style={{borderRadius:50}}
                />
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
    subCard:{
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor:COLORS.inputborder,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginBottom: 5
    },
    imagecard:{
        width:'100%',
        height: SIZES.height / 2,
        paddingTop:60,
        backgroundColor:COLORS.primary,
        paddingBottom:30
    },
    backbtn:{
        height: 45,
        width: 45,
        borderRadius:45,
        alignItems:'center',
        justifyContent : 'center',
    },
    toparre:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        paddingHorizontal: 30,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    bottomcard:{
        backgroundColor:COLORS.card,
        flex:1,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:-60
    },
    rattingcard:{
        height:64,
        width:64,
        borderRadius:50,
        backgroundColor:'#FF8730',
        alignItems:'center',
        justifyContent:'center',
        shadowColor: 'rgba(255,135,48,.4)',
        shadowOffset: {
            width: 0,
            height: 15,
        },
        shadowOpacity: 0.34,
        shadowRadius: 31.27,
        elevation: 8,
        position:'absolute',
        right:40,
        top:-25, 
    },
    subtitle:{
        ...FONTS.fontRegular,
        fontSize:14,
        color:COLORS.title,
    },
    bottombtn:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.secondary,
        height:65,
        borderRadius:50,
        padding:0
    },
    brandTitle:{
        ...FONTS.fontMedium,
        fontSize:20,
        color:COLORS.title,
    },
    subtitle2:{
        ...FONTS.fontSemiBold,
        fontSize:24,
        color:COLORS.title
    }
})

export default ProductsDetails