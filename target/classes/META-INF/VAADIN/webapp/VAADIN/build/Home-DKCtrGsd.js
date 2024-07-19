import{r as b,g as lt,a as ct,b as y,i as _,T as S,e as B,c as dt,j as a,N as ht}from"./indexhtml-BWkOlxkY.js";import{A as ut,F as G,E,C as P,P as A,h as L,T as mt,d as k,K as ft,i as gt,a as R,S as Q,g as pt,D as X,t as bt,R as vt,b as _t,c as xt,e as wt,f as yt,r as K,j as w}from"./Icon-q_-sDcgl.js";function Ct(){if(console&&console.warn){for(var i=arguments.length,e=new Array(i),t=0;t<i;t++)e[t]=arguments[t];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const V={};function O(){for(var i=arguments.length,e=new Array(i),t=0;t<i;t++)e[t]=arguments[t];typeof e[0]=="string"&&V[e[0]]||(typeof e[0]=="string"&&(V[e[0]]=new Date),Ct(...e))}const Y=(i,e)=>()=>{if(i.isInitialized)e();else{const t=()=>{setTimeout(()=>{i.off("initialized",t)},0),e()};i.on("initialized",t)}};function q(i,e,t){i.loadNamespaces(e,Y(i,t))}function U(i,e,t,o){typeof t=="string"&&(t=[t]),t.forEach(r=>{i.options.ns.indexOf(r)<0&&i.options.ns.push(r)}),i.loadLanguages(e,Y(i,o))}function Nt(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=e.languages[0],r=e.options?e.options.fallbackLng:!1,s=e.languages[e.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const n=(l,h)=>{const c=e.services.backendConnector.state[`${l}|${h}`];return c===-1||c===2};return t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!n(e.isLanguageChangingTo,i)?!1:!!(e.hasResourceBundle(o,i)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||n(o,i)&&(!r||n(s,i)))}function jt(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(O("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(i,{lng:t.lng,precheck:(r,s)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!s(r.isLanguageChangingTo,i))return!1}}):Nt(i,e,t)}const It=b.createContext();class kt{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(t=>{this.usedNamespaces[t]||(this.usedNamespaces[t]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Tt=(i,e)=>{const t=b.useRef();return b.useEffect(()=>{t.current=e?t.current:i},[i,e]),t.current};function J(i,e,t,o){return i.getFixedT(e,t,o)}function St(i,e,t,o){return b.useCallback(J(i,e,t,o),[i,e,t,o])}function Et(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:t}=e,{i18n:o,defaultNS:r}=b.useContext(It)||{},s=t||o||ct();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new kt),!s){O("You will need to pass in an i18next instance by using initReactI18next");const m=(p,f)=>typeof f=="string"?f:f&&typeof f=="object"&&typeof f.defaultValue=="string"?f.defaultValue:Array.isArray(p)?p[p.length-1]:p,g=[m,{},!1];return g.t=m,g.i18n={},g.ready=!1,g}s.options.react&&s.options.react.wait!==void 0&&O("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const n={...lt(),...s.options.react,...e},{useSuspense:l,keyPrefix:h}=n;let c=i||r||s.options&&s.options.defaultNS;c=typeof c=="string"?[c]:c||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(c);const d=(s.isInitialized||s.initializedStoreOnce)&&c.every(m=>jt(m,s,n)),nt=St(s,e.lng||null,n.nsMode==="fallback"?c:c[0],h),W=()=>nt,T=()=>J(s,e.lng||null,n.nsMode==="fallback"?c:c[0],h),[D,C]=b.useState(W);let N=c.join();e.lng&&(N=`${e.lng}${N}`);const H=Tt(N),v=b.useRef(!0);b.useEffect(()=>{const{bindI18n:m,bindI18nStore:g}=n;v.current=!0,!d&&!l&&(e.lng?U(s,e.lng,c,()=>{v.current&&C(T)}):q(s,c,()=>{v.current&&C(T)})),d&&H&&H!==N&&v.current&&C(T);function p(){v.current&&C(T)}return m&&s&&s.on(m,p),g&&s&&s.store.on(g,p),()=>{v.current=!1,m&&s&&m.split(" ").forEach(f=>s.off(f,p)),g&&s&&g.split(" ").forEach(f=>s.store.off(f,p))}},[s,N]),b.useEffect(()=>{v.current&&d&&C(W)},[s,h,d]);const j=[D,s,d];if(j.t=D,j.i18n=s,j.ready=d,d||!d&&!l)return j;throw new Promise(m=>{e.lng?U(s,e.lng,c,()=>m()):q(s,c,()=>m())})}y("vaadin-tab",_`
    :host {
      box-sizing: border-box;
      padding: 0.5rem 0.75rem;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-xs);
      font-weight: 500;
      opacity: 1;
      color: var(--lumo-secondary-text-color);
      transition: 0.15s color, 0.2s transform;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      position: relative;
      cursor: var(--lumo-clickable-cursor);
      transform-origin: 50% 100%;
      outline: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow: hidden;
      min-width: var(--lumo-size-m);
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
      --_selection-color-text: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
    }

    :host(:not([orientation='vertical'])) {
      text-align: center;
    }

    :host([orientation='vertical']) {
      transform-origin: 0% 50%;
      padding: 0.25rem 1rem;
      min-height: var(--lumo-size-m);
      min-width: 0;
    }

    @media (forced-colors: active) {
      :host([focused]) {
        outline: 1px solid;
        outline-offset: -1px;
      }

      :host([orientation='vertical'][selected]) {
        border-bottom: none;
        border-left: 2px solid;
      }
    }

    :host(:hover),
    :host([focus-ring]) {
      color: var(--lumo-body-text-color);
    }

    :host([selected]) {
      color: var(--_selection-color-text);
      transition: 0.6s color;
    }

    :host([active]:not([selected])) {
      color: var(--_selection-color-text);
      transition-duration: 0.1s;
    }

    :host::before,
    :host::after {
      content: '';
      position: absolute;
      display: var(--_lumo-tab-marker-display, block);
      bottom: 0;
      left: 50%;
      width: var(--lumo-size-s);
      height: 2px;
      background-color: var(--lumo-contrast-60pct);
      border-radius: var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0 0;
      transform: translateX(-50%) scale(0);
      transform-origin: 50% 100%;
      transition: 0.14s transform cubic-bezier(0.12, 0.32, 0.54, 1);
      will-change: transform;
    }

    :host([selected])::before,
    :host([selected])::after {
      background-color: var(--_selection-color);
    }

    :host([orientation='vertical'])::before,
    :host([orientation='vertical'])::after {
      left: 0;
      bottom: 50%;
      transform: translateY(50%) scale(0);
      width: 2px;
      height: var(--lumo-size-xs);
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      transform-origin: 100% 50%;
    }

    :host::after {
      box-shadow: 0 0 0 4px var(--_selection-color);
      opacity: 0.15;
      transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
    }

    :host([selected])::before,
    :host([selected])::after {
      transform: translateX(-50%) scale(1);
      transition-timing-function: cubic-bezier(0.12, 0.32, 0.54, 1.5);
    }

    :host([orientation='vertical'][selected])::before,
    :host([orientation='vertical'][selected])::after {
      transform: translateY(50%) scale(1);
    }

    :host([selected]:not([active]))::after {
      opacity: 0;
    }

    :host(:not([orientation='vertical'])) ::slotted(a[href]) {
      justify-content: center;
    }

    :host ::slotted(a) {
      display: flex;
      width: 100%;
      align-items: center;
      height: 100%;
      margin: -0.5rem -0.75rem;
      padding: 0.5rem 0.75rem;
      outline: none;

      /*
          Override the CSS inherited from \`lumo-color\` and \`lumo-typography\`.
          Note: \`!important\` is needed because of the \`:slotted\` specificity.
        */
      text-decoration: none !important;
      color: inherit !important;
    }

    :host ::slotted(vaadin-icon) {
      margin: 0 4px;
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    :host ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25rem;
      box-sizing: border-box !important;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:first-child) {
      margin-left: 0;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:last-child) {
      margin-right: 0;
    }

    :host([theme~='icon-on-top']) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      padding-bottom: 0.5rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(a) {
      flex-direction: column;
      align-items: center;
      margin-top: -0.25rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(vaadin-icon) {
      margin: 0;
    }

    /* Disabled */

    :host([disabled]) {
      pointer-events: none;
      opacity: 1;
      color: var(--lumo-disabled-text-color);
    }

    /* Focus-ring */

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
      border-radius: var(--lumo-border-radius-m);
    }

    /* RTL specific styles */

    :host([dir='rtl'])::before,
    :host([dir='rtl'])::after {
      left: auto;
      right: 50%;
      transform: translateX(50%) scale(0);
    }

    :host([dir='rtl'][selected]:not([orientation='vertical']))::before,
    :host([dir='rtl'][selected]:not([orientation='vertical']))::after {
      transform: translateX(50%) scale(1);
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:first-child) {
      margin-right: 0;
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:last-child) {
      margin-left: 0;
    }

    :host([orientation='vertical'][dir='rtl']) {
      transform-origin: 100% 50%;
    }

    :host([dir='rtl'][orientation='vertical'])::before,
    :host([dir='rtl'][orientation='vertical'])::after {
      left: auto;
      right: 0;
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      transform-origin: 0% 50%;
    }
  `,{moduleId:"lumo-tab"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const At=i=>class extends ut(G(i)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(t){this._value=t}ready(){super.ready();const t=this.getAttribute("value");t!==null&&(this.value=t)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(t){return!this.disabled&&!(t.type==="keydown"&&t.defaultPrevented)}_selectedChanged(t){this.setAttribute("aria-selected",t)}_disabledChanged(t){super._disabledChanged(t),t&&(this.selected=!1,this.blur())}_onKeyDown(t){super._onKeyDown(t),this._activeKeys.includes(t.key)&&!t.defaultPrevented&&(t.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lt=i=>class extends At(i){ready(){super.ready(),this.setAttribute("role","tab")}_onKeyUp(t){const o=this.hasAttribute("active");if(super._onKeyUp(t),o){const r=this.querySelector("a");r&&r.click()}}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zt=_`
  :host {
    display: block;
  }

  :host([hidden]) {
    display: none !important;
  }

  @media (forced-colors: active) {
    :host([focused]) {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([selected]) {
      border-bottom: 2px solid;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-tab",zt,{moduleId:"vaadin-tab-styles"});class Z extends E(S(Lt(P(A)))){static get template(){return L`
      <slot></slot>
      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-tab"}ready(){super.ready(),this._tooltipController=new mt(this),this.addController(this._tooltipController)}}k(Z);y("vaadin-tabs",_`
    :host {
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([orientation='vertical'])) {
      box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
      position: relative;
      min-height: var(--lumo-size-l);
    }

    :host([orientation='horizontal']) [part='tabs'] ::slotted(vaadin-tab:not([theme~='icon-on-top'])) {
      justify-content: center;
    }

    :host([orientation='vertical']) {
      box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([orientation='horizontal']) [part='tabs'] {
      margin: 0 0.75rem;
    }

    :host([orientation='vertical']) [part='tabs'] {
      width: 100%;
      margin: 0.5rem 0;
    }

    [part='forward-button'],
    [part='back-button'] {
      position: absolute;
      z-index: 1;
      font-family: lumo-icons;
      color: var(--lumo-tertiary-text-color);
      font-size: var(--lumo-icon-size-m);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5em;
      height: 100%;
      transition: 0.2s opacity;
      top: 0;
    }

    [part='forward-button']:hover,
    [part='back-button']:hover {
      color: inherit;
    }

    :host(:not([dir='rtl'])) [part='forward-button'] {
      right: 0;
    }

    [part='forward-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    [part='back-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    /* Tabs overflow */

    [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: none;
      -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
      mask-image: var(--_lumo-tabs-overflow-mask-image);
    }

    /* Horizontal tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
    }

    /* Vertical tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
    }

    /* End overflowing */
    :host([overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
    }

    /* Start overflowing */
    :host([overflow~='start'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
    }

    :host [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: var(--lumo-space-m);
    }

    /* Centered */

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:first-of-type) {
      margin-inline-start: auto;
    }

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:last-of-type) {
      margin-inline-end: auto;
    }

    /* Small */

    :host([theme~='small']),
    :host([theme~='small']) [part='tabs'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='small']) [part='tabs'] ::slotted(vaadin-tab) {
      font-size: var(--lumo-font-size-s);
    }

    /* Minimal */

    :host([theme~='minimal']) {
      box-shadow: none;
      --_lumo-tab-marker-display: none;
    }

    /* Hide-scroll-buttons */

    :host([theme~='hide-scroll-buttons']) [part='back-button'],
    :host([theme~='hide-scroll-buttons']) [part='forward-button'] {
      display: none;
    }

    /* prettier-ignore */
    :host([theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
    }

    /* Equal-width tabs */
    :host([theme~='equal-width-tabs']) {
      flex: auto;
    }

    :host([theme~='equal-width-tabs']) [part='tabs'] ::slotted(vaadin-tab) {
      flex: 1 0 0%;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='forward-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    :host([dir='rtl']) [part='back-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    :host([orientation='vertical'][dir='rtl']) {
      box-shadow: 1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']) [part='forward-button'] {
      left: 0;
    }

    :host([dir='rtl']) [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: 0;
      margin-right: var(--lumo-space-m);
    }

    /* Both ends overflowing */
    :host([dir='rtl'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([dir='rtl'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([dir='rtl'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical']))
      [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em);
    }
  `,{moduleId:"lumo-tabs"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let M=!1,Rt=[],tt=[];function Ot(){M=!0,requestAnimationFrame(function(){M=!1,Mt(Rt),setTimeout(function(){Bt(tt)})})}function Mt(i){for(;i.length;)et(i.shift())}function Bt(i){for(let e=0,t=i.length;e<t;e++)et(i.shift())}function et(i){const e=i[0],t=i[1],o=i[2];try{t.apply(e,o)}catch(r){setTimeout(()=>{throw r})}}function Pt(i,e,t){M||Ot(),tt.push([i,e,t])}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ot(i,e){const{scrollLeft:t}=i;return e!=="rtl"?t:i.scrollWidth-i.clientWidth+t}function Kt(i,e,t){e!=="rtl"?i.scrollLeft=t:i.scrollLeft=i.clientWidth-i.scrollWidth+t}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ft=i=>class extends ft(i){get focused(){return(this._getItems()||[]).find(gt)}get _vertical(){return!0}focus(){const t=this._getItems();if(Array.isArray(t)){const o=this._getAvailableIndex(t,0,null,r=>!R(r));o>=0&&this._focus(o)}}_getItems(){return Array.from(this.children)}_onKeyDown(t){if(super._onKeyDown(t),t.metaKey||t.ctrlKey)return;const{key:o}=t,r=this._getItems()||[],s=r.indexOf(this.focused);let n,l;const c=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKey(o)?(l=-c,n=s-c):this.__isNextKey(o)?(l=c,n=s+c):o==="Home"?(l=1,n=0):o==="End"&&(l=-1,n=r.length-1),n=this._getAvailableIndex(r,n,l,d=>!R(d)),n>=0&&(t.preventDefault(),this._focus(n,!0))}__isPrevKey(t){return this._vertical?t==="ArrowUp":t==="ArrowLeft"}__isNextKey(t){return this._vertical?t==="ArrowDown":t==="ArrowRight"}_focus(t,o=!1){const r=this._getItems();this._focusItem(r[t],o)}_focusItem(t){t&&(t.focus(),t.setAttribute("focus-ring",""))}_getAvailableIndex(t,o,r,s){const n=t.length;let l=o;for(let h=0;typeof l=="number"&&h<n;h+=1,l+=r||1){l<0?l=n-1:l>=n&&(l=0);const c=t[l];if(!c.hasAttribute("disabled")&&this.__isMatchingItem(c,s))return l}return-1}__isMatchingItem(t,o){return typeof o=="function"?o(t):!0}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wt=i=>class extends Ft(i){static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}get _vertical(){return this.orientation!=="horizontal"}focus(){this._observer&&this._observer.flush();const t=Array.isArray(this.items)?this.items:[],o=this._getAvailableIndex(t,0,null,r=>r.tabIndex===0&&!R(r));o>=0?this._focus(o):super.focus()}ready(){super.ready(),this.addEventListener("click",o=>this._onClick(o));const t=this.shadowRoot.querySelector("slot:not([name])");this._observer=new Q(t,()=>{this._setItems(this._filterItems(pt(this)))})}_getItems(){return this.items}_enhanceItems(t,o,r,s){if(!s&&t){this.setAttribute("aria-orientation",o||"vertical"),t.forEach(l=>{o?l.setAttribute("orientation",o):l.removeAttribute("orientation")}),this._setFocusable(r||0);const n=t[r];t.forEach(l=>{l.selected=l===n}),n&&!n.disabled&&this._scrollToItem(r)}}_filterItems(t){return t.filter(o=>o._hasVaadinItemMixin)}_onClick(t){if(t.metaKey||t.shiftKey||t.ctrlKey||t.defaultPrevented)return;const o=this._filterItems(t.composedPath())[0];let r;o&&!o.disabled&&(r=this.items.indexOf(o))>=0&&(this.selected=r)}_searchKey(t,o){this._searchReset=X.debounce(this._searchReset,bt.after(500),()=>{this._searchBuf=""}),this._searchBuf+=o.toLowerCase(),this.items.some(s=>this.__isMatchingKey(s))||(this._searchBuf=o.toLowerCase());const r=this._searchBuf.length===1?t+1:t;return this._getAvailableIndex(this.items,r,1,s=>this.__isMatchingKey(s)&&getComputedStyle(s).display!=="none")}__isMatchingKey(t){return t.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}_onKeyDown(t){if(t.metaKey||t.ctrlKey)return;const o=t.key,r=this.items.indexOf(this.focused);if(/[\p{L}\p{Nd}]/u.test(o)&&o.length===1){const s=this._searchKey(r,o);s>=0&&this._focus(s);return}super._onKeyDown(t)}_isItemHidden(t){return getComputedStyle(t).display==="none"}_setFocusable(t){t=this._getAvailableIndex(this.items,t,1);const o=this.items[t];this.items.forEach(r=>{r.tabIndex=r===o?0:-1})}_focus(t){this.items.forEach((o,r)=>{o.focused=r===t}),this._setFocusable(t),this._scrollToItem(t),super._focus(t)}_scrollToItem(t){const o=this.items[t];if(!o)return;const r=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],s=this._scrollerElement.getBoundingClientRect(),n=(this.items[t+1]||o).getBoundingClientRect(),l=(this.items[t-1]||o).getBoundingClientRect();let h=0;!this._isRTL&&n[r[1]]>=s[r[1]]||this._isRTL&&n[r[1]]<=s[r[1]]?h=n[r[1]]-s[r[1]]:(!this._isRTL&&l[r[0]]<=s[r[0]]||this._isRTL&&l[r[0]]>=s[r[0]])&&(h=l[r[0]]-s[r[0]]),this._scroll(h)}_scroll(t){if(this._vertical)this._scrollerElement.scrollTop+=t;else{const o=this.getAttribute("dir")||"ltr",r=ot(this._scrollerElement,o)+t;Kt(this._scrollerElement,o,r)}}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dt=i=>class extends vt(Wt(i)){static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["__tabsItemsChanged(items)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return!this._vertical&&this.__isRTL?1:-1}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),Pt(this,()=>{this._updateOverflow()})}_onResize(){this._updateOverflow()}__tabsItemsChanged(t){this.__itemsResizeObserver.disconnect(),(t||[]).forEach(o=>{this.__itemsResizeObserver.observe(o)}),this._updateOverflow()}_scrollForward(){const t=this._getNavigationButtonVisibleWidth("forward-button"),o=this._getNavigationButtonVisibleWidth("back-button"),r=this._scrollerElement.getBoundingClientRect(),n=[...this.items].reverse().find(d=>this._isItemVisible(d,t,o,r)).getBoundingClientRect(),h=20+this.shadowRoot.querySelector('[part="back-button"]').clientWidth;let c;if(this.__isRTL){const d=r.right-h;c=n.right-d}else{const d=r.left+h;c=n.left-d}-this.__direction*c<1&&(c=-this.__direction*(this._scrollOffset-h)),this._scroll(c)}_scrollBack(){const t=this._getNavigationButtonVisibleWidth("forward-button"),o=this._getNavigationButtonVisibleWidth("back-button"),r=this._scrollerElement.getBoundingClientRect(),n=this.items.find(d=>this._isItemVisible(d,t,o,r)).getBoundingClientRect(),h=20+this.shadowRoot.querySelector('[part="forward-button"]').clientWidth;let c;if(this.__isRTL){const d=r.left+h;c=n.left-d}else{const d=r.right-h;c=n.right-d}this.__direction*c<1&&(c=this.__direction*(this._scrollOffset-h)),this._scroll(c)}_isItemVisible(t,o,r,s){if(this._vertical)throw new Error("Visibility check is only supported for horizontal tabs.");const n=this.__isRTL?r:o,l=this.__isRTL?o:r,h=s.right-n,c=s.left+l,d=t.getBoundingClientRect();return h>Math.floor(d.left)&&c<Math.ceil(d.right)}_getNavigationButtonVisibleWidth(t){const o=this.shadowRoot.querySelector(`[part="${t}"]`);return window.getComputedStyle(o).opacity==="0"?0:o.clientWidth}_updateOverflow(){const t=this._vertical?this._scrollerElement.scrollTop:ot(this._scrollerElement,this.getAttribute("dir")),o=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let r=Math.floor(t)>1?"start":"";Math.ceil(t)<Math.ceil(o-this._scrollOffset)&&(r+=" end"),this.__direction===1&&(r=r.replace(/start|end/giu,s=>s==="start"?"end":"start")),r?this.setAttribute("overflow",r.trim()):this.removeAttribute("overflow")}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ht=_`
  :host {
    display: flex;
    align-items: center;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([orientation='vertical']) {
    display: block;
  }

  :host([orientation='horizontal']) [part='tabs'] {
    flex-grow: 1;
    display: flex;
    align-self: stretch;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
  @-moz-document url-prefix() {
    :host([orientation='horizontal']) [part='tabs'] {
      overflow: hidden;
    }
  }

  :host([orientation='horizontal']) [part='tabs']::-webkit-scrollbar {
    display: none;
  }

  :host([orientation='vertical']) [part='tabs'] {
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  [part='back-button'],
  [part='forward-button'] {
    pointer-events: none;
    opacity: 0;
    cursor: default;
  }

  :host([overflow~='start']) [part='back-button'],
  :host([overflow~='end']) [part='forward-button'] {
    pointer-events: auto;
    opacity: 1;
  }

  [part='back-button']::after {
    content: '\\25C0';
  }

  [part='forward-button']::after {
    content: '\\25B6';
  }

  :host([orientation='vertical']) [part='back-button'],
  :host([orientation='vertical']) [part='forward-button'] {
    display: none;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='back-button']::after {
    content: '\\25B6';
  }

  :host([dir='rtl']) [part='forward-button']::after {
    content: '\\25C0';
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-tabs",Ht,{moduleId:"vaadin-tabs-styles"});class F extends Dt(E(S(A))){static get template(){return L`
      <div on-click="_scrollBack" part="back-button" aria-hidden="true"></div>

      <div id="scroll" part="tabs">
        <slot></slot>
      </div>

      <div on-click="_scrollForward" part="forward-button" aria-hidden="true"></div>
    `}static get is(){return"vaadin-tabs"}}k(F);const Vt=_`
  :host {
    outline: none;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
  }

  :host([focus-ring]) {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* Show dividers when content overflows */

  :host([theme~='overflow-indicators'])::before,
  :host([theme~='overflow-indicators'])::after {
    content: '';
    display: none;
    position: sticky;
    inset: 0;
    z-index: 9999;
    height: 1px;
    margin-bottom: -1px;
    background: var(--lumo-contrast-10pct);
  }

  :host([theme~='overflow-indicators'])::after {
    margin-bottom: 0;
    margin-top: -1px;
  }

  :host([theme~='overflow-indicators'][overflow~='top'])::before,
  :host([theme~='overflow-indicators'][overflow~='bottom'])::after {
    display: block;
  }
`;y("vaadin-scroller",Vt,{moduleId:"lumo-scroller"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class st{constructor(e,t){this.host=e,this.scrollTarget=t||e,this.__boundOnScroll=this.__onScroll.bind(this)}hostConnected(){this.initialized||(this.initialized=!0,this.observe())}observe(){const{host:e}=this;this.__resizeObserver=new ResizeObserver(t=>{this.__debounceOverflow=X.debounce(this.__debounceOverflow,_t,()=>{this.__updateOverflow()})}),this.__resizeObserver.observe(e),[...e.children].forEach(t=>{this.__resizeObserver.observe(t)}),this.__childObserver=new MutationObserver(t=>{t.forEach(({addedNodes:o,removedNodes:r})=>{o.forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.observe(s)}),r.forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.unobserve(s)})}),this.__updateOverflow()}),this.__childObserver.observe(e,{childList:!0}),this.scrollTarget.addEventListener("scroll",this.__boundOnScroll),this.__updateOverflow()}__onScroll(){this.__updateOverflow()}__updateOverflow(){const e=this.scrollTarget;let t="";e.scrollTop>0&&(t+=" top"),Math.ceil(e.scrollTop)<Math.ceil(e.scrollHeight-e.clientHeight)&&(t+=" bottom");const o=Math.abs(e.scrollLeft);o>0&&(t+=" start"),Math.ceil(o)<Math.ceil(e.scrollWidth-e.clientWidth)&&(t+=" end"),t=t.trim(),t.length>0&&this.host.getAttribute("overflow")!==t?this.host.setAttribute("overflow",t):t.length===0&&this.host.hasAttribute("overflow")&&this.host.removeAttribute("overflow")}}/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class rt extends G(E(P(S(A)))){static get template(){return L`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: block;
          overflow: auto;
        }

        :host([scroll-direction='vertical']) {
          overflow-x: hidden;
        }

        :host([scroll-direction='horizontal']) {
          overflow-y: hidden;
        }

        :host([scroll-direction='none']) {
          overflow: hidden;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-scroller"}static get properties(){return{scrollDirection:{type:String,reflectToAttribute:!0},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}ready(){super.ready(),this.__overflowController=new st(this),this.addController(this.__overflowController)}_shouldSetFocus(e){return e.target===this}}k(rt);/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qt=_`
  [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-10pct) var(--lumo-primary-color-10pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    pointer-events: none;
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }

  :host([loading]) [part~='loader'] {
    animation: 1s linear infinite lumo-loader-rotate, 0.3s 0.1s lumo-loader-fade-in both;
  }

  @keyframes lumo-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`,Ut=_`
  :host {
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    font-family: var(--lumo-font-family);
  }

  :host([theme~='bordered']) {
    border: 1px solid var(--lumo-contrast-20pct);
    border-radius: var(--lumo-border-radius-l);
  }

  [part='tabs-container'] {
    box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
    padding: var(--lumo-space-xs) var(--lumo-space-s);
    gap: var(--lumo-space-s);
  }

  ::slotted([slot='tabs']) {
    box-shadow: initial;
    margin: calc(var(--lumo-space-xs) * -1) calc(var(--lumo-space-s) * -1);
  }

  [part='content'] {
    padding: var(--lumo-space-s) var(--lumo-space-m);
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  :host([loading]) [part='content'] {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;y("vaadin-tabsheet",[Ut,qt],{moduleId:"lumo-tabsheet"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $t extends rt{static get is(){return"vaadin-tabsheet-scroller"}}k($t);/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Gt extends yt{constructor(e){super(e,"tabs"),this.__tabsItemsChangedListener=this.__tabsItemsChangedListener.bind(this),this.__tabsSelectedChangedListener=this.__tabsSelectedChangedListener.bind(this),this.__tabIdObserver=new MutationObserver(t=>{t.forEach(o=>{const r=o.target;e.__linkTabAndPanel(r),r.selected&&e.__togglePanels(r)})})}__tabsItemsChangedListener(){this.__tabIdObserver.disconnect();const e=this.tabs.items||[];e.forEach(t=>{this.__tabIdObserver.observe(t,{attributeFilter:["id"]})}),this.host._setItems(e)}__tabsSelectedChangedListener(){this.host.selected=this.tabs.selected}initCustomNode(e){if(!(e instanceof F))throw Error('The "tabs" slot of a <vaadin-tabsheet> must only contain a <vaadin-tabs> element!');this.tabs=e,e.addEventListener("items-changed",this.__tabsItemsChangedListener),e.addEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=e,this.host.stateTarget=e,this.__tabsItemsChangedListener()}teardownNode(e){this.tabs=null,e.removeEventListener("items-changed",this.__tabsItemsChangedListener),e.removeEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=null,this.host._setItems([]),this.host.stateTarget=void 0}}class it extends P(xt(E(S(A)))){static get template(){return L`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: flex;
          flex-direction: column;
        }

        [part='tabs-container'] {
          position: relative;
          display: flex;
          align-items: center;
        }

        ::slotted([slot='tabs']) {
          flex: 1;
          align-self: stretch;
          min-width: 8em;
        }

        [part='content'] {
          position: relative;
          flex: 1;
          box-sizing: border-box;
        }
      </style>

      <div part="tabs-container">
        <slot name="prefix"></slot>
        <slot name="tabs"></slot>
        <slot name="suffix"></slot>
      </div>

      <vaadin-tabsheet-scroller part="content">
        <div part="loader"></div>
        <slot id="panel-slot"></slot>
      </vaadin-tabsheet-scroller>
    `}static get is(){return"vaadin-tabsheet"}static get properties(){return{items:{type:Array,readOnly:!0,notify:!0},selected:{value:0,type:Number,notify:!0},__tabs:{type:Object},__panels:{type:Array}}}static get observers(){return["__itemsOrPanelsChanged(items, __panels)","__selectedTabItemChanged(selected, items, __panels)"]}static get delegateProps(){return["selected"]}static get delegateAttrs(){return["theme"]}ready(){super.ready(),this.__overflowController=new st(this,this.shadowRoot.querySelector('[part="content"]')),this.addController(this.__overflowController),this._tabsSlotController=new Gt(this),this.addController(this._tabsSlotController);const e=this.shadowRoot.querySelector("#panel-slot");this.__panelsObserver=new Q(e,()=>{this.__panels=Array.from(e.assignedNodes({flatten:!0})).filter(t=>t.nodeType===Node.ELEMENT_NODE)})}__itemsOrPanelsChanged(e,t){!e||!t||e.forEach(o=>{this.__linkTabAndPanel(o,t)})}__selectedTabItemChanged(e,t,o){!t||!o||e===void 0||this.__togglePanels(t[e],o)}__togglePanels(e,t=this.__panels){const o=e?e.id:"",r=t.find(l=>l.getAttribute("tab")===o),s=this.shadowRoot.querySelector('[part="content"]');this.toggleAttribute("loading",!r);const n=t.filter(l=>!l.hidden).length===1;r?s.style.minHeight="":n&&(s.style.minHeight=`${s.offsetHeight}px`),t.forEach(l=>{l.hidden=l!==r})}__linkTabAndPanel(e,t=this.__panels){const o=t.find(r=>r.getAttribute("tab")===e.id);o&&(o.role="tabpanel",o.id||(o.id=`tabsheet-panel-${wt()}`),o.setAttribute("aria-labelledby",e.id),e.setAttribute("aria-controls",o.id))}}k(it);var Qt={onItemsChanged:"items-changed",onSelectedChanged:"selected-changed"},Xt=K({elementClass:it,events:Qt,react:B,tagName:"vaadin-tabsheet"}),Yt={onSelectedChanged:"selected-changed",onItemsChanged:"items-changed"},Jt=K({elementClass:F,events:Yt,react:B,tagName:"vaadin-tabs"}),Zt={},z=K({elementClass:Z,events:Zt,react:B,tagName:"vaadin-tab"}),at={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(i){(function(){var e={}.hasOwnProperty;function t(){for(var s="",n=0;n<arguments.length;n++){var l=arguments[n];l&&(s=r(s,o(l)))}return s}function o(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return t.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var n="";for(var l in s)e.call(s,l)&&s[l]&&(n=r(n,l));return n}function r(s,n){return n?s?s+" "+n:s+n:s}i.exports?(t.default=t,i.exports=t):window.classNames=t})()})(at);var te=at.exports;const I=dt(te);function u({title:i,text:e,icon:t="vaadin:check-circle-o",isBorder:o=!1,isAnimate:r=!1,isCenter:s=!1,isInline:n=!1}){return n?a.jsxs("div",{className:I({"p-6 bg-white":!0,"border border-gray-200 rounded-lg":o,"text-center":s}),children:[a.jsxs("a",{href:"#",className:"flex gap-3 items-center",children:[a.jsx(w,{className:I({"text-xl text-yellow-500":!0,"animate-bounce":r}),icon:t}),a.jsx("p",{className:"my-2 text-2xl font-semibold tracking-tight",children:i})]}),a.jsx("p",{className:"font-normal text-justify",children:e})]}):a.jsxs("div",{className:I({"p-6 bg-white":!0,"border border-gray-200 rounded-lg":o,"text-center":s}),children:[a.jsx(w,{className:I({"text-xl text-yellow-500":!0,"animate-bounce":r}),icon:t}),a.jsx("a",{href:"#",children:a.jsx("p",{className:"my-2 text-2xl font-semibold tracking-tight",children:i})}),a.jsx("p",{className:"font-normal text-justify",children:e})]})}function $({title:i,children:e}){return a.jsxs("div",{children:[a.jsx("p",{className:"mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white",children:i}),a.jsx("ul",{className:"text-white font-medium",children:e})]})}function x({title:i,isTopMargin:e=!0}){return a.jsx("li",{className:I({"mb-2":e}),children:a.jsx("a",{href:"#",className:"hover:underline",children:i})})}function ee(){return a.jsx("footer",{className:"bg-yellow-500",children:a.jsx("div",{className:"mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8",children:a.jsxs("div",{className:"md:flex md:justify-between",children:[a.jsx("div",{className:"mb-6 md:mb-0",children:a.jsx("a",{href:"#",className:"flex items-center",children:a.jsx("span",{className:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white",children:"eiduca"})})}),a.jsxs("div",{className:"grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3",children:[a.jsx("div",{children:a.jsxs($,{title:"Rede social",children:[a.jsx(x,{title:"Facebook"}),a.jsx(x,{title:"GitHub"}),a.jsx(x,{title:"Discord"})]})}),a.jsx("div",{children:a.jsxs($,{title:"Legislação",children:[a.jsx(x,{title:"Política de privacidade"}),a.jsx(x,{title:"Termos de uso"}),a.jsx(x,{title:"licença"})]})})]})]})})})}const oe=""+new URL("school_graduation_icon-D9k77mZO.png",import.meta.url).href;function de(){const{t:i,i18n:e}=Et();return a.jsxs(Xt,{children:[a.jsxs(Jt,{slot:"tabs",theme:"equal-width-tabs",children:[a.jsxs(z,{id:"dashboard-tab",children:[a.jsx(w,{icon:"vaadin:home"}),a.jsx("span",{children:i("home-page")})]}),a.jsxs(z,{id:"payment-tab",children:[a.jsx(w,{icon:"vaadin:money"}),a.jsx("span",{children:i("price")})]}),a.jsxs(z,{id:"shipping-tab",children:[a.jsx(w,{icon:"vaadin:cog"}),a.jsx("span",{children:i("support")})]})]}),a.jsxs("div",{tab:"dashboard-tab",className:"bg-graph -mt-3 -ml-3",children:[a.jsxs("header",{className:"grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-20 mx-8",children:[a.jsxs("article",{className:"flex flex-col justify-center ml-3",children:[a.jsxs("p",{className:"text-4xl font-bold",children:["Bem-vindo ao  ",a.jsx("span",{className:"text-yellow-500",children:"eiduca"})," "]}),a.jsx("p",{className:"text-2xl font-medium my-2",children:"Plataforma para Gerenciamento Educacional"}),a.jsx("p",{className:"text-lg text-justify indent-4 my-4",children:"O eibuca é a solução definitiva para o gerenciamento de universidades, faculdades e escolas de ensino médio. Nossa plataforma oferece ferramentas e recursos para facilitar a administração acadêmica, financeira e administrativa."}),a.jsxs(ht,{to:"/login",className:"w-max text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2",children:[a.jsx(w,{icon:"vaadin:lock"}),a.jsx("span",{children:"Login"})]})]}),a.jsx("div",{className:"flex justify-center",children:a.jsx("img",{src:oe,alt:"Logo"})})]}),a.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4 mx-8",children:[a.jsx(u,{title:"Usuabilidade",text:"Facilidade de uso e experiência intuitiva para todos os usuários",icon:"vaadin:area-select",isBorder:!0,isAnimate:!0}),a.jsx(u,{title:"Segurança",text:"Proteção robusta de dados e privacidade garantida",icon:"vaadin:shield",isBorder:!0,isAnimate:!0}),a.jsx(u,{title:"Multiplataforma",text:"Compatibilidade perfeita com diversos dispositivos e sistemas operacionais",icon:"vaadin:mobile-browser",isBorder:!0,isAnimate:!0}),a.jsx(u,{title:"Distribuído",text:"Arquitetura escalável e desempenho otimizado em ambientes distribuídos",icon:"vaadin:cubes",isBorder:!0,isAnimate:!0})]}),a.jsxs("section",{className:"bg-yellow-500 p-4 mt-10 text-center ",children:[a.jsx("div",{className:"text-4xl text-white font-bold mt-5",children:"Serviços que oferecemos"}),a.jsx("div",{className:"text-2xl text-white my-10",children:"A plataforma procura oferecer o máximo de serviços necessário para gerenciar, administrar uma instituição de ensino"}),a.jsxs("div",{className:"grid gri-cols-1 gap-2 p-5 md:grid-cols-2 lg:grid-cols-3 mx-10 -mb-40 bg-white border border-yellow-500",children:[a.jsx(u,{title:"Matrícula e Admissão",text:"Simplificação do processo de inscrição e gerenciamento de matrículas de novos e atuais alunos",icon:"vaadin:user",isCenter:!0}),a.jsx(u,{title:"Gestão Acadêmica",text:"Controle de turmas, horários, currículos e registro de notas",icon:"vaadin:area-select",isCenter:!0}),a.jsx(u,{title:"Financeiro",text:"Administração de mensalidades, pagamentos, orçamentos e relatórios financeiro",icon:"vaadin:dollar",isCenter:!0}),a.jsx(u,{title:"Comunicação",text:"Facilitação da comunicação entre alunos, professores, pais e a administração através de mensagens e notificações",icon:"vaadin:chat",isCenter:!0}),a.jsx(u,{title:"Biblioteca e Recursos",text:"Gestão de recursos da biblioteca e acesso a materiais didáticos",icon:"vaadin:book",isCenter:!0}),a.jsx(u,{title:"Relatórios e Análises",text:"Geração de relatórios detalhados e análise de dados para apoiar a tomada de decisões estratégicas",icon:"vaadin:file-text",isCenter:!0})]})]}),a.jsx("section",{className:"pb-40 mt-15 bg-graph",children:a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mx-10 mt-48",children:[a.jsxs("div",{className:"mt-10 text-center grow-0 bg-resource",children:[a.jsxs("div",{className:"text-4xl font-bold",children:[a.jsx("span",{children:"Recursos"})," ",a.jsx("span",{className:"text-yellow-500",children:"disponíveis"})]}),a.jsx("div",{className:"text-xl my-5",children:"Nossa plataforma oferece os melhores recursos tecnológicos para facilitar seu trabalho, tornando-o prático e automatizado"})]}),a.jsxs("div",{className:"p-5 grid grid-cols-1 md:grid-cols-2 gap-4 grow-1",children:[a.jsx(u,{title:"API Rest",text:"Integração fácil e segura com outros sistemas através de uma API REST completa",isBorder:!0,isInline:!0}),a.jsx(u,{title:"Agendamento",text:"Gerencie e organize compromissos, eventos e tarefas com nosso sistema de agendamento",isBorder:!0,isInline:!0}),a.jsx(u,{title:"Automatização",text:"Automatize processos repetitivos e melhore a eficiência operacional com nossas ferramentas de automatização",isBorder:!0,isInline:!0}),a.jsx(u,{title:"Editor documento",text:"Criação e edição de documentos diretamente na plataforma com nosso editor integrado",isBorder:!0,isInline:!0}),a.jsx(u,{title:"Multilocatório",text:"Suporte para multitenancy, permitindo integração e conexão com vários SGBDs, facilitando a gestão de múltiplos ambientes de dados",isBorder:!0,isInline:!0}),a.jsx(u,{title:"Web Hooks",text:"Receba notificações em tempo real e automatize respostas a eventos importantes com web hooks",isBorder:!0,isInline:!0})]})]})}),a.jsx(ee,{})]}),a.jsx("div",{tab:"payment-tab",children:"This is the Payment tab content"}),a.jsx("div",{tab:"shipping-tab",children:"This is the Shipping tab content"})]})}export{de as default};
