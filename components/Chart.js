import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Chart = ({ currentPrice, logoUrl, name, symbol, priceChange, sparkline }) => {
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
          <Text style={styles.title}>{priceChange.toFixed(2)}%</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

});

export default Chart;