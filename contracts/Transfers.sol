// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '@openzeppelin/contracts/token/ERC1155/IERC1155.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import '@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol';

contract Transfers is Ownable, ERC721Holder, ERC1155Holder {
    /*
     * @dev : standard method to send tokens from an account to another ( + payment fee )
     */
    function transferTokens(
        address from,
        address payable to,
        address currency,
        uint256 amount
    ) public {
        if (currency != address(0)) {
            require(IERC20(currency).transferFrom(from, to, amount), 'Transfer of tokens to receiver failed');
        } else {
            require(to.send(amount), 'Transfer of ETH to receiver failed');
        }
    }

    /*
     * @dev : standard method to send items from an account to another
     */
    function transferItems(
        address from,
        address to,
        address nftAddress,
        uint256 nftTokenId,
        uint256 nftTokenAmount,
        uint8 nftTokenType
    ) public {
        if (nftTokenType == 0) IERC721(nftAddress).safeTransferFrom(from, to, nftTokenId);
        else IERC1155(nftAddress).safeTransferFrom(from, to, nftTokenId, nftTokenAmount, '0x00');
    }
}
