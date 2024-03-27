# BONKAI NFT Collection

The "BONKAI" NFT collection, which comprises of five original digital artworks produced via generative AI, is managed and created using scripts and a smart contract that are both contained in this repository. The smart contract is implemented on the Sepolia Ethereum Testnet cause Goerli is Shutdown, and the NFTs are saved on IPFS using pinata.cloud. The promptDescription function in the collection—which is represented by ERC721 tokens—returns the prompt that was used to create the images.

## Project Overview

To successfully complete the Final Challenge, this project follows the provided rubric:

1. **Generate a 5-Item Collection**: The project uses Generaive AI BING Create Using DALLE 3 to generate a 5-item NFT collection, each with a unique artwork.

2. **Store Items on IPFS using pinata.cloud**: The NFT images and metadata are stored on IPFS using the pinata.cloud service.

3. **Deploy an ERC721 to the Goerli Ethereum Testnet**: The smart contract, named "BONKAI," is deployed on the Goerli Ethereum Testnet as an ERC721 token.

4. **promptDescription Function**: The smart contract includes a `promptDescription` function that allows users to retrieve the prompt used to generate the NFT images.

5. **Map Your NFT Collection using Polygon Network Token Mapper**: While not a strict requirement, the project maps the NFT collection to the Polygon network token mapper to enhance visibility and accessibility.

6. **Write a Hardhat Script to Batch Mint NFTs**: The project includes a Hardhat script to allow the contract owner to batch mint all NFTs at once. The smart contract inherits from ERC721A for optimal functionality.

7. **Write a Hardhat Script to Batch Transfer NFTs to Polygon Mumbai**: The project includes a Hardhat script to facilitate batch transfers of NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge.

8. **Approve NFTs for Transfer**: The script approves the NFTs for transfer before initiating the migration.

9. **Deposit NFTs to the Bridge**: The script deposits the NFTs to the FxPortal Bridge for transfer to the Polygon Mumbai network.

10. **Test `balanceOf` on Mumbai**: The project includes tests to verify the `balanceOf` function on the Polygon Mumbai network.

## Smart Contract Details

### ERC721 Token
- **Name**: BONKAI
- **Symbol**: BAI
- **Deployed Address**: [0x20a31686f84Fc9Da04175d7474a68Be0Ff9a699D](https://sepolia.etherscan.io/address/0x20a31686f84Fc9Da04175d7474a68Be0Ff9a699D)


###  Properties
- `owner`: The address of the contract owner.
- `prompt`: A string describing the prompt used for image generation.
- `maxQuantity`: The maximum allowed quantity of NFTs.
- `baseUrl`: The base URL for accessing NFT metadata on IPFS.

## Acknowledgments
This project is created as part of a challenge and is for educational purposes. The NFT collection is generated for demonstration and learning purposes.
## Author 
- Jayanth A

## License
This project is licensed under the MIT License.