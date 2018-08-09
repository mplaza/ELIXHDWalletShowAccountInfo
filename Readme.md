### To generate the account info for the account being used for the HD ethereum-js wallet in the ELIX app

Download the repo and navigate to your download location in terminal. You will also need to have Node installed (example Node v8.9.4);

From getElixAppAccountFromMnemonic/

for a fresh download first install dependencies:
```bash
npm install
```

then run the script adding your 12 word mnemonic after the file name and you should see your info output in the terminal:
```bash
node getAccountInfo.js your mnemonic goes here
```

example (this is a made up mnemonic just for explanatory purposes): 
```bash
node getAccountInfo.js apple sauce eden fossil happy free peach pies apartment friend chair subway
```

example output: 
```bash
address is  0xblahfakeaddress
public key is  0xreallylongkeyhere
private key is 0xyoursupersecretprivatekeydontsharethisplz
```