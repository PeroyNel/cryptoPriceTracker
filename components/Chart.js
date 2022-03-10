import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ActivityIndicator } from 'react-native';
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel} from '@rainbow-me/animated-charts';

const { width: SIZE } = Dimensions.get('window');

const Chart = ({ currentPrice, logoUrl, name, symbol, priceChange, sparkline }) => {
  const priceChangeColor = priceChange > 0 ? '#34C759' : '#FF3830';
  
  const formatUSD = value => {
    'worklet';
    if (value === '') {
      const formattedValue = `$${currentPrice.toLocaleString('en-US', { currency: 'USD' })}`
      return formattedValue;
    }

    const formattedValue =`$${parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
    return formattedValue;
  };

    return (
      <ChartPathProvider data={{ points: sparkline, smoothingStrategy: 'bezier' }}>
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
            <ChartYLabel
              format={formatUSD}
              style={styles.boldTitle}
            />
            
            
            <Text style={[styles.title, {color: priceChangeColor}]}>{priceChange.toFixed(2)}%</Text>
          </View>
        </View>
        <View style={styles.chartLineWrapper}>
          <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
          <ChartDot style={{ backgroundColor: 'black' }} />
        </View>
      </View>
      </ChartPathProvider>
  )
}

const styles = StyleSheet.create({
  chartWrapper: {
    marginVertical: 16,
  },
  titleWrapper: {
    marginHorizontal: 16,
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
  },
  chartLineWrapper: {
    marginTop: 40,
    
  }
});

export default Chart;