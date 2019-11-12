(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{205:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_0-96-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-96-1"}},[e._v("#")]),e._v(" 0.96.1")]),e._v(" "),a("ul",[a("li",[e._v("Updated types for latest Kusama")]),e._v(" "),a("li",[e._v("Add "),a("code",[e._v("filterRecords")]),e._v(" (in addition to "),a("code",[e._v("findRecord")]),e._v(") on submittable results")]),e._v(" "),a("li",[e._v("Various ABI v2 contract fixes")]),e._v(" "),a("li",[e._v("Update derive for elections (incl. RunnersUp) and heartbeat derives (with blocks & messages)")]),e._v(" "),a("li",[e._v("Add vesting totals & locked breakdowns to derive balances")]),e._v(" "),a("li",[e._v("Update council derives for the latest Substrate master support (with constants)")]),e._v(" "),a("li",[e._v("Derive cleanups, including sharing of instances between the API and internal to derives")])]),e._v(" "),a("h1",{attrs:{id:"_0-95-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-95-2"}},[e._v("#")]),e._v(" 0.95.2")]),e._v(" "),a("ul",[a("li",[e._v("Temporary removal of "),a("code",[e._v("account_nextIndex")]),e._v(" use, will be re-added in a future release")])]),e._v(" "),a("h1",{attrs:{id:"_0-95-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-95-1"}},[e._v("#")]),e._v(" 0.95.1")]),e._v(" "),a("ul",[a("li",[e._v("Support Extrinsic V4 with additional signature indicator (Latest Polkadot/Substrate/Kusama)")]),e._v(" "),a("li",[e._v("Adjust subscription update checks to avoid duplicated data updates")]),e._v(" "),a("li",[e._v("Support Metadata V8 (exposes per-module "),a("code",[e._v("decl_error")]),e._v(" definitions)")]),e._v(" "),a("li",[e._v("Support next generation contracts ABI (with additional type definitions)")]),e._v(" "),a("li",[e._v("Support for "),a("code",[e._v("BTreeMap<K, V>")]),e._v(" types and definitions")]),e._v(" "),a("li",[e._v("All latest Polkadot & Substrate types (as per master branches)")]),e._v(" "),a("li",[a("strong",[e._v("Breaking change")]),e._v(" "),a("code",[e._v("Call.injectMethods")]),e._v(" is moved to "),a("code",[e._v("Call.injectMetadata")]),e._v(" to align with "),a("code",[e._v("Events")]),e._v(" (This "),a("em",[e._v("should")]),e._v(" not be used externally, however mentioned as breaking here)")])]),e._v(" "),a("h1",{attrs:{id:"_0-94-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-94-1"}},[e._v("#")]),e._v(" 0.94.1")]),e._v(" "),a("ul",[a("li",[e._v("Add handling of "),a("code",[e._v("Result<Ok, Error>")]),e._v(" definitions")]),e._v(" "),a("li",[e._v("Adjust API cloning now takes RPC filters from source into account")]),e._v(" "),a("li",[e._v("Simplification of isPedantic checks and less overhead on StorageData types")]),e._v(" "),a("li",[e._v("Cleanups and fixes around RPC and derive type definitions")]),e._v(" "),a("li",[e._v("Fix "),a("code",[e._v("derive.imOnline.receivedHeatbeats")]),e._v(" to query via indexes")]),e._v(" "),a("li",[e._v("Adjustment of "),a("code",[e._v("api.derive.elections.{approvalsOf|approvalsOfAt}")]),e._v(" to allow ss58 address input")]),e._v(" "),a("li",[e._v("Cleanup "),a("code",[e._v("Enum")]),e._v(" "),a("code",[e._v(".eq")]),e._v(" handling to be more exhaustive")]),e._v(" "),a("li",[e._v("Add documentation for custom extrinsic formats (advanced chains)")]),e._v(" "),a("li",[e._v("Update to latest substrate master metadata")])]),e._v(" "),a("h1",{attrs:{id:"_0-93-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-93-1"}},[e._v("#")]),e._v(" 0.93.1")]),e._v(" "),a("ul",[a("li",[e._v("Support for Kusama CC2")]),e._v(" "),a("li",[e._v("In extrinsic submission, use "),a("code",[e._v("rpc.account.nextIndex")]),e._v(" to retrieve the nonce when available")]),e._v(" "),a("li",[e._v("For TypeScript users "),a("code",[e._v("api.query.*.*")]),e._v(" is now properly typed for default Substrate calls, i.e. "),a("code",[e._v("api.query.balances.freeBalance(...)")]),e._v(" will return a "),a("code",[e._v("Balance")]),e._v(" type. Additionally the "),a("code",[e._v("api.queryMulti")]),e._v(" and "),a("code",[e._v(".multi")]),e._v(" on queries not allow generic type params.")]),e._v(" "),a("li",[e._v("Add "),a("code",[e._v("api.rpc.accounts.nextIndex")]),e._v(", "),a("code",[e._v("api.rpc.contracts.call")]),e._v(" and "),a("code",[e._v("api.rpc.rpc.methods")]),e._v(" calls. Optional calls (such as account/contracts) is decorated based on the results from "),a("code",[e._v("rpc.methods")]),e._v(", so they don't show up on nodes where they are not active.")]),e._v(" "),a("li",[e._v("Updated types to support the latest Polkadot/Substrate master changes")]),e._v(" "),a("li",[e._v("Support recursive type registration (self-referencing via "),a("code",[e._v("Box")]),e._v(") in addition to better sanitation of user-defined-types")]),e._v(" "),a("li",[e._v("Documentation and example updates (thanks mostly to contributions)")])]),e._v(" "),a("h1",{attrs:{id:"_0-92-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-92-1"}},[e._v("#")]),e._v(" 0.92.1")]),e._v(" "),a("ul",[a("li",[e._v("The API now correctly sets the ss58 prefix as retrieved from the chain properties via "),a("code",[e._v("ss58Format")])]),e._v(" "),a("li",[e._v("Bump to "),a("code",[e._v("@polkadot/util")]),e._v(" 1.4.1, removing use of "),a("code",[e._v("ExtError")])]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("Keyring")]),e._v(" from "),a("code",[e._v("@polkadot/keyring")]),e._v(" is now exposed on the API as well. You can do "),a("code",[e._v("import { Keyring } from '@polkadot/api'")]),e._v(" - this alleviates the need for extra dependencies (apart from "),a("code",[e._v("@polkadot/api")]),e._v("), and since the keyring is critical for signing operations, aligns everything in one bundle")]),e._v(" "),a("li",[e._v("Support the latest Polkadot & Substrate master branches (incl. metadata updates)")]),e._v(" "),a("li",[e._v("Getting started documentation has been made available")])]),e._v(" "),a("h1",{attrs:{id:"_0-91-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-91-1"}},[e._v("#")]),e._v(" 0.91.1")]),e._v(" "),a("ul",[a("li",[e._v("This release was focussed on stability, with a number of cleanups and bug-fixes")]),e._v(" "),a("li",[e._v("Adjustments for Substrate 1.x chain detection (with auto-types) and Substrate 2.x support has been extended with all latest types")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("getRuntimeVersion")]),e._v(" and "),a("code",[e._v("subscribeRuntimeVersion")]),e._v(" RPCs are now only available on the "),a("code",[e._v("rpc.state.*")]),e._v(" endpoints. This aligns with the Substrate implementation.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("author_insertKey")]),e._v(" RPC's last argument "),a("code",[e._v("publicKey")]),e._v(" is now required, as to reflect Substrate implementation.")]),e._v(" "),a("li",[e._v("Support for extrinsics with versions that is not in the base Substrate implementation (V1-V3) can now be done by providing an implementation for "),a("code",[e._v("ExtrinsicUnknown")])]),e._v(" "),a("li",[e._v("Redeemed balance calculation if "),a("code",[e._v("api.derive")]),e._v(" now returns the correct  values again (bug fix)")]),e._v(" "),a("li",[e._v("added the "),a("code",[e._v("yarn chain:info [--ws URL]")]),e._v(" utility to extract a calls-only metadata version")]),e._v(" "),a("li",[e._v("Missing types are now logged via a "),a("code",[e._v("console.warn")]),e._v(", not via "),a("code",[e._v(".error")])]),e._v(" "),a("li",[a("code",[e._v("Extrinsic")]),e._v(", "),a("code",[e._v("ExtrinsicPayload")]),e._v(" & "),a("code",[e._v("SignerPayload")]),e._v(" is registered in the type registry and can be overriden now\n"),a("ul",[a("li",[a("strong",[e._v("Breaking change")]),e._v(" "),a("code",[e._v("SignerPayload")]),e._v(" is renamed to "),a("code",[e._v("SignerPayloadJSON")])]),e._v(" "),a("li",[a("strong",[e._v("Breaking change")]),e._v(" "),a("code",[e._v("SignerPayloadJSON")]),e._v(", "),a("code",[e._v("SignerPayloadRawBase")]),e._v(" and "),a("code",[e._v("SignerPayloadRaw")]),e._v(" are all moved to "),a("code",[e._v("@polkadot/types")])])])])]),e._v(" "),a("h1",{attrs:{id:"_0-90-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-90-1"}},[e._v("#")]),e._v(" 0.90.1")]),e._v(" "),a("p",[e._v("If you are upgrading form an older version, use the CHANGELOG hand-in-hand with the "),a("router-link",{attrs:{to:"/UPGRADING.html"}},[e._v("migration guide")]),e._v(".")],1),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Breaking change")]),e._v(" "),a("code",[e._v("api.rpc.chain.subscribeNewHeads")]),e._v(" is now available as opposed to the old "),a("code",[e._v("subscribeNewHead")]),e._v(". This aligns with the Substrate implementation.")]),e._v(" "),a("li",[a("strong",[e._v("Breaking change")]),e._v(" Substrate 2.x & Polkadot master has moved both "),a("code",[e._v("BlockNumber")]),e._v(" & "),a("code",[e._v("Index")]),e._v(" to "),a("code",[e._v("u32")]),e._v(". The API tracks these closely. If you are running a chain with "),a("code",[e._v("u64")]),e._v(" values (for either), pass the type override to the API on creation, e.g. "),a("code",[e._v("ApiPromise.create({ types: { BlockNumber: 'u64', Index: 'u64' } })")]),e._v(" to avoid getting warnings about mismatched types.")]),e._v(" "),a("li",[a("strong",[e._v("Breaking change")]),e._v(" "),a("code",[e._v("Api.create(...)")]),e._v(" and "),a("code",[e._v("new Api(...)")]),e._v(" now only takes an options Object, so if you passed the provider directly previously, you need to swap the use to "),a("code",[e._v("Api.create({ provider: ... })")])]),e._v(" "),a("li",[a("strong",[e._v("Breaking change")]),e._v(" Runtime types have been extended and moved to definitions instead of classes\n"),a("ul",[a("li",[e._v("Primitive types for "),a("code",[e._v("i*")]),e._v(" and "),a("code",[e._v("u*")]),e._v(" (e.g. "),a("code",[e._v("u32")]),e._v(") are now only available in their lowercase versions. Additionally "),a("code",[e._v("Vector")]),e._v(" is now only available as "),a("code",[e._v("Vec")]),e._v(", and "),a("code",[e._v("Method")]),e._v(" has been renamed to "),a("code",[e._v("Call")]),e._v(", in both cases aligning with Rust.")]),e._v(" "),a("li",[a("code",[e._v("Moment")]),e._v(" now implements as "),a("code",[e._v("u64")]),e._v(" as per the Substrate codebase. (It it up to the user to interpret, for substrate 2.x it is not ms resolution)")]),e._v(" "),a("li",[e._v("For creation of types, it is recommended to use "),a("code",[e._v("createType(<TypeName>, <value>)")]),e._v(" instead of e.g. "),a("code",[e._v("new Proposal(...)")]),e._v(". When passing these to methods/queries, construction should not be needed, the raw value can be passed.")]),e._v(" "),a("li",[e._v("For moved types, a previous import would have been from "),a("code",[e._v("@polkadot/types")]),e._v(", i.e. "),a("code",[e._v("import { SetIndex } from '@polkadot/types")]),e._v(", now just the interfaces (TypeScript) are available via "),a("code",[e._v("import { SetIndex } from '@polkadot/types/interfaces")])]),e._v(" "),a("li",[a("code",[e._v("usize")]),e._v(" is now a blacklisted type that will throw on construction. Since it is platform-specific, it creates incompatibilities between native (generally "),a("code",[e._v("u64")]),e._v(") and WASM (always "),a("code",[e._v("u32")]),e._v(") code. Use one of the "),a("code",[e._v("u32")]),e._v(" or "),a("code",[e._v("u64")]),e._v(" types explicitly.")])])]),e._v(" "),a("li",[e._v("Support substrate v7 metadata")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("Method.findFunction(callIndex)")]),e._v(" (allowing decoding of raw data), is now available on "),a("code",[e._v("api.findCall(callIndex)")]),e._v(". To keep backwards compatibility, it is still available on "),a("code",[e._v("GenericCall.findMethod")]),e._v(" but the "),a("code",[e._v("api.findCall")]),e._v(" is recommended and suggested.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("types/codec/createType")]),e._v(" has been moved to "),a("code",[e._v("types/codec/create")]),e._v(" with the same exports. If you explicitly imported from here (and not doing the suggested "),a("code",[e._v("import { createType } from '@polkadot/types")]),e._v("), the reference needs to be updated")])]),e._v(" "),a("h1",{attrs:{id:"_0-82-0-beta-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-82-0-beta-x"}},[e._v("#")]),e._v(" 0.82.0-beta.x")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Support for substrate 2.x (master) has been extended,")]),e._v(" "),a("ul",[a("li",[e._v("Additional types have been addedd for the modules")]),e._v(" "),a("li",[a("code",[e._v("api.derive.contract")]),e._v(" is now "),a("code",[e._v("api.derive.contracts")]),e._v(" to align with the substrate 2.x rename. (Feture detection is used so it supports both 1.x and 2.x chains)")]),e._v(" "),a("li",[e._v("Addition of "),a("code",[e._v("api.derive.elections")])])])]),e._v(" "),a("li",[a("p",[e._v("Support latest substrate 2 v6 metadata with module constants using "),a("code",[e._v("api.consts")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("The api now uses the module name for the storage methods, aligning module names for consistency with transactions. The methods of the grandpa module moved from "),a("code",[e._v("api.query.grandpaFinality")]),e._v(" to "),a("code",[e._v("api.query.grandpa")]),e._v(".")]),e._v(" "),a("li",[e._v("Internally the "),a("code",[e._v("@polkadot/extrinsics")]),e._v(" and "),a("code",[e._v("@polkadot/storage")]),e._v(" have been moved to "),a("code",[e._v("@polkadot/api-metadata")]),e._v(" and are now accessible as "),a("code",[e._v("@polkadot/api-metadata/extrinsics")]),e._v(" and "),a("code",[e._v("@polkadot/api-metadata/storage")]),e._v(", respectively.")]),e._v(" "),a("li",[a("strong",[e._v("Breaking Change")]),e._v(" Vote interface extends U8a instead of i8. Vote properties can be accessed via the "),a("code",[e._v("isAye")]),e._v(", "),a("code",[e._v("isNay")]),e._v(", and "),a("code",[e._v("conviction")]),e._v(" getters. Votes can still be constructed as before with a raw JS boolean, a SCALE encoded Boolean, an i8 number, or a JS object with properties "),a("code",[e._v("aye")]),e._v(" and "),a("code",[e._v("conviction")]),e._v(" defined.")])])]),e._v(" "),a("li",[a("p",[e._v("Support V2 Extrinsics in addition to V1, v2 includes an optional "),a("code",[e._v("tip")])]),e._v(" "),a("ul",[a("li",[e._v("In addition to this support, the "),a("code",[e._v("Signer")]),e._v(" interface has deprecated the "),a("code",[e._v("sign")]),e._v(" method and replaced it with "),a("code",[e._v("signPayload")])]),e._v(" "),a("li",[e._v("Support for the "),a("code",[e._v("sign")]),e._v(" interfaces (API detection and calling when "),a("code",[e._v("signPayload")]),e._v(" is not available) will be removed in subsequent versions.")])])]),e._v(" "),a("li",[a("p",[e._v("The "),a("code",[e._v("ContractsAbi")]),e._v(" type has been moved from "),a("code",[e._v("@polkadot/types")]),e._v(" to "),a("code",[e._v("import { Abi } from '@polkadot/api-contract")]),e._v(". This paves the way for an enhanced contracts interface, instead of dealing with low-level API calls.")])])]),e._v(" "),a("h1",{attrs:{id:"_0-81-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-81-1"}},[e._v("#")]),e._v(" 0.81.1")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The dependency on "),a("code",[e._v("@polkadot/keyring")]),e._v(" has been removed - if you relied on the API to provide this, you would now need to manually add it")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("createType")]),e._v(" allows for the creation of "),a("code",[e._v("[u8; <length>]")]),e._v(" types (opening the door for contract support)")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("api.derive.staking.info")]),e._v(" now returns the "),a("code",[e._v("rewardDestination")])])]),e._v(" "),a("li",[a("p",[e._v("Fix for disconnection when default providers (non-specified) are used")])]),e._v(" "),a("li",[a("p",[e._v("Don't console.log type decoding errors and then throw, only re-throw with additional info")])]),e._v(" "),a("li",[a("p",[e._v("Support latest substrate 2.x v5 metadata")]),e._v(" "),a("ul",[a("li",[e._v("Add "),a("code",[e._v("ApprovalFlag")]),e._v(", "),a("code",[e._v("SetIndex")]),e._v(", "),a("code",[e._v("VoterInfo")]),e._v(" types for council as per substrate")]),e._v(" "),a("li",[e._v("Update "),a("code",[e._v("ContractInfo")]),e._v(" to match substrate master")])])]),e._v(" "),a("li",[a("p",[e._v("Add support for new inherent digests from substrate.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Breaking change")]),e._v(" Because of the new "),a("code",[e._v("Seal")]),e._v(", the old/new Seals are not compatible. If you were using the old "),a("code",[e._v("Seal")]),e._v(" from the "),a("code",[e._v("Digest")]),e._v("s, you would now use "),a("code",[e._v("isSealV0")]),e._v(" for the pre-substrate 1.0 version and the new "),a("code",[e._v("isSeal")]),e._v(" for the current version")]),e._v(" "),a("li",[e._v("Update "),a("code",[e._v("HeaderExtended")]),e._v(" to retrieve author information from substrate 2.x (new "),a("code",[e._v("PreRuntime")]),e._v(" digests)")])])]),e._v(" "),a("li",[a("p",[e._v("Cater for "),a("code",[e._v("Vec")]),e._v(", "),a("code",[e._v("Option")]),e._v(", "),a("code",[e._v("Result")]),e._v(", tuples and fixed vectors for contracts ABIs")])]),e._v(" "),a("li",[a("p",[e._v("Additional examples for subscriptions using multi")])]),e._v(" "),a("li",[a("p",[e._v("Add "),a("code",[e._v("off")]),e._v(" method to "),a("code",[e._v("Api")]),e._v(" (Base, for both "),a("code",[e._v("ApiPromise")]),e._v(" & "),a("code",[e._v("ApiRx")]),e._v(") to remove an event listener")])])]),e._v(" "),a("h1",{attrs:{id:"_0-80-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-80-1"}},[e._v("#")]),e._v(" 0.80.1")]),e._v(" "),a("ul",[a("li",[e._v("Support for mortal transactions")]),e._v(" "),a("li",[e._v("Better DoubleMap storage support")]),e._v(" "),a("li",[e._v("api-derive cleanups, including additional info for balances.all and taking.info returning redeemable and locked balances")]),e._v(" "),a("li",[e._v("Added SignaturePayloadRaw for better offline signing support")]),e._v(" "),a("li",[e._v("Updated metadata for current substrate master")]),e._v(" "),a("li",[e._v("Misc. cleanups and fixes")])]),e._v(" "),a("h1",{attrs:{id:"_0-79-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-79-1"}},[e._v("#")]),e._v(" 0.79.1")]),e._v(" "),a("ul",[a("li",[e._v("DoubleMap query support")]),e._v(" "),a("li",[e._v("Support latest EventRecord metadata (substrate master)")]),e._v(" "),a("li",[e._v("Introduce RuntimeVersion type overrides in api/nodeCompat.ts")]),e._v(" "),a("li",[e._v("Add "),a("code",[e._v("api.queryMulti")]),e._v(" and "),a("code",[e._v("api.query.<module>.<method>.multi")])]),e._v(" "),a("li",[e._v("Convert "),a("code",[e._v("api.derive.*")]),e._v(" to use multi queries")]),e._v(" "),a("li",[a("code",[e._v("types/codec/Set")]),e._v(" now extends the base JS "),a("code",[e._v("Set")]),e._v(" ("),a("strong",[e._v("breaking change")]),e._v(": "),a("code",[e._v("set.values")]),e._v(" -> "),a("code",[e._v("set.strings")]),e._v(")")]),e._v(" "),a("li",[e._v("Breaking: rename "),a("code",[e._v("meta.arguments")]),e._v(" to "),a("code",[e._v("meta.args")]),e._v(" in function metadata ("),a("code",[e._v("arguments")]),e._v(" is a JS reserved word)")]),e._v(" "),a("li",[e._v("Add "),a("code",[e._v("toRawType")]),e._v(" on all type classes (breakdown into primitive types)")])]),e._v(" "),a("h1",{attrs:{id:"_0-78-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-78-1"}},[e._v("#")]),e._v(" 0.78.1")]),e._v(" "),a("ul",[a("li",[e._v("Fix linked-maps (not working since 0.77.1)")]),e._v(" "),a("li",[e._v("Convert Usize to U32 (as found in WASM environments)")]),e._v(" "),a("li",[e._v("Allow pre-bundled metadata in API create & constructor")]),e._v(" "),a("li",[e._v("Don't clobber existing keys in structs when auto-adding fields")]),e._v(" "),a("li",[e._v("Additional logging when constructing Structs as to where failures occur")]),e._v(" "),a("li",[e._v("Do type assertion on all exposed asXXX getters")]),e._v(" "),a("li",[e._v("Metadata updates for substrate (WithdrawReasons, ContractInfo)")])]),e._v(" "),a("h1",{attrs:{id:"_0-77-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-77-1"}},[e._v("#")]),e._v(" 0.77.1")]),e._v(" "),a("ul",[a("li",[e._v("Support Metadata v4, which introduces the use of a custom hasher to hash storage map keys.")]),e._v(" "),a("li",[e._v("Add TreasuryProposal (not the same as democracy, type aliased)")])]),e._v(" "),a("h1",{attrs:{id:"_0-76-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-76-1"}},[e._v("#")]),e._v(" 0.76.1")]),e._v(" "),a("ul",[a("li",[e._v("Caching improvements (duplicate queries, no duplicate subscriptions)")]),e._v(" "),a("li",[e._v("Experimental contract API")]),e._v(" "),a("li",[e._v("Update @polkadot/keyring to enable Alice's stash account on dev chains")]),e._v(" "),a("li",[e._v("Update @polkadot/util-crypto with smaller footprint")])]),e._v(" "),a("h1",{attrs:{id:"_0-75-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-75-1"}},[e._v("#")]),e._v(" 0.75.1")]),e._v(" "),a("ul",[a("li",[e._v("Start journey to 1.0")])]),e._v(" "),a("h1",{attrs:{id:"_0-53-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-53-1"}},[e._v("#")]),e._v(" 0.53.1")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Change spelling to US English as per substrate master (1.0-rc1). Breaking changes as a result:")]),e._v(" "),a("ul",[a("li",[e._v("For extrinsic status results, if you have checked the type returns, i.e. "),a("code",[e._v("result.type === 'Finalised'")]),e._v(" now check on the status for "),a("code",[e._v("result.status.isFinalized")]),e._v(" or "),a("code",[e._v("result.status.isBroadcast")]),e._v(", ... (the "),a("code",[e._v("type")]),e._v(" property is now accessible only on "),a("code",[e._v("result.status.type")]),e._v(")")]),e._v(" "),a("li",[e._v("If using "),a("code",[e._v("subscribeFinalisedHeads")]),e._v(" update this to "),a("code",[e._v("subscribeFinalizedHeads")]),e._v(" (likewise "),a("code",[e._v("getFinalisedHead")]),e._v(" should be updated to "),a("code",[e._v("getFinalizedHead")]),e._v(" and "),a("code",[e._v("derive.bestNumberFinalized")]),e._v(")")])])]),e._v(" "),a("li",[a("p",[e._v("The underlying ss58 address checksums have changed")]),e._v(" "),a("ul",[a("li",[e._v("The updated keyring with support for this has been made available")]),e._v(" "),a("li",[e._v("All examples have been updated with sr25519 addresses (with the new checksums)")])])])]),e._v(" "),a("h1",{attrs:{id:"_0-52-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-52-1"}},[e._v("#")]),e._v(" 0.52.1")]),e._v(" "),a("ul",[a("li",[e._v("Support queries to linked mapped storage (found in new staking interfaces)")]),e._v(" "),a("li",[e._v("Add "),a("code",[e._v("derive.staking.controllers")]),e._v(" to retrieve all active staking controllers")]),e._v(" "),a("li",[e._v("Align types as per latest substrate master")]),e._v(" "),a("li",[e._v("PeerInfo from system_peers does not have the index field anymore (dropped in substrate)")]),e._v(" "),a("li",[e._v("Allow parsing of V3 metadata with DoubleMap support")]),e._v(" "),a("li",[e._v("Check for single instances for api and types as they are loaded (assertSingletonPackage)")])]),e._v(" "),a("h1",{attrs:{id:"_0-51-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-51-1"}},[e._v("#")]),e._v(" 0.51.1")]),e._v(" "),a("ul",[a("li",[e._v("Support metadata V2 as per latest substrate master")]),e._v(" "),a("li",[e._v("Update metadata with new types as per latest substrate master")])]),e._v(" "),a("h1",{attrs:{id:"_0-50-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-50-1"}},[e._v("#")]),e._v(" 0.50.1")]),e._v(" "),a("ul",[a("li",[e._v("Latest util-crypto (usage of WASM with JS fallbacks if not available)")]),e._v(" "),a("li",[e._v("Update upstream @polkadot dependencies (for new crypto)")])]),e._v(" "),a("h1",{attrs:{id:"_0-49-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-49-1"}},[e._v("#")]),e._v(" 0.49.1")]),e._v(" "),a("ul",[a("li",[e._v("Fix large message signing on non-known nodes (default is now hashing, there has been enough time between upgrades)")])]),e._v(" "),a("h1",{attrs:{id:"_0-48-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-48-1"}},[e._v("#")]),e._v(" 0.48.1")]),e._v(" "),a("ul",[a("li",[e._v("Pull in new sr25519 capable keyring for dev nodes")]),e._v(" "),a("li",[e._v("When using dev mode, it assumes that the node is the latest with derived sr25519 keys")])]),e._v(" "),a("h1",{attrs:{id:"_0-47-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-47-1"}},[e._v("#")]),e._v(" 0.47.1")]),e._v(" "),a("ul",[a("li",[e._v("Swap to publishing -beta.x on merge (non-breaking testing)")])]),e._v(" "),a("h1",{attrs:{id:"_0-46-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-46-1"}},[e._v("#")]),e._v(" 0.46.1")]),e._v(" "),a("ul",[a("li",[e._v("Extended type registration to now handle internal types as well. Additionally the built-in Extrinsic type can now we overridden with a custom version.")]),e._v(" "),a("li",[e._v("Where "),a("code",[e._v("Extrinsic")]),e._v(" and "),a("code",[e._v("Method")]),e._v(" is used as types, consider importing "),a("code",[e._v("{ IMethod, IExtrinsic }")]),e._v(" from "),a("code",[e._v("@polkadot/types/types")]),e._v(", especially in the cases where this is used from a "),a("code",[e._v("SubmittableExtrinsic")])]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("typeRegistry")]),e._v(" constant is now "),a("code",[e._v("getTypeRegistry()")]),e._v(" as a function")])]),e._v(" "),a("h1",{attrs:{id:"_0-45-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-45-1"}},[e._v("#")]),e._v(" 0.45.1")]),e._v(" "),a("ul",[a("li",[e._v("Storage with option values now correctly return "),a("code",[e._v("Option<Type>")]),e._v(" and is indicated as such in the documentation")])]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// old")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" ll "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("lastLengthChange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'ll'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" ll "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* BlockNumber */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// would be 0 if not set yet")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// new")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" llo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("lastLengthChange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'llo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" llo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("unwrapOr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'not set'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* Option<BlockNumber> */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h1",{attrs:{id:"_0-44-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-44-1"}},[e._v("#")]),e._v(" 0.44.1")]),e._v(" "),a("ul",[a("li",[e._v("Split primitives and types into separate folders. This should not affect external use since the exports remain the same, however does have an impact where classes are referenced directly. e.g.")])]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// old (affected)")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" Method "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@polkadot/types/Method'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" Signature "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@polkadot/types/Signature'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// new locations")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" Method "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@polkadot/types/primitive/Method'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" Signature "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@polkadot/types/type/Signature'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// unaffected")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" Method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" Signature "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@polkadot/types'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("h1",{attrs:{id:"_0-43-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-43-1"}},[e._v("#")]),e._v(" 0.43.1")]),e._v(" "),a("ul",[a("li",[e._v("Introduces support for the new keyring with sr25519 support in addition to ed25519. While this does not change the exposed API, it is considered breaking since @polkadot/keyring has interface changes. (Unless needed, don't rush the upgrade)")])]),e._v(" "),a("h1",{attrs:{id:"_0-42-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-42-1"}},[e._v("#")]),e._v(" 0.42.1")]),e._v(" "),a("ul",[a("li",[e._v("Support for substrate hash signing with implVersion >= 18")]),e._v(" "),a("li",[e._v("Changed signatures for Extrinsic signing, this should not have (much) of an impact since it is generally not used directly. SubmittableExtrinsic (as exposed by the API), supports the old-style use.")])]),e._v(" "),a("h1",{attrs:{id:"_0-41-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-41-1"}},[e._v("#")]),e._v(" 0.41.1")]),e._v(" "),a("ul",[a("li",[e._v("Support the V1 metadata specification from Substrate in addition to the currently testnet active V0 version")])]),e._v(" "),a("h1",{attrs:{id:"_0-40-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-40-1"}},[e._v("#")]),e._v(" 0.40.1")]),e._v(" "),a("ul",[a("li",[e._v("The API interfaces now require a WS-compatible provider, e.g. subscription support is a must. Previously the HTTPProvider could be use (although it was very limited in the interactions).")])]),e._v(" "),a("h1",{attrs:{id:"_0-39-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-39-1"}},[e._v("#")]),e._v(" 0.39.1")]),e._v(" "),a("ul",[a("li",[e._v("The Promise API now returns a "),a("code",[e._v("Promise<UnsubFunction>")]),e._v(" instead of "),a("code",[e._v("UnsubFunction")]),e._v(" when making subscriptions.")])]),e._v(" "),a("h1",{attrs:{id:"_0-38-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-38-1"}},[e._v("#")]),e._v(" 0.38.1")]),e._v(" "),a("p",[e._v("Substrate has been updated with a breaking new transaction format where the Index/Nonce is now encoded as a Compact. This change is being rolled out to both Alexander (Polkadot testnet) as well as Charred Cherry (Substrate testnet) - transactions between old and new are not compatible.")]),e._v(" "),a("h1",{attrs:{id:"_0-37-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-37-1"}},[e._v("#")]),e._v(" 0.37.1")]),e._v(" "),a("p",[e._v("api-observable has been removed. This was only used in /apps and inconsistent with the api/rx and api/promise APIs. Future work will include derives like was included in api-observable into the base.")]),e._v(" "),a("p",[e._v("Tuples now return single types when only one type is available, i.e. "),a("code",[e._v("(AccountId)")]),e._v(" would now resolve as "),a("code",[e._v("AccountId")]),e._v(". The extra type wrapper adds no benefit to users here.")]),e._v(" "),a("h1",{attrs:{id:"_0-36-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-36-1"}},[e._v("#")]),e._v(" 0.36.1")]),e._v(" "),a("p",[e._v("Api Promise has been updated in the way we deal with subscriptions. Previously a subscription returned "),a("code",[e._v("Promise<number>")]),e._v(" where the caller was to keep track of the id and use it in subsequent unsubscribes. Now any subscriptions return an unsubscribe/destroy function "),a("code",[e._v("(): void")]),e._v(", that is use for removing the subscriptions, e.g.")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" unsubscribe "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("balance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("freeBalance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Alice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("balance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("unsubscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// here we destroy the subscription")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h1",{attrs:{id:"_0-35-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-35-1"}},[e._v("#")]),e._v(" 0.35.1")]),e._v(" "),a("p",[e._v("Swapped to new metadata structures from Substrate. If the API is not working with your node, update Substrate to latest master branch. (Or 0.9.1 for Charred Cherry). Dropped support for old metadata as found as far back as BBQ Birch.")]),e._v(" "),a("h1",{attrs:{id:"_0-34-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-34-1"}},[e._v("#")]),e._v(" 0.34.1")]),e._v(" "),a("p",[e._v("Changed the send signature (for future expansion of eg. events) to return "),a("code",[e._v("result: { status: ExtrinsicStatus }")]),e._v(" instead of "),a("code",[e._v("status: ExtrinsicStatus")]),e._v(". For most cases where only status "),a("code",[e._v("type")]),e._v(" checks are used, i.e. "),a("code",[e._v("status.type === 'Finalised'")]),e._v(" this should not be a breaking change. Deep inspection of the status object however will need to adapt.")])])}),[],!1,null,null,null);t.default=n.exports}}]);