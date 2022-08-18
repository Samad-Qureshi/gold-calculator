import React, {useState} from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import Styles from './styles'
export default function Calculator() {

    const [ rate, setRate ] = useState(0)
    const [ unit, SetUnit ] = useState('tola')
    const [ karat, setKarat ] = useState(24)
    const [ weight, setweight ] = useState(0)

    let perGram = rate/11.664;

    const getValueinTola = ()=> rate*weight;

  return (
   
   
    <View style={Styles.container}>
        <Text style={Styles.topHeading}>
            What is my Gold's worth?</Text>
            
            <ScrollView>     
              <Text style={Styles.heading}>
              <Text style={Styles.step}>Step 1:</Text>
                Enter Gold Rate</Text>
              <TextInput 
                style={Styles.fields}
                placeholderTextColor="#ccc"
                placeholder="Enter today's per tola gold rate"
                value={rate}
                keyboardType='number-pad'
                onChangeText={(val)=> setRate(val)}/>
        
              <View style={{ backgroundColor:'#fcb503',textAlign:'left', paddingHorizontal:10,paddingVertical:15}}>
                <Text style={{textAlign:'right'}}>Price of Gold per tola</Text>
                <Text style={{fontWeight:'bold',textAlign:'right',fontSize:18}}>{`${rate} Rupees`}</Text>
                    
                <Text style={{textAlign:'right'}}>Price of Gold 10 gram</Text>
                <Text style={{fontWeight:'bold',textAlign:'right',fontSize:18}}>{`${(rate/11.664*10).toFixed(2)} Rupees`}</Text>
            </View>

            {/*UNIT OF MEASUMENT*/}
            <Text style={Styles.heading}>
            <Text style={Styles.step}>Step 2:
            </Text>Choose unit of measurement</Text>
            <View style={[Styles.fields,{padding:0}]}>
                <Picker 
                 style={{color:'white',backgroundColor:"black"}}
                 selectedValue={unit}
                 dropdownIconColor='#fcb503'
                 onValueChange={(val) => SetUnit(val)}>
                    <Picker.Item style={Styles.pickerItem} label="Tola" value="tola" />
                    <Picker.Item style={Styles.pickerItem} label="Gram" value="gram" />
                </Picker>
                </View>        
               
            <Text style={Styles.heading}>
            <Text style={Styles.step}>Step 3:
            </Text>Choose Karat</Text>
                <View style={[Styles.fields,{padding:0}]}>
                <Picker
                style={{color:'white',backgroundColor:"black"}}
                selectedValue={karat}
                dropdownIconColor='#fcb503'
                onValueChange={(val) => {setKarat(val)}
                }>
                    <Picker.Item style={Styles.pickerItem} label="24K" value={24} />
                    <Picker.Item style={Styles.pickerItem} label="22K" value={22} />
                    <Picker.Item style={Styles.pickerItem} label="21K" value={21} />
                    <Picker.Item style={Styles.pickerItem} label="20K" value={20} />
                    <Picker.Item style={Styles.pickerItem} label="18K" value={18} />
                    <Picker.Item style={Styles.pickerItem} label="14K" value={14} />
                    <Picker.Item style={Styles.pickerItem} label="12K" value={12} />
                    
                </Picker>
                </View>
                {/* <Text style={Styles.heading}>Enter Ratti</Text>
                <TextInput 
                style={Styles.fields}
                placeholder='Enter ratti'
                keyboardType='decimal-pad'
                value={ratti}
                editable={!isKarat}
                onChange={(val)=>setRatti(val)}/> */}

                <Text style={Styles.heading}>
                <Text style={Styles.step}>Step 4:</Text>
                {unit == 'gram'? 'Enter weight of Gold': 'Enter tola of Gold'}</Text>
                <TextInput
                style={Styles.fields}
                placeholderTextColor="#ccc"
                placeholder= 'Enter Value'
                keyboardType='decimal-pad'
                value={weight}
                onChangeText={(val)=> setweight(val)}/>

        <View style={{ backgroundColor:'#fcb503',textAlign:'left', paddingHorizontal:10,paddingVertical:15}}>
                
                    <Text style={{textAlign:'right',fontSize:18}}>Your Gold Worth is</Text>
                    <Text style={{fontWeight:'bold',textAlign:'right',fontSize:18}}>{unit == 'tola' ? `${((rate/24)*karat)*weight}`: `${(((perGram/24)*karat)*weight).toFixed(2)}`} Rupees</Text>

            </View>
</ScrollView>
    </View>
  )
}
