---
title: "Cypherock internship tasks using trezor-firmware"
author: Priyanshu Tiwari
excerpt: "Shamir Secret Sharing Alogithm in C, generating BIP39 Seed using 24 bip mnemonics, To derive public key, private key, chain node and reciever and change address for Bitcoin Testnet, To sign an unsigned bitcoin testnet transaction. To sign a raw Ethereum (Ropsten) transaction."
categories:
  - Tech
tags:
  - 'Shamir Secret Sharing'
  - 'trezor'
  - 'BIP39 Seed'
  - 'bitcoin'
  - 'ethereum'
  - 'ropsten'
  - 'public'
  - 'private'
  - 'key'
  - 'chain node'
---

## Tasks

### Task 1 : To implement Shamir Secret Sharing Alogithm using C.

![task 1](https://github.com/ahampriyanshu/meta/blob/main/intern/1.png?raw=true)

* [Source Code](https://github.com/ahampriyanshu/trying-something-new/tree/master/intern/crypto/task1)

### Task 2 : To understand how Make works and then calculate a BIP39 Seed using 24 bip mnemonics.

![task 2](https://github.com/ahampriyanshu/meta/blob/main/intern/2.png?raw=true)

* [Source Code](https://github.com/ahampriyanshu/trying-something-new/tree/master/intern/crypto/task2)

### Task 3 : To derive public key, private key, chain node and reciever-change address for Bitcoin Testnet for derivation path m/44'/1'/0'/0/

* Derive address from public and private from mnemonics
* The first node derived is the master node
* For master node the index is 0000000 
* For purpose node we have to passed index as 8000002C
* For coin => index => 8000001 (testnet)
* For account node => 00000000
* Chain node :
  - 00000001 (change address node)
  - 00000000 (recieve address node)

![task 3](https://github.com/ahampriyanshu/meta/blob/main/intern/3.png?raw=true)

* [Source Code](https://github.com/ahampriyanshu/trying-something-new/tree/master/intern/crypto/task3)

### Task 4 : To sign an unsigned bitcoin testnet transaction
* Generate unsigned trans using extendended public key of account node
* complete byte_array_to_unsigned_txn() to fill the unsigned txn struct
        2.1 Use malloc for input and ouput struct inside unsigned_strcut
* Complete serialize_unsigned_txn_to_sign() func to generate the serializes unsigned txn to sign corresponding to an input
* Use sha256_raw to generate double hash of the serialize unsigned transation (call the func twice .) (next time kind of recusrive)
* Use ecdsa_sign_digest() to genrate R and S value using private key corresonding to the input (88thline)
* Generate script_sig using ecdsa_sig_to_der() (klmoney article)
* Replace script sig with the script public key for rach input inside the unsigned txn key
* to fill the signed txn strcut (70 line)

![task 4](https://github.com/ahampriyanshu/meta/blob/main/intern/4.png?raw=true)

* [Source Code](https://github.com/ahampriyanshu/trying-something-new/tree/master/intern/crypto/task4)

### Task 5 : To sign a raw Ethereum (Ropsten) transaction 
* Search for how ethereum address is generated from public key
* Convert signed txn from my ether wallet to unsigned txn
* Code for RLP encoding
* Hash the unsigned txn 
* Sign the digest using the private key
* Generate V using
* Create RLP encoded signed txn from the derived R and S values
* Broadcast the signed txn using ethers scan

#### Transcation Details : 
```json
  { 
  "nonce": "0x02",
  "gasLimit": "0x5208",
  "gasPrice": "0x77359400",
  "to": "0xc0095a58489ba23cb5c6808dc0bbbf1cdca32aca",
  "value": "2c68af0bb140000",
  "data": "0x", 
  "chainId": 3
  }
```

![task 5](https://github.com/ahampriyanshu/meta/blob/main/intern/5.png?raw=true)

* [Source Code](https://github.com/ahampriyanshu/trying-something-new/tree/master/intern/crypto/task5)

* Copy and paste the [trezor-crypto](https://github.com/ahampriyanshu/trying-something-new/tree/master/intern/crypto/crypto) library before executing the Makefile.

## Resources : 
* [https://iancoleman.io/bip39](https://iancoleman.io/bip39)
* [http://bip32.org](http://bip32.org)
* [https://coinb.in/](https://coinb.in/)
* [https://www.blockchain.com/explorer](https://www.blockchain.com/explorer)
* [https://live.blockcypher.com/](https://live.blockcypher.com/)
* [https://bitcoinfaucet.uo1.net/](https://bitcoinfaucet.uo1.net)
* [https://www.myetherwallet.com/](https://www.myetherwallet.com/)
* [https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)
* [https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)
* [https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)
* [https://learnmeabitcoin.com/technical/derivation-paths#bip-44-m440000](https://learnmeabitcoin.com/technical/derivation-paths#bip-44-m440000)
* [https://galactictalk.org/d/549-secret-key-seed-from-bip39/38](https://galactictalk.org/d/549-secret-key-seed-from-bip39/38)
* [https://lsongnotes.wordpress.com/2018/01/14/signing-an-ethereum-transaction-the-hard-way/](https://lsongnotes.wordpress.com/2018/01/14/signing-an-ethereum-transaction-the-hard-way/)
* [https://medium.com/swlh/understanding-data-payloads-in-ethereum-transactions-354dbe995371](https://medium.com/swlh/understanding-data-payloads-in-ethereum-transactions-354dbe995371)
* [https://lsongnotes.wordpress.com/2017/12/21/ethereum-transaction-structure/](https://lsongnotes.wordpress.com/2017/12/21/ethereum-transaction-structure/)
* [https://eth.wiki/en/fundamentals/rlp](https://eth.wiki/en/fundamentals/rlp)
* [https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md)
* [https://www.oreilly.com/library/view/mastering-bitcoin/9781491902639/ch04.html](https://www.oreilly.com/library/view/mastering-bitcoin/9781491902639/ch04.html)
* [https://www.mobilefish.com/services/cryptocurrency/cryptocurrency.html](https://www.mobilefish.com/services/cryptocurrency/cryptocurrency.html)
* [https://ethereum.stackexchange.com/questions/3386/create-and-sign-offline-raw-transactions/3392](https://ethereum.stackexchange.com/questions/3386/create-and-sign-offline-raw-transactions/3392)
* [https://hackernoon.com/how-to-generate-ethereum-addresses-technical-address-generation-explanation-25r3zqo](https://hackernoon.com/how-to-generate-ethereum-addresses-technical-address-generation-explanation-25r3zqo)
* [https://medium.com/coinmonks/mnemonic-generation-bip39-simply-explained-e9ac18db9477](https://medium.com/coinmonks/mnemonic-generation-bip39-simply-explained-e9ac18db9477)
* [https://www.soroushjp.com/2014/12/20/bitcoin-multisig-the-hard-way-understanding-raw-multisignature-bitcoin-transactions/](https://www.soroushjp.com/2014/12/20/bitcoin-multisig-the-hard-way-understanding-raw-multisignature-bitcoin-transactions/)
* [http://www.righto.com/2014/02/bitcoins-hard-way-using-raw-bitcoin.html](http://www.righto.com/2014/02/bitcoins-hard-way-using-raw-bitcoin.html)
* [https://github.com/prettymuchbryce/hellobitcoin](https://github.com/prettymuchbryce/hellobitcoin)
* [https://gist.github.com/gavinandresen/3966071](https://gist.github.com/gavinandresen/3966071)
* [https://medium.com/coinmonks/build-p2sh-address-and-spend-its-fund-in-golang-1a03a4131512](https://medium.com/coinmonks/build-p2sh-address-and-spend-its-fund-in-golang-1a03a4131512)