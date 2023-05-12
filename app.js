// app.js
const contractAddress = "0x4c0D2e3351f08ad6524d23c076CbFc055E74d04A";
const abi = [
	{
		"inputs": [],
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
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "fren",
				"type": "address"
			}
		],
		"name": "EndedFrenPair",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "leaveQueue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "makeFren",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "fren",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "NewFrenInQueue",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "fren1",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "fren2",
				"type": "address"
			}
		],
		"name": "NewFrenPair",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_newAddress",
				"type": "address"
			}
		],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_isBurnPaused",
				"type": "bool"
			}
		],
		"name": "setBurnPaused",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stopBeingFren",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toggleAutoFren",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
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
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
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
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
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
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newTime",
				"type": "uint256"
			}
		],
		"name": "updateMinFrenTime",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_balances",
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
		"name": "_calculateBurnRate",
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
		"name": "_totalReflected",
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
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "autoFrenFlag",
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
				"name": "account",
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
		"name": "baseBurnRate",
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
				"name": "initialBurnedTokens",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timeElapsed",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "interestRate",
				"type": "uint256"
			}
		],
		"name": "calculateInterest",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dailyInterestRate",
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
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "distributionPercentage",
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
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "earnedFren",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "frenPairs",
		"outputs": [
			{
				"internalType": "address",
				"name": "fren1",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "fren2",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "fren1Stake",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fren2Stake",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startTimestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initialSupply",
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
		"name": "interestRatePerDay",
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
		"name": "isBurnPaused",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "isFrended",
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
		"name": "lastFrenInQueue",
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
		"name": "makeFrenPrice",
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
		"name": "maxBurnRate",
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
		"name": "minBurnRate",
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
		"name": "minFrenTime",
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
		"name": "minQueueTime",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "queueTime",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "stakeAmount",
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
		"name": "supplyChangeRate",
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
		"name": "totalFarmingFren",
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
		"name": "totalSupply",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userToFrenPairIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let web3;
let contract;
let accounts;
let selectedAccount;

const lightsContainer = document.querySelector(".lights");

function createLight() {
    const light = document.createElement("div");
    light.classList.add("light");
    light.style.color = "rgb(0, 255, 0)";
    light.style.fontSize = `${getRandomInt(50)}px`;
    light.style.left = `${getRandomInt(window.innerWidth)}px`;
    light.innerHTML = "$";
    lightsContainer.appendChild(light);
  
    setTimeout(() => {
      light.remove();
    }, 8000);
  }
  
  setInterval(() => {
    createLight();
  }, 500);
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Draw and update the circles every 10 milliseconds
setInterval(() => {
}, 1000);


async function init() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      selectedAccount = accounts[0];
      contract = new web3.eth.Contract(abi, contractAddress);
      initEventListeners();
      refreshData();
    } catch (err) {
        console.error("Error:", err.message);
      }
  } else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
  } else {
    alert("Please install MetaMask or another web3 provider!");
  }
}

async function callContractMethod(methodName, ...args) {
    try {
      const result = await contract.methods[methodName](...args).call({ from: selectedAccount });
      console.log(`${methodName} returned:`, result);
    } catch (err) {
      console.error(`Error calling ${methodName}:`, err);
    }
  }
  
  function initOwnerButtons() {
    document.getElementById("calculateInterestBtn").addEventListener("click", async () => {
      // Replace the values below with the appropriate input values
      const amount = 1000;
      const timeElapsed = 86400;
      const dailyRate = 200;
  
      callContractMethod("calculateInterest", amount, timeElapsed, dailyRate);
    });
  
    document.getElementById("getBurnRateBtn").addEventListener("click", () => {
      callContractMethod("_calculateBurnRate");
    });
  
    document.getElementById("setBurnPauseBtn").addEventListener("click", () => {
      // Replace 'true' with the appropriate value for the pause state
      contract.methods.setBurnPaused(false).send({ from: selectedAccount });
    });
  
    document.getElementById("setMinFrenTimeBtn").addEventListener("click", () => {
      // Replace '86400' with the appropriate value for the new minimum Fren time
      contract.methods.updateMinFrenTime(7).send({ from: selectedAccount });
    });
  
    document.getElementById("getTotalFarmingFrenBtn").addEventListener("click", () => {
      callContractMethod("totalFarmingFren");
    });
  
    document.getElementById("isInFrenPairBtn").addEventListener("click", () => {
      callContractMethod("userToFrenPairIndex", 0);
    });
  
    document.getElementById("isInQueueBtn").addEventListener("click", () => {
      callContractMethod("lastFrenInQueue");
    });
  }


