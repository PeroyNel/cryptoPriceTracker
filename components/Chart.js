import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Chart = ({ currentPrice, logoUrl, name, symbol, priceChange, sparkline }) => {
  const priceChangeColor = priceChange > 0 ? '#34C759' : '#FF3830';
    return (
    <View style={styles.chartWrapper}>
      <View style={styles.titleWrapper}>
        <View style={styles.upperTitles}>
          <View style={styles.upperLeftTitle}>
            <Image source={{uri: logoUrl}} style={styles.image}/>
            <Text style={styles.subtitle}>{name} ({symbol})</Text>
          </View>
          <Text style={styles.subtitle}>7d</Text>
        </View>
        <View style={styles.lowerTitles}>
          <Text style={styles.boldTitle}>${currentPrice.toLocaleString('en-US', {currency: 'USD'})}</Text>
          <Text style={[styles.title, {color: priceChangeColor}]}>{priceChange.toFixed(2)}%</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  chartWrapper: {
    margin: 16,
  },
  upperTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#A9ABB1',
  },
  upperLeftTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lowerTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 0,
    
  },
  boldTitle: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
  }
});

export default Chart;