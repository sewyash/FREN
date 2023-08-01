const contractAddress = "0x8aF3afe560e8fDe5c6aDb3D8fd5B528bBdCB6577";
const ABI = [
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
		"inputs": [],
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
		"name": "sigilRewardContract",
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
		"name": "sigilRewardPercentage",
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
		"name": "stopBeingFren",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"name": "_contractAddress",
				"type": "address"
			}
		],
		"name": "updateSigilRewardContract",
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
let userBalance;
const BN = Web3.utils.BN;

web3 = new Web3(window.ethereum || window.web3.currentProvider);

async function connectWallet() {
	if (window.ethereum) {
		try {
			accounts = await ethereum.request({ method: 'eth_requestAccounts' });
			selectedAccount = accounts[0];
			console.log(selectedAccount);
			contract = new web3.eth.Contract(ABI, contractAddress);
			document.getElementById('connectButton').style.display = 'none';
    		document.getElementById('disconnectButton').style.display = 'block';
			initEventListeners();
			refreshData();
		} catch (err) {
			console.error("Error: ", err.message);
		}
	} else if (window.web3) {
    	accounts = await web3.eth.getAccounts();
    	selectedAccount = accounts[0];
    	console.log(selectedAccount);
    	contract = new web3.eth.Contract(ABI, contractAddress);
		document.getElementById('connectButton').style.display = 'none';
    	document.getElementById('disconnectButton').style.display = 'block';
		initEventListeners();
		refreshData();
	} else {
		alert ("Please install MetaMask or another web3 provider!");
	}
}

function disconnectWallet() {
	web3 = null;
	accounts = null;
	selectedAccount = null;
	contract = null;
	document.getElementById('connectButton').style.display = 'block';
    document.getElementById('disconnectButton').style.display = 'none';
}

function updateButtonVisibility() {
    if (selectedAccount) {
      document.getElementById('connectButton').style.display = 'none';
      document.getElementById('disconnectButton').style.display = 'block';
    } else {
      document.getElementById('connectButton').style.display = 'block';
      document.getElementById('disconnectButton').style.display = 'none';
    }
}

document.getElementById('gotoSigils').addEventListener('click', function() {
	//replace with URL
	const urlToOpen = 'https://www.google.com';
	window.open(urlToOpen, '_blank');
});

// Stake/Unstake Page
const stakeHeaderBtn = document.getElementById("stake-Header");
const unstakeHeaderBtn = document.getElementById("unstake-Header");
const stakePage = document.getElementById("stakePage");
const unstakePage = document.getElementById("unstakePage");
// Function to set the Stake page as active and Unstake as not active
function setStakeActive() {
	stakeHeaderBtn.classList.add("active-header");
	unstakeHeaderBtn.classList.remove("active-header");
	stakeHeaderBtn.classList.remove("not-active-header");
	unstakeHeaderBtn.classList.add("not-active-header");
	stakePage.style.display = "block";
	unstakePage.style.display = "none";
}
// Function to set the Unstake page as active and Stake as not active
function setUnstakeActive() {
	unstakeHeaderBtn.classList.add("active-header");
	stakeHeaderBtn.classList.remove("active-header");
	unstakeHeaderBtn.classList.remove("not-active-header");
	stakeHeaderBtn.classList.add("not-active-header");
	stakePage.style.display = "none";
	unstakePage.style.display = "block";
}
// Event listener for 'Stake' header button
stakeHeaderBtn.addEventListener("click", setStakeActive);
// Event listener for 'Unstake' header button
unstakeHeaderBtn.addEventListener("click", setUnstakeActive);

// Copy Button for $FREN Contract Address
document.getElementById('caCopyIcon').addEventListener('click', function() {
	const textToCopy = document.getElementById('frenCa').innerText;

	// Create a temporary element to hold the text
	const tempElement = document.createElement('textarea');
	tempElement.value = textToCopy;
	tempElement.setAttribute('readonly', ''); // Make it read-only to prevent keyboard from showing on mobile devices
	tempElement.style.position = 'absolute';
	tempElement.style.left = '-9999px'; // Move it off-screen
	document.body.appendChild(tempElement);
  
	// Select and copy the text
	tempElement.select();
	tempElement.setSelectionRange(0, 99999);

	// Use the modern Clipboard API to copy the selected text to clipboard
	if (navigator.clipboard) {
		navigator.clipboard.writeText(textToCopy)
		.then(() => {
		// Do something when the text is successfully copied
		console.log('Text copied to clipboard');
		})
		.catch((err) => {
			// Handle any errors that may occur during the copy process
			console.error('Error copying text to clipboard:', err);
		});
	} else {
		// Fallback for browsers that do not support the Clipboard API
		document.execCommand('copy');
	}

	// Clean up
	document.body.removeChild(tempElement);
});

