web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// !!! IMPORTANT !!!
// In you nodejs console, execute compiledCode.contracts[':Voting'].interface to get the ABI code
// $.getJSON('./build/Purchase.abi', function(data) {
//   abiDefinetion = JSON.parse(data);
//   PurchaseContract = web3.eth.contract(abiDefinetion);
// });
// $.getJSON('./build/Purchase.bin', function(data) {
//   byteCode = data;
// });
abiDefinetion = JSON.parse('[{"constant":true,"inputs":[],"name":"seller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"abort","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"value","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buyer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"confirmReceived","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"confirmPurchase","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[],"name":"Aborted","type":"event"},{"anonymous":false,"inputs":[],"name":"PurchaseConfirmed","type":"event"},{"anonymous":false,"inputs":[],"name":"ItemReceived","type":"event"}]');
PurchaseContract = web3.eth.contract(abiDefinetion);
byteCode = '0x60606040525b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060023481151561005257fe5b046000819055503460005460020214151561006c57600080fd5b5b5b6106588061007d6000396000f30060606040523615610081576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806308551a531461008657806335a063b4146100db5780633fa4f245146100f05780637150d8ae1461011957806373fac6f01461016e578063c19d93fb14610183578063d6960697146101ba575b600080fd5b341561009157600080fd5b6100996101c4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100e657600080fd5b6100ee6101ea565b005b34156100fb57600080fd5b610103610349565b6040518082815260200191505060405180910390f35b341561012457600080fd5b61012c61034f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561017957600080fd5b610181610375565b005b341561018e57600080fd5b610196610538565b604051808260028111156101a657fe5b60ff16815260200191505060405180910390f35b6101c261054b565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561024657600080fd5b600080600281111561025457fe5b600260149054906101000a900460ff16600281111561026f57fe5b14151561027b57600080fd5b7f72c874aeff0b183a56e2b79c71b46e1aed4dee5e09862134b8821ba2fddbf8bf60405160405180910390a160028060146101000a81548160ff021916908360028111156102c557fe5b0217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050151561034357600080fd5b5b5b505b565b60005481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103d157600080fd5b60018060028111156103df57fe5b600260149054906101000a900460ff1660028111156103fa57fe5b14151561040657600080fd5b7fe89152acd703c9d8c7d28829d443260b411454d45394e7995815140c8cbcbcf760405160405180910390a160028060146101000a81548160ff0219169083600281111561045057fe5b0217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6000549081150290604051600060405180830381858888f1935050505015156104b957600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050151561053257600080fd5b5b5b505b565b600260149054906101000a900460ff1681565b600080600281111561055957fe5b600260149054906101000a900460ff16600281111561057457fe5b14151561058057600080fd5b600054600202341480151561059457600080fd5b7fd5d55c8a68912e9a110618df8d5e2e83b8d83211c57a8ddd1203df92885dc88160405160405180910390a133600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600260146101000a81548160ff0219169083600281111561062057fe5b02179055505b5b505b505600a165627a7a72305820bed20afc28f88fe0a6395a960e4a5644c16f8bb6cac169bc8ffe10418562c2ce0029';
// abiDefinetion = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]')
// bytecode =

// !!! IMPORTANT !!!
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address

// contracts = {"0": "0x6435186fc9cf75654efb1cf59efcece50e2f0f77"};
contracts = {"0": "0x","1": "0x"};
constractStates={"0":"Created", "1": "Locked", "2": "Inactive"};

