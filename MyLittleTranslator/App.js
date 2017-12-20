import React, { Component } from 'react';
import { PowerTranslator, ProviderTypes, Translation } from 'react-native-power-translator';
import { View, ScrollView, TouchableOpacity, Text, TextInput } from 'react-native';
//import * as Translator from 'translate-api';
import {Heading} from '@shoutem/ui'

export default class PowerTranslatorDemo extends Component {

    constructor() {
        super();
        this.state = { languageCode: 'zh-CHS'};
    }
    

    render() {
        const styles = this.getStyles();
        Translation.setConfig(ProviderTypes.Microsoft, '', this.state.languageCode);

        return (
            <ScrollView style={styles.container}>
            <Heading>My Little Translator</Heading>
                <View style={styles.languageBar}>
                    <TouchableOpacity onPress={() => { this.changeLanguage('en') }}><Text style={styles.p}>English</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.changeLanguage('zh-CHS') }}><Text style={styles.p}>Chinese</Text></TouchableOpacity>
                </View>
                
                <TextInput
          style={{height: 40}}
          ref= {(el) => { this.text = el; }}
          placeholder="Type here to translate!"
          onChangeText={ (text) => this.onChangeText(text) }
        />
        
                <View>
                <Text style={{padding: 10, fontSize: 42}}>
          {this.state.translated}
        </Text>
                    <PowerTranslator style={styles.title} text="" />
                </View>
                
            </ScrollView>
            
        );
    }
    onChangeText(text){
      Translation.get(text).then(translated => {
        this.setState({translated});
    });
      
      }
    getTranslate(){
      //this.forceUpdate();
      //this.setState(this.state.text);
      return this.state.text;
      
      //Translation.get(text).then(translated => {
        //this.setState({state = translated});
        //console.log(translated);
    //}); 
      
    }
    _handlePress(event) {
      this.setState(text = "hi");
  }
    getStyles() {
        return {
            container: {
                padding: 40,
                backgroundColor: '#FAFAFA',
            },
            section: {
                marginTop: 15,
                marginBottom: 15,
            },
            title: {
                marginTop: 80,
                marginBottom: 5,
                fontWeight: 'bold',
                fontSize: 38,
                lineHeight: 38
            },
            subtitle: {
                color: '#B3B3B3',
            },
            p: {
                color: '#828280',
                lineHeight: 24
            },
            languageBar: {
                flexDirection: 'row',
                justifyContent: 'space-between'
            },
            languageBarItem: {
                color: '#828280',
            }
        }
    }

    changeLanguage(languageCode) {
        this.setState({ languageCode: languageCode });
    }
} 