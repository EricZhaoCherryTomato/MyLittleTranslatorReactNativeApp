import React, { Component } from 'react';
import { PowerTranslator, ProviderTypes, Translation } from 'react-native-power-translator';
import { View, ScrollView, TouchableOpacity} from 'react-native';
import {Heading, TextInput, DropDownMenu, Text} from '@shoutem/ui'
import * as Constants from './Constants'

export default class PowerTranslatorDemo extends Component {

    constructor() {
        super();
        this.state = {
            languages: [
                { title: 'Chinese', value: 'zh-CHS' },
                { title: 'Car B ', value: 'Brand B' },
                { title: 'Car C', value: 'Brand C' },
              ],
            languageCode: 'zh-CHS'
          }
    }
    

    render() {
        const styles = this.getStyles();
        Translation.setConfig(ProviderTypes.Microsoft, Constants.TranslatorKey, this.state.languageCode);

        return (
            <ScrollView style={styles.container}>
            <Heading>My Little Translator</Heading>
                <View style={styles.languageBar}>
                    <TouchableOpacity onPress={() => { this.changeLanguage('en') }}><Text style={styles.p}>English</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.changeLanguage('zh-CHS') }}><Text style={styles.p}>Chinese</Text></TouchableOpacity>
                </View>
                
                <TextInput
                    placeholder="Type here to translate!"
                    onChangeText={ (text) => this.onChangeText(text) }
                />

                <DropDownMenu
                styleName="horizontal"
                options={this.state.languages}
                selectedOption={this.state.selectedLanguage ? this.state.selectedLanguage : this.state.languages[0]}
                onOptionSelected={(language) => this.setTargetLanguage(language)}
                titleProperty="title"
                valueProperty="value"
                />
                <Text>{this.state.selectedLanguage ? this.state.selectedLanguage.value : this.state.languages[0].value}</Text>
                <Text>{this.state.languageCode}</Text>

                <View>
                    <Text style={{padding: 10, fontSize: 42}}>
                        {this.state.translated}
                    </Text>
                </View>
                
            </ScrollView>
            
        );
    }
    onChangeText(text){
      Translation.get(text).then(translated => {
        this.setState({translated});
        });
    }

    setTargetLanguage(language){
        this.setState({ selectedLanguage: language });
        this.setState({ languageCode: language.value });
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