function initEventListeners() {
    initOwnerButtons();
	
	document.getElementById("tierInput").addEventListener("input", function() {
		const stakeAmount = BigInt(this.value) * BigInt("1000000000000000000");
		const stakeBtn = document.getElementById("stakeBtn");
		if (stakeAmount >= BigInt("1000000000000000000000000")) {
			stakeBtn.disabled = false;
		} else {
			stakeBtn.disabled = true;
		}
	});

	document.getElementById("stakeBtn").addEventListener("click", async () => {
		const stakeAmount = BigInt(document.getElementById("tierInput").value) * BigInt("1000000000000000000");
		await contract.methods.makeFren(stakeAmount.toString()).send({ from: selectedAccount });
		refreshData();
	});

  document.getElementById("stopBeingFrenBtn").addEventListener("click", async () => {
    await contract.methods.stopBeingFren().send({ from: selectedAccount });
    refreshData();
  });

  document.getElementById("leaveQueueBtn").addEventListener("click", async () => {
    const tier = document.getElementById("tier").value;
    await contract.methods.leaveQueue(tier).send({ from: selectedAccount });
    refreshData();
  });

  document.getElementById("autoFren").addEventListener("click", async () => {
    await contract.methods.toggleAutoFren().send({ from: selectedAccount });
    refreshData();
  });

  document.getElementById("stakeMinBtn").addEventListener("click", async () => {
	const stakeAmount = BigInt("1000000000000000000000000");
	await contract.methods.makeFren(stakeAmount.toString()).send({ from: selectedAccount });
    refreshData();
});

document.getElementById("stakeBalanceBtn").addEventListener("click", async () => {
    const stakeAmount = await contract.methods.balanceOf(selectedAccount).call();
    await contract.methods.makeFren(stakeAmount.toString()).send({ from: selectedAccount });
    refreshData();
});

const playBtn = document.getElementById('playBtn');
const backgroundMusic = document.getElementById('backgroundMusic');

playBtn.addEventListener('click', function() {
  if (backgroundMusic.paused) {
	backgroundMusic.play();
	playBtn.classList.add('shake');
  } else {
	backgroundMusic.pause();
	playBtn.classList.remove('shake');
  }
});

  setInterval(refreshData, 1000);
}

