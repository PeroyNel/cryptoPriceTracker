import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';

const ListItem = ({ name, symbol, currentPrice, priceChange, logoUrl, onPress }) => {
  const priceChangeColor = priceChange > 0 ? '#34C759' : '#FF3830';
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.itemWrapper}>
            <View style={styles.leftWrapper}>
                <Image source={{ uri: logoUrl }} style={styles.image}/>
                <View style={styles.titlesWrapper}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{symbol}</Text>
                </View>

                

            </View>
            <View style={styles.rightWrapper}>
                    <Text style={styles.title}>${currentPrice.toLocaleString('en-US', {currency: 'USD'})}</Text>
                    <Text style={[styles.subtitle], {color: priceChangeColor}}>{priceChange.toFixed(2)}%</Text>
            </View>
        </View>
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        height: 48,
        width: 48,
        
    },
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        
        
    },
    titlesWrapper: {
        

    },
    title: {
        marginLeft: 8,
        fontSize: 18,
        color: "black",

    },
    subtitle: {
        marginLeft: 8,
        marginTop: 4,
        fontSize: 14,
        color: "#A9ABB1",

    },
    rightWrapper: {
        alignItems: 'flex-end',
    },
})

export default ListItem