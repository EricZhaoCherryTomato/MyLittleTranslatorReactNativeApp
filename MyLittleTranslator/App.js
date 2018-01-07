import React, { Component } from 'react';
import { PowerTranslator, ProviderTypes, Translation } from 'react-native-power-translator';
import { View, ScrollView, TouchableOpacity} from 'react-native';
import {Heading, TextInput, DropDownMenu, Text} from '@shoutem/ui';
import * as Constants from './Constants';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
  } from 'react-native-admob';

export default class PowerTranslatorDemo extends Component {

    constructor() {
        super();
        this.state = {
            languages: [
                { title: 'Chinese Simplified', value: 'zh-CHS' },
                { title: 'English ', value: 'en' },
                { title: 'Afrikaans ', value: 'af' },
                { title: 'Bosnian (Latin)', value: 'bs-Latn' },
                { title: 'Bulgarian ', value: 'bg' },
                { title: 'Catalan ', value: 'ca' },
                { title: 'Chinese Traditional ', value: 'zh-CHT' },
                { title: 'Croatian ', value: 'hr' },
                { title: 'Czech ', value: 'cs' },
                { title: 'Danish ', value: 'da' },
                { title: 'Dutch ', value: 'nl' },
                { title: 'Estonian ', value: 'et' },
                { title: 'Finnish ', value: 'fi' },
                { title: 'French ', value: 'fr' },
                { title: 'German ', value: 'de' },
                { title: 'Greek ', value: 'el' },
                { title: 'Haitian Creole ', value: 'ht' },
                { title: 'Hebrew ', value: 'he' },
                { title: 'Hindi ', value: 'hi' },
                { title: 'Hmong Daw', value: 'mww' },
                { title: 'Hungarian ', value: 'hu' },
                { title: 'Indonesian ', value: 'id' },
                { title: 'Italian ', value: 'it' },
              ],
            languageCode: 'zh-CHS'
          }
    }
    

    render() {
        const styles = this.getStyles();
        Translation.setConfig(ProviderTypes.Microsoft, Constants.TranslatorKey, this.state.languageCode);

        return (

            <ScrollView style={styles.container}>
            <View>
                <AdMobBanner
                adSize="fullBanner"
                adUnitID="ca-app-pub-3940256099942544/6300978111"
                testDevices={[AdMobBanner.simulatorId]}
                onAdFailedToLoad={error => console.error(error)}
                />
            </View>
                <View>
                    <Heading style={{textAlign: 'center', padding: 10}}>My Little Translator</Heading>
               </View>
                
                <TextInput
                    placeholder="Type here to translate!"
                    onChangeText={ (text) => this.onChangeText(text) }
                />

                <DropDownMenu
                options={this.state.languages}
                selectedOption={this.state.selectedLanguage ? this.state.selectedLanguage : this.state.languages[0]}
                onOptionSelected={(language) => this.setTargetLanguage(language)}
                titleProperty="title"
                valueProperty="value"
                />

                <View>
                    <Text style={{padding: 10, fontSize: 42}}>
                        {this.state.translated}
                    </Text>
                </View>
                
            </ScrollView>
            
        );
    }
    onChangeText(text){
      Translation.get(text).then(result => {
        var translated = result.replace(/\"/g, "");
        this.setState({translated});
        });
    }

    setTargetLanguage(language){
        this.setState({ selectedLanguage: language });
        this.setState({ languageCode: language.value });
    }

    getTranslate(){
      return this.state.text;
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