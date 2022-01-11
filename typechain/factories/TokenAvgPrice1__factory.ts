/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TokenAvgPrice1,
  TokenAvgPrice1Interface,
} from "../TokenAvgPrice1";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "fromMon",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "fromDay",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "toMon",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "toDay",
        type: "uint8",
      },
    ],
    name: "getAvgPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "mon",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "day",
        type: "uint8",
      },
    ],
    name: "getDayPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "mon",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "day",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "setDayPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50613a44806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638129fc1c1161005b5780638129fc1c146100d85780638da5cb5b146100e2578063e221b6ab14610100578063f2fde38b146101305761007d565b806320e3b8ab14610082578063715018a61461009e578063810bda93146100a8575b600080fd5b61009c60048036038101906100979190611d8a565b61014c565b005b6100a66104b5565b005b6100c260048036038101906100bd9190611d4e565b61053d565b6040516100cf9190612163565b60405180910390f35b6100e06108b8565b005b6100ea610a0e565b6040516100f79190611fb5565b60405180910390f35b61011a60048036038101906101159190611dd9565b610a38565b6040516101279190612163565b60405180910390f35b61014a60048036038101906101459190611cd3565b611127565b005b8282600061034d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166392d66313426040518263ffffffff1660e01b81526004016101ac9190612163565b60206040518083038186803b1580156101c457600080fd5b505afa1580156101d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101fc9190611cfc565b905060008360ff161180156102155750600c8360ff1611155b610254576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024b90612123565b60405180910390fd5b60008260ff1611801561031a575061034d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b238ad0e84836040518363ffffffff1660e01b81526004016102c092919061217e565b60206040518083038186803b1580156102d857600080fd5b505afa1580156102ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103109190611d25565b60ff168260ff1611155b610359576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610350906120c3565b60405180910390fd5b8360656001886103699190612321565b60ff16600c81106103a3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b603e02016001876103b49190612321565b60ff16601f81106103ee577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600202016000018190555083610404878761121f565b61040e91906121fb565b606560018861041d9190612321565b60ff16600c8110610457577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b603e02016001876104689190612321565b60ff16601f81106104a2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6002020160010181905550505050505050565b6104bd611509565b73ffffffffffffffffffffffffffffffffffffffff166104db610a0e565b73ffffffffffffffffffffffffffffffffffffffff1614610531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052890612103565b60405180910390fd5b61053b6000611511565b565b60008282600061034d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166392d66313426040518263ffffffff1660e01b815260040161059f9190612163565b60206040518083038186803b1580156105b757600080fd5b505afa1580156105cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ef9190611cfc565b905060008360ff161180156106085750600c8360ff1611155b610647576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063e90612123565b60405180910390fd5b60008260ff1611801561070d575061034d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b238ad0e84836040518363ffffffff1660e01b81526004016106b392919061217e565b60206040518083038186803b1580156106cb57600080fd5b505afa1580156106df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107039190611d25565b60ff168260ff1611155b61074c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610743906120c3565b60405180910390fd5b6108116040518060600160405280602681526020016139e9602691398760ff168760ff16606560018b61077f9190612321565b60ff16600c81106107b9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b603e020160018a6107ca9190612321565b60ff16601f8110610804577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60020201600001546115d7565b60656001876108209190612321565b60ff16600c811061085a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b603e020160018661086b9190612321565b60ff16601f81106108a5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6002020160000154935050505092915050565b600060019054906101000a900460ff166108e05760008054906101000a900460ff16156108e9565b6108e8611679565b5b610928576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091f906120e3565b60405180910390fd5b60008060019054906101000a900460ff161590508015610978576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61098061168a565b60405161098c90611c5d565b604051809103906000f0801580156109a8573d6000803e3d6000fd5b5061034d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508015610a0b5760008060016101000a81548160ff0219169083151502179055505b50565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008484600061034d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166392d66313426040518263ffffffff1660e01b8152600401610a9a9190612163565b60206040518083038186803b158015610ab257600080fd5b505afa158015610ac6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aea9190611cfc565b905060008360ff16118015610b035750600c8360ff1611155b610b42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3990612123565b60405180910390fd5b60008260ff16118015610c08575061034d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b238ad0e84836040518363ffffffff1660e01b8152600401610bae92919061217e565b60206040518083038186803b158015610bc657600080fd5b505afa158015610bda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bfe9190611d25565b60ff168260ff1611155b610c47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3e906120c3565b60405180910390fd5b8585600061034d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166392d66313426040518263ffffffff1660e01b8152600401610ca79190612163565b60206040518083038186803b158015610cbf57600080fd5b505afa158015610cd3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf79190611cfc565b905060008360ff16118015610d105750600c8360ff1611155b610d4f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4690612123565b60405180910390fd5b60008260ff16118015610e15575061034d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b238ad0e84836040518363ffffffff1660e01b8152600401610dbb92919061217e565b60206040518083038186803b158015610dd357600080fd5b505afa158015610de7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0b9190611d25565b60ff168260ff1611155b610e54576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4b906120c3565b60405180910390fd5b8a60ff168960ff161180610e7f57508a60ff168960ff16148015610e7e57508960ff168860ff1610155b5b610ebe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb5906120a3565b60405180910390fd5b6000606560018b610ecf9190612321565b60ff16600c8110610f09577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b603e020160018a610f1a9190612321565b60ff16601f8110610f54577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600202016001015490506000606560018e610f6f9190612321565b60ff16600c8110610fa9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b603e020160018d610fba9190612321565b60ff16601f8110610ff4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600202016001015490506000606560018f61100f9190612321565b60ff16600c8110611049577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b603e020160018e61105a9190612321565b60ff16601f8110611094577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600202016000015482846110a891906122ed565b6110b291906121fb565b905060006110c28f8f8f8f6116eb565b905080826110d09190612288565b91506111126040518060400160405280601b81526020017f67657441766750726963652864617973203d20256429203d20256400000000008152508284611ad0565b819a5050505050505050505050949350505050565b61112f611509565b73ffffffffffffffffffffffffffffffffffffffff1661114d610a0e565b73ffffffffffffffffffffffffffffffffffffffff16146111a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161119a90612103565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611213576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120a90612083565b60405180910390fd5b61121c81611511565b50565b600060018360ff16148015611237575060018260ff16145b156112455760009050611503565b60018260ff16141561146457600061034d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166392d66313426040518263ffffffff1660e01b81526004016112af9190612163565b60206040518083038186803b1580156112c757600080fd5b505afa1580156112db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ff9190611cfc565b9050600061034d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b238ad0e60018761134f9190612321565b846040518363ffffffff1660e01b815260040161136d92919061217e565b60206040518083038186803b15801561138557600080fd5b505afa158015611399573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113bd9190611d25565b905060656002866113ce9190612321565b60ff16600c8110611408577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b603e02016001826114199190612321565b60ff16601f8110611453577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600202016001015492505050611503565b60656001846114739190612321565b60ff16600c81106114ad577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b603e02016002836114be9190612321565b60ff16601f81106114f8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600202016001015490505b92915050565b600033905090565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611673848484846040516024016115f19493929190612037565b6040516020818303038152906040527f08ee5666000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611b6f565b50505050565b600061168430611b98565b15905090565b600060019054906101000a900460ff166116d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116d090612143565b60405180910390fd5b6116e1611bab565b6116e9611bfc565b565b600080604051806101800160405280601f60ff168152602001601c60ff168152602001601f60ff168152602001601e60ff168152602001601f60ff168152602001601e60ff168152602001601f60ff168152602001601f60ff168152602001601e60ff168152602001601f60ff168152602001601e60ff168152602001601f60ff16815250905060008460ff168760ff1614156117a457600186856117909190612321565b61179a9190612251565b60ff169050611abf565b600061034d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166392d66313426040518263ffffffff1660e01b81526004016118029190612163565b60206040518083038186803b15801561181a57600080fd5b505afa15801561182e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118529190611cfc565b905061034d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b238ad0e6001836040518363ffffffff1660e01b81526004016118b3929190611fd0565b60206040518083038186803b1580156118cb57600080fd5b505afa1580156118df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119039190611d25565b836001600c811061193d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff168152505061034d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b238ad0e89836040518363ffffffff1660e01b81526004016119ac92919061217e565b60206040518083038186803b1580156119c457600080fd5b505afa1580156119d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119fc9190611d25565b60ff1691508460ff1660018860ff1684611a1691906122b9565b611a2091906121c3565b611a2a91906121c3565b91506000600189611a3b9190612251565b90505b8660ff168160ff161015611abc5783600182611a5a9190612321565b60ff16600c8110611a94577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015160ff1683611aa791906121c3565b92508080611ab4906123f1565b915050611a3e565b50505b8061ffff1692505050949350505050565b611b6a838383604051602401611ae893929190611ff9565b6040516020818303038152906040527f969cdd03000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611b6f565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600080823b905060008111915050919050565b600060019054906101000a900460ff16611bfa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bf190612143565b60405180910390fd5b565b600060019054906101000a900460ff16611c4b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c4290612143565b60405180910390fd5b611c5b611c56611509565b611511565b565b6113718061267883390190565b600081359050611c798161261b565b92915050565b600081519050611c8e81612632565b92915050565b600081359050611ca381612649565b92915050565b600081359050611cb881612660565b92915050565b600081519050611ccd81612660565b92915050565b600060208284031215611ce557600080fd5b6000611cf384828501611c6a565b91505092915050565b600060208284031215611d0e57600080fd5b6000611d1c84828501611c7f565b91505092915050565b600060208284031215611d3757600080fd5b6000611d4584828501611cbe565b91505092915050565b60008060408385031215611d6157600080fd5b6000611d6f85828601611ca9565b9250506020611d8085828601611ca9565b9150509250929050565b600080600060608486031215611d9f57600080fd5b6000611dad86828701611ca9565b9350506020611dbe86828701611ca9565b9250506040611dcf86828701611c94565b9150509250925092565b60008060008060808587031215611def57600080fd5b6000611dfd87828801611ca9565b9450506020611e0e87828801611ca9565b9350506040611e1f87828801611ca9565b9250506060611e3087828801611ca9565b91505092959194509250565b611e4581612355565b82525050565b611e54816123ac565b82525050565b6000611e65826121a7565b611e6f81856121b2565b9350611e7f8185602086016123be565b611e8881612479565b840191505092915050565b6000611ea06026836121b2565b9150611eab8261248a565b604082019050919050565b6000611ec3601e836121b2565b9150611ece826124d9565b602082019050919050565b6000611ee66010836121b2565b9150611ef182612502565b602082019050919050565b6000611f09602e836121b2565b9150611f148261252b565b604082019050919050565b6000611f2c6020836121b2565b9150611f378261257a565b602082019050919050565b6000611f4f6012836121b2565b9150611f5a826125a3565b602082019050919050565b6000611f72602b836121b2565b9150611f7d826125cc565b604082019050919050565b611f9181612367565b82525050565b611fa081612395565b82525050565b611faf8161239f565b82525050565b6000602082019050611fca6000830184611e3c565b92915050565b6000604082019050611fe56000830185611e4b565b611ff26020830184611f88565b9392505050565b600060608201905081810360008301526120138186611e5a565b90506120226020830185611f97565b61202f6040830184611f97565b949350505050565b600060808201905081810360008301526120518187611e5a565b90506120606020830186611f97565b61206d6040830185611f97565b61207a6060830184611f97565b95945050505050565b6000602082019050818103600083015261209c81611e93565b9050919050565b600060208201905081810360008301526120bc81611eb6565b9050919050565b600060208201905081810360008301526120dc81611ed9565b9050919050565b600060208201905081810360008301526120fc81611efc565b9050919050565b6000602082019050818103600083015261211c81611f1f565b9050919050565b6000602082019050818103600083015261213c81611f42565b9050919050565b6000602082019050818103600083015261215c81611f65565b9050919050565b60006020820190506121786000830184611f97565b92915050565b60006040820190506121936000830185611fa6565b6121a06020830184611f88565b9392505050565b600081519050919050565b600082825260208201905092915050565b60006121ce82612367565b91506121d983612367565b92508261ffff038211156121f0576121ef61241b565b5b828201905092915050565b600061220682612395565b915061221183612395565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156122465761224561241b565b5b828201905092915050565b600061225c8261239f565b91506122678361239f565b92508260ff0382111561227d5761227c61241b565b5b828201905092915050565b600061229382612395565b915061229e83612395565b9250826122ae576122ad61244a565b5b828204905092915050565b60006122c482612367565b91506122cf83612367565b9250828210156122e2576122e161241b565b5b828203905092915050565b60006122f882612395565b915061230383612395565b9250828210156123165761231561241b565b5b828203905092915050565b600061232c8261239f565b91506123378361239f565b92508282101561234a5761234961241b565b5b828203905092915050565b600061236082612375565b9050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006123b78261239f565b9050919050565b60005b838110156123dc5780820151818401526020810190506123c1565b838111156123eb576000848401525b50505050565b60006123fc8261239f565b915060ff8214156124105761240f61241b565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f46726f6d44617465206d75737420626520616865616420746f446174652e0000600082015250565b7f44617920697320696e636f727265637400000000000000000000000000000000600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4d6f6e746820697320696e636f72726563740000000000000000000000000000600082015250565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b61262481612355565b811461262f57600080fd5b50565b61263b81612367565b811461264657600080fd5b50565b61265281612395565b811461265d57600080fd5b50565b6126698161239f565b811461267457600080fd5b5056fe608060405234801561001057600080fd5b50611351806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806392d663131161006657806392d6631314610193578063a324ad24146101c3578063a6f0e577146101f3578063b199993714610223578063b238ad0e146102535761009e565b806362ba9687146100a357806365c72840146100d35780637f791833146101035780638c8d98a0146101335780639054bdec14610163575b600080fd5b6100bd60048036038101906100b89190610e37565b610283565b6040516100ca919061100e565b60405180910390f35b6100ed60048036038101906100e89190610f37565b61029f565b6040516100fa9190611029565b60405180910390f35b61011d60048036038101906101189190610dd4565b6102b5565b60405161012a919061100e565b60405180910390f35b61014d60048036038101906101489190610d85565b6102d0565b60405161015a919061100e565b60405180910390f35b61017d60048036038101906101789190610eae565b6102eb565b60405161018a919061100e565b60405180910390f35b6101ad60048036038101906101a89190610f37565b61086a565b6040516101ba9190610ff3565b60405180910390f35b6101dd60048036038101906101d89190610f37565b610981565b6040516101ea9190611029565b60405180910390f35b61020d60048036038101906102089190610d5c565b610997565b60405161021a9190610fd8565b60405180910390f35b61023d60048036038101906102389190610f37565b610a06565b60405161024a919061100e565b60405180910390f35b61026d60048036038101906102689190610f60565b610a5a565b60405161027a9190611029565b60405180910390f35b6000610294868686868660006102eb565b905095945050505050565b60006102aa82610b26565b604001519050919050565b60006102c6858585856000806102eb565b9050949350505050565b60006102e284848460008060006102eb565b90509392505050565b6000806107b290505b8761ffff168161ffff16101561034f5761030d81610997565b15610329576301e28500826103229190611044565b915061033c565b6301e13380826103399190611044565b91505b8080610347906111f2565b9150506102f4565b610357610ccf565b601f816000600c8110610393577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff16815250506103ad89610997565b1561040457601d816001600c81106103ee577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050610452565b601c816001600c8110610440577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff16815250505b601f816002600c811061048e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050601e816003600c81106104db577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050601f816004600c8110610528577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050601e816005600c8110610575577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050601f816006600c81106105c2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050601f816007600c811061060f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050601e816008600c811061065c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050601f816009600c81106106a9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050601e81600a600c81106106f6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050601f81600b600c8110610743577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002019060ff16908160ff1681525050600191505b8760ff168261ffff1610156107e757806001836107769190611125565b61ffff16600c81106107b1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015160ff16620151806107c791906110cb565b836107d29190611044565b925081806107df906111f2565b925050610759565b6001876107f4919061118d565b60ff166201518061080591906110cb565b836108109190611044565b92508560ff16610e1061082391906110cb565b8361082e9190611044565b92508460ff16603c61084091906110cb565b8361084b9190611044565b92508360ff168361085c9190611044565b925050509695505050505050565b600080600090506000806301e1338085610884919061109a565b6107b261ffff166108959190611044565b91506108a66107b261ffff16610a06565b6108b38361ffff16610a06565b6108bd9190611159565b9050806301e285006108cf91906110cb565b836108da9190611044565b9250806107b2836108eb9190611125565b61ffff166108f99190611159565b6301e1338061090891906110cb565b836109139190611044565b92505b848311156109765761093360018361092e9190611125565b610997565b1561094f576301e28500836109489190611159565b9250610962565b6301e133808361095f9190611159565b92505b60018261096f9190611125565b9150610916565b819350505050919050565b600061098c82610b26565b602001519050919050565b6000806004836109a79190611247565b61ffff16146109b95760009050610a01565b60006064836109c89190611247565b61ffff16146109da5760019050610a01565b6000610190836109ea9190611247565b61ffff16146109fc5760009050610a01565b600190505b919050565b6000600182610a159190611159565b915061019082610a25919061109a565b606483610a32919061109a565b600484610a3f919061109a565b610a499190611159565b610a539190611044565b9050919050565b600060018360ff161480610a71575060038360ff16145b80610a7f575060058360ff16145b80610a8d575060078360ff16145b80610a9b575060088360ff16145b80610aa95750600a8360ff16145b80610ab75750600c8360ff16145b15610ac557601f9050610b20565b60048360ff161480610ada575060068360ff16145b80610ae8575060098360ff16145b80610af65750600b8360ff16145b15610b0457601e9050610b20565b610b0d82610997565b15610b1b57601d9050610b20565b601c90505b92915050565b610b2e610cf2565b60008080610b3b8561086a565b846000019061ffff16908161ffff1681525050610b5d6107b261ffff16610a06565b610b6e856000015161ffff16610a06565b610b789190611159565b9150816301e28500610b8a91906110cb565b83610b959190611044565b9250816107b28560000151610baa9190611125565b61ffff16610bb89190611159565b6301e13380610bc791906110cb565b83610bd29190611044565b92506000600191505b600c8260ff1611610c5257610bf4828660000151610a5a565b60ff1662015180610c0591906110cb565b9050858482610c149190611044565b1115610c315781856020019060ff16908160ff1681525050610c52565b8084610c3d9190611044565b93508180610c4a9061121d565b925050610bdb565b600191505b610c6985602001518660000151610a5a565b60ff168260ff1611610cc657858462015180610c859190611044565b1115610ca25781856040019060ff16908160ff1681525050610cc6565b6201518084610cb19190611044565b93508180610cbe9061121d565b925050610c57565b50505050919050565b604051806101800160405280600c90602082028036833780820191505090505090565b6040518060600160405280600061ffff168152602001600060ff168152602001600060ff1681525090565b600081359050610d2c816112d6565b92915050565b600081359050610d41816112ed565b92915050565b600081359050610d5681611304565b92915050565b600060208284031215610d6e57600080fd5b6000610d7c84828501610d1d565b91505092915050565b600080600060608486031215610d9a57600080fd5b6000610da886828701610d1d565b9350506020610db986828701610d47565b9250506040610dca86828701610d47565b9150509250925092565b60008060008060808587031215610dea57600080fd5b6000610df887828801610d1d565b9450506020610e0987828801610d47565b9350506040610e1a87828801610d47565b9250506060610e2b87828801610d47565b91505092959194509250565b600080600080600060a08688031215610e4f57600080fd5b6000610e5d88828901610d1d565b9550506020610e6e88828901610d47565b9450506040610e7f88828901610d47565b9350506060610e9088828901610d47565b9250506080610ea188828901610d47565b9150509295509295909350565b60008060008060008060c08789031215610ec757600080fd5b6000610ed589828a01610d1d565b9650506020610ee689828a01610d47565b9550506040610ef789828a01610d47565b9450506060610f0889828a01610d47565b9350506080610f1989828a01610d47565b92505060a0610f2a89828a01610d47565b9150509295509295509295565b600060208284031215610f4957600080fd5b6000610f5784828501610d32565b91505092915050565b60008060408385031215610f7357600080fd5b6000610f8185828601610d47565b9250506020610f9285828601610d1d565b9150509250929050565b610fa5816111c1565b82525050565b610fb4816111cd565b82525050565b610fc3816111db565b82525050565b610fd2816111e5565b82525050565b6000602082019050610fed6000830184610f9c565b92915050565b60006020820190506110086000830184610fab565b92915050565b60006020820190506110236000830184610fba565b92915050565b600060208201905061103e6000830184610fc9565b92915050565b600061104f826111db565b915061105a836111db565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561108f5761108e611278565b5b828201905092915050565b60006110a5826111db565b91506110b0836111db565b9250826110c0576110bf6112a7565b5b828204905092915050565b60006110d6826111db565b91506110e1836111db565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561111a57611119611278565b5b828202905092915050565b6000611130826111cd565b915061113b836111cd565b92508282101561114e5761114d611278565b5b828203905092915050565b6000611164826111db565b915061116f836111db565b92508282101561118257611181611278565b5b828203905092915050565b6000611198826111e5565b91506111a3836111e5565b9250828210156111b6576111b5611278565b5b828203905092915050565b60008115159050919050565b600061ffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006111fd826111cd565b915061ffff82141561121257611211611278565b5b600182019050919050565b6000611228826111e5565b915060ff82141561123c5761123b611278565b5b600182019050919050565b6000611252826111cd565b915061125d836111cd565b92508261126d5761126c6112a7565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6112df816111cd565b81146112ea57600080fd5b50565b6112f6816111db565b811461130157600080fd5b50565b61130d816111e5565b811461131857600080fd5b5056fea2646970667358221220ea060114af7adbb25a4f4e29165e769eb06f5df84675584de4646f4fd2a3b4fd64736f6c634300080400336765744461795072696365286d6f6e7468203d2025642c20646179203d20256429203d202564a2646970667358221220b7050f8a2a68f012bd97964b52f647bec20d62af16126d0fcbb73780f9f5004e64736f6c63430008040033";

export class TokenAvgPrice1__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenAvgPrice1> {
    return super.deploy(overrides || {}) as Promise<TokenAvgPrice1>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TokenAvgPrice1 {
    return super.attach(address) as TokenAvgPrice1;
  }
  connect(signer: Signer): TokenAvgPrice1__factory {
    return super.connect(signer) as TokenAvgPrice1__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenAvgPrice1Interface {
    return new utils.Interface(_abi) as TokenAvgPrice1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenAvgPrice1 {
    return new Contract(address, _abi, signerOrProvider) as TokenAvgPrice1;
  }
}