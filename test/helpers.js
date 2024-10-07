const ethers = require('ethers');

const PANCAKESWAP_V3_INIT_HASH = '0x6ce8eb472fa82df5469c6ab6d485f17c3ad13c8cd7af59b3d4a8026c5ce0f7e2';
const PANCAKESWAP_V3_DEPLOYER = '0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9';

function getPoolKey(tokenA, tokenB, fee) {
    [token0, token1] = tokenA.toLowerCase() < tokenB.toLowerCase() ? [tokenA, tokenB] : [tokenB, tokenA];
    return { token0, token1, fee };
}

function computeAddress(POOL_INIT_CODE_HASH, factory, key) {
    const encodedKey = ethers.utils.defaultAbiCoder.encode(
        ['address', 'address', 'uint24'],
        [key.token0, key.token1, key.fee]
    );
    
    const salt = ethers.utils.keccak256(encodedKey);
    
    const addressBytes = ethers.utils.keccak256(
        ethers.utils.concat([
            '0xff',
            factory,
            salt,
            POOL_INIT_CODE_HASH
        ])
    );

    return ethers.utils.getAddress('0x' + addressBytes.slice(-40));
}

const predictPancakePoolV3Address = (token0, token1, fee) => {
    const key = getPoolKey(token0, token1, fee);
    return computeAddress(PANCAKESWAP_V3_INIT_HASH, PANCAKESWAP_V3_DEPLOYER, key);
}

module.exports = {
    predictPancakePoolV3Address
}