function voteForCandidate() {
  candidateName = $("#candidate").val();
  contractInstance.voteForCandidate(candidateName, {from: web3.eth.accounts[0]}, function() {
    let div_id = candidates[candidateName];
    $("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
  });
};

function getContractInstance(petID) {
  var instance;
  if(contracts[petID].length > 2) {
      instance = PurchaseContract.at(contracts[petID]);
  }
  return instance;
};
function updateContractInfo(contract, operation, id) {
    if (typeof contract.address === 'undefined') return;
    console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);

    var petsRow = $('#petsRow' + id);
    var panelPet = $("#panel-pet-" + id);
    var panelContract = $("#panel-contract-" + id);
    var conatractState = contract.state().toString();
    panelContract.find('.contract-state').text(constractStates[conatractState]);
    panelContract.find('.contract-balance').text(contract._eth.getBalance(contract.address) + " Ether");
    if (operation === 'Init') {
      panelContract.find('.contract-transcation').text(contract.transactionHash);
      panelContract.find('.contract-address').text(contract.address);
      panelContract.find('.contract-value').text(contract.value().toString() + " Ether");
      panelContract.find('.contract-value').data("value", contract.value().toString());
      panelContract.find('.contract-buyer').text(contract.buyer());
      panelContract.find('.contract-seller').text(contract.seller());

      panelContract.css('display','block');
      panelPet.find(".btn-publish").attr("disabled","disabled");
    } else if(operation === 'Abort') {
      panelContract.find(".btn-operation").attr("disabled","disabled");
      panelContract.find(".btn-abort").attr("disabled","disabled");
    } else if (operation === 'MakeOffer' || operation === 'ConfirmReceived') {
      panelContract.find(".btn-abort").attr("disabled","disabled");
      var opeartionBtn = panelContract.find(".btn-operation");
      if (operation === 'MakeOffer' ) {
        panelContract.find('.contract-buyer').text(contract.buyer());
        opeartionBtn.data("operation", "ConfirmReceived")
        opeartionBtn.text("Confirm Received")
      } else {
        opeartionBtn.attr("disabled","disabled");
      }
    } else {
      alert("Opearation " + operation + "not matched!")
    }
}

$(document).on('click', '.btn-publish', function(event) {
  event.preventDefault();
  var petID = $(event.target).data('id');
  var price = parseInt($(event.target).parent().find('.pet-price').data('price'));

  if(contracts[petID].length <= 2) {
    deployedContract = PurchaseContract.new({data: byteCode, from: web3.eth.accounts[0], gas: 4700000, value: price * 2},
    function (e, contract){
      // console.log(e, contract);
      updateContractInfo(contract, 'Init', petID);
    })
  }
});

$(document).on('click', '.btn-abort', function(event) {
  event.preventDefault();
  var petID = $(event.target).data('id');
  alert(petID)
  var petsRow = $('#petsRow' + petID);
  var panelContract = $("#panel-contract-" + petID);
  var contractAddress = panelContract.find('.contract-address').text();
  var contractInstance = PurchaseContract.at(contractAddress);
  contractInstance.abort.sendTransaction({from: web3.eth.accounts[0], gas: 4700000},function (e, data) {
    if(!e) {
      updateContractInfo(PurchaseContract.at(contractAddress), 'Abort', petID);
    } else {
      alert(e);
    }
  });
});

$(document).on('click', '.btn-operation', function(event) {
  event.preventDefault();
  var petID = $(event.target).data('id');
  var operation = $(event.target).data('operation');
  var value = parseInt($(event.target).parent().find('.contract-value').data('value'));
  var panelContract = $("#panel-contract-" + petID);
  var contractAddress = panelContract.find('.contract-address').text();
  var contractInstance = PurchaseContract.at(contractAddress);
  if(operation == "MakeOffer") {
    contractInstance.confirmPurchase.sendTransaction({from: web3.eth.accounts[1], gas: 4700000, value: value * 2, gasPrice: 200000},
    function (e, data) {
      if(!e) {
        updateContractInfo(PurchaseContract.at(contractAddress), 'MakeOffer', petID);
      } else {
        alert(e);
      }
    });
  } else {
    contractInstance.confirmReceived({from: web3.eth.accounts[1], gas: 4700000, gasPrice: 200000},
    function (e, contract) {
      if(!e) {
        updateContractInfo(PurchaseContract.at(contractAddress), 'ConfirmReceived', petID);
      } else {
        alert(e);
      }
    });
  }
});


$(document).ready(function() {
  var petIDs = Object.keys(contracts);
  for (var i = 0; i < petIDs.length; i++) {
    let petID = petIDs[i];
    let contractAddress = contracts[petID]
    console.log(petID + ":" + contractAddress.length);
  }
});
