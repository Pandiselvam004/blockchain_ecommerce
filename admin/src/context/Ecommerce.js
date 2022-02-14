import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/consts";
import makeToast from 'helpers/makeToast';

export const EcommerceContext = React.createContext();

const { ethereum } = window;

const EcommerceContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const ecommerceContract = new ethers.Contract(contractAddress, contractABI, signer);
    return ecommerceContract;
};


export const EcommerceProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState(null);

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({ method: "eth_requestAccounts", });

            setCurrentAccount(accounts[0]);
        } catch (error) {
            throw new Error("No ethereum object");
        }
    };
    const checkIfWalletIsConnect = async () => {
        try {
            if (!ethereum) return makeToast('error', 'Please connect metamask wallet');

            const accounts = await ethereum.request({ method: "eth_accounts" });

            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            } else {
                console.log("No accounts found");
                return makeToast('error', 'Please connect metamask wallet')
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getCategories = async () => {
        try {
            if (!ethereum) return makeToast('error', 'Please connect metamask wallet');
            const ecommerceContract = EcommerceContract();
            const categories = await ecommerceContract.getAllCategories();
            return categories;
        } catch (err) {
            throw err;
        }
    };

    const addCategory = async (formData) => {
        try {
            if (!ethereum) return makeToast('error', 'Please connect metamask wallet');
            const { name } = formData;
            const ecommerceContract = EcommerceContract();
            const categoryBlock = await ecommerceContract.addCategory(name);
            await categoryBlock.wait();
            console.log(categoryBlock);
            return categoryBlock;
        } catch (error) {
            throw error.message;
        }
    };


    const getBrands = async () => {
        try {
            if (!ethereum) return makeToast('error', 'Please connect metamask wallet');
            const ecommerceContract = EcommerceContract();
            const brands = await ecommerceContract.getAllBrands();
            return brands;
        } catch (err) {
            throw err;
        }
    };

    const addBrand = async (formData) => {
        try {
            if (!ethereum) return makeToast('error', 'Please connect metamask wallet');
            const { name } = formData;
            const ecommerceContract = EcommerceContract();
            const brandBlock = await ecommerceContract.addBrand(name);
            await brandBlock.wait();
            console.log(brandBlock);
            return brandBlock;
        } catch (error) {
            throw error.message;
        }
    };

    useEffect(() => {
        checkIfWalletIsConnect();
    }, []);
    return (
        <EcommerceContext.Provider
            value={{
                addBrand, currentAccount, getBrands, connectWallet, getCategories, addCategory
            }}
        >
            {children}
        </EcommerceContext.Provider>
    );
};