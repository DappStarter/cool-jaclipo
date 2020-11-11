require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food plastic random random come hundred light army giggle'; 
let testAccounts = [
"0xa82469c99ac455804556f7fe60039d4f1268a76a9f89cc913749a0b5739faa2e",
"0xb2d8c23c8a048d46ece08e10c7b69c350e48352adbfc56d124f32fac8bae86a8",
"0x56b86a940b85abb366112610443f1903dc0c18b2e52cdadbf1ed6f8b652eec2d",
"0xff3f4f96fc4f5cb0906c53c9185ef4183b3aec4600eca48f0545a87d64055870",
"0x279ee4f4a9099bd0e141b00ae390b0cfaad83faa2e51afe6b4293f8e1809ff5e",
"0x0d74e1fc613a63c81c7c636f1407238356a724e1e367047cdec76c93aeb1108d",
"0xf112781a8b747b50996b953dd693c733033b68e0b215ffbfdde66dc872918b45",
"0x10e2561db993dd334f552618b20b572dad56a20233324534a81c4561e6a92257",
"0x369d4c99b9c5dee8faf1e9e85c7f56fa80105a74bfbe53832da3bcc4e273df12",
"0xe0667210d94c5616bca4aef01b4e83a75aa56928395f591cce57ba9751ec594c"
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
