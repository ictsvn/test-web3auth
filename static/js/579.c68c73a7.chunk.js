(self.webpackChunktest_web3auth=self.webpackChunktest_web3auth||[]).push([[579,293,297],{69122:function(t,e,n){"use strict";n.r(e),n.d(e,{PhantomAdapter:function(){return Z}});var r=n(15671),i=n(43144),a=n(97326),o=n(11752),c=n(61120),s=n(60136),u=n(27277),h=n(74165),l=n(15861),p=n(4942),d=n(37949),f=n(63823);function v(t,e,n){return new Promise((function(r,i){n>0?setTimeout((0,l.Z)((0,h.Z)().mark((function a(){var o;return(0,h.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t();case 2:(o=a.sent)&&r(o),o||v(t,e,n-1).then((function(t){return r(t),t})).catch((function(t){return i(t)}));case 5:case"end":return a.stop()}}),a)}))),e):r(!1)}))}var w=function(){var t=(0,l.Z)((0,h.Z)().mark((function t(){var e,n,r=arguments;return(0,h.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r.length>0&&void 0!==r[0]?r[0]:{interval:1e3,count:3},!("undefined"!==typeof window&&!(null===(e=window.solana)||void 0===e||!e.isPhantom))){t.next=4;break}return t.abrupt("return",window.solana);case 4:return t.next=6,v((function(){var t;return null===(t=window.solana)||void 0===t?void 0:t.isPhantom}),n.interval,n.count);case 6:if(!t.sent){t.next=9;break}return t.abrupt("return",window.solana);case 9:return t.abrupt("return",null);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Z=function(t){(0,s.Z)(n,t);var e=(0,u.Z)(n);function n(){var t;(0,r.Z)(this,n);var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=e.call(this),(0,p.Z)((0,a.Z)(t),"name",d.rW.PHANTOM),(0,p.Z)((0,a.Z)(t),"adapterNamespace",d.yk.SOLANA),(0,p.Z)((0,a.Z)(t),"currentChainNamespace",d.EN.SOLANA),(0,p.Z)((0,a.Z)(t),"type",d.hN.EXTERNAL),(0,p.Z)((0,a.Z)(t),"status",d.MP.NOT_READY),(0,p.Z)((0,a.Z)(t),"_wallet",null),(0,p.Z)((0,a.Z)(t),"phantomProvider",null),(0,p.Z)((0,a.Z)(t),"rehydrated",!1),(0,p.Z)((0,a.Z)(t),"_onDisconnect",(function(){t._wallet&&(t._wallet.off("disconnect",t._onDisconnect),t.rehydrated=!1,t.status=t.status===d.MP.CONNECTED?d.MP.READY:d.MP.NOT_READY,t.emit(d.n2.DISCONNECTED))})),t.chainConfig=i.chainConfig||null,t}return(0,i.Z)(n,[{key:"isWalletConnected",get:function(){var t;return!(null===(t=this._wallet)||void 0===t||!t.isConnected||this.status!==d.MP.CONNECTED)}},{key:"provider",get:function(){var t;return(null===(t=this.phantomProvider)||void 0===t?void 0:t.provider)||null},set:function(t){throw new Error("Not implemented")}},{key:"setAdapterSettings",value:function(t){}},{key:"init",value:function(){var t=(0,l.Z)((0,h.Z)().mark((function t(e){return(0,h.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,o.Z)((0,c.Z)(n.prototype),"checkInitializationRequirements",this).call(this),this.chainConfig||(this.chainConfig=(0,d.h2)(d.EN.SOLANA,"0x1")),t.next=4,w({interval:500,count:3});case 4:if(this._wallet=t.sent,this._wallet){t.next=7;break}throw d.Ty.notInstalled();case 7:if(this.phantomProvider=new f.PhantomInjectedProvider({config:{chainConfig:this.chainConfig}}),this.status=d.MP.READY,this.emit(d.n2.READY,d.rW.PHANTOM),t.prev=10,d.cM.debug("initializing phantom adapter"),!e.autoConnect){t.next=16;break}return this.rehydrated=!0,t.next=16,this.connect();case 16:t.next=22;break;case 18:t.prev=18,t.t0=t.catch(10),d.cM.error("Failed to connect with cached phantom provider",t.t0),this.emit("ERRORED",t.t0);case 22:case"end":return t.stop()}}),t,this,[[10,18]])})));return function(e){return t.apply(this,arguments)}}()},{key:"connect",value:function(){var t=(0,l.Z)((0,h.Z)().mark((function t(){var e,r,i=this;return(0,h.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this,t.prev=1,(0,o.Z)((0,c.Z)(n.prototype),"checkConnectionRequirements",this).call(this),this.status=d.MP.CONNECTING,this.emit(d.n2.CONNECTING,{adapter:d.rW.PHANTOM}),this._wallet){t.next=7;break}throw d.Ty.notInstalled();case 7:if(this._wallet.isConnected){t.next=24;break}return r=this._wallet._handleDisconnect,t.prev=9,t.next=12,new Promise((function(t,n){var a=function(){var e=(0,l.Z)((0,h.Z)().mark((function e(){return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.connectWithProvider(i._wallet);case 2:t(i.provider);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(!i._wallet)return n(d.Ty.notInstalled());i._wallet.once("connect",a),i._wallet._handleDisconnect=function(){n(d.Ty.windowClosed());for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return r.apply(e._wallet,i)},i._wallet.connect().catch((function(t){n(t)}))}));case 12:t.next=19;break;case 14:if(t.prev=14,t.t0=t.catch(9),!(t.t0 instanceof d.up)){t.next=18;break}throw t.t0;case 18:throw d.RM.connectionError(null===t.t0||void 0===t.t0?void 0:t.t0.message);case 19:return t.prev=19,this._wallet._handleDisconnect=r,t.finish(19);case 22:t.next=26;break;case 24:return t.next=26,this.connectWithProvider(this._wallet);case 26:if(this._wallet.publicKey){t.next=28;break}throw d.RM.connectionError();case 28:return this._wallet.on("disconnect",this._onDisconnect),t.abrupt("return",this.provider);case 32:throw t.prev=32,t.t1=t.catch(1),this.status=d.MP.READY,this.rehydrated=!1,this.emit(d.n2.ERRORED,t.t1),t.t1;case 38:case"end":return t.stop()}}),t,this,[[1,32],[9,14,19,22]])})));return function(){return t.apply(this,arguments)}}()},{key:"disconnect",value:function(){var t=(0,l.Z)((0,h.Z)().mark((function t(){var e,n,r=arguments;return(0,h.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=r.length>0&&void 0!==r[0]?r[0]:{cleanup:!1},this.isWalletConnected){t.next=3;break}throw d.RM.notConnectedError("Not connected with wallet");case 3:return t.prev=3,t.next=6,null===(n=this._wallet)||void 0===n?void 0:n.disconnect();case 6:e.cleanup&&(this.status=d.MP.NOT_READY,this.phantomProvider=null,this._wallet=null),this.emit(d.n2.DISCONNECTED),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),this.emit(d.n2.ERRORED,d.RM.disconnectionError(null===t.t0||void 0===t.t0?void 0:t.t0.message));case 13:case"end":return t.stop()}}),t,this,[[3,10]])})));return function(){return t.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var t=(0,l.Z)((0,h.Z)().mark((function t(){return(0,h.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isWalletConnected){t.next=2;break}throw d.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return t.abrupt("return",{});case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"connectWithProvider",value:function(){var t=(0,l.Z)((0,h.Z)().mark((function t(e){return(0,h.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.phantomProvider){t.next=2;break}throw d.RM.connectionError("No phantom provider");case 2:return t.next=4,this.phantomProvider.setupProvider(e);case 4:return this.status=d.MP.CONNECTED,this.emit(d.n2.CONNECTED,{adapter:d.rW.PHANTOM,reconnected:this.rehydrated}),t.abrupt("return",this.provider);case 7:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),n}(d.J5)},22399:function(){},78848:function(){}}]);
//# sourceMappingURL=579.c68c73a7.chunk.js.map