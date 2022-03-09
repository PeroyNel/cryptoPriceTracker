import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Chart = ({ currentPrice, logoUrl, name, symbol, priceChangePercentage7d, sparkline }) => {
    return (
    <View style={styles.chartWrapper}>
      <View style={styles.titleWrapper}>
        <View style={styles.upperTitles}>
          <View style={styles.upperLeftTitle}>
            <Image source={{uri: logoUrl}}/>
            <Text>Chart</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

});

export default Chart;