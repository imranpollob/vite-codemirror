export const code = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Test {
    uint256 constant WEEK = 604800; // Number of seconds in a week

    function getBlockTimestamp() public view returns (uint) {
        return block.timestamp;
    }
}
`;

export const ast = `{
  "absolutePath": "Test.sol",
  "exportedSymbols": { "Test": [14] },
  "id": 15,
  "license": "MIT",
  "nodeType": "SourceUnit",
  "nodes": [
    { "id": 1, "literals": ["solidity", "^", "0.8", ".0"], "nodeType": "PragmaDirective", "src": "33:23:0" },
    {
      "abstract": false,
      "baseContracts": [],
      "canonicalName": "Test",
      "contractDependencies": [],
      "contractKind": "contract",
      "fullyImplemented": true,
      "id": 14,
      "linearizedBaseContracts": [14],
      "name": "Test",
      "nameLocation": "69:4:0",
      "nodeType": "ContractDefinition",
      "nodes": [
        {
          "constant": true,
          "id": 4,
          "mutability": "constant",
          "name": "WEEK",
          "nameLocation": "98:4:0",
          "nodeType": "VariableDeclaration",
          "scope": 14,
          "src": "81:30:0",
          "stateVariable": true,
          "storageLocation": "default",
          "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" },
          "typeName": {
            "id": 2,
            "name": "uint256",
            "nodeType": "ElementaryTypeName",
            "src": "81:7:0",
            "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }
          },
          "value": {
            "hexValue": "363034383030",
            "id": 3,
            "isConstant": false,
            "isLValue": false,
            "isPure": true,
            "kind": "number",
            "lValueRequested": false,
            "nodeType": "Literal",
            "src": "105:6:0",
            "typeDescriptions": { "typeIdentifier": "t_rational_604800_by_1", "typeString": "int_const 604800" },
            "value": "604800"
          },
          "visibility": "internal"
        },
        {
          "body": {
            "id": 12,
            "nodeType": "Block",
            "src": "207:41:0",
            "statements": [
              {
                "expression": {
                  "expression": {
                    "id": 9,
                    "name": "block",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 4294967292,
                    "src": "225:5:0",
                    "typeDescriptions": { "typeIdentifier": "t_magic_block", "typeString": "block" }
                  },
                  "id": 10,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": false,
                  "lValueRequested": false,
                  "memberLocation": "231:9:0",
                  "memberName": "timestamp",
                  "nodeType": "MemberAccess",
                  "src": "225:15:0",
                  "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }
                },
                "functionReturnParameters": 8,
                "id": 11,
                "nodeType": "Return",
                "src": "218:22:0"
              }
            ]
          },
          "functionSelector": "796b89b9",
          "id": 13,
          "implemented": true,
          "kind": "function",
          "modifiers": [],
          "name": "getBlockTimestamp",
          "nameLocation": "160:17:0",
          "nodeType": "FunctionDefinition",
          "parameters": { "id": 5, "nodeType": "ParameterList", "parameters": [], "src": "177:2:0" },
          "returnParameters": {
            "id": 8,
            "nodeType": "ParameterList",
            "parameters": [
              {
                "constant": false,
                "id": 7,
                "mutability": "mutable",
                "name": "",
                "nameLocation": "-1:-1:-1",
                "nodeType": "VariableDeclaration",
                "scope": 13,
                "src": "201:4:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" },
                "typeName": {
                  "id": 6,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "201:4:0",
                  "typeDescriptions": { "typeIdentifier": "t_uint256", "typeString": "uint256" }
                },
                "visibility": "internal"
              }
            ],
            "src": "200:6:0"
          },
          "scope": 14,
          "src": "151:97:0",
          "stateMutability": "view",
          "virtual": false,
          "visibility": "public"
        }
      ],
      "scope": 15,
      "src": "60:191:0",
      "usedErrors": []
    }
  ],
  "src": "33:220:0"
}
`;
