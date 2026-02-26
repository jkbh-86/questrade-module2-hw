import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { Formik } from 'formik';

export const AddLotteryScreen = () => {
    return (
        <Formik
            initialValues={{ name: '', prize: '' }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <Text variant="titleMedium">Add Lottery Screen</Text>
                    <TextInput
                        mode="flat"
                        label="Lottery Name"
                        placeholder="Lottery Name"
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                    />
                    <TextInput
                        mode="flat"
                        label="Lottery Prize"
                        placeholder="Lottery Prize"
                        onChangeText={handleChange('prize')}
                        onBlur={handleBlur('prize')}
                        value={values.prize}
                    />
                    <Button mode="contained" onPress={handleSubmit} title="Submit">
                        Add
                    </Button>
                </View>
            )}
        </Formik>
    );
};
