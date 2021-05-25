require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name recipe night eternal grace dry equal genre'; 
let testAccounts = [
"0xc6ecd0a307de97f98ae2817426681c604d5588b8ede9343bc64ab8cadd6dd639",
"0x9a7fe16e7717b62f8158a92d475b7489354dc8583aeb64dd8671109fe3437461",
"0x43e4f21a696d534e9c0e5d63e2a79928ddb41e4595ae7a6ae5e7d82999a41e74",
"0xde696f8c2f8cb6840a7883e37177b32ae28559f95bf0059beb6df8db3e996517",
"0xa99875298047413292f8f7082e683f5a4845c0d6a7cad990c2c1b922ec74ae62",
"0x56f6d41616c74bac69076c17075e85375f4713de05263821cce0a09220b58694",
"0xb080e5b3500986465df956cd40da66fe6322499fd60a93988a62575b84b96890",
"0xe17a85c82d1b821bba82f4e8480fba00dfe3b6d3fb1410dc375d69dea8c87cbd",
"0xff8f569fa5d4507f46551c8a859e230ef32299b89c373672e1ff5b7dcc5c22e6",
"0x51c268538eb76b3f25ccefc348ad15dba3980b84b54d8164e110480ccf3c4a1e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
