const ethWallet = require('ethereumjs-wallet');
const hdkey = require('ethereumjs-wallet/hdkey');
const bip39 = require('bip39');

function validateAddress(mnemonic) {
  return bip39.validateMnemonic(mnemonic)
}

function getPKAndAddress(mnemonic){
	if( validateAddress(mnemonic) ){
		const xPrivKey = hdkey.fromMasterSeed(mnemonic);
		const account= ethWallet.fromExtendedPrivateKey(xPrivKey.privateExtendedKey());
		console.log('address is ', account.getAddressString());
		console.log('public key is ', account.getPublicKeyString());
		console.log('private key is', account.getPrivateKeyString());
	} else {
		console.log('invalid mnemonic, please double check')
	}
}

const mnemonic = process.argv.slice(2).join(' ');
getPKAndAddress(mnemonic);



