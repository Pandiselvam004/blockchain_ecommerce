# Project Setup


## Backend API Setup

* cd api/
* npm i
* create .env by copying env.example
* Create Mongo Database  and import below data into your db
* [https://res.cloudinary.com/pandi-cnq-upload/raw/upload/v1645278106/users_xffoqn.json](User Data for Mongo DB)
* Update MONGO_URL of your localhost (for example : mongodb://localhost:27017/ecommerce)
* npm run start

## Smart Contracts Setup


* Install Metamask in your chrome browser and fetch test ETH coins for testing and deployment process using below url
[https://faucet.egorfine.com/](Test Faucet for Ropsten)


* cd smart_contracts/
* npm i
* create .env by copying env.example
* Create your own development Ropsten URL in infura like below screen record 
* [https://vimeo.com/user167282801/review/679483610/5532de6a02](Infura Create Ropsten Test URL)
* copy the ropsten API url update it in .env **(ROPSTEN_URL)** - to deploy the smart contract
* Paste your private key of your wallet of metamask in .env **(PRIVATE_KEY)** - to deploy the smart contract
* sudo npx hardhat compile 
* sudo npx hardhat run scripts/deploy.js --network ropsten
* copy the Contract Deployed address for Ethereum Network connect

## Backend Admin Panel Setup

* cd admin/
* npm i
* Paste the copied smart contract deployed address and paste it in admin/src/utils/consts.js -- **(contractAddress)**
* Paste the ABI of smart contract from smart_contracts/artifacts/contracts/Ecommerce.sol/Ecommerce.json
* npm run start

Connect your Ropsten Testnet Wallet using metamask 

**Email** : pandi@gmail.com
**Password** : 123123

**Thanks !**
