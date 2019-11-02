(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{301:function(n,t,e){"use strict";e.r(t);var a=e(0),o=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[e("router-link",{attrs:{to:"/api-derive/"}},[n._v("Polkadot JS API")]),n._v(" › "),e("router-link",{attrs:{to:"/api-derive/globals.html"}},[n._v("Globals")]),n._v(" › "),e("router-link",{attrs:{to:"/api-derive/modules/_accounts_info_.html"}},[n._v('"accounts/info"')])],1),n._v(" "),e("h1",{attrs:{id:"external-module-accounts-info"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#external-module-accounts-info"}},[n._v("#")]),n._v(' External module: "accounts/info"')]),n._v(" "),e("h2",{attrs:{id:"index"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[n._v("#")]),n._v(" Index")]),n._v(" "),e("h3",{attrs:{id:"variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[n._v("#")]),n._v(" Variables")]),n._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/api-derive/modules/_accounts_info_.html#const-info"}},[n._v("info")])],1)]),n._v(" "),e("h2",{attrs:{id:"variables-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#variables-2"}},[n._v("#")]),n._v(" Variables")]),n._v(" "),e("h3",{attrs:{id:"const-info"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#const-info"}},[n._v("#")]),n._v(" "),e("code",[n._v("Const")]),n._v(" info")]),n._v(" "),e("p",[n._v("• "),e("strong",[n._v("info")]),n._v(": "),e("em",[n._v("(Anonymous function)")]),n._v(" =  memo((api: ApiInterfaceRx): (address?: AccountIndex | AccountId | Address | string | null) => Observable"),e("DeriveAccountInfo",[n._v(" => {\nconst idAndIndexCall = idAndIndex(api);\nconst nickCall = retrieveNick(api);")])],1),n._v(" "),e("p",[n._v("return memo((address?: AccountIndex | AccountId | Address | string | null): Observable"),e("DeriveAccountInfo",[n._v(" =>\nidAndIndexCall(address).pipe(\nswitchMap(([accountId, accountIndex]): Observable<[DeriveAccountInfo, Option<[Bytes, Balance] & Codec>?]> => {\nreturn combineLatest([\nof({ accountId, accountIndex }),\nnickCall(accountId)\n]);\n}),\nmap(([{ accountId, accountIndex }, nameOf]): DeriveAccountInfo => ({\naccountId,\naccountIndex,\nnickname: nameOf && nameOf.isSome\n? u8aToString(nameOf.unwrap()[0]).substr(0, (api.consts.nicks.maxLength as u32).toNumber())\n: undefined\n})),\ndrr()\n)\n);\n}, true)")])],1),n._v(" "),e("p",[e("em",[n._v("Defined in "),e("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/7cc961f789/packages/api-derive/src/accounts/info.ts#L29",target:"_blank",rel:"noopener noreferrer"}},[n._v("accounts/info.ts:29"),e("OutboundLink")],1)])]),n._v(" "),e("p",[e("strong",[e("code",[n._v("name")])]),n._v(" info")]),n._v(" "),e("p",[e("strong",[e("code",[n._v("description")])]),n._v(" Returns aux. info with regards to an account, current that includes the accountId, accountIndex and nickname")])])}),[],!1,null,null,null);t.default=o.exports}}]);