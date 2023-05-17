// app.js
const contractAddress = "0x636eECCDdd069c4A4875377b8aFB16791aF9D16A";
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
		"name": "stopBeingFren",
		"outputs": [],
		"stateMutability": "nonpayable",
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
console.log(lightsContainer);


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
      const amount = BigInt(1000000000000000000000000);
      const timeElapsed = 86400;
      const dailyRate = 10;
  
      callContractMethod("calculateInterest", amount, timeElapsed, dailyRate);
    });
  
    document.getElementById("getBurnRateBtn").addEventListener("click", () => {
      callContractMethod("isFrended", selectedAccount);
    });
  
    document.getElementById("setBurnPauseBtn").addEventListener("click", () => {
      // Replace 'true' with the appropriate value for the pause state
      contract.methods.setBurnPaused(false).send({ from: selectedAccount });
    });
  
    document.getElementById("setMinFrenTimeBtn").addEventListener("click", () => {
      // Replace '86400' with the appropriate value for the new minimum Fren time
      contract.methods.updateMinFrenTime(700).send({ from: selectedAccount });
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
    await contract.methods.leaveQueue().send({ from: selectedAccount });
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
const volumeSlider = document.getElementById('volumeSlider'); 

let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let sourceNode;
let gainNode = audioContext.createGain(); // Create GainNode for volume control
let audioBuffer;

// Load audio file
fetch('./frenMusic.mp3')
.then(response => response.arrayBuffer())
.then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
.then(decodedAudioBuffer => {
  audioBuffer = decodedAudioBuffer;
});

let isPlaying = false;

playBtn.addEventListener('click', function() {
  if (!isPlaying) {
    startMusic();
    playBtn.style.transform = "translateX(-57%)";
    playBtn.classList.add('shake');
    playBtn.innerText = "🎵";
    isPlaying = true;
  } else {
    stopMusic();
    playBtn.style.transform = "";
    playBtn.classList.remove('shake');
    playBtn.innerText = "🔇";
    isPlaying = false;
  }
});

volumeSlider.addEventListener('input', function() {
  gainNode.gain.value = +volumeSlider.value;
});

function startMusic() {
  // Stop the previous sound if it's playing
  if (sourceNode) {
    sourceNode.stop();
  }

  sourceNode = audioContext.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.loop = true;  // Enable looping
  sourceNode.connect(gainNode); // Connect sourceNode to gainNode
  gainNode.connect(audioContext.destination); // Connect gainNode to destination
  sourceNode.start(0);
}

function stopMusic() {
  if (sourceNode) {
    sourceNode.stop();
  }
}


  setInterval(refreshData, 1000);
}

async function getBalance(){
	const balance = await contract.methods.balanceOf(selectedAccount).call();
	return balance;
}
setInterval(async function() {
	const balance = await getBalance(selectedAccount);
    const stakeMinBtn = document.getElementById("stakeMinBtn");
    const stakeBalanceBtn = document.getElementById("stakeBalanceBtn");
	const leaveQueueBtn = document.getElementById("leaveQueueBtn");
	const stopBeingFrenBtn = document.getElementById("stopBeingFrenBtn");
	const lastFrenInQueue = await contract.methods.lastFrenInQueue().call();
	const isFrend = await contract.methods.isFrended(selectedAccount).call();
	const owner = await contract.methods.owner().call();
	const selectedAccountLower = selectedAccount.toLowerCase();
	const lastFrenInQueueLower = lastFrenInQueue.toLowerCase();
	const queue = document.getElementById("queueStatus");
	const queue2 = document.getElementById("frenInQueue");
	const frenPairElement = document.getElementById("frenPair");
	const totalFarmingText = document.getElementById("totalFarming");
	const totalFarmingFren = await contract.methods.totalFarmingFren().call();
	const initialBurnedTokens = await contract.methods.stakeAmount(selectedAccount).call();
	let stakeTime = await contract.methods.queueTime(selectedAccount).call();

	if(stakeTime != 0){
		frenPairElement.hidden = true;
		console.log(stakeTime);
		const currentTime = Math.floor(Date.now() / 1000); // UNIX time in seconds

		const timeElapsed = currentTime - stakeTime;
		const estFren = await contract.methods.earnedFren(selectedAccount).call();
		let val = new BN(estFren);
		document.getElementById("frenDetails").innerHTML = ((val/10**18)/3).toFixed(4);
	}
	totalFarmingText.innerHTML = "Total FREN farming:"+(totalFarmingFren / 10 ** 18).toFixed(2);
	if (lastFrenInQueueLower !== selectedAccountLower) {
		leaveQueueBtn.hidden = true;
		if(lastFrenInQueueLower !== "0x0000000000000000000000000000000000000000"){
			queue.innerText = "A fren is waiting in the queue!";
			queue2.innerText = lastFrenInQueue;
		} else {
			queue.innerText = "The queue is empty!";
		}
	  } else {
		if (!isFrend) {
			leaveQueueBtn.hidden = false;
		  queue.hidden = false;
		  queue.innerText = "You are waiting in the queue!";
		} else {
		queue.hidden = false;
		leaveQueueBtn.hidden = false;
		}
	  }

	if(isFrend){
		frenPairElement.hidden = false;
		stopBeingFrenBtn.hidden = false;
		const frenPairIndex = await contract.methods.userToFrenPairIndex(selectedAccount).call();
        const frenPairDetails = await getFrenPairDetails(frenPairIndex);
		const minFrenTime = await contract.methods.minFrenTime().call();
		const startTime = frenPairDetails.startTimestamp;
		//console.log("Start time is: "+startTime);
		//console.log("current time is: "+ Date.now());
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
		  let val = new BN(initialBurnedTokens).add(new BN(estFren));
		  
		  // convert val to a decimal string with 18 decimal places
		  let valStr = val.toString();
		  valStr = valStr.slice(0, -18) + '.' + valStr.slice(-4);
		  
		  document.getElementById("frenDetails").innerHTML = (val/10**18).toFixed(4);
  
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

  var imgArray = ['./pepe1.png', './pepe2.png', './pepe3.png', './pepe4.png', './pepe5.png', './pepe6.png',, './pepe7.png',, './pepe8.png',, './pepe9.png', './pepe10.png',, './pepe11.png', './pepe12.png', './pepe13.png', './pepe14.png', './pepe15.png', './pepe16.png', './pepe17.png', './pepe18.png', './pepe19.png', './pepe20.png'];
  var imgFree = true;
  
  function spawnImage() {
	if(imgFree){
	  imgFree = false;
	  var randomIndex = Math.floor(Math.random() * imgArray.length);
	  var imgSrc = imgArray[randomIndex];
	  var imgTag = document.createElement('img');
	  
	  imgTag.style.backgroundColor = 'transparent'; // This will be shown until the image loads
	  
	  imgTag.src = imgSrc;
	  imgTag.className = 'pepeimg';
	  imgTag.style.right = '-1200px'; // Start off the screen to the right
  
	  document.getElementById('imgContainer').appendChild(imgTag);
  
	  var previousTimestamp = null;
	  var speed = 0.15; // Speed in pixels per ms. Adjust as needed.
  
	  function moveImage(timestamp) {
		if (previousTimestamp) {
		  var timeDifference = timestamp - previousTimestamp;
		  var moveDistance = speed * timeDifference;
		  imgTag.style.right = (parseInt(imgTag.style.right) + moveDistance) + 'px';
			
		  if (parseInt(imgTag.style.right) > window.innerWidth + 200) {
			imgTag.parentNode.removeChild(imgTag);
			imgFree = true;
		  } else {
			requestAnimationFrame(moveImage);
		  }
		} else {
		  requestAnimationFrame(moveImage);
		}
  
		previousTimestamp = timestamp;
	  }
  
	  requestAnimationFrame(moveImage);
	}
  }
  
  setInterval(spawnImage, 2000); // Change '2000' to spawn images more or less often
  
  


  const BN = Web3.utils.BN;

  function calculateInterest(initialBurnedTokens, timeElapsed, interestRate) {
	  const numberOfDaysElapsed = Math.floor(timeElapsed / 86400);
	  const dailyBonusRate = new BN('1000'); // 0.01% daily bonus rate in basis points
	  const cappedDailyBonusRate = new BN('9900'); // 0.99% capped daily bonus rate in basis points
  
	  let lastAmount = new BN(initialBurnedTokens);
	  let interestEarned = new BN('0');
	  for (let i = 0; i < numberOfDaysElapsed; i++) {
		  const dailyBonus = i < 99 ? new BN(i).mul(dailyBonusRate) : cappedDailyBonusRate;
		  const dailyInterestRate = new BN('10000').add(dailyBonus); // interest rate in basis points
		  const dailyInterest = lastAmount.mul(dailyInterestRate).div(new BN('1000000')); // divide by 1e6 because interest rate is in basis points and we're using 18 decimal places
		  interestEarned = interestEarned.add(dailyInterest);
		  lastAmount = lastAmount.add(dailyInterest);
	  }
  
	  const remainingSecondsInDay = timeElapsed % 86400;
	  const remainingBonus = numberOfDaysElapsed < 99 ? new BN(numberOfDaysElapsed).mul(dailyBonusRate) : cappedDailyBonusRate;
	  const remainingInterestRate = new BN('10000').add(remainingBonus);
	  const remainingInterest = lastAmount.mul(remainingInterestRate).mul(new BN(remainingSecondsInDay)).div(new BN('864000000')); // divide by 86400 for seconds in a day and by 1e6 for basis points and decimal places
	  interestEarned = interestEarned.add(remainingInterest);
  
	  return interestEarned.toString();
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
  
init();
