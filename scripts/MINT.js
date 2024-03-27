const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = process.env.PRIVATE_KEY;

  const networkAddress = "https://ethereum-sepolia-rpc.publicnode.com";

  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const wallet = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x20a31686f84Fc9Da04175d7474a68Be0Ff9a699D";

  const OneNFT = await ethers.getContractFactory("BONKAI");
  const contract = await OneNFT.attach(contractAddress).connect(wallet);

  await contract.mint(5);
  console.log("Minted '5' NFTs.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
