const hre = require("hardhat");

async function main() {
  const Ecommerce = await hre.ethers.getContractFactory("Ecommerce");
  const ecommerce = await Ecommerce.deploy();

  await ecommerce.deployed();

  console.log("Ecommerce deployed to:", ecommerce.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
