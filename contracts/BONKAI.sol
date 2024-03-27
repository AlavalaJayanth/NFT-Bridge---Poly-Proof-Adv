// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract BONKAI is ERC721A {
    address public owner;
    string public prompt="Bonk Cryptocurrency with ai , illustration, minimal , nft ";
    string baseUrl="https://moccasin-causal-slug-220.mypinata.cloud/ipfs/QmdzNq6QgaxEDMPqnE8tzCTQrLFnr71EbQu1KDcFdCMSw2/";

    uint256 public maxQuantity = 5;

    function promptDescription() external view returns (string memory) {
        return prompt;
    }
    constructor() ERC721A("BONKAI", "BAI") {
        owner = msg.sender;
    }
    modifier onlyOwner() {
        require(msg.sender == owner, "Only Owner");
        _;
    }
    function _baseURI() internal view override returns (string memory) {
        return baseUrl;
    }
    //used to mint BAI tokens 
    function mint(uint256 quantity) external payable onlyOwner {
        require(
            totalSupply() + quantity <= maxQuantity,
            "You can not mint more than 5 NFTs"
        );
        _mint(msg.sender, quantity);
    }
    //used to fetch the balance of user of BAI
    function getBalance(address _owner) external view returns (uint256) {
        return balanceOf(_owner);
    }

}
