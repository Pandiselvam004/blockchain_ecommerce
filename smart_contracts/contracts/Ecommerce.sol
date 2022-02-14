// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Ecommerce {
    event Brand(string name, uint256 timestamp);

    event Category(string name, uint256 timestamp);

    struct BrandStruct {
        string name;
        uint256 timestamp;
    }

    struct CategoryStruct {
        string name;
        uint256 timestamp;
    }

    BrandStruct[] activebrands;
    CategoryStruct[] categories;

    function addBrand(string memory name) public {
        require(!checkIfBrandExists(name));
        activebrands.push(BrandStruct(name, block.timestamp));
        emit Brand(name, block.timestamp);
    }

    function addCategory(string memory name) public {
        require(!checkIfCategoryExists(name));
        categories.push(CategoryStruct(name, block.timestamp));
        emit Category(name, block.timestamp);
    }

    function getAllBrands() public view returns (BrandStruct[] memory) {
        return activebrands;
    }

    function checkIfBrandExists(string memory name) public view returns (bool) {
        bool found = false;
        for (uint256 i; i < activebrands.length; i++) {
            if (
                keccak256(abi.encodePacked(activebrands[i].name)) ==
                keccak256(abi.encodePacked(name))
            ) {
                found = true;
            }
        }
        return found;
    }

    function checkIfCategoryExists(string memory name)
        public
        view
        returns (bool)
    {
        bool found = false;
        for (uint256 i; i < categories.length; i++) {
            if (
                keccak256(abi.encodePacked(categories[i].name)) ==
                keccak256(abi.encodePacked(name))
            ) {
                found = true;
            }
        }
        return found;
    }

    function getAllCategories() public view returns (CategoryStruct[] memory) {
        return categories;
    }
}
