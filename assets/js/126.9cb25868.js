(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{323:function(e,s,t){"use strict";t.r(s);var a=t(0),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("router-link",{attrs:{to:"/api-derive/"}},[e._v("Polkadot JS API")]),e._v(" › "),t("router-link",{attrs:{to:"/api-derive/globals.html"}},[e._v("Globals")]),e._v(" › "),t("router-link",{attrs:{to:"/api-derive/modules/_session_info_.html"}},[e._v('"session/info"')])],1),e._v(" "),t("h1",{attrs:{id:"external-module-session-info"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#external-module-session-info"}},[e._v("#")]),e._v(' External module: "session/info"')]),e._v(" "),t("h2",{attrs:{id:"index"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" Index")]),e._v(" "),t("h3",{attrs:{id:"variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[e._v("#")]),e._v(" Variables")]),e._v(" "),t("ul",[t("li",[t("router-link",{attrs:{to:"/api-derive/modules/_session_info_.html#const-info"}},[e._v("info")])],1)]),e._v(" "),t("h2",{attrs:{id:"variables-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variables-2"}},[e._v("#")]),e._v(" Variables")]),e._v(" "),t("h3",{attrs:{id:"const-info"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#const-info"}},[e._v("#")]),e._v(" "),t("code",[e._v("Const")]),e._v(" info")]),e._v(" "),t("p",[e._v("• "),t("strong",[e._v("info")]),e._v(": "),t("em",[e._v("(Anonymous function)")]),e._v(" =  memo((api: ApiInterfaceRx): () => Observable"),t("DerivedSessionInfo",[e._v(" => {\nconst calls = {\nbestNumberCall: bestNumber(api),\nindexesCall: indexes(api)\n};\nconst query = api.consts.staking\n? api.consts.babe\n? infoLatestBabe // 2.x with Babe\n: infoLatestAura // 2.x with Aura (not all info there)\n: infoV1;")])],1),e._v(" "),t("p",[e._v("return memo((): Observable"),t("DerivedSessionInfo",[e._v(" =>\nquery(api, calls).pipe(drr()));\n}, true)")])],1),e._v(" "),t("p",[t("em",[e._v("Defined in "),t("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/e601ae27a1/packages/api-derive/src/session/info.ts#L130",target:"_blank",rel:"noopener noreferrer"}},[e._v("session/info.ts:130"),t("OutboundLink")],1)])]),e._v(" "),t("p",[t("strong",[t("code",[e._v("description")])]),e._v(" Retrieves all the session and era info and calculates specific values on it as the length of the session and eras")])])}),[],!1,null,null,null);s.default=n.exports}}]);