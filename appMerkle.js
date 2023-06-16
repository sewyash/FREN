const contractAddress = '0x17C51aaA57da38C7daD55197B5aDBC4B19863B79'; //deployed Merkle contract and ABI
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_baseURI",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "_merkleRoot",
				"type": "bytes32"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_fromTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_toTokenId",
				"type": "uint256"
			}
		],
		"name": "BatchMetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "MetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "WLmintOpen",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxPerWallet",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "merkleRoot",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mintPublic",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32[]",
				"name": "_merkleProof",
				"type": "bytes32[]"
			}
		],
		"name": "mintWL",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "price",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "publicMintOpen",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "togglePublicMintOpen",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toggleWLMintOpen",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_newRoot",
				"type": "bytes32"
			}
		],
		"name": "updateMerkleRoot",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newPrice",
				"type": "uint256"
			}
		],
		"name": "updatePrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawEther",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
const buybackerContractAddress = '0xfb7afa57c750F749DE21a7C96541EF28cE01347d';
const buybackerABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_uniswapRouter",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_tokenToBuy",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_nft",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "claimTokenOffering",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "lastClaimed",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minBalanceThreshold",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minWaitTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];
const claimContractAddress = '0xbA2C4F0fC3c309fF2d48c7de69AF52dD0b4155E7';
const claimContractABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nft",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "amountToClaim",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "hasClaimed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isOpen",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nft",
		"outputs": [
			{
				"internalType": "contract IERC721",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "openClaim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract ERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


let web3;
let userAccount;
let contract;
let claimContract;
let buybackerContract;
let lowercaseProofs;

//Important to compare against lowercased values as different chains have different checksums
//Pulls proofs from "proofs.json", generated in main.js and compares to connected address
async function getLowercaseProofs() {
  const response = await fetch('./proofs.json');
  const proofs = await response.json();
  //Returns the proof for the user address
  return Object.keys(proofs).reduce((acc, key) => {
    acc[key.toLowerCase()] = proofs[key];
    return acc;
  }, {});
}

//Connect to injected provider
async function connectWallet() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    contract = new web3.eth.Contract(contractABI, contractAddress);
	claimContract = new web3.eth.Contract(claimContractABI, claimContractAddress);
	buybackerContract = new web3.eth.Contract(buybackerABI, buybackerContractAddress);
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      userAccount = (await web3.eth.getAccounts())[0].toLowerCase();
      document.getElementById('connectButton').style.display = 'none';
	  
	  let nftBalance = await contract.methods.balanceOf(userAccount).call();
	  if(nftBalance > 0) {
		document.getElementById('claimButton').disabled = false;
		document.getElementById('weeklyClaimButton').disabled = false;
	  } else {
		document.getElementById('claimButton').style.display = 'none';
		document.getElementById('weeklyClaimButton').style.display = 'none';
	  }

      // Read the proofs object from proofs.json and convert addresses to lowercase
      lowercaseProofs = await getLowercaseProofs();

      // Check if the user has a valid proof
      if (lowercaseProofs[userAccount]) {
		let openStatus = await contract.methods.WLmintOpen().call();
		if(openStatus){
			document.getElementById('mintButton').disabled = false;
			document.getElementById('mintButtonPublic').style.display = 'none';
		}
      } else {
		let publicOpenStatus = await contract.methods.publicMintOpen().call();
		if(!publicOpenStatus) {
			document.getElementById('mintButtonPublic').style.display = 'relative';
			document.getElementById('mintButton').style.display = 'none';
		}
        //Alert user they do not have a proof in the json file
        alert('Your address does not have a valid proof.');
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    alert('Please install MetaMask or another compatible wallet.');
  }
  console.log(contractAddress);
}

//Function to call the solidity function on the deployed Merkle contract
async function mint() {
  const userProof = lowercaseProofs[userAccount];
  console.log(userProof);
  try {
    await contract.methods.mintWL(userProof).send({ 
        from: userAccount,
        value: web3.utils.toWei('0.1', 'ether')
    });
    alert('Sigil minted successfully!');
  } catch (error) {
    console.error(error);
    alert('Error minting Sigil. Please try again.');
  }
}

async function claimInitialTokens() {
	const id = BigInt(document.getElementById("idInput").value);
	try {
	  await claimContract.methods.claim(id).send({ 
		  from: userAccount
	  });
	  alert('Claimed successfully');
	} catch (error) {
	  console.error(error);
	  alert('Error claiming. Please try again.');
	}
  }

  async function claimWeeklyTokens() {
	const id = BigInt(document.getElementById("idInput").value);
	try {
	  await buybackerContract.methods.claimTokenOffering(id).send({ 
		  from: userAccount
	  });
	  alert('Claimed successfully, return in a weeks time...');
	} catch (error) {
	  console.error(error);
	  alert('Error claiming. Please try again.');
	}
  }


document.getElementById('connectButton').addEventListener('click', connectWallet);
document.getElementById('mintButton').addEventListener('click', mint);
document.getElementById('claimButton').addEventListener('click', claimInitialTokens);
document.getElementById('weeklyClaimButton').addEventListener('click', claimWeeklyTokens);
var App = {
    numberOfDroplets: 40,
  
    spawnDroplet: function(input) {
      $('body').append('<div class="droplet"><div class="flying"></div><div class="splashing"></div></div>');
      
      var $droplet = $('body .droplet').last();
      var $flying = $droplet.find('.flying');
      var $splashing = $droplet.find('.splashing');
      
      $droplet.css({
        left: input.left + '%',
        top: input.top + '%',
        transform: 'scale(' + input.scale + ')',
        opacity: input.opacity
      });
  
      $flying.css({
        animation: input.duration + 's flying infinite linear',
        'animation-delay': input.delay + 's',
      });
  
      $splashing.css({
        animation: input.duration + 's splashing infinite linear',
        'animation-delay': (input.duration + input.delay) + 's',
      });
    }
  };
  
  for(var i = 0; i < App.numberOfDroplets; i++) {
    var opacity = Math.random().toFixed(1);
    var scale = opacity * 3;
    var y = 45 + (opacity * 35);
    var duration = 1 + parseFloat(Math.random().toFixed(2));
    
    App.spawnDroplet({
      left: parseInt(Math.random() * 100),
      top: y,
      opacity: opacity,
      scale: scale,
      duration: duration,
      delay: duration
    });
  }
  
