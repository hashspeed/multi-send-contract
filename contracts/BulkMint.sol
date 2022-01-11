// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import '@openzeppelin/contracts/access/Ownable.sol';
import './MERC712.sol';

contract BulkMint is Ownable {
    event BulkMinted(address indexed _to, uint256 _amount);

    function bulkMintERC721(
        address tokenAddress,
        uint256 start,
        uint256 end
    ) public {
        for (uint256 i = start; i < end; i++) {
            MERC712(tokenAddress).safeMint(msg.sender);
        }
        emit BulkMinted(msg.sender, end - start);
    }
}
