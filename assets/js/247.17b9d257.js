(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{444:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"constants"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#constants"}},[e._v("#")]),e._v(" Constants")]),e._v(" "),t("p",[e._v("The following sections contain the module constants, also known as parameter types. These can only be changed as part of a runtime upgrade. On the api, these are exposed via "),t("code",[e._v("api.consts.<module>.<method>")]),e._v(".")]),e._v(" "),t("p",[e._v("(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[t("a",{attrs:{href:"#babe"}},[e._v("babe")])])])]),e._v(" "),t("li",[t("p",[t("strong",[t("a",{attrs:{href:"#balances"}},[e._v("balances")])])])]),e._v(" "),t("li",[t("p",[t("strong",[t("a",{attrs:{href:"#contracts"}},[e._v("contracts")])])])]),e._v(" "),t("li",[t("p",[t("strong",[t("a",{attrs:{href:"#democracy"}},[e._v("democracy")])])])]),e._v(" "),t("li",[t("p",[t("strong",[t("a",{attrs:{href:"#elections"}},[e._v("elections")])])])]),e._v(" "),t("li",[t("p",[t("strong",[t("a",{attrs:{href:"#finalityTracker"}},[e._v("finalityTracker")])])])]),e._v(" "),t("li",[t("p",[t("strong",[t("a",{attrs:{href:"#session"}},[e._v("session")])])])]),e._v(" "),t("li",[t("p",[t("strong",[t("a",{attrs:{href:"#staking"}},[e._v("staking")])])])]),e._v(" "),t("li",[t("p",[t("strong",[t("a",{attrs:{href:"#timestamp"}},[e._v("timestamp")])])])]),e._v(" "),t("li",[t("p",[t("strong",[t("a",{attrs:{href:"#treasury"}},[e._v("treasury")])])])])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"babe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babe"}},[e._v("#")]),e._v(" babe")]),e._v(" "),t("h3",{attrs:{id:"epochduration-u64"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#epochduration-u64"}},[e._v("#")]),e._v(" epochDuration: "),t("code",[e._v("u64")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.babe.epochDuration")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The number of "),t("strong",[e._v("slots")]),e._v(" that an epoch takes. We couple sessions to epochs, i.e. we start a new session once the new epoch begins.")])]),e._v(" "),t("h3",{attrs:{id:"expectedblocktime-moment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expectedblocktime-moment"}},[e._v("#")]),e._v(" expectedBlockTime: "),t("code",[e._v("Moment")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.babe.expectedBlockTime")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The expected average block time at which BABE should be creating blocks. Since BABE is probabilistic it is not trivial to figure out what the expected average block time should be based on the slot duration and the security parameter "),t("code",[e._v("c")]),e._v(" (where "),t("code",[e._v("1 - c")]),e._v(" represents the probability of a slot being empty).")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"balances"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#balances"}},[e._v("#")]),e._v(" balances")]),e._v(" "),t("h3",{attrs:{id:"creationfee-balance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creationfee-balance"}},[e._v("#")]),e._v(" creationFee: "),t("code",[e._v("Balance")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.balances.creationFee")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The fee required to create an account.")])]),e._v(" "),t("h3",{attrs:{id:"existentialdeposit-balance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#existentialdeposit-balance"}},[e._v("#")]),e._v(" existentialDeposit: "),t("code",[e._v("Balance")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.balances.existentialDeposit")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The minimum amount required to keep an account open.")])]),e._v(" "),t("h3",{attrs:{id:"transactionbasefee-balance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transactionbasefee-balance"}},[e._v("#")]),e._v(" transactionBaseFee: "),t("code",[e._v("Balance")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.balances.transactionBaseFee")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The fee to be paid for making a transaction; the base.")])]),e._v(" "),t("h3",{attrs:{id:"transactionbytefee-balance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transactionbytefee-balance"}},[e._v("#")]),e._v(" transactionByteFee: "),t("code",[e._v("Balance")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.balances.transactionByteFee")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The fee to be paid for making a transaction; the per-byte portion.")])]),e._v(" "),t("h3",{attrs:{id:"transferfee-balance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transferfee-balance"}},[e._v("#")]),e._v(" transferFee: "),t("code",[e._v("Balance")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.balances.transferFee")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The fee required to make a transfer.")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"contracts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contracts"}},[e._v("#")]),e._v(" contracts")]),e._v(" "),t("h3",{attrs:{id:"blockgaslimit-gas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blockgaslimit-gas"}},[e._v("#")]),e._v(" blockGasLimit: "),t("code",[e._v("Gas")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.contracts.blockGasLimit")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The maximum amount of gas that could be expended per block. A reasonable default value is 10_000_000.")])]),e._v(" "),t("h3",{attrs:{id:"callbasefee-gas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#callbasefee-gas"}},[e._v("#")]),e._v(" callBaseFee: "),t("code",[e._v("Gas")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.contracts.callBaseFee")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The base fee charged for calling into a contract. A reasonable default value is 135.")])]),e._v(" "),t("h3",{attrs:{id:"contractfee-balanceof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contractfee-balanceof"}},[e._v("#")]),e._v(" contractFee: "),t("code",[e._v("BalanceOf")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.contracts.contractFee")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The fee required to instantiate a contract instance. A reasonable default value is 21.")])]),e._v(" "),t("h3",{attrs:{id:"creationfee-balanceof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creationfee-balanceof"}},[e._v("#")]),e._v(" creationFee: "),t("code",[e._v("BalanceOf")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.contracts.creationFee")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The fee required to create an account.")])]),e._v(" "),t("h3",{attrs:{id:"instantiatebasefee-gas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instantiatebasefee-gas"}},[e._v("#")]),e._v(" instantiateBaseFee: "),t("code",[e._v("Gas")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.contracts.instantiateBaseFee")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The base fee charged for instantiating a contract. A reasonable default value is 175.")])]),e._v(" "),t("h3",{attrs:{id:"maxdepth-u32"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maxdepth-u32"}},[e._v("#")]),e._v(" maxDepth: "),t("code",[e._v("u32")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.contracts.maxDepth")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The maximum nesting level of a call/instantiate stack. A reasonable default value is 100.")])]),e._v(" "),t("h3",{attrs:{id:"maxvaluesize-u32"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maxvaluesize-u32"}},[e._v("#")]),e._v(" maxValueSize: "),t("code",[e._v("u32")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.contracts.maxValueSize")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The maximum size of a storage value in bytes. A reasonable default is 16 KiB.")])]),e._v(" "),t("h3",{attrs:{id:"rentbytefee-balanceof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rentbytefee-balanceof"}},[e._v("#")]),e._v(" rentByteFee: "),t("code",[e._v("BalanceOf")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.contracts.rentByteFee")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": Price of a byte of storage per one block interval. Should be greater than 0.")])]),e._v(" "),t("h3",{attrs:{id:"rentdepositoffset-balanceof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rentdepositoffset-balanceof"}},[e._v("#")]),e._v(" rentDepositOffset: "),t("code",[e._v("BalanceOf")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.contracts.rentDepositOffset")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The amount of funds a contract should deposit in order to offset the cost of one byte.  Let's suppose the deposit is 1,000 BU (balance units)/byte and the rent is 1 BU/byte/day, then a contract with 1,000,000 BU that uses 1,000 bytes of storage would pay no rent. But if the balance reduced to 500,000 BU and the storage stayed the same at 1,000, then it would pay 500 BU/day.")])]),e._v(" "),t("h3",{attrs:{id:"signedclaimhandicap-blocknumber"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signedclaimhandicap-blocknumber"}},[e._v("#")]),e._v(" signedClaimHandicap: "),t("code",[e._v("BlockNumber")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.contracts.signedClaimHandicap")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": Number of block delay an extrinsic claim surcharge has.  When claim surcharge is called by an extrinsic the rent is checked for current_block - delay")])]),e._v(" "),t("h3",{attrs:{id:"storagesizeoffset-u32"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storagesizeoffset-u32"}},[e._v("#")]),e._v(" storageSizeOffset: "),t("code",[e._v("u32")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.contracts.storageSizeOffset")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": Size of a contract at the time of instantiaion. This is a simple way to ensure that empty contracts eventually gets deleted.")])]),e._v(" "),t("h3",{attrs:{id:"surchargereward-balanceof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#surchargereward-balanceof"}},[e._v("#")]),e._v(" surchargeReward: "),t("code",[e._v("BalanceOf")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.contracts.surchargeReward")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": Reward that is received by the party whose touch has led to removal of a contract.")])]),e._v(" "),t("h3",{attrs:{id:"tombstonedeposit-balanceof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tombstonedeposit-balanceof"}},[e._v("#")]),e._v(" tombstoneDeposit: "),t("code",[e._v("BalanceOf")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.contracts.tombstoneDeposit")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The minimum amount required to generate a tombstone.")])]),e._v(" "),t("h3",{attrs:{id:"transactionbasefee-balanceof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transactionbasefee-balanceof"}},[e._v("#")]),e._v(" transactionBaseFee: "),t("code",[e._v("BalanceOf")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.contracts.transactionBaseFee")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The fee to be paid for making a transaction; the base.")])]),e._v(" "),t("h3",{attrs:{id:"transactionbytefee-balanceof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transactionbytefee-balanceof"}},[e._v("#")]),e._v(" transactionByteFee: "),t("code",[e._v("BalanceOf")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.contracts.transactionByteFee")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The fee to be paid for making a transaction; the per-byte portion.")])]),e._v(" "),t("h3",{attrs:{id:"transferfee-balanceof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transferfee-balanceof"}},[e._v("#")]),e._v(" transferFee: "),t("code",[e._v("BalanceOf")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.contracts.transferFee")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The fee required to make a transfer.")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"democracy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#democracy"}},[e._v("#")]),e._v(" democracy")]),e._v(" "),t("h3",{attrs:{id:"cooloffperiod-blocknumber"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cooloffperiod-blocknumber"}},[e._v("#")]),e._v(" cooloffPeriod: "),t("code",[e._v("BlockNumber")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.democracy.cooloffPeriod")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": Period in blocks where an external proposal may not be re-submitted after being vetoed.")])]),e._v(" "),t("h3",{attrs:{id:"emergencyvotingperiod-blocknumber"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#emergencyvotingperiod-blocknumber"}},[e._v("#")]),e._v(" emergencyVotingPeriod: "),t("code",[e._v("BlockNumber")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.democracy.emergencyVotingPeriod")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": Minimum voting period allowed for an emergency referendum.")])]),e._v(" "),t("h3",{attrs:{id:"enactmentperiod-blocknumber"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enactmentperiod-blocknumber"}},[e._v("#")]),e._v(" enactmentPeriod: "),t("code",[e._v("BlockNumber")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.democracy.enactmentPeriod")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The minimum period of locking and the period between a proposal being approved and enacted.  It should generally be a little more than the unstake period to ensure that voting stakers have an opportunity to remove themselves from the system in the case where they are on the losing side of a vote.")])]),e._v(" "),t("h3",{attrs:{id:"launchperiod-blocknumber"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#launchperiod-blocknumber"}},[e._v("#")]),e._v(" launchPeriod: "),t("code",[e._v("BlockNumber")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.democracy.launchPeriod")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": How often (in blocks) new public referenda are launched.")])]),e._v(" "),t("h3",{attrs:{id:"minimumdeposit-balanceof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minimumdeposit-balanceof"}},[e._v("#")]),e._v(" minimumDeposit: "),t("code",[e._v("BalanceOf")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.democracy.minimumDeposit")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The minimum amount to be used as a deposit for a public referendum proposal.")])]),e._v(" "),t("h3",{attrs:{id:"votingperiod-blocknumber"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#votingperiod-blocknumber"}},[e._v("#")]),e._v(" votingPeriod: "),t("code",[e._v("BlockNumber")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.democracy.votingPeriod")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": How often (in blocks) to check for new votes.")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"elections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elections"}},[e._v("#")]),e._v(" elections")]),e._v(" "),t("h3",{attrs:{id:"approvalsetsize-u32"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#approvalsetsize-u32"}},[e._v("#")]),e._v(" approvalSetSize: "),t("code",[e._v("u32")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.elections.approvalSetSize")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The chunk size of the approval vector.")])]),e._v(" "),t("h3",{attrs:{id:"candidacybond-balanceof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#candidacybond-balanceof"}},[e._v("#")]),e._v(" candidacyBond: "),t("code",[e._v("BalanceOf")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.elections.candidacyBond")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": How much should be locked up in order to submit one's candidacy. A reasonable default value is 9.")])]),e._v(" "),t("h3",{attrs:{id:"carrycount-u32"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#carrycount-u32"}},[e._v("#")]),e._v(" carryCount: "),t("code",[e._v("u32")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.elections.carryCount")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": How many runners-up should have their approvals persist until the next vote. A reasonable default value is 2.")])]),e._v(" "),t("h3",{attrs:{id:"decayratio-u32"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decayratio-u32"}},[e._v("#")]),e._v(" decayRatio: "),t("code",[e._v("u32")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.elections.decayRatio")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": Decay factor of weight when being accumulated. It should typically be set to "),t("strong",[e._v("at least")]),e._v(" "),t("code",[e._v("membership_size -1")]),e._v(" to keep the collective secure. When set to "),t("code",[e._v("N")]),e._v(", it indicates "),t("code",[e._v("(1/N)^t")]),e._v(" of staked is decayed at weight increment step "),t("code",[e._v("t")]),e._v(". 0 will result in no weight being added at all (normal approval voting). A reasonable default value is 24.")])]),e._v(" "),t("h3",{attrs:{id:"inactivegraceperiod-voteindex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inactivegraceperiod-voteindex"}},[e._v("#")]),e._v(" inactiveGracePeriod: "),t("code",[e._v("VoteIndex")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.elections.inactiveGracePeriod")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": How many vote indices need to go by after a target voter's last vote before they can be reaped if their approvals are moot. A reasonable default value is 1.")])]),e._v(" "),t("h3",{attrs:{id:"minimumvotinglock-balanceof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minimumvotinglock-balanceof"}},[e._v("#")]),e._v(" minimumVotingLock: "),t("code",[e._v("BalanceOf")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.elections.minimumVotingLock")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": Minimum about that can be used as the locked value for voting.")])]),e._v(" "),t("h3",{attrs:{id:"presentslashpervoter-balanceof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#presentslashpervoter-balanceof"}},[e._v("#")]),e._v(" presentSlashPerVoter: "),t("code",[e._v("BalanceOf")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.elections.presentSlashPerVoter")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The punishment, per voter, if you provide an invalid presentation. A reasonable default value is 1.")])]),e._v(" "),t("h3",{attrs:{id:"votersetsize-u32"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#votersetsize-u32"}},[e._v("#")]),e._v(" voterSetSize: "),t("code",[e._v("u32")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.elections.voterSetSize")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The chunk size of the voter vector.")])]),e._v(" "),t("h3",{attrs:{id:"votingbond-balanceof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#votingbond-balanceof"}},[e._v("#")]),e._v(" votingBond: "),t("code",[e._v("BalanceOf")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.elections.votingBond")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": How much should be locked up in order to be able to submit votes.")])]),e._v(" "),t("h3",{attrs:{id:"votingfee-balanceof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#votingfee-balanceof"}},[e._v("#")]),e._v(" votingFee: "),t("code",[e._v("BalanceOf")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.elections.votingFee")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The amount of fee paid upon each vote submission, unless if they submit a "),t("em",[e._v("hole")]),e._v(" index and replace it.")])]),e._v(" "),t("h3",{attrs:{id:"votingperiod-blocknumber-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#votingperiod-blocknumber-2"}},[e._v("#")]),e._v(" votingPeriod: "),t("code",[e._v("BlockNumber")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.elections.votingPeriod")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": How often (in blocks) to check for new votes. A reasonable default value is 1000.")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"finalitytracker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finalitytracker"}},[e._v("#")]),e._v(" finalityTracker")]),e._v(" "),t("h3",{attrs:{id:"reportlatency-blocknumber"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reportlatency-blocknumber"}},[e._v("#")]),e._v(" reportLatency: "),t("code",[e._v("BlockNumber")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.finalityTracker.reportLatency")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The delay after which point things become suspicious. Default is 1000.")])]),e._v(" "),t("h3",{attrs:{id:"windowsize-blocknumber"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windowsize-blocknumber"}},[e._v("#")]),e._v(" windowSize: "),t("code",[e._v("BlockNumber")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.finalityTracker.windowSize")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The number of recent samples to keep from this chain. Default is 101.")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[e._v("#")]),e._v(" session")]),e._v(" "),t("h3",{attrs:{id:"dedupkeyprefix-bytes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dedupkeyprefix-bytes"}},[e._v("#")]),e._v(" dedupKeyPrefix: "),t("code",[e._v("Bytes")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.session.dedupKeyPrefix")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": Used as first key for "),t("code",[e._v("NextKeys")]),e._v(" and "),t("code",[e._v("KeyOwner")]),e._v(" to put all the data into the same branch of the trie.")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"staking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#staking"}},[e._v("#")]),e._v(" staking")]),e._v(" "),t("h3",{attrs:{id:"bondingduration-eraindex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bondingduration-eraindex"}},[e._v("#")]),e._v(" bondingDuration: "),t("code",[e._v("EraIndex")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.staking.bondingDuration")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": Number of eras that staked funds must remain bonded for.")])]),e._v(" "),t("h3",{attrs:{id:"sessionsperera-sessionindex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sessionsperera-sessionindex"}},[e._v("#")]),e._v(" sessionsPerEra: "),t("code",[e._v("SessionIndex")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.staking.sessionsPerEra")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": Number of sessions per era.")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"timestamp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#timestamp"}},[e._v("#")]),e._v(" timestamp")]),e._v(" "),t("h3",{attrs:{id:"minimumperiod-moment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minimumperiod-moment"}},[e._v("#")]),e._v(" minimumPeriod: "),t("code",[e._v("Moment")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.timestamp.minimumPeriod")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": The minimum period between blocks. Beware that this is different to the "),t("em",[e._v("expected")]),e._v(" period that the block production apparatus provides. Your chosen consensus system will generally work with this to determine a sensible block time. e.g. For Aura, it will be double this period on default settings.")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"treasury"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#treasury"}},[e._v("#")]),e._v(" treasury")]),e._v(" "),t("h3",{attrs:{id:"burn-permill"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#burn-permill"}},[e._v("#")]),e._v(" burn: "),t("code",[e._v("Permill")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.treasury.burn")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": Percentage of spare funds (if any) that are burnt per spend period.")])]),e._v(" "),t("h3",{attrs:{id:"proposalbond-permill"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proposalbond-permill"}},[e._v("#")]),e._v(" proposalBond: "),t("code",[e._v("Permill")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.treasury.proposalBond")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": Fraction of a proposal's value that should be bonded in order to place the proposal. An accepted proposal gets these back. A rejected proposal does not.")])]),e._v(" "),t("h3",{attrs:{id:"proposalbondminimum-balanceof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proposalbondminimum-balanceof"}},[e._v("#")]),e._v(" proposalBondMinimum: "),t("code",[e._v("BalanceOf")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.treasury.proposalBondMinimum")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": Minimum amount of funds that should be placed in a deposit for making a proposal.")])]),e._v(" "),t("h3",{attrs:{id:"spendperiod-blocknumber"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spendperiod-blocknumber"}},[e._v("#")]),e._v(" spendPeriod: "),t("code",[e._v("BlockNumber")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("interface")]),e._v(": api.consts.treasury.spendPeriod")]),e._v(" "),t("li",[t("strong",[e._v("summary")]),e._v(": Period between successive spends.")])])])}),[],!1,null,null,null);a.default=r.exports}}]);