// Buy Button Event Listener
document.getElementById('buyBtn').addEventListener('click', function() {
	window.open('https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x636eECCDdd069c4A4875377b8aFB16791aF9D16A&use=V2', '_blank');
});

// Buy Button Tooltip
const tooltipBtn = document.getElementById('tooltip-buyBtn');
const tooltipText = document.getElementById('tooltip-buyBtn-text');
// Stake Button Tooltip
const tooltipTotalFarming = document.getElementById('tooltip-totalFarming');
const tooltipTotalFarmingText = document.getElementById('tooltip-totalFarming-text');
// Total Fren Tooltip
const tooltipStakeBtn = document.getElementById('tooltip-stakeBtn');
const tooltipStakeBtnText = document.getElementById('tooltip-stakeBtn-text');
const overlayTooltip = document.getElementById('overlay-Tooltip-Background');
function showTooltip() {
	tooltipText.style.display = 'block';
	overlayTooltip.style.display = 'block';
}
function hideTooltip() {
	tooltipText.style.display = 'none';
	overlayTooltip.style.display = 'none';
}
function showTooltipFarming() {
	tooltipTotalFarmingText.style.display = 'block';
	overlayTooltip.style.display = 'block';
}
function hideTooltipFarming() {
	tooltipTotalFarmingText.style.display = 'none';
	overlayTooltip.style.display = 'none';
}
function showTooltipStake() {
	tooltipStakeBtnText.style.display = 'block';
	overlayTooltip.style.display = 'block';
}
function hideTooltipStake() {
	tooltipStakeBtnText.style.display = 'none';
	overlayTooltip.style.display = 'none';
}
// Event listener to show tooltip when the tooltip button is clicked
tooltipBtn.addEventListener('click', function(event) {
	event.stopPropagation(); // Prevent the click event from propagating to the document
	showTooltip();
});
tooltipTotalFarming.addEventListener('click', function(event) {
	event.stopPropagation(); // Prevent the click event from propagating to the document
	showTooltipFarming();
});
tooltipStakeBtn.addEventListener('click', function(event) {
	event.stopPropagation(); // Prevent the click event from propagating to the document
	showTooltipStake();
});
// Event listener to hide tooltip when clicking anywhere on the document
document.addEventListener('click', function() {
	hideTooltip();
});
document.addEventListener('click', function() {
	hideTooltipFarming();
});
document.addEventListener('click', function() {
	hideTooltipStake();
});

// Music Button
const audio = document.getElementById("backgroundMusic");
let isMusicPlaying = false;
// Set the default audio volume to 25% (0.25 as a decimal value)
audio.volume = 0.25;
// Function to handle the play/pause of the audio and button shaking
function handlePlayBackgroundMusic() {
	const button = document.getElementById("playBackgroundMusic");
	if (!isMusicPlaying) {
		audio.play();
		button.classList.add("musicShake");
        isMusicPlaying = true;
	} else {
		audio.pause();
		audio.currentTime = 0;
		button.classList.remove("musicShake");
		isMusicPlaying = false;
	}
}
document.getElementById("playBackgroundMusic").addEventListener("click", handlePlayBackgroundMusic);
function handleVolumeChangeBackgroundMusic() {
	const slider = document.getElementById("volumeSliderBackgroundMusic");
	const volume = slider.value;
	audio.volume = volume / 100;
}
document.getElementById("volumeSliderBackgroundMusic").addEventListener("input", handleVolumeChangeBackgroundMusic);