async function getBalance(){
	const balance = await contract.methods.balanceOf(selectedAccount).call();
	return balance;
}
setInterval(async function() {
	document.getElementById("backgroundMusic").volume = 0.1;
	const balance = await getBalance(selectedAccount);
    const stakeMinBtn = document.getElementById("stakeMinBtn");
    const stakeBalanceBtn = document.getElementById("stakeBalanceBtn");
	const leaveQueueBtn = document.getElementById("leaveQueueBtn");
	const stopBeingFrenBtn = document.getElementById("stopBeingFrenBtn");
	const autoFrenFlagBtn = document.getElementById("autoFren");
	const lastFrenInQueue = await contract.methods.lastFrenInQueue().call();
	const isFrend = await contract.methods.isFrended(selectedAccount).call();
	const owner = await contract.methods.owner().call();
	const autoFrenFlag = await contract.methods.autoFrenFlag(selectedAccount).call();
	//console.log("Frended: " + isFrend);
	//console.log("Fren flag: "+ autoFrenFlag);

	if (lastFrenInQueue !== selectedAccount) {
		leaveQueueBtn.hidden = true;
		if(!isFrend){
			document.getElementById("frenPair").innerHTML = "You are currently in the queue, fren!";
			document.getElementById("frenDetails").innerHTML = "A FREN should join you soon!";
		}
	} else {
		leaveQueueBtn.hidden = false;
	}

	if(autoFrenFlag){
		autoFrenFlagBtn.checked = true;
	} else {
		autoFrenFlagBtn.checked = false;
	}

	if(isFrend){
		stopBeingFrenBtn.hidden = false;
		const frenPairIndex = await contract.methods.userToFrenPairIndex(selectedAccount).call();
        const frenPairDetails = await getFrenPairDetails(frenPairIndex);
		const minFrenTime = await contract.methods.minFrenTime().call();
		const startTime = frenPairDetails.startTimestamp;
		console.log("Start time is: "+startTime);
		console.log("current time is: "+ Date.now());
		if((Date.now()/1000) - frenPairDetails.startTimestamp >= minFrenTime){
			stopBeingFrenBtn.disabled = false;
		} else {
			stopBeingFrenBtn.disabled = true;
		}
	} else {
		stopBeingFrenBtn.hidden = true;
	}

    if (balance >= BigInt("1000000000000000000000000") && !isFrend) {
        stakeMinBtn.disabled = false;
        stakeBalanceBtn.disabled = false;
    } else {
        stakeMinBtn.disabled = true;
        stakeBalanceBtn.disabled = true;
    }

	// Get a reference to the #ownerControls div
	const ownerControls = document.getElementById('ownerControls');

	// Assume ownerAccount is the account address of the owner
	let ownerAccount = owner; // Replace with actual owner account address


	if (selectedAccount.toLowerCase() === ownerAccount.toLowerCase()) {
		ownerControls.style.display = 'block';
		console.log("owner is "+ owner);
	}
}, 1000);


  async function getFrenPairDetails(frenPairIndex) {
    const frenPair = await contract.methods.frenPairs(frenPairIndex).call();
    const fren1 = frenPair.fren1;
    const fren2 = frenPair.fren2;
    const fren1Stake = frenPair.fren1Stake;
    const fren2Stake = frenPair.fren2Stake;
    const startTimestamp = frenPair.startTimestamp;
  
    return {
      fren1,
      fren2,
      fren1Stake,
      fren2Stake,
      startTimestamp
    };
  }

  async function refreshData() {
    const lastFrenInQueue = await contract.methods.lastFrenInQueue().call();
    const isFrend = await contract.methods.isFrended(selectedAccount).call();
    const frenPairContainer = document.getElementById("frenPair-container");
  
    if (lastFrenInQueue !== selectedAccount) {
      if (isFrend) {
        const frenPairIndex = await contract.methods.userToFrenPairIndex(selectedAccount).call();
        const frenPairDetails = await getFrenPairDetails(frenPairIndex);
        const fren1 = frenPairDetails.fren1.toLowerCase();
        const fren2 = frenPairDetails.fren2.toLowerCase();
        const selectedAccountLower = selectedAccount.toLowerCase();
  
        let pairedAddress = "";
        if (selectedAccountLower === fren1) {
          pairedAddress = fren2;
        } else if (selectedAccountLower === fren2) {
          pairedAddress = fren1;
        }
  
        if (pairedAddress) {
		  minFrenTime = await contract.methods.minFrenTime().call();
          document.getElementById("frenPair").innerHTML = pairedAddress;
  
          let initialBurnedTokens = 0;
          if (fren1 === pairedAddress) {
            initialBurnedTokens = frenPairDetails.fren2Stake;
          } else {
            initialBurnedTokens = frenPairDetails.fren1Stake;
          }
          const interestRate = 10;
          const currentTime = Math.floor(Date.now() / 1000); // UNIX time in seconds
          const startTime = frenPairDetails.startTimestamp;
  
          const timeElapsed = currentTime - startTime;
          const estFren = await contract.methods.calculateInterest(initialBurnedTokens, timeElapsed, interestRate).call();
          let val = initialBurnedTokens.toString();
  
          document.getElementById("frenDetails").innerHTML = ((estFren / 10 ** 18)+ (initialBurnedTokens / 10 ** 18)).toFixed(4);
  
          frenPairContainer.style.display = "block";
        }
      } else {
        frenPairContainer.style.display = "none";
      }
  
      const totalSupply = await contract.methods.totalSupply().call();
      const burnRate = await contract.methods._calculateBurnRate().call();
      document.getElementById("totalSupply").innerHTML = (totalSupply / 10 ** 18).toLocaleString();
      document.getElementById("burnRate").innerHTML = "\n" + (burnRate / 100).toLocaleString();
  
      setTimeout(refreshData, 5000); // Call the function every 5 seconds
    } else {
      frenPairContainer.style.display = "none";
    }
  
  }
  

async function calculateBurnRate(contractInstance) {
    const totalSupply = await contractInstance.methods.totalSupply().call();
    const initialSupply = await contractInstance.methods.initialSupply().call();
    const baseBurnRate = await contractInstance.methods.baseBurnRate().call();
    const supplyChangeRate = await contractInstance.methods.supplyChangeRate().call();
    const maxBurnRate = await contractInstance.methods.maxBurnRate().call();
    const minBurnRate = await contractInstance.methods.minBurnRate().call();
  
    if (totalSupply === initialSupply) {
      return baseBurnRate / 100;
    }
  
    const supplyRatio = (totalSupply * 10000) / initialSupply;
    let burnRate;
  
    if (totalSupply > initialSupply) {
      // Increase burn rate by 0.01% for every 1% increase in supply
      burnRate = baseBurnRate + ((supplyRatio - 10000) / supplyChangeRate);
    } else {
      // Decrease burn rate by 0.01% for every 1% decrease in supply
      burnRate = baseBurnRate - ((10000 - supplyRatio) / supplyChangeRate);
    }
  
    if (burnRate > maxBurnRate) {
      return maxBurnRate / 100;
    }
    if (burnRate < minBurnRate) {
      return minBurnRate / 100;
    }
  
    return burnRate / 100;
}
  
window.onload = function() {
    document.getElementById("backgroundMusic").play();
};
init();
