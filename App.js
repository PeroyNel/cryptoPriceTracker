/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useMemo, useState, useEffect} from 'react';
import type {Node} from 'react';
import SheetHandle from './components/SheetHandle';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList
} from 'react-native';

import ListItem from './components/Listitem';
import Chart from './components/Chart';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop} from '@gorhom/bottom-sheet';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {SAMPLE_DATA} from './assets/data/sampleData';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {getMarketData} from './services/cryptoService';



const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
      <Text style={styles.largeTitle}>Markets</Text>
    </View>
    <View style={styles.divider} />
  </>
)

const App: () => Node = () => {
  const [data, setData] = useState([]);
  const [selectedCoinData, setSelectedCoinData] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setData(marketData);
    }

    fetchMarketData();
  }, [])

  //console.disableYellowBox = true;
  

  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  

  const openModal = (item) => {
    setSelectedCoinData(item);
    bottomSheetModalRef.current?.present();
  }

  return (
      
      <SafeAreaView style={styles.container}>
        <GestureHandlerRootView style={{flex: 1}}>
          <BottomSheetModalProvider>
              <FlatList
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={({ item }) => (
                  <ListItem
                    name={item.name}
                    symbol={item.symbol}
                    currentPrice={item.current_price}
                    priceChange={item.price_change_percentage_7d_in_currency}
                    logoUrl={item.image}
                    onPress={() => openModal(item)}
                  />
                )}
                ListHeaderComponent={<ListHeader />}
              />
                <View style={styles.bottomSheet}>
                  <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints} handleComponent={SheetHandle}>
                    { selectedCoinData ? (
                      <Chart
                        currentPrice={selectedCoinData.current_price}
                        logoUrl={selectedCoinData.image}
                        name={selectedCoinData.name}
                        symbol={selectedCoinData.symbol}
                        priceChange={selectedCoinData.price_change_percentage_7d_in_currency}
                        sparkline={selectedCoinData?.sparkline_in_7d.price}
                      />
                        ) 
                      : null}
                  </BottomSheetModal>
                </View>
          </BottomSheetModalProvider>             
        </GestureHandlerRootView>      
      </SafeAreaView>
      
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleWrapper: {
    marginTop: 40,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginTop: 8,
    marginHorizontal: 16,
  },
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 14,
    elevation: 5,
  },
});

export default App;
