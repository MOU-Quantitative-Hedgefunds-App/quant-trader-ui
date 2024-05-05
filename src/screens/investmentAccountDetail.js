import React, { useState } from 'react';
import { View, Image, StyleSheet,ScrollView } from 'react-native';
import { Button, Card, Title, Paragraph, Appbar, Text } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';
import { SFSymbol } from "react-native-sfsymbols";

const arrowUrl = require('../assets/arrow.jpg');
const creditCardUrl = require('../assets/creditCard.jpg');
const portfolioUrl = require('../assets/portfolio.jpg');
const homeUrl = require('../assets/home.jpg');

const InvestmentAccountDetail = () => {
  const [cuenta, setCuenta] = useState({ nivel: 1, balance: 24000 });
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 78, 66, 44, 56, 67, 75],
        color: (opacity = 1) => `rgba(49, 130, 206, ${opacity})`,
        strokeWidth: 2
      },
      {
        data: [40, 68, 86, 74, 56, 60, 87],
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2
      }
    ],
    legend: ["This Year", "Last Year"]
  };

  return (
    <View style={styles.container}>
          <ScrollView style={styles.scrollView}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Account Details" />
      </Appbar.Header>

      <Card style={styles.card}>
        <Card.Title title={`Riesgo ${cuenta.nivel}`} />
        <Card.Content>
          <Title>${cuenta.balance.toLocaleString('en-US')}</Title>
          <Paragraph>Balance de cuenta</Paragraph>
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={() => {}} style={{ backgroundColor: '#3182ce' }}>
        COMPARAR CON: S&P 500
      </Button>

      {isOpen && (
        <View style={styles.dropdownMenu}>
          <Text>Week</Text>
          <Text>Month</Text>
          <Text>Year</Text>
        </View>
      )}

      <LineChart
        data={data}
        width={300}
        height={220}
        chartConfig={chartConfig}
      />
      </ScrollView> 

      <Appbar style={styles.navigationBar}>
        <View style={styles.navButtonContainer}>
          <Appbar.Action icon={() => <Image source={homeUrl} style={styles.icon} />} onPress={() => {}} />
          <Appbar.Action icon={() => <Image source={portfolioUrl} style={styles.icon} />} onPress={() => {}} />
          <Appbar.Action icon={() => <Image source={creditCardUrl} style={styles.icon} />} onPress={() => {}} />

        </View>
      </Appbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  card: {
    margin: 8,
  },
  scrollView: {
    backgroundColor: 'white',
    marginBottom: 0, 
  },
  icon: {
    width:40,
    height:40,
    marginHorizontal: 0,
    resizeMode: 'contain',
    
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 1000, 
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
   
  
  navButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
    width: '100%',
    paddingHorizontal:0, 
    backgroundColor: 'blue',
    height: 100,
    bottom: 25,
    
  },

});

export default InvestmentAccountDetail;
