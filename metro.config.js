// metro.config.js

const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Adiciona 'wasm' à lista de extensões de ativos (assets)
config.resolver.assetExts.push('wasm');

// Adiciona 'wasm' à lista de extensões de código (source) para que o Metro possa carregá-lo
// (Este passo é crucial para o WebAssembly)
config.resolver.sourceExts.push('wasm');

module.exports = config;