import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FAB, Icon, Text } from 'react-native-paper';

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});

export const HomeScreen = () => {
    const navigation = useNavigation();
    
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text variant="headlineLarge">Lotteries  <Icon source="dice-5" size={30} /></Text>
            <FAB 
                icon="plus"
                style={styles.fab}
                onPress={() => {
                    console.log('FAB pressed');
                    navigation.navigate('AddLottery');
                }}
            />
        </View>
    );
};
