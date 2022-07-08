const API_KEY = process.env.API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

const { ethers } = require('ethers')
// for artifact
const contract = require('../artifacts/contracts/HelloWorld.sol/HelloWorld.json')
const { networks } = require('../hardhat.config')
console.log(JSON.stringify(contract.abi))

// Provider - this is a node provider that gives you read and write access to the blockchain.
const alchemyProvider = new ethers.providers.AlchemyProvider(network='goerli', API_KEY)

// Signer - this represents an Ethereum account that has the ability to sign transactions.
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider)

//Contract - this is an Ethers.js object that represents a specific contract deployed on-chain.
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer)

async function main() {
    const message = await helloWorldContract.message()
    console.log(`The message is: ${message}`)

    console.log('Updating the message...')
    const tx = await helloWorldContract.update('This is the new message')
    await tx.wait()

    const newMessage = await helloWorldContract.message()
    console.log(`The message is: ${message}`)
}

main()