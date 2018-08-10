pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract TutorialToken is StandardToken {

string public name = "IBC Token";
string public symbol = "IBC";
uint8 public decimals = 0;
uint public INITIAL_SUPPLY = 600000000
;

constructor() public {
  totalSupply_ = INITIAL_SUPPLY;
  balances[msg.sender] = INITIAL_SUPPLY;
}
}