// DOLLAR SIGNS BACKGROUND
const lightsContainer = document.querySelector(".lights");
function createLight() {
	const light = document.createElement("div");
	light.classList.add("light");
	light.style.color = "rgb(173, 238, 207)";
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

// PEPE Scrolling Background
var imgArray = ['./metadata/pepe1.png', './metadata/pepe2.png', './metadata/pepe3.png', './metadata/pepe4.png', './metadata/pepe5.png', './metadata/pepe6.png', './metadata/pepe7.png', './metadata/pepe8.png', './metadata/pepe9.png', './metadata/pepe10.png', './metadata/pepe11.png', './metadata/pepe12.png', './metadata/pepe13.png', './metadata/pepe14.png', './metadata/pepe15.png', './metadata/pepe16.png', './metadata/pepe17.png', './metadata/pepe18.png', './metadata/pepe19.png', './metadata/pepe20.png'];
var imgFree = true;
function spawnImage() {
	if(imgFree) {
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

//////////////////

async function callContractMethod(methodName, ...args) {
    try {
      const result = await contract.methods[methodName](...args).call({ from: selectedAccount });
      console.log(`${methodName} returned:`, result);
    } catch (err) {
      console.error(`Error calling ${methodName}:`, err);
    }
}
function initEventListeners() {
	document.getElementById("tierInput").addEventListener("input", function() {
		const stakeAmount = BigInt(this.value) * BigInt("1000000000000000000");
		const stakeBtn = document.getElementById("stakeBtn");
		if (stakeAmount >= BigInt("1000000000000000000000000") && userBalance >= stakeAmount) {
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
	const selectedAccountLower = selectedAccount.toLowerCase();
	const lastFrenInQueueLower = lastFrenInQueue.toLowerCase();
	const queue = document.getElementById("queueStatus");
	const queue2 = document.getElementById("frenInQueue");
	const frenDetails = document.getElementById("frenDetails");

	const totalFarmingText = document.getElementById("totalFarming");
	const totalFarmingFren = await contract.methods.totalFarmingFren().call();
	totalFarmingText.innerHTML = "TOTAL STAKED: "+parseFloat((totalFarmingFren / 10 ** 18).toFixed(2)).toLocaleString('en-US') + " $FREN";

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
		  	frenDetails.hidden = false;
		  	let queueTime = await contract.methods.queueTime(selectedAccount).call();
		  	let timeElapsed = Date.now()/ 1000 - queueTime;
		  	const initialStake = await contract.methods.stakeAmount(selectedAccount).call();
		  	const estFren = calculateInterest(initialStake, timeElapsed, 10/3);
		  	let val = new BN(estFren);
		  	frenDetails.innerText = "Est FREN earned in queue: " + (val/10**18).toFixed(4);
		  	document.getElementById("frenPair").innerHTML = "Currently alone in queue :(";
		} else {
			queue.hidden = false;
			leaveQueueBtn.hidden = false;
		}
	}

	if(isFrend){
		stopBeingFrenBtn.hidden = false;
		const frenPairIndex = await contract.methods.userToFrenPairIndex(selectedAccount).call();
        const frenPairDetails = await getFrenPairDetails(frenPairIndex);
		const minFrenTime = await contract.methods.minFrenTime().call();
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
}, 1000);

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
	userBalance = await contract.methods.balanceOf(selectedAccount).call();

	let balanceToShow = (userBalance / 10 ** 18).toFixed(2);
	document.getElementById("userBalance").innerHTML = parseFloat(balanceToShow).toLocaleString('en-US');

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

				const totalSupply = await contract.methods.totalSupply().call();
				const burnRate = await contract.methods._calculateBurnRate().call();
				document.getElementById("totalSupply").innerHTML = (totalSupply / 10 ** 18).toLocaleString();
      			document.getElementById("burnRate").innerHTML =(burnRate / 100) + " %".toLocaleString();

				// Simulate a year's worth of interest from now
				const interestEarnedInYear = await contract.methods.calculateInterest(initialBurnedTokens, timeElapsed+31536000, interestRate).call();

				// Calculate the total balance after a year
				let totalBalanceAfterYear = Number(initialBurnedTokens) + Number(interestEarnedInYear);

				// Calculate the daily rate
				let dailyRate = Math.pow(totalBalanceAfterYear / initialBurnedTokens, 1 / 365) - 1;

				// Calculate the APY
				let APY = Math.pow(1 + dailyRate, 365) - 1;

				// Convert to a percentage
				let APYPercentage = APY * 100;

				document.getElementById("apy").innerHTML = APYPercentage.toFixed(2) + "% APY";

				// convert val to a decimal string with 18 decimal places
				let valStr = val.toString();
				valStr = valStr.slice(0, -18) + '.' + valStr.slice(-4);
				
				document.getElementById("frenDetails").innerHTML = parseFloat((val/10**18).toFixed(4)).toLocaleString('en-US');
		
				frenPairContainer.style.display = "block";
			}
		} else {
			frenPairContainer.style.display = "none";
		}
     	setTimeout(refreshData, 5000); // Call the function every 5 seconds
	} else {
		frenPairContainer.style.display = "none";
	}
}


  
  