// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import './Transfers.sol';

contract MultiSend is Transfers {
    
    event MultiSended(uint256 total, address tokenAddress);

    function sendToken(
        address _tokenAddress,
        address[] memory _recepients,
        uint256[] memory _amounts
    ) public {
        require(_recepients.length > 0, '_recepients length is greater than 0');
        require(_recepients.length <= 200, '_recepients length is smaller than 200');
        require(_recepients.length == _amounts.length);

        uint8 i = 0;
        for (i; i < _recepients.length; i++)
            transferTokens(msg.sender, payable(_recepients[i]), _tokenAddress, _amounts[i]);
    }

    function sendItems(
        address _tokenAddress,
        address[] memory _recepients,
        uint256[] memory _tokenIds,
        uint256[] memory _amounts,
        uint8 tokenType
    ) public {
        require(_recepients.length > 0, '_recepients length is greater than 0');
        require(_recepients.length <= 200, '_recepients length is smaller than 200');
        require(_recepients.length == _amounts.length);
        uint8 i = 0;
        for (i; i < _recepients.length; i++)
            transferItems(msg.sender, payable(_recepients[i]), _tokenAddress, _tokenIds[i], _amounts[i], tokenType);
    }

    // function _split(address[] memory _recepients, uint256[] memory _amount) private {
    //     address[] memory childRecepients;
    //     address[] memory recepients;
    // }
}
