/**
 * @format
 */
import "./shims";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import { Drizzle, generateStore } from '@drizzle/store';
import KaasuJson from './build/contracts/Kaasu.json';

const options = {
    contracts: [KaasuJson]
};

const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

AppRegistry.registerComponent(appName, () => <Ap drizzle={drizzle}/>);
