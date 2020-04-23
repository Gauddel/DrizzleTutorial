pragma solidity ^0.6.2;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/math/SafeMath.sol';

contract Kaasu is ERC20, Ownable {
    
    using SafeMath for uint256;
    
    constructor(string memory _name, string memory _symbol) public ERC20(_name, _symbol) {
    }
    
    function CreateToken(uint256 _amount) public onlyOwner {
        super._mint(msg.sender, _amount);
    }
    
    function TransferToken(address _to, uint256 _amount) public onlyOwner {
        super.transfer(_to, _amount);
    }
}