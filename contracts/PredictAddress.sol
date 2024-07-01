// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

import "./UniswapV2Library.sol";
import "./UniswapV3Library.sol";

contract PredictAddress {
    bytes32 internal constant PANCAKESWAP_V3_INIT_HASH = 0x6ce8eb472fa82df5469c6ab6d485f17c3ad13c8cd7af59b3d4a8026c5ce0f7e2;
    address internal constant PANCAKESWAP_V3_DEPLOYER = 0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9;

    function predictPancakeV3Pool(address token0, address token1, uint24 fee) external pure returns (address) {
        UniswapV3Library.PoolKey memory key = UniswapV3Library.getPoolKey(token0, token1, fee);

        return UniswapV3Library.computeAddress(PANCAKESWAP_V3_INIT_HASH, PANCAKESWAP_V3_DEPLOYER, key);
    }
}