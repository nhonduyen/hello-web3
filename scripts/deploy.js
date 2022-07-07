async function main () {
    const helloWorld = await ethers.getContractFactory('HelloWorld')

    // start deployment, return a promise that resolves to a contract object
    const hello_world = await helloWorld.deploy('Hello World')
    console.log('Contract deployed to address: ', hello_world.address)
    // Contract deployed to address:  0x99DC35d2B6db342D763213C32DCD30Ce0994663d
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.log(error);
    process.exit(1)
})