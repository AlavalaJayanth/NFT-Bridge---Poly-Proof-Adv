const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/BONKAI.sol/BONKAI.json");

const tokenAddress = ""; // Ethereum address of the deployed contract
const tokenABI = tokenContractJSON.abi;
const walletAddress = ""; // Ethereum public address for the wallet

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    console.log("You now have a total number of: " + await token.balanceOf(walletAddress) + " tokens in the wallet.");
  }
  

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
