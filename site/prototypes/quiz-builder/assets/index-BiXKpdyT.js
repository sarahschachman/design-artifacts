import{r as Oo,a as d,j as t,R as Do}from"./index-B5OT8iNj.js";var go=Oo(),Yo=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  cursor: default;
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,zo={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-popup-css-styles",e.textContent=Yo,document.head.appendChild(e))}var Y=zo,Xo=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,Uo={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-components-icon-transitions");e||(e=document.createElement("style"),e.id="feedback-tool-styles-components-icon-transitions",e.textContent=Xo,document.head.appendChild(e))}var A=Uo,Qo=({size:e=16})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:t.jsx("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Zo=({size:e=16})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:t.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),or=({size:e=16})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:t.jsx("path",{d:"M3 8l3.5 3.5L13 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),sr=({size:e=14})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none",children:t.jsx("path",{d:"M3.9375 7L6.125 9.1875L10.5 4.8125",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Vo=({size:e=24,style:n={}})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n,children:[t.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[t.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0_list_sparkle",children:t.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Jo=({size:e=20,...n})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",...n,children:[t.jsx("circle",{cx:"10",cy:"10",r:"6",stroke:"currentColor",strokeWidth:"1.25"}),t.jsx("path",{d:"M8.24 8.19C8.38 7.78 8.66 7.44 9.03 7.23C9.4 7.01 9.84 6.93 10.26 7C10.68 7.07 11.06 7.29 11.34 7.62C11.61 7.95 11.76 8.36 11.76 8.79152C11.76 10 10 10.6 10 10.6V10.83",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("circle",{cx:"10",cy:"13",r:"0.625",fill:"currentColor"})]}),oo=({size:e=14})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none",children:[t.jsx("style",{children:`
      @keyframes checkDraw {
        0% {
          stroke-dashoffset: 12;
        }
        100% {
          stroke-dashoffset: 0;
        }
      }
      @keyframes checkBounce {
        0% {
          transform: scale(0.5);
          opacity: 0;
        }
        50% {
          transform: scale(1.12);
          opacity: 1;
        }
        75% {
          transform: scale(0.95);
        }
        100% {
          transform: scale(1);
        }
      }
      .check-path-animated {
        stroke-dasharray: 12;
        stroke-dashoffset: 0;
        transform-origin: center;
        animation: checkDraw 0.18s ease-out, checkBounce 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
    `}),t.jsx("path",{className:"check-path-animated",d:"M3.9375 7L6.125 9.1875L10.5 4.8125",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),rr=({size:e=16})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),t.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),Ko=({size:e=24,copied:n=!1})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsxs("g",{className:`${A.iconState} ${n?A.hiddenScaled:A.visibleScaled}`,children:[t.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),t.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),t.jsxs("g",{className:`${A.iconState} ${n?A.visibleScaled:A.hiddenScaled}`,children:[t.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Go=({size:e=24,state:n="idle"})=>{const s=n==="idle",l=n==="sent",u=n==="failed",i=n==="sending";return t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsx("g",{className:`${A.iconStateFast} ${s?A.visibleScaled:i?A.sending:A.hiddenScaled}`,children:t.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),t.jsxs("g",{className:`${A.iconStateFast} ${l?A.visibleScaled:A.hiddenScaled}`,children:[t.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),t.jsxs("g",{className:`${A.iconStateFast} ${u?A.visibleScaled:A.hiddenScaled}`,children:[t.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},ar=({size:e=24,sent:n=!1})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 22 21",fill:"none",children:[t.jsxs("g",{className:`${A.iconState} ${n?A.hiddenScaled:A.visibleScaled}`,children:[t.jsx("path",{d:"M9.5 5H6.5C4.84315 5 3.5 6.34315 3.5 8V15C3.5 16.6569 4.84315 18 6.5 18H13.5C15.1569 18 16.5 16.6569 16.5 15V12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M13.5 8.5L18.5 3.5M18.5 3.5L14.4524 3.5M18.5 3.5L18.5 7.54762",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M7.5 13.75H12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M7.5 10.75H10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),t.jsxs("g",{className:`${A.iconState} ${n?A.visibleScaled:A.hiddenScaled}`,children:[t.jsx("path",{d:"M11 19C6.58172 19 3 15.4182 3 11C3 6.58172 6.58172 3 11 3C15.4182 3 19 6.58172 19 11C19 15.4182 15.4182 19 11 19Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M14 9L10 13.25L8.25 11.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),lr=({size:e=16})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsx("path",{d:"M4.91516 12.7108C4.63794 12.2883 4.63705 11.7565 4.91242 11.3328C5.84146 9.9033 8.30909 6.74994 12 6.74994C15.6909 6.74994 18.1585 9.9033 19.0876 11.3328C19.3629 11.7565 19.3621 12.2883 19.0848 12.7108C18.1537 14.13 15.6873 17.2499 12 17.2499C8.31272 17.2499 5.8463 14.13 4.91516 12.7108Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),ir=({size:e=24})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),cr=({size:e=24})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),t.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),qo=({size:e=24,isOpen:n=!0})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsxs("g",{className:`${A.iconFade} ${n?A.visible:A.hidden}`,children:[t.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),t.jsxs("g",{className:`${A.iconFade} ${n?A.hidden:A.visible}`,children:[t.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),t.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),es=({size:e=24,isPaused:n=!1})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsxs("g",{className:`${A.iconFadeFast} ${n?A.hidden:A.visible}`,children:[t.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),t.jsx("path",{className:`${A.iconFadeFast} ${n?A.visible:A.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),dr=({size:e=16})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsx("path",{d:"M4.91516 12.7108C4.63794 12.2883 4.63705 11.7565 4.91242 11.3328C5.84146 9.9033 8.30909 6.74994 12 6.74994C15.6909 6.74994 18.1585 9.9033 19.0876 11.3328C19.3629 11.7565 19.3621 12.2883 19.0848 12.7108C18.1537 14.13 15.6873 17.2499 12 17.2499C8.31272 17.2499 5.8463 14.13 4.91516 12.7108Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M9 12H15",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),ts=({size:e=16})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),_r=({size:e=16})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsx("path",{d:"M9.25 5.75C9.80228 5.75 10.25 6.19772 10.25 6.75L10.25 17.25C10.25 17.8023 9.80228 18.25 9.25 18.25L6.75 18.25C6.19772 18.25 5.75 17.8023 5.75 17.25L5.75 6.75C5.75 6.19772 6.19772 5.75 6.75 5.75L9.25 5.75Z",stroke:"currentColor",strokeWidth:"1.5"}),t.jsx("path",{d:"M17.25 5.75C17.8023 5.75 18.25 6.19772 18.25 6.75L18.25 17.25C18.25 17.8023 17.8023 18.25 17.25 18.25L14.75 18.25C14.1977 18.25 13.75 17.8023 13.75 17.25L13.75 6.75C13.75 6.19772 14.1977 5.75 14.75 5.75L17.25 5.75Z",stroke:"currentColor",strokeWidth:"1.5"})]}),ur=({size:e=24})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),mr=({size:e=16})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:t.jsx("path",{d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})}),ns=({size:e=16})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:t.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),pr=({size:e=16,style:n={}})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n,children:[t.jsx("path",{d:"M18.8875 19.25L19.6112 19.0533C19.6823 19.3148 19.6068 19.5943 19.4137 19.7844C19.2206 19.9746 18.9399 20.0457 18.6795 19.9706L18.8875 19.25ZM14.9631 18.244L15.263 18.9314L14.9631 18.244ZM18.0914 15.6309L17.4669 15.2156L18.0914 15.6309ZM4.75 11.8041H5.5C5.5 15.2664 8.39065 18.1081 12 18.1081V18.8581V19.6081C7.60123 19.6081 4 16.1334 4 11.8041H4.75ZM19.25 11.8041H18.5C18.5 8.34166 15.6094 5.5 12 5.5V4.75V4C16.3988 4 20 7.47476 20 11.8041H19.25ZM12 4.75V5.5C8.39065 5.5 5.5 8.34166 5.5 11.8041H4.75H4C4 7.47476 7.60123 4 12 4V4.75ZM18.0914 15.6309L17.4669 15.2156C18.1213 14.2315 18.5 13.0612 18.5 11.8041H19.25H20C20 13.3681 19.5276 14.8257 18.716 16.0462L18.0914 15.6309ZM18.8875 19.25L18.1638 19.4467L17.2953 16.2517L18.019 16.055L18.7428 15.8583L19.6112 19.0533L18.8875 19.25ZM12 18.8581V18.1081C12.9509 18.1081 13.8518 17.9105 14.6632 17.5565L14.9631 18.244L15.263 18.9314C14.2652 19.3667 13.1603 19.6081 12 19.6081V18.8581ZM15.3144 18.2188L15.5224 17.4982L19.0955 18.5294L18.8875 19.25L18.6795 19.9706L15.1064 18.9394L15.3144 18.2188ZM14.9631 18.244L14.6632 17.5565C14.925 17.4423 15.2286 17.4134 15.5224 17.4982L15.3144 18.2188L15.1064 18.9394C15.1677 18.957 15.223 18.9489 15.263 18.9314L14.9631 18.244ZM18.0914 15.6309L18.716 16.0462C18.7451 16.0024 18.7636 15.9351 18.7428 15.8583L18.019 16.055L17.2953 16.2517C17.1957 15.8853 17.2716 15.5093 17.4669 15.2156L18.0914 15.6309Z",fill:"currentColor"}),t.jsx("circle",{cx:"15",cy:"11.75",r:"1",fill:"currentColor"}),t.jsx("circle",{cx:"12",cy:"11.75",r:"1",fill:"currentColor"}),t.jsx("circle",{cx:"9",cy:"11.75",r:"1",fill:"currentColor"})]}),gr=({size:e=16})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsx("g",{clipPath:"url(#clip0_2_45)",children:t.jsx("path",{d:"M16.25 8.75L10 15.25L7.25 12.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0_2_45",children:t.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),hr=({size:e=16})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsx("g",{clipPath:"url(#clip0_2_37)",children:t.jsx("path",{d:"M17.5962 7.75L9.42308 16.25L6.15385 12.6538",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0_2_37",children:t.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),fr=({size:e=24})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsxs("g",{clipPath:"url(#clip0_checkmark_circle)",children:[t.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0_checkmark_circle",children:t.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),tn=({size:e=16})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[t.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0_2_53",children:t.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),os=({size:e=24})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:t.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),ss=({size:e=16})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[t.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),rs=({size:e=16})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:t.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),so=({size:e=16})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),as=({size:e=24})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),ls=({size:e=16})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),yr=({size:e=16})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M8.5 11.5L12 8L8.5 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),br=({size:e=20,color:n="#4C74FF"})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("style",{children:`
      @keyframes bunnyEnterEar {
        0% { opacity: 0; transform: scale(0.8); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes bunnyEnterFace {
        0% { opacity: 0; transform: scale(0.9); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes bunnyEnterEye {
        0% { opacity: 0; transform: scale(0.5); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes leftEyeLook {
        0%, 8% { transform: translate(0, 0); }
        10%, 18% { transform: translate(1.5px, 0); }
        20%, 22% { transform: translate(1.5px, 0) scaleY(0.1); }
        24%, 32% { transform: translate(1.5px, 0); }
        35%, 48% { transform: translate(-0.8px, -0.6px); }
        52%, 54% { transform: translate(0, 0) scaleY(0.1); }
        56%, 68% { transform: translate(0, 0); }
        72%, 82% { transform: translate(-0.5px, 0.5px); }
        85%, 100% { transform: translate(0, 0); }
      }
      @keyframes rightEyeLook {
        0%, 8% { transform: translate(0, 0); }
        10%, 18% { transform: translate(0.8px, 0); }
        20%, 22% { transform: translate(0.8px, 0) scaleY(0.1); }
        24%, 32% { transform: translate(0.8px, 0); }
        35%, 48% { transform: translate(-1.5px, -0.6px); }
        52%, 54% { transform: translate(0, 0) scaleY(0.1); }
        56%, 68% { transform: translate(0, 0); }
        72%, 82% { transform: translate(-1.2px, 0.5px); }
        85%, 100% { transform: translate(0, 0); }
      }
      @keyframes leftEarTwitch {
        0%, 9% { transform: rotate(0deg); }
        12% { transform: rotate(-8deg); }
        16%, 34% { transform: rotate(0deg); }
        38% { transform: rotate(-12deg); }
        42% { transform: rotate(-6deg); }
        48%, 100% { transform: rotate(0deg); }
      }
      @keyframes rightEarTwitch {
        0%, 9% { transform: rotate(0deg); }
        12% { transform: rotate(6deg); }
        16%, 34% { transform: rotate(0deg); }
        38% { transform: rotate(10deg); }
        42% { transform: rotate(4deg); }
        48%, 71% { transform: rotate(0deg); }
        74% { transform: rotate(8deg); }
        78%, 100% { transform: rotate(0deg); }
      }
      .bunny-eye-left {
        opacity: 0;
        animation: bunnyEnterEye 0.3s ease-out 0.35s forwards, leftEyeLook 5s ease-in-out 0.65s infinite;
        transform-origin: center;
        transform-box: fill-box;
      }
      .bunny-eye-right {
        opacity: 0;
        animation: bunnyEnterEye 0.3s ease-out 0.4s forwards, rightEyeLook 5s ease-in-out 0.7s infinite;
        transform-origin: center;
        transform-box: fill-box;
      }
      .bunny-ear-left {
        opacity: 0;
        animation: bunnyEnterEar 0.3s ease-out 0.1s forwards, leftEarTwitch 5s ease-in-out 0.4s infinite;
        transform-origin: bottom center;
        transform-box: fill-box;
      }
      .bunny-ear-right {
        opacity: 0;
        animation: bunnyEnterEar 0.3s ease-out 0.15s forwards, rightEarTwitch 5s ease-in-out 0.45s infinite;
        transform-origin: bottom center;
        transform-box: fill-box;
      }
      .bunny-face {
        opacity: 0;
        animation: bunnyEnterFace 0.3s ease-out 0.25s forwards;
        transform-origin: center;
        transform-box: fill-box;
      }
      svg:hover .bunny-eye-left,
      svg:hover .bunny-eye-right {
        opacity: 0;
        transition: opacity 0.2s ease;
      }
      .bunny-happy-face {
        opacity: 0;
        transition: opacity 0.2s ease;
      }
      svg:hover .bunny-happy-face {
        opacity: 1;
      }
    `}),t.jsx("rect",{width:"28",height:"28",fill:"transparent"}),t.jsx("path",{className:"bunny-ear-left",d:"M3.738 10.2164L7.224 2.007H9.167L5.676 10.2164H3.738ZM10.791 6.42705C10.791 5.90346 10.726 5.42764 10.596 4.99959C10.47 4.57155 10.292 4.16643 10.063 3.78425C9.833 3.39825 9.56 3.01797 9.243 2.64343C8.926 2.26507 8.767 2.07589 8.767 2.07589L10.24 0.957996C10.24 0.957996 10.433 1.17203 10.819 1.60007C11.209 2.0243 11.559 2.49056 11.869 2.99886C12.178 3.50717 12.413 4.04222 12.574 4.60403C12.734 5.16584 12.814 5.77352 12.814 6.42705C12.814 7.10734 12.73 7.7303 12.562 8.29593C12.394 8.85774 12.153 9.3966 11.84 9.9126C11.526 10.4247 11.181 10.8833 10.802 11.2884C10.428 11.6974 10.24 11.9018 10.24 11.9018L8.767 10.7839C8.767 10.7839 8.924 10.5948 9.237 10.2164C9.554 9.8419 9.83 9.4597 10.063 9.06985C10.3 8.6762 10.479 8.26726 10.602 7.84304C10.728 7.41499 10.791 6.943 10.791 6.42705Z",fill:n}),t.jsx("path",{className:"bunny-ear-right",d:"M15.003 10.2164L18.489 2.007H20.432L16.941 10.2164H15.003ZM22.056 6.42705C22.056 5.90346 21.991 5.42764 21.861 4.99959C21.735 4.57155 21.557 4.16643 21.328 3.78425C21.098 3.39825 20.825 3.01797 20.508 2.64343C20.191 2.26507 20.032 2.07589 20.032 2.07589L21.505 0.957996C21.505 0.957996 21.698 1.17203 22.084 1.60007C22.474 2.0243 22.824 2.49056 23.133 2.99886C23.443 3.50717 23.678 4.04222 23.839 4.60403C23.999 5.16584 24.079 5.77352 24.079 6.42705C24.079 7.10734 23.995 7.7303 23.827 8.29593C23.659 8.85774 23.418 9.3966 23.105 9.9126C22.791 10.4247 22.445 10.8833 22.067 11.2884C21.693 11.6974 21.505 11.9018 21.505 11.9018L20.032 10.7839C20.032 10.7839 20.189 10.5948 20.502 10.2164C20.819 9.8419 21.094 9.4597 21.328 9.06985C21.565 8.6762 21.744 8.26726 21.866 7.84304C21.993 7.41499 22.056 6.943 22.056 6.42705Z",fill:n}),t.jsx("path",{className:"bunny-face",d:"M2.03 20.4328C2.03 20.9564 2.093 21.4322 2.219 21.8602C2.345 22.2883 2.523 22.6953 2.752 23.0813C2.981 23.4635 3.254 23.8419 3.572 24.2164C3.889 24.5948 4.047 24.7839 4.047 24.7839L2.574 25.9018C2.574 25.9018 2.379 25.6878 1.989 25.2598C1.603 24.8355 1.256 24.3693 0.946 23.861C0.636 23.3527 0.401 22.8176 0.241 22.2558C0.08 21.694 0 21.0863 0 20.4328C0 19.7525 0.084 19.1314 0.252 18.5696C0.421 18.004 0.661 17.4651 0.975 16.953C1.288 16.4371 1.632 15.9765 2.007 15.5714C2.385 15.1625 2.574 14.958 2.574 14.958L4.047 16.0759C4.047 16.0759 3.889 16.2651 3.572 16.6434C3.258 17.018 2.983 17.4021 2.746 17.7957C2.513 18.1855 2.335 18.5945 2.213 19.0225C2.091 19.4467 2.03 19.9168 2.03 20.4328ZM23.687 20.4271C23.687 19.9035 23.622 19.4276 23.492 18.9996C23.366 18.5715 23.188 18.1664 22.959 17.7843C22.729 17.3982 22.456 17.018 22.139 16.6434C21.822 16.2651 21.663 16.0759 21.663 16.0759L23.136 14.958C23.136 14.958 23.329 15.172 23.715 15.6001C24.105 16.0243 24.455 16.4906 24.765 16.9989C25.074 17.5072 25.309 18.0422 25.47 18.604C25.63 19.1658 25.71 19.7735 25.71 20.4271C25.71 21.1073 25.626 21.7303 25.458 22.2959C25.29 22.8577 25.049 23.3966 24.736 23.9126C24.422 24.4247 24.077 24.8833 23.698 25.2884C23.324 25.6974 23.136 25.9018 23.136 25.9018L21.663 24.7839C21.663 24.7839 21.82 24.5948 22.133 24.2164C22.45 23.8419 22.726 23.4597 22.959 23.0698C23.196 22.6762 23.375 22.2673 23.498 21.843C23.624 21.415 23.687 20.943 23.687 20.4271Z",fill:n}),t.jsx("circle",{className:"bunny-eye-left",cx:"8.277",cy:"20.466",r:"1.8",fill:n}),t.jsx("circle",{className:"bunny-eye-right",cx:"19.878",cy:"20.466",r:"1.8",fill:n}),t.jsx("text",{className:"bunny-happy-face",x:"14",y:"26",textAnchor:"middle",fontSize:"12",fontWeight:"bold",fill:n,fontFamily:"system-ui, -apple-system, sans-serif",children:"˃ ᵕ ˂"})]}),ho=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],nn=ho.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),mn="feedback-freeze-styles",on="__agentation_freeze";function is(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const e=window;return e[on]||(e[on]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[on]}var T=is();typeof window<"u"&&!T.installed&&(T.origSetTimeout=window.setTimeout.bind(window),T.origSetInterval=window.setInterval.bind(window),T.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,n,...s)=>typeof e=="string"?T.origSetTimeout(e,n):T.origSetTimeout((...l)=>{T.frozen?T.frozenTimeoutQueue.push(()=>e(...l)):e(...l)},n,...s),window.setInterval=(e,n,...s)=>typeof e=="string"?T.origSetInterval(e,n):T.origSetInterval((...l)=>{T.frozen||e(...l)},n,...s),window.requestAnimationFrame=e=>T.origRAF(n=>{T.frozen?T.frozenRAFQueue.push(e):e(n)}),T.installed=!0);var W=T.origSetTimeout,cs=T.origSetInterval;function ds(e){return e?ho.some(n=>{var s;return!!((s=e.closest)!=null&&s.call(e,`[${n}]`))}):!1}function _s(){if(typeof document>"u"||T.frozen)return;T.frozen=!0,T.frozenTimeoutQueue=[],T.frozenRAFQueue=[];let e=document.getElementById(mn);e||(e=document.createElement("style"),e.id=mn),e.textContent=`
    *${nn},
    *${nn}::before,
    *${nn}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),T.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var l;if(n.playState!=="running")return;const s=(l=n.effect)==null?void 0:l.target;ds(s)||(n.pause(),T.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function ro(){var s;if(typeof document>"u"||!T.frozen)return;T.frozen=!1;const e=T.frozenTimeoutQueue;T.frozenTimeoutQueue=[];for(const l of e)T.origSetTimeout(()=>{if(T.frozen){T.frozenTimeoutQueue.push(l);return}try{l()}catch(u){console.warn("[agentation] Error replaying queued timeout:",u)}},0);const n=T.frozenRAFQueue;T.frozenRAFQueue=[];for(const l of n)T.origRAF(u=>{if(T.frozen){T.frozenRAFQueue.push(l);return}l(u)});for(const l of T.pausedAnimations)try{l.play()}catch(u){console.warn("[agentation] Error resuming animation:",u)}T.pausedAnimations=[],(s=document.getElementById(mn))==null||s.remove(),document.querySelectorAll("video").forEach(l=>{l.dataset.wasPaused==="false"&&(l.play().catch(()=>{}),delete l.dataset.wasPaused)})}function sn(e){if(!e)return;const n=s=>s.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{e.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var ao=d.forwardRef(function({element:n,timestamp:s,selectedText:l,placeholder:u="What should change?",initialValue:i="",submitLabel:c="Add",onSubmit:h,onCancel:v,onDelete:U,style:y,accentColor:f="#3c82f7",isExiting:F=!1,lightMode:X=!1,computedStyles:q},S){const[K,M]=d.useState(i),[oe,Ee]=d.useState(!1),[je,He]=d.useState("initial"),[Wt,Oe]=d.useState(!1),[$e,De]=d.useState(!1),me=d.useRef(null),ht=d.useRef(null),G=d.useRef(null),xe=d.useRef(null);d.useEffect(()=>{F&&je!=="exit"&&He("exit")},[F,je]),d.useEffect(()=>{W(()=>{He("enter")},0);const z=W(()=>{He("entered")},200),Me=W(()=>{const pe=me.current;pe&&(sn(pe),pe.selectionStart=pe.selectionEnd=pe.value.length,pe.scrollTop=pe.scrollHeight)},50);return()=>{clearTimeout(z),clearTimeout(Me),G.current&&clearTimeout(G.current),xe.current&&clearTimeout(xe.current)}},[]);const te=d.useCallback(()=>{xe.current&&clearTimeout(xe.current),Ee(!0),xe.current=W(()=>{Ee(!1),sn(me.current)},250)},[]);d.useImperativeHandle(S,()=>({shake:te}),[te]);const _e=d.useCallback(()=>{He("exit"),G.current=W(()=>{v()},150)},[v]),Ye=d.useCallback(()=>{K.trim()&&h(K.trim())},[K,h]),Ft=d.useCallback(z=>{z.stopPropagation(),!z.nativeEvent.isComposing&&(z.key==="Enter"&&!z.shiftKey&&(z.preventDefault(),Ye()),z.key==="Escape"&&_e())},[Ye,_e]),b=[Y.popup,X?Y.light:"",je==="enter"?Y.enter:"",je==="entered"?Y.entered:"",je==="exit"?Y.exit:"",oe?Y.shake:""].filter(Boolean).join(" ");return t.jsxs("div",{ref:ht,className:b,"data-annotation-popup":!0,style:y,onClick:z=>z.stopPropagation(),children:[t.jsxs("div",{className:Y.header,children:[q&&Object.keys(q).length>0?t.jsxs("button",{className:Y.headerToggle,onClick:()=>{const z=$e;De(!$e),z&&W(()=>sn(me.current),0)},type:"button",children:[t.jsx("svg",{className:`${Y.chevron} ${$e?Y.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),t.jsx("span",{className:Y.element,children:n})]}):t.jsx("span",{className:Y.element,children:n}),s&&t.jsx("span",{className:Y.timestamp,children:s})]}),q&&Object.keys(q).length>0&&t.jsx("div",{className:`${Y.stylesWrapper} ${$e?Y.expanded:""}`,children:t.jsx("div",{className:Y.stylesInner,children:t.jsx("div",{className:Y.stylesBlock,children:Object.entries(q).map(([z,Me])=>t.jsxs("div",{className:Y.styleLine,children:[t.jsx("span",{className:Y.styleProperty,children:z.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",t.jsx("span",{className:Y.styleValue,children:Me}),";"]},z))})})}),l&&t.jsxs("div",{className:Y.quote,children:["“",l.slice(0,80),l.length>80?"...":"","”"]}),t.jsx("textarea",{ref:me,className:Y.textarea,style:{borderColor:Wt?f:void 0},placeholder:u,value:K,onChange:z=>M(z.target.value),onFocus:()=>Oe(!0),onBlur:()=>Oe(!1),rows:2,onKeyDown:Ft}),t.jsxs("div",{className:Y.actions,children:[U&&t.jsx("div",{className:Y.deleteWrapper,children:t.jsx("button",{className:Y.deleteButton,onClick:U,type:"button",children:t.jsx(as,{size:22})})}),t.jsx("button",{className:Y.cancel,onClick:_e,children:"Cancel"}),t.jsx("button",{className:Y.submit,style:{backgroundColor:f,opacity:K.trim()?1:.4},onClick:Ye,disabled:!K.trim(),children:c})]})]})});function qe(e){if(e.parentElement)return e.parentElement;const n=e.getRootNode();return n instanceof ShadowRoot?n.host:null}function le(e,n){let s=e;for(;s;){if(s.matches(n))return s;s=qe(s)}return null}function xr(e){return e.getRootNode()instanceof ShadowRoot}function wr(e){const n=e.getRootNode();return n instanceof ShadowRoot?n.host:null}function us(e,n=4){const s=[];let l=e,u=0;for(;l&&u<n;){const i=l.tagName.toLowerCase();if(i==="html"||i==="body")break;let c=i;if(l.id)c=`#${l.id}`;else if(l.className&&typeof l.className=="string"){const v=l.className.split(/\s+/).find(U=>U.length>2&&!U.match(/^[a-z]{1,2}$/)&&!U.match(/[A-Z0-9]{5,}/));v&&(c=`.${v.split("_")[0]}`)}const h=qe(l);!l.parentElement&&h&&(c=`⟨shadow⟩ ${c}`),s.unshift(c),l=h,u++}return s.join(" > ")}function Rt(e){var l,u,i,c,h,v,U,y;const n=us(e);if(e.dataset.element)return{name:e.dataset.element,path:n};const s=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(s)){const f=le(e,"svg");if(f){const F=qe(f);if(F instanceof HTMLElement)return{name:`graphic in ${Rt(F).name}`,path:n}}return{name:"graphic element",path:n}}if(s==="svg"){const f=qe(e);if((f==null?void 0:f.tagName.toLowerCase())==="button"){const F=(l=f.textContent)==null?void 0:l.trim();return{name:F?`icon in "${F}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(s==="button"){const f=(u=e.textContent)==null?void 0:u.trim(),F=e.getAttribute("aria-label");return F?{name:`button [${F}]`,path:n}:{name:f?`button "${f.slice(0,25)}"`:"button",path:n}}if(s==="a"){const f=(i=e.textContent)==null?void 0:i.trim(),F=e.getAttribute("href");return f?{name:`link "${f.slice(0,25)}"`,path:n}:F?{name:`link to ${F.slice(0,30)}`,path:n}:{name:"link",path:n}}if(s==="input"){const f=e.getAttribute("type")||"text",F=e.getAttribute("placeholder"),X=e.getAttribute("name");return F?{name:`input "${F}"`,path:n}:X?{name:`input [${X}]`,path:n}:{name:`${f} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(s)){const f=(c=e.textContent)==null?void 0:c.trim();return{name:f?`${s} "${f.slice(0,35)}"`:s,path:n}}if(s==="p"){const f=(h=e.textContent)==null?void 0:h.trim();return f?{name:`paragraph: "${f.slice(0,40)}${f.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(s==="span"||s==="label"){const f=(v=e.textContent)==null?void 0:v.trim();return f&&f.length<40?{name:`"${f}"`,path:n}:{name:s,path:n}}if(s==="li"){const f=(U=e.textContent)==null?void 0:U.trim();return f&&f.length<40?{name:`list item: "${f.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(s==="blockquote")return{name:"blockquote",path:n};if(s==="code"){const f=(y=e.textContent)==null?void 0:y.trim();return f&&f.length<30?{name:`code: \`${f}\``,path:n}:{name:"code",path:n}}if(s==="pre")return{name:"code block",path:n};if(s==="img"){const f=e.getAttribute("alt");return{name:f?`image "${f.slice(0,30)}"`:"image",path:n}}if(s==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(s)){const f=e.className,F=e.getAttribute("role"),X=e.getAttribute("aria-label");if(X)return{name:`${s} [${X}]`,path:n};if(F)return{name:`${F}`,path:n};if(typeof f=="string"&&f){const q=f.split(/[\s_-]+/).map(S=>S.replace(/[A-Z0-9]{5,}.*$/,"")).filter(S=>S.length>2&&!/^[a-z]{1,2}$/.test(S)).slice(0,2);if(q.length>0)return{name:q.join(" "),path:n}}return{name:s==="div"?"container":s,path:n}}return{name:s,path:n}}function it(e){var i,c,h;const n=[],s=(i=e.textContent)==null?void 0:i.trim();s&&s.length<100&&n.push(s);const l=e.previousElementSibling;if(l){const v=(c=l.textContent)==null?void 0:c.trim();v&&v.length<50&&n.unshift(`[before: "${v.slice(0,40)}"]`)}const u=e.nextElementSibling;if(u){const v=(h=u.textContent)==null?void 0:h.trim();v&&v.length<50&&n.push(`[after: "${v.slice(0,40)}"]`)}return n.join(" ")}function kr(e){var s,l;if(e.dataset.element)return e.dataset.element;const n=e.tagName.toLowerCase();if(n==="path")return"path";if(n==="circle")return"circle";if(n==="rect")return"rectangle";if(n==="line")return"line";if(n==="ellipse")return"ellipse";if(n==="polygon")return"polygon";if(n==="g")return"group";if(n==="svg")return"svg";if(n==="button"){const u=(s=e.textContent)==null?void 0:s.trim();return u?`button "${u}"`:"button"}if(n==="input")return`input (${e.getAttribute("type")||"text"})`;if(n==="span"||n==="p"||n==="label"){const u=(l=e.textContent)==null?void 0:l.trim();return u&&u.length<30?`"${u}"`:"text"}if(n==="div"){const u=e.className;if(typeof u=="string"&&u){const i=u.split(/[\s_-]+/).map(c=>c.replace(/[A-Z0-9]{5,}.*$/,"")).filter(c=>c.length>2&&!/^[a-z]{1,2}$/.test(c)).slice(0,2);if(i.length>0)return i.join(" ")}return"container"}return n}function It(e){const n=qe(e);if(!n)return"";const u=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(n.children)).filter(y=>y!==e&&y instanceof HTMLElement);if(u.length===0)return"";const i=u.slice(0,4).map(y=>{var q;const f=y.tagName.toLowerCase(),F=y.className;let X="";if(typeof F=="string"&&F){const S=F.split(/\s+/).map(K=>K.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(K=>K.length>2&&!/^[a-z]{1,2}$/.test(K));S&&(X=`.${S}`)}if(f==="button"||f==="a"){const S=(q=y.textContent)==null?void 0:q.trim().slice(0,15);if(S)return`${f}${X} "${S}"`}return`${f}${X}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const y=n.className.split(/\s+/).map(f=>f.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(f=>f.length>2&&!/^[a-z]{1,2}$/.test(f));y&&(h=`.${y}`)}const v=n.children.length,U=v>i.length+1?` (${v} total in ${h})`:"";return i.join(", ")+U}function ct(e){const n=e.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(l=>l.length>0).map(l=>{const u=l.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return u?u[1]:l}).filter((l,u,i)=>i.indexOf(l)===u).join(", ")}var fo=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),ms=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),ps=new Set(["input","textarea","select"]),gs=new Set(["img","video","canvas","svg"]),hs=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Nt(e){if(typeof window>"u")return{};const n=window.getComputedStyle(e),s={},l=e.tagName.toLowerCase();let u;ms.has(l)?u=["color","fontSize","fontWeight","fontFamily","lineHeight"]:l==="button"||l==="a"&&e.getAttribute("role")==="button"?u=["backgroundColor","color","padding","borderRadius","fontSize"]:ps.has(l)?u=["backgroundColor","color","padding","borderRadius","fontSize"]:gs.has(l)?u=["width","height","objectFit","borderRadius"]:hs.has(l)?u=["display","padding","margin","gap","backgroundColor"]:u=["color","fontSize","margin","padding","backgroundColor"];for(const i of u){const c=i.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(c);h&&!fo.has(h)&&(s[i]=h)}return s}var fs=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Et(e){if(typeof window>"u")return"";const n=window.getComputedStyle(e),s=[];for(const l of fs){const u=l.replace(/([A-Z])/g,"-$1").toLowerCase(),i=n.getPropertyValue(u);i&&!fo.has(i)&&s.push(`${u}: ${i}`)}return s.join("; ")}function ys(e){if(!e)return;const n={},s=e.split(";").map(l=>l.trim()).filter(Boolean);for(const l of s){const u=l.indexOf(":");if(u>0){const i=l.slice(0,u).trim(),c=l.slice(u+1).trim();i&&c&&(n[i]=c)}}return Object.keys(n).length>0?n:void 0}function $t(e){const n=[],s=e.getAttribute("role"),l=e.getAttribute("aria-label"),u=e.getAttribute("aria-describedby"),i=e.getAttribute("tabindex"),c=e.getAttribute("aria-hidden");return s&&n.push(`role="${s}"`),l&&n.push(`aria-label="${l}"`),u&&n.push(`aria-describedby="${u}"`),i&&n.push(`tabindex=${i}`),c==="true"&&n.push("aria-hidden"),e.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Mt(e){const n=[];let s=e;for(;s&&s.tagName.toLowerCase()!=="html";){const l=s.tagName.toLowerCase();let u=l;if(s.id)u=`${l}#${s.id}`;else if(s.className&&typeof s.className=="string"){const c=s.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2);c&&(u=`${l}.${c}`)}const i=qe(s);!s.parentElement&&i&&(u=`⟨shadow⟩ ${u}`),n.unshift(u),s=i}return n.join(" > ")}var pn="feedback-annotations-",yo=7;function At(e){return`${pn}${e}`}function rn(e){if(typeof window>"u")return[];try{const n=localStorage.getItem(At(e));if(!n)return[];const s=JSON.parse(n),l=Date.now()-yo*24*60*60*1e3;return s.filter(u=>!u.timestamp||u.timestamp>l)}catch{return[]}}function bo(e,n){if(!(typeof window>"u"))try{localStorage.setItem(At(e),JSON.stringify(n))}catch{}}function bs(){const e=new Map;if(typeof window>"u")return e;try{const n=Date.now()-yo*24*60*60*1e3;for(let s=0;s<localStorage.length;s++){const l=localStorage.key(s);if(l!=null&&l.startsWith(pn)){const u=l.slice(pn.length),i=localStorage.getItem(l);if(i){const h=JSON.parse(i).filter(v=>!v.timestamp||v.timestamp>n);h.length>0&&e.set(u,h)}}}}catch{}return e}function dt(e,n,s){const l=n.map(u=>({...u,_syncedTo:s}));bo(e,l)}var xo="agentation-session-";function hn(e){return`${xo}${e}`}function xs(e){if(typeof window>"u")return null;try{return localStorage.getItem(hn(e))}catch{return null}}function an(e,n){if(!(typeof window>"u"))try{localStorage.setItem(hn(e),n)}catch{}}function ws(e){if(!(typeof window>"u"))try{localStorage.removeItem(hn(e))}catch{}}var wo=`${xo}toolbar-hidden`;function ks(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(wo)==="1"}catch{return!1}}function Cs(e){if(!(typeof window>"u"))try{e&&sessionStorage.setItem(wo,"1")}catch{}}async function ln(e,n){const s=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!s.ok)throw new Error(`Failed to create session: ${s.status}`);return s.json()}async function lo(e,n){const s=await fetch(`${e}/sessions/${n}`);if(!s.ok)throw new Error(`Failed to get session: ${s.status}`);return s.json()}async function Pt(e,n,s){const l=await fetch(`${e}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!l.ok)throw new Error(`Failed to sync annotation: ${l.status}`);return l.json()}async function vs(e,n,s){const l=await fetch(`${e}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!l.ok)throw new Error(`Failed to update annotation: ${l.status}`);return l.json()}async function io(e,n){const s=await fetch(`${e}/annotations/${n}`,{method:"DELETE"});if(!s.ok)throw new Error(`Failed to delete annotation: ${s.status}`)}var H={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},co=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),_o=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],Ss=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function Ls(e){const n=(e==null?void 0:e.mode)??"filtered";let s=co;if(e!=null&&e.skipExact){const l=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);s=new Set([...co,...l])}return{maxComponents:(e==null?void 0:e.maxComponents)??6,maxDepth:(e==null?void 0:e.maxDepth)??30,mode:n,skipExact:s,skipPatterns:e!=null&&e.skipPatterns?[..._o,...e.skipPatterns]:_o,userPatterns:(e==null?void 0:e.userPatterns)??Ss,filter:e==null?void 0:e.filter}}function js(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function Is(e,n=10){const s=new Set;let l=e,u=0;for(;l&&u<n;)l.className&&typeof l.className=="string"&&l.className.split(/\s+/).forEach(i=>{if(i.length>1){const c=i.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();c.length>1&&s.add(c)}}),l=l.parentElement,u++;return s}function Ns(e,n){const s=js(e);for(const l of n){if(l===s)return!0;const u=s.split("-").filter(c=>c.length>2),i=l.split("-").filter(c=>c.length>2);for(const c of u)for(const h of i)if(c===h||c.includes(h)||h.includes(c))return!0}return!1}function Es(e,n,s,l){if(s.filter)return s.filter(e,n);switch(s.mode){case"all":return!0;case"filtered":return!(s.skipExact.has(e)||s.skipPatterns.some(u=>u.test(e)));case"smart":return s.skipExact.has(e)||s.skipPatterns.some(u=>u.test(e))?!1:!!(l&&Ns(e,l)||s.userPatterns.some(u=>u.test(e)));default:return!0}}var Je=null,$s=new WeakMap;function cn(e){return Object.keys(e).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function Ms(){if(Je!==null)return Je;if(typeof document>"u")return!1;if(document.body&&cn(document.body))return Je=!0,!0;const e=["#root","#app","#__next","[data-reactroot]"];for(const n of e){const s=document.querySelector(n);if(s&&cn(s))return Je=!0,!0}if(document.body){for(const n of document.body.children)if(cn(n))return Je=!0,!0}return Je=!1,!1}var _t={map:$s};function Ps(e){return Object.keys(e).find(s=>s.startsWith("__reactFiber$")||s.startsWith("__reactInternalInstance$"))||null}function Ts(e){const n=Ps(e);return n?e[n]:null}function Fe(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function Bs(e){var u;const{tag:n,type:s,elementType:l}=e;if(n===H.HostComponent||n===H.HostText||n===H.HostHoistable||n===H.HostSingleton||n===H.Fragment||n===H.Mode||n===H.Profiler||n===H.DehydratedFragment||n===H.HostRoot||n===H.HostPortal||n===H.ScopeComponent||n===H.OffscreenComponent||n===H.LegacyHiddenComponent||n===H.CacheComponent||n===H.TracingMarkerComponent||n===H.Throw||n===H.ViewTransitionComponent||n===H.ActivityComponent)return null;if(n===H.ForwardRef){const i=l;if(i!=null&&i.render){const c=Fe(i.render);if(c)return c}return i!=null&&i.displayName?i.displayName:Fe(s)}if(n===H.MemoComponent||n===H.SimpleMemoComponent){const i=l;if(i!=null&&i.type){const c=Fe(i.type);if(c)return c}return i!=null&&i.displayName?i.displayName:Fe(s)}if(n===H.ContextProvider){const i=s;return(u=i==null?void 0:i._context)!=null&&u.displayName?`${i._context.displayName}.Provider`:null}if(n===H.ContextConsumer){const i=s;return i!=null&&i.displayName?`${i.displayName}.Consumer`:null}if(n===H.LazyComponent){const i=l;return(i==null?void 0:i._status)===1&&i._result?Fe(i._result):null}return n===H.SuspenseComponent||n===H.SuspenseListComponent?null:n===H.IncompleteClassComponent||n===H.IncompleteFunctionComponent||n===H.FunctionComponent||n===H.ClassComponent||n===H.IndeterminateComponent?Fe(s):null}function Rs(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function As(e,n){const s=Ls(n),l=s.mode==="all";if(l){const v=_t.map.get(e);if(v!==void 0)return v}if(!Ms()){const v={path:null,components:[]};return l&&_t.map.set(e,v),v}const u=s.mode==="smart"?Is(e):void 0,i=[];try{let v=Ts(e),U=0;for(;v&&U<s.maxDepth&&i.length<s.maxComponents;){const y=Bs(v);y&&!Rs(y)&&Es(y,U,s,u)&&i.push(y),v=v.return,U++}}catch{const v={path:null,components:[]};return l&&_t.map.set(e,v),v}if(i.length===0){const v={path:null,components:[]};return l&&_t.map.set(e,v),v}const h={path:i.slice().reverse().map(v=>`<${v}>`).join(" "),components:i};return l&&_t.map.set(e,h),h}var ut={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function Ws(e){if(!e||typeof e!="object")return null;const n=Object.keys(e),s=n.find(i=>i.startsWith("__reactFiber$"));if(s)return e[s]||null;const l=n.find(i=>i.startsWith("__reactInternalInstance$"));if(l)return e[l]||null;const u=n.find(i=>{if(!i.startsWith("__react"))return!1;const c=e[i];return c&&typeof c=="object"&&"_debugSource"in c});return u&&e[u]||null}function gt(e){if(!e.type||typeof e.type=="string")return null;if(typeof e.type=="object"||typeof e.type=="function"){const n=e.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function Fs(e,n=50){var u;let s=e,l=0;for(;s&&l<n;){if(s._debugSource)return{source:s._debugSource,componentName:gt(s)};if((u=s._debugOwner)!=null&&u._debugSource)return{source:s._debugOwner._debugSource,componentName:gt(s._debugOwner)};s=s.return,l++}return null}function Hs(e){let n=e,s=0;const l=50;for(;n&&s<l;){const u=n,i=["_debugSource","__source","_source","debugSource"];for(const c of i){const h=u[c];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:gt(n)}}if(n.memoizedProps){const c=n.memoizedProps;if(c.__source&&typeof c.__source=="object"){const h=c.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:gt(n)}}}n=n.return,s++}return null}var Tt=new Map;function Os(e){var u;const n=e.tag,s=e.type,l=e.elementType;if(typeof s=="string"||s==null||typeof s=="function"&&((u=s.prototype)!=null&&u.isReactComponent))return null;if((n===ut.FunctionComponent||n===ut.IndeterminateComponent)&&typeof s=="function")return s;if(n===ut.ForwardRef&&l){const i=l.render;if(typeof i=="function")return i}if((n===ut.MemoComponent||n===ut.SimpleMemoComponent)&&l){const i=l.type;if(typeof i=="function")return i}return typeof s=="function"?s:null}function Ds(){const e=Do,n=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:l=>{n.H=l}};const s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(s){const l=s.ReactCurrentDispatcher;if(l&&"current"in l)return{get:()=>l.current,set:u=>{l.current=u}}}return null}function Ys(e){const n=e.split(`
`),s=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],l=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,u=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const i of n){const c=i.trim();if(!c||s.some(v=>v.test(c)))continue;const h=l.exec(c)||u.exec(c);if(h)return{fileName:h[1],line:parseInt(h[2],10),column:parseInt(h[3],10)}}return null}function zs(e){let n=e;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function Xs(e){const n=Os(e);if(!n)return null;if(Tt.has(n))return Tt.get(n);const s=Ds();if(!s)return Tt.set(n,null),null;const l=s.get();let u=null;try{const i=new Proxy({},{get(){throw new Error("probe")}});s.set(i);try{n({})}catch(c){if(c instanceof Error&&c.message==="probe"&&c.stack){const h=Ys(c.stack);h&&(u={fileName:zs(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:gt(e)||void 0})}}}finally{s.set(l)}return Tt.set(n,u),u}function Us(e,n=15){let s=e,l=0;for(;s&&l<n;){const u=Xs(s);if(u)return u;s=s.return,l++}return null}function gn(e){const n=Ws(e);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let s=Fs(n);if(s||(s=Hs(n)),s!=null&&s.source)return{found:!0,source:{fileName:s.source.fileName,lineNumber:s.source.lineNumber,columnNumber:s.source.columnNumber,componentName:s.componentName||void 0},isReactApp:!0,isProduction:!1};const l=Us(n);return l?{found:!0,source:l,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function Qs(e,n="path"){const{fileName:s,lineNumber:l,columnNumber:u}=e;let i=`${s}:${l}`;return u!==void 0&&(i+=`:${u}`),n==="vscode"?`vscode://file${s.startsWith("/")?"":"/"}${i}`:i}function Zs(e,n=10){let s=e,l=0;for(;s&&l<n;){const u=gn(s);if(u.found)return u;s=s.parentElement,l++}return gn(e)}var Vs=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__toolbar___wNsdK :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__markerIn___5FaAP {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___GU5jX {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__tooltipIn___0N31w {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__settingsPanelIn___MGfO8 {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
}
@keyframes styles-module__settingsPanelOut___Zfymi {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
  to {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    filter: blur(5px);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  width: 297px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  cursor: grab;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__dragging___xrolZ {
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  cursor: grabbing;
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 257px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 297px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default !important;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  cursor: text !important;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
  pointer-events: none;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}
[data-agentation-theme=light] .styles-module__markerTooltip___aLJID {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___aLJID .styles-module__markerQuote___FHmrz {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___aLJID .styles-module__markerNote___QkrrS {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__markerTooltip___aLJID .styles-module__markerHint___2iF-6 {
  color: rgba(0, 0, 0, 0.35);
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9 {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz:hover {
  background: rgba(0, 0, 0, 0.05);
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr:hover {
  color: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(0, 0, 0, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp {
  background: rgba(0, 0, 0, 0.1);
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-webkit-slider-thumb {
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-moz-range-thumb {
  background: #1a1a1a;
}

.styles-module__themeToggle___2rUjA {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 0.5rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__themeToggle___2rUjA:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___2rUjA {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___2rUjA:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___LsJIM {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___lCCmo {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___TU6ML 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes styles-module__themeIconIn___TU6ML {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}`,Js={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",dragging:"styles-module__dragging___xrolZ",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",controlsContent:"styles-module__controlsContent___9GJWU",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",themeIconWrapper:"styles-module__themeIconWrapper___LsJIM",themeIcon:"styles-module__themeIcon___lCCmo",themeIconIn:"styles-module__themeIconIn___TU6ML",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje",settingsPanelIn:"styles-module__settingsPanelIn___MGfO8",settingsPanelOut:"styles-module__settingsPanelOut___Zfymi"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-page-toolbar-css-styles",e.textContent=Vs,document.head.appendChild(e))}var a=Js,Ks=({content:e,children:n,...s})=>{const[l,u]=d.useState(!1),[i,c]=d.useState(!1),[h,v]=d.useState({top:0,right:0}),U=d.useRef(null),y=d.useRef(null),f=d.useRef(null),F=()=>{if(U.current){const S=U.current.getBoundingClientRect();v({top:S.top+S.height/2,right:window.innerWidth-S.left+8})}},X=()=>{c(!0),f.current&&(clearTimeout(f.current),f.current=null),F(),y.current=W(()=>{u(!0)},500)},q=()=>{y.current&&(clearTimeout(y.current),y.current=null),u(!1),f.current=W(()=>{c(!1)},150)};return d.useEffect(()=>()=>{y.current&&clearTimeout(y.current),f.current&&clearTimeout(f.current)},[]),t.jsxs(t.Fragment,{children:[t.jsx("span",{ref:U,onMouseEnter:X,onMouseLeave:q,...s,children:n}),i&&go.createPortal(t.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:l?1:0,transition:"opacity 0.15s ease"},children:e}),document.body)]})},Gs=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,qs={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-help-tooltip-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-help-tooltip-styles",e.textContent=Gs,document.head.appendChild(e))}var uo=qs,Ke=({content:e})=>t.jsx(Ks,{className:uo.tooltip,content:e,children:t.jsx(Jo,{className:uo.tooltipIcon})});function dn(e,n="filtered"){const{name:s,path:l}=Rt(e);if(n==="off")return{name:s,elementName:s,path:l,reactComponents:null};const u=As(e,{mode:n});return{name:u.path?`${u.path} ${s}`:s,elementName:s,path:l,reactComponents:u.path}}var mo=!1,_n={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},be=e=>{if(!e||!e.trim())return!1;try{const n=new URL(e.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},mt=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}],pt=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],er=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const e=document.createElement("style");e.id="agentation-color-tokens",e.textContent=[...pt.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${pt.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${pt.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(e)};er();function Ge(e,n){let s=document.elementFromPoint(e,n);if(!s)return null;for(;s!=null&&s.shadowRoot;){const l=s.shadowRoot.elementFromPoint(e,n);if(!l||l===s)break;s=l}return s}function un(e){let n=e;for(;n&&n!==document.body;){const l=window.getComputedStyle(n).position;if(l==="fixed"||l==="sticky")return!0;n=n.parentElement}return!1}function Ne(e){return e.status!=="resolved"&&e.status!=="dismissed"}function Bt(e){const n=gn(e),s=n.found?n:Zs(e);if(s.found&&s.source)return Qs(s.source,"path")}function po(e,n,s="standard",l="filtered"){if(e.length===0)return"";const u=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let i=`## Page Feedback: ${n}
`;return s==="forensic"?(i+=`
**Environment:**
`,i+=`- Viewport: ${u}
`,typeof window<"u"&&(i+=`- URL: ${window.location.href}
`,i+=`- User Agent: ${navigator.userAgent}
`,i+=`- Timestamp: ${new Date().toISOString()}
`,i+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),i+=`
---
`):s!=="compact"&&(i+=`**Viewport:** ${u}
`),i+=`
`,e.forEach((c,h)=>{s==="compact"?(i+=`${h+1}. **${c.element}**${c.sourceFile?` (${c.sourceFile})`:""}: ${c.comment}`,c.selectedText&&(i+=` (re: "${c.selectedText.slice(0,30)}${c.selectedText.length>30?"...":""}")`),i+=`
`):s==="forensic"?(i+=`### ${h+1}. ${c.element}
`,c.isMultiSelect&&c.fullPath&&(i+=`*Forensic data shown for first element of selection*
`),c.fullPath&&(i+=`**Full DOM Path:** ${c.fullPath}
`),c.cssClasses&&(i+=`**CSS Classes:** ${c.cssClasses}
`),c.boundingBox&&(i+=`**Position:** x:${Math.round(c.boundingBox.x)}, y:${Math.round(c.boundingBox.y)} (${Math.round(c.boundingBox.width)}×${Math.round(c.boundingBox.height)}px)
`),i+=`**Annotation at:** ${c.x.toFixed(1)}% from left, ${Math.round(c.y)}px from top
`,c.selectedText&&(i+=`**Selected text:** "${c.selectedText}"
`),c.nearbyText&&!c.selectedText&&(i+=`**Context:** ${c.nearbyText.slice(0,100)}
`),c.computedStyles&&(i+=`**Computed Styles:** ${c.computedStyles}
`),c.accessibility&&(i+=`**Accessibility:** ${c.accessibility}
`),c.nearbyElements&&(i+=`**Nearby Elements:** ${c.nearbyElements}
`),c.sourceFile&&(i+=`**Source:** ${c.sourceFile}
`),c.reactComponents&&(i+=`**React:** ${c.reactComponents}
`),i+=`**Feedback:** ${c.comment}

`):(i+=`### ${h+1}. ${c.element}
`,i+=`**Location:** ${c.elementPath}
`,c.sourceFile&&(i+=`**Source:** ${c.sourceFile}
`),c.reactComponents&&(i+=`**React:** ${c.reactComponents}
`),s==="detailed"&&(c.cssClasses&&(i+=`**Classes:** ${c.cssClasses}
`),c.boundingBox&&(i+=`**Position:** ${Math.round(c.boundingBox.x)}px, ${Math.round(c.boundingBox.y)}px (${Math.round(c.boundingBox.width)}×${Math.round(c.boundingBox.height)}px)
`)),c.selectedText&&(i+=`**Selected text:** "${c.selectedText}"
`),s==="detailed"&&c.nearbyText&&!c.selectedText&&(i+=`**Context:** ${c.nearbyText.slice(0,100)}
`),i+=`**Feedback:** ${c.comment}

`)}),i.trim()}function Cr({demoAnnotations:e,demoDelay:n=1e3,enableDemoMode:s=!1,onAnnotationAdd:l,onAnnotationDelete:u,onAnnotationUpdate:i,onAnnotationsClear:c,onCopy:h,onSubmit:v,copyToClipboard:U=!0,endpoint:y,sessionId:f,onSessionCreated:F,webhookUrl:X,className:q}={}){var qn,eo,to;const[S,K]=d.useState(!1),[M,oe]=d.useState([]),[Ee,je]=d.useState(!0),[He,Wt]=d.useState(()=>ks()),[Oe,$e]=d.useState(!1),De=d.useRef(null);d.useEffect(()=>{const o=_=>{const p=De.current;p&&p.contains(_.target)&&_.stopPropagation()},r=["mousedown","click","pointerdown"];return r.forEach(_=>document.body.addEventListener(_,o)),()=>{r.forEach(_=>document.body.removeEventListener(_,o))}},[]);const[me,ht]=d.useState(!1),[G,xe]=d.useState(!1),[te,_e]=d.useState(null),[Ye,Ft]=d.useState({x:0,y:0}),[b,z]=d.useState(null),[Me,pe]=d.useState(!1),[we,Ht]=d.useState("idle"),[tr,fn]=d.useState(!1),[yn,bn]=d.useState(!1),[ft,Ot]=d.useState(null),[Dt,Pe]=d.useState(null),[xn,et]=d.useState([]),[wn,kn]=d.useState(null),[yt,Cn]=d.useState(null),[$,tt]=d.useState(null),[Yt,ke]=d.useState(null),[vn,Te]=d.useState([]),[Be,Sn]=d.useState(0),[Ln,jn]=d.useState(!1),[Z,ko]=d.useState(!1),[ue,In]=d.useState(!1),[nt,zt]=d.useState(!1),[Co,Nn]=d.useState(!1),[En,Xt]=d.useState("main"),[vo,Ut]=d.useState(!1),[$n,Mn]=d.useState(!1),ze=d.useRef(null),[V,Xe]=d.useState([]),ge=d.useRef({cmd:!1,shift:!1}),se=()=>{Ut(!0)},So=()=>{Ut(!1)},Lo=()=>{$n||(ze.current=setTimeout(()=>Mn(!0),850))},jo=()=>{ze.current&&(clearTimeout(ze.current),ze.current=null),Mn(!1),So()};d.useEffect(()=>()=>{ze.current&&clearTimeout(ze.current)},[]);const[L,Re]=d.useState(()=>{try{const o=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{..._n,...o,annotationColorId:pt.find(r=>r.id===o.annotationColorId)?o.annotationColorId:_n.annotationColorId}}catch{return _n}}),[Ie,Pn]=d.useState(!0),[Tn,Bn]=d.useState(!1),Io=()=>{var o;(o=De.current)==null||o.classList.add(a.disableTransitions),Pn(r=>!r),requestAnimationFrame(()=>{var r;(r=De.current)==null||r.classList.remove(a.disableTransitions)})},Rn=!1,Ce="off",[ie,Qt]=d.useState(f??null),An=d.useRef(!1),[ne,Ae]=d.useState(y?"connecting":"disconnected"),[O,Zt]=d.useState(null),[ve,Wn]=d.useState(!1),[Ue,Fn]=d.useState(null),[No,Eo]=d.useState(0),Vt=d.useRef(!1),[Hn,ot]=d.useState(new Set),[On,bt]=d.useState(new Set),[st,xt]=d.useState(!1),[$o,Qe]=d.useState(!1),[Se,Dn]=d.useState(!1),Ze=d.useRef(null),he=d.useRef(null),rt=d.useRef(null),at=d.useRef(null),wt=d.useRef(!1),Yn=d.useRef(0),kt=d.useRef(null),zn=d.useRef(null),Jt=8,Mo=50,Xn=d.useRef(null),Un=d.useRef(null),lt=d.useRef(null),D=typeof window<"u"?window.location.pathname:"/";d.useEffect(()=>{if(nt)Nn(!0);else{Ut(!1),Xt("main");const o=W(()=>Nn(!1),0);return()=>clearTimeout(o)}},[nt]);const Qn=S&&Ee;d.useEffect(()=>{if(Qn){xe(!1),ht(!0),ot(new Set);const o=W(()=>{ot(r=>{const _=new Set(r);return M.forEach(p=>_.add(p.id)),_})},350);return()=>clearTimeout(o)}else if(me){xe(!0);const o=W(()=>{ht(!1),xe(!1)},250);return()=>clearTimeout(o)}},[Qn]),d.useEffect(()=>{ko(!0),Sn(window.scrollY);const o=rn(D);oe(o.filter(Ne)),mo||(Bn(!0),mo=!0,W(()=>Bn(!1),750));try{const r=localStorage.getItem("feedback-toolbar-theme");r!==null&&Pn(r==="dark")}catch{}try{const r=localStorage.getItem("feedback-toolbar-position");if(r){const _=JSON.parse(r);typeof _.x=="number"&&typeof _.y=="number"&&Zt(_)}}catch{}},[D]),d.useEffect(()=>{Z&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(L))},[L,Z]),d.useEffect(()=>{Z&&localStorage.setItem("feedback-toolbar-theme",Ie?"dark":"light")},[Ie,Z]);const Zn=d.useRef(!1);d.useEffect(()=>{const o=Zn.current;Zn.current=ve,o&&!ve&&O&&Z&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(O))},[ve,O,Z]),d.useEffect(()=>{if(!y||!Z||An.current)return;An.current=!0,Ae("connecting"),(async()=>{try{const r=xs(D),_=f||r;let p=!1;if(_)try{const m=await lo(y,_);Qt(m.id),Ae("connected"),an(D,m.id),p=!0;const g=rn(D),x=new Set(m.annotations.map(C=>C.id)),k=g.filter(C=>!x.has(C.id));if(k.length>0){const I=`${typeof window<"u"?window.location.origin:""}${D}`,E=(await Promise.allSettled(k.map(N=>Pt(y,m.id,{...N,sessionId:m.id,url:I})))).map((N,w)=>N.status==="fulfilled"?N.value:(console.warn("[Agentation] Failed to sync annotation:",N.reason),k[w])),B=[...m.annotations,...E];oe(B.filter(Ne)),dt(D,B.filter(Ne),m.id)}else oe(m.annotations.filter(Ne)),dt(D,m.annotations.filter(Ne),m.id)}catch(m){console.warn("[Agentation] Could not join session, creating new:",m),ws(D)}if(!p){const m=typeof window<"u"?window.location.href:"/",g=await ln(y,m);Qt(g.id),Ae("connected"),an(D,g.id),F==null||F(g.id);const x=bs(),k=typeof window<"u"?window.location.origin:"",C=[];for(const[I,j]of x){const E=j.filter(w=>!w._syncedTo);if(E.length===0)continue;const B=`${k}${I}`,N=I===D;C.push((async()=>{try{const w=N?g:await ln(y,B),Le=(await Promise.allSettled(E.map(J=>Pt(y,w.id,{...J,sessionId:w.id,url:B})))).map((J,ee)=>J.status==="fulfilled"?J.value:(console.warn("[Agentation] Failed to sync annotation:",J.reason),E[ee])).filter(Ne);if(dt(I,Le,w.id),N){const J=new Set(E.map(ee=>ee.id));oe(ee=>{const R=ee.filter(P=>!J.has(P.id));return[...Le,...R]})}}catch(w){console.warn(`[Agentation] Failed to sync annotations for ${I}:`,w)}})())}await Promise.allSettled(C)}}catch(r){Ae("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",r)}})()},[y,f,Z,F,D]),d.useEffect(()=>{if(!y||!Z)return;const o=async()=>{try{(await fetch(`${y}/health`)).ok?Ae("connected"):Ae("disconnected")}catch{Ae("disconnected")}};o();const r=cs(o,1e4);return()=>clearInterval(r)},[y,Z]),d.useEffect(()=>{if(!y||!Z||!ie)return;const o=new EventSource(`${y}/sessions/${ie}/events`),r=["resolved","dismissed"],_=p=>{var m;try{const g=JSON.parse(p.data);if(r.includes((m=g.payload)==null?void 0:m.status)){const x=g.payload.id;bt(k=>new Set(k).add(x)),W(()=>{oe(k=>k.filter(C=>C.id!==x)),bt(k=>{const C=new Set(k);return C.delete(x),C})},150)}}catch{}};return o.addEventListener("annotation.updated",_),()=>{o.removeEventListener("annotation.updated",_),o.close()}},[y,Z,ie]),d.useEffect(()=>{if(!y||!Z)return;const o=zn.current==="disconnected",r=ne==="connected";zn.current=ne,o&&r&&(async()=>{try{const p=rn(D);if(p.length===0)return;const g=`${typeof window<"u"?window.location.origin:""}${D}`;let x=ie,k=[];if(x)try{k=(await lo(y,x)).annotations}catch{x=null}x||(x=(await ln(y,g)).id,Qt(x),an(D,x));const C=new Set(k.map(j=>j.id)),I=p.filter(j=>!C.has(j.id));if(I.length>0){const E=(await Promise.allSettled(I.map(w=>Pt(y,x,{...w,sessionId:x,url:g})))).map((w,ce)=>w.status==="fulfilled"?w.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",w.reason),I[ce])),N=[...k,...E].filter(Ne);oe(N),dt(D,N,x)}}catch(p){console.warn("[Agentation] Failed to sync on reconnect:",p)}})()},[ne,y,Z,ie,D]);const Po=d.useCallback(()=>{Oe||($e(!0),zt(!1),K(!1),W(()=>{Cs(!0),Wt(!0),$e(!1)},400))},[Oe]);d.useEffect(()=>{if(!s||!Z||!e||e.length===0||M.length>0)return;const o=[];return o.push(W(()=>{K(!0)},n-200)),e.forEach((r,_)=>{const p=n+_*300;o.push(W(()=>{const m=document.querySelector(r.selector);if(!m)return;const g=m.getBoundingClientRect(),{name:x,path:k}=Rt(m),C={id:`demo-${Date.now()}-${_}`,x:(g.left+g.width/2)/window.innerWidth*100,y:g.top+g.height/2+window.scrollY,comment:r.comment,element:x,elementPath:k,timestamp:Date.now(),selectedText:r.selectedText,boundingBox:{x:g.left,y:g.top+window.scrollY,width:g.width,height:g.height},nearbyText:it(m),cssClasses:ct(m)};oe(I=>[...I,C])},p))}),()=>{o.forEach(clearTimeout)}},[s,Z,e,n]),d.useEffect(()=>{const o=()=>{Sn(window.scrollY),jn(!0),lt.current&&clearTimeout(lt.current),lt.current=W(()=>{jn(!1)},150)};return window.addEventListener("scroll",o,{passive:!0}),()=>{window.removeEventListener("scroll",o),lt.current&&clearTimeout(lt.current)}},[]),d.useEffect(()=>{Z&&M.length>0?ie?dt(D,M,ie):bo(D,M):Z&&M.length===0&&localStorage.removeItem(At(D))},[M,D,Z,ie]);const Vn=d.useCallback(()=>{ue||(_s(),In(!0))},[ue]),Ct=d.useCallback(()=>{ue&&(ro(),In(!1))},[ue]),Kt=d.useCallback(()=>{ue?Ct():Vn()},[ue,Vn,Ct]),Jn=d.useCallback(()=>{if(V.length===0)return;const o=V[0],r=o.element,_=V.length>1,p=V.map(m=>m.element.getBoundingClientRect());if(_){const m={left:Math.min(...p.map(w=>w.left)),top:Math.min(...p.map(w=>w.top)),right:Math.max(...p.map(w=>w.right)),bottom:Math.max(...p.map(w=>w.bottom))},g=V.slice(0,5).map(w=>w.name).join(", "),x=V.length>5?` +${V.length-5} more`:"",k=p.map(w=>({x:w.left,y:w.top+window.scrollY,width:w.width,height:w.height})),I=V[V.length-1].element,j=p[p.length-1],E=j.left+j.width/2,B=j.top+j.height/2,N=un(I);z({x:E/window.innerWidth*100,y:N?B:B+window.scrollY,clientY:B,element:`${V.length} elements: ${g}${x}`,elementPath:"multi-select",boundingBox:{x:m.left,y:m.top+window.scrollY,width:m.right-m.left,height:m.bottom-m.top},isMultiSelect:!0,isFixed:N,elementBoundingBoxes:k,multiSelectElements:V.map(w=>w.element),targetElement:I,fullPath:Mt(r),accessibility:$t(r),computedStyles:Et(r),computedStylesObj:Nt(r),nearbyElements:It(r),cssClasses:ct(r),nearbyText:it(r),sourceFile:Bt(r)})}else{const m=p[0],g=un(r);z({x:m.left/window.innerWidth*100,y:g?m.top:m.top+window.scrollY,clientY:m.top,element:o.name,elementPath:o.path,boundingBox:{x:m.left,y:g?m.top:m.top+window.scrollY,width:m.width,height:m.height},isFixed:g,fullPath:Mt(r),accessibility:$t(r),computedStyles:Et(r),computedStylesObj:Nt(r),nearbyElements:It(r),cssClasses:ct(r),nearbyText:it(r),reactComponents:o.reactComponents,sourceFile:Bt(r)})}Xe([]),_e(null)},[V]);d.useEffect(()=>{S||(z(null),tt(null),ke(null),Te([]),_e(null),zt(!1),Xe([]),ge.current={cmd:!1,shift:!1},ue&&Ct())},[S,ue,Ct]),d.useEffect(()=>()=>{ro()},[]),d.useEffect(()=>{if(!S)return;const o=document.createElement("style");return o.id="feedback-cursor-styles",o.textContent=`
      body * {
        cursor: crosshair !important;
      }
      body p, body span, body h1, body h2, body h3, body h4, body h5, body h6,
      body li, body td, body th, body label, body blockquote, body figcaption,
      body caption, body legend, body dt, body dd, body pre, body code,
      body em, body strong, body b, body i, body u, body s, body a,
      body time, body address, body cite, body q, body abbr, body dfn,
      body mark, body small, body sub, body sup, body [contenteditable],
      body p *, body span *, body h1 *, body h2 *, body h3 *, body h4 *,
      body h5 *, body h6 *, body li *, body a *, body label *, body pre *,
      body code *, body blockquote *, body [contenteditable] * {
        cursor: text !important;
      }
      [data-feedback-toolbar], [data-feedback-toolbar] * {
        cursor: auto !important;
      }
      [data-feedback-toolbar] textarea,
      [data-feedback-toolbar] input[type="text"],
      [data-feedback-toolbar] input[type="url"] {
        cursor: text !important;
      }
      [data-feedback-toolbar] button,
      [data-feedback-toolbar] button *,
      [data-feedback-toolbar] label,
      [data-feedback-toolbar] label *,
      [data-feedback-toolbar] a,
      [data-feedback-toolbar] a *,
      [data-feedback-toolbar] [role="button"],
      [data-feedback-toolbar] [role="button"] * {
        cursor: pointer !important;
      }
      [data-annotation-marker], [data-annotation-marker] * {
        cursor: pointer !important;
      }
    `,document.head.appendChild(o),()=>{const r=document.getElementById("feedback-cursor-styles");r&&r.remove()}},[S]),d.useEffect(()=>{if(!S||b)return;const o=r=>{const _=r.composedPath()[0]||r.target;if(le(_,"[data-feedback-toolbar]")){_e(null);return}const p=Ge(r.clientX,r.clientY);if(!p||le(p,"[data-feedback-toolbar]")){_e(null);return}const{name:m,elementName:g,path:x,reactComponents:k}=dn(p,Ce),C=p.getBoundingClientRect();_e({element:m,elementName:g,elementPath:x,rect:C,reactComponents:k}),Ft({x:r.clientX,y:r.clientY})};return document.addEventListener("mousemove",o),()=>document.removeEventListener("mousemove",o)},[S,b,Ce]),d.useEffect(()=>{if(!S)return;const o=r=>{var re,Le;if(wt.current){wt.current=!1;return}const _=r.composedPath()[0]||r.target;if(le(_,"[data-feedback-toolbar]")||le(_,"[data-annotation-popup]")||le(_,"[data-annotation-marker]"))return;if(r.metaKey&&r.shiftKey&&!b&&!$){r.preventDefault(),r.stopPropagation();const J=Ge(r.clientX,r.clientY);if(!J)return;const ee=J.getBoundingClientRect(),{name:R,path:P,reactComponents:ae}=dn(J,Ce),Q=V.findIndex(de=>de.element===J);Q>=0?Xe(de=>de.filter((ye,jt)=>jt!==Q)):Xe(de=>[...de,{element:J,rect:ee,name:R,path:P,reactComponents:ae??void 0}]);return}const p=le(_,"button, a, input, select, textarea, [role='button'], [onclick]");if(L.blockInteractions&&p&&(r.preventDefault(),r.stopPropagation()),b){if(p&&!L.blockInteractions)return;r.preventDefault(),(re=Xn.current)==null||re.shake();return}if($){if(p&&!L.blockInteractions)return;r.preventDefault(),(Le=Un.current)==null||Le.shake();return}r.preventDefault();const m=Ge(r.clientX,r.clientY);if(!m)return;const{name:g,path:x,reactComponents:k}=dn(m,Ce),C=m.getBoundingClientRect(),I=r.clientX/window.innerWidth*100,j=un(m),E=j?r.clientY:r.clientY+window.scrollY,B=window.getSelection();let N;B&&B.toString().trim().length>0&&(N=B.toString().trim().slice(0,500));const w=Nt(m),ce=Et(m);z({x:I,y:E,clientY:r.clientY,element:g,elementPath:x,selectedText:N,boundingBox:{x:C.left,y:j?C.top:C.top+window.scrollY,width:C.width,height:C.height},nearbyText:it(m),cssClasses:ct(m),isFixed:j,fullPath:Mt(m),accessibility:$t(m),computedStyles:ce,computedStylesObj:w,nearbyElements:It(m),reactComponents:k??void 0,sourceFile:Bt(m),targetElement:m}),_e(null)};return document.addEventListener("click",o,!0),()=>document.removeEventListener("click",o,!0)},[S,b,$,L.blockInteractions,Ce,V]),d.useEffect(()=>{if(!S)return;const o=p=>{p.key==="Meta"&&(ge.current.cmd=!0),p.key==="Shift"&&(ge.current.shift=!0)},r=p=>{const m=ge.current.cmd&&ge.current.shift;p.key==="Meta"&&(ge.current.cmd=!1),p.key==="Shift"&&(ge.current.shift=!1);const g=ge.current.cmd&&ge.current.shift;m&&!g&&V.length>0&&Jn()},_=()=>{ge.current={cmd:!1,shift:!1},Xe([])};return document.addEventListener("keydown",o),document.addEventListener("keyup",r),window.addEventListener("blur",_),()=>{document.removeEventListener("keydown",o),document.removeEventListener("keyup",r),window.removeEventListener("blur",_)}},[S,V,Jn]),d.useEffect(()=>{if(!S||b)return;const o=r=>{const _=r.composedPath()[0]||r.target;le(_,"[data-feedback-toolbar]")||le(_,"[data-annotation-marker]")||le(_,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(_.tagName)||_.isContentEditable||(Ze.current={x:r.clientX,y:r.clientY})};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[S,b]),d.useEffect(()=>{if(!S||b)return;const o=r=>{if(!Ze.current)return;const _=r.clientX-Ze.current.x,p=r.clientY-Ze.current.y,m=_*_+p*p,g=Jt*Jt;if(!Se&&m>=g&&(he.current=Ze.current,Dn(!0)),(Se||m>=g)&&he.current){if(rt.current){const R=Math.min(he.current.x,r.clientX),P=Math.min(he.current.y,r.clientY),ae=Math.abs(r.clientX-he.current.x),Q=Math.abs(r.clientY-he.current.y);rt.current.style.transform=`translate(${R}px, ${P}px)`,rt.current.style.width=`${ae}px`,rt.current.style.height=`${Q}px`}const x=Date.now();if(x-Yn.current<Mo)return;Yn.current=x;const k=he.current.x,C=he.current.y,I=Math.min(k,r.clientX),j=Math.min(C,r.clientY),E=Math.max(k,r.clientX),B=Math.max(C,r.clientY),N=(I+E)/2,w=(j+B)/2,ce=new Set,re=[[I,j],[E,j],[I,B],[E,B],[N,w],[N,j],[N,B],[I,w],[E,w]];for(const[R,P]of re){const ae=document.elementsFromPoint(R,P);for(const Q of ae)Q instanceof HTMLElement&&ce.add(Q)}const Le=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const R of Le)if(R instanceof HTMLElement){const P=R.getBoundingClientRect(),ae=P.left+P.width/2,Q=P.top+P.height/2,de=ae>=I&&ae<=E&&Q>=j&&Q<=B,ye=Math.min(P.right,E)-Math.max(P.left,I),jt=Math.min(P.bottom,B)-Math.max(P.top,j),Fo=ye>0&&jt>0?ye*jt:0,no=P.width*P.height,Ho=no>0?Fo/no:0;(de||Ho>.5)&&ce.add(R)}const J=[],ee=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const R of ce){if(le(R,"[data-feedback-toolbar]")||le(R,"[data-annotation-marker]"))continue;const P=R.getBoundingClientRect();if(!(P.width>window.innerWidth*.8&&P.height>window.innerHeight*.5)&&!(P.width<10||P.height<10)&&P.left<E&&P.right>I&&P.top<B&&P.bottom>j){const ae=R.tagName;let Q=ee.has(ae);if(!Q&&(ae==="DIV"||ae==="SPAN")){const de=R.textContent&&R.textContent.trim().length>0,ye=R.onclick!==null||R.getAttribute("role")==="button"||R.getAttribute("role")==="link"||R.classList.contains("clickable")||R.hasAttribute("data-clickable");(de||ye)&&!R.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Q=!0)}if(Q){let de=!1;for(const ye of J)if(ye.left<=P.left&&ye.right>=P.right&&ye.top<=P.top&&ye.bottom>=P.bottom){de=!0;break}de||J.push(P)}}}if(at.current){const R=at.current;for(;R.children.length>J.length;)R.removeChild(R.lastChild);J.forEach((P,ae)=>{let Q=R.children[ae];Q||(Q=document.createElement("div"),Q.className=a.selectedElementHighlight,R.appendChild(Q)),Q.style.transform=`translate(${P.left}px, ${P.top}px)`,Q.style.width=`${P.width}px`,Q.style.height=`${P.height}px`})}}};return document.addEventListener("mousemove",o,{passive:!0}),()=>document.removeEventListener("mousemove",o)},[S,b,Se,Jt]),d.useEffect(()=>{if(!S)return;const o=r=>{const _=Se,p=he.current;if(Se&&p){wt.current=!0;const m=Math.min(p.x,r.clientX),g=Math.min(p.y,r.clientY),x=Math.max(p.x,r.clientX),k=Math.max(p.y,r.clientY),C=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(N=>{if(!(N instanceof HTMLElement)||le(N,"[data-feedback-toolbar]")||le(N,"[data-annotation-marker]"))return;const w=N.getBoundingClientRect();w.width>window.innerWidth*.8&&w.height>window.innerHeight*.5||w.width<10||w.height<10||w.left<x&&w.right>m&&w.top<k&&w.bottom>g&&C.push({element:N,rect:w})});const j=C.filter(({element:N})=>!C.some(({element:w})=>w!==N&&N.contains(w))),E=r.clientX/window.innerWidth*100,B=r.clientY+window.scrollY;if(j.length>0){const N=j.reduce((ee,{rect:R})=>({left:Math.min(ee.left,R.left),top:Math.min(ee.top,R.top),right:Math.max(ee.right,R.right),bottom:Math.max(ee.bottom,R.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),w=j.slice(0,5).map(({element:ee})=>Rt(ee).name).join(", "),ce=j.length>5?` +${j.length-5} more`:"",re=j[0].element,Le=Nt(re),J=Et(re);z({x:E,y:B,clientY:r.clientY,element:`${j.length} elements: ${w}${ce}`,elementPath:"multi-select",boundingBox:{x:N.left,y:N.top+window.scrollY,width:N.right-N.left,height:N.bottom-N.top},isMultiSelect:!0,fullPath:Mt(re),accessibility:$t(re),computedStyles:J,computedStylesObj:Le,nearbyElements:It(re),cssClasses:ct(re),nearbyText:it(re),sourceFile:Bt(re)})}else{const N=Math.abs(x-m),w=Math.abs(k-g);N>20&&w>20&&z({x:E,y:B,clientY:r.clientY,element:"Area selection",elementPath:`region at (${Math.round(m)}, ${Math.round(g)})`,boundingBox:{x:m,y:g+window.scrollY,width:N,height:w},isMultiSelect:!0})}_e(null)}else _&&(wt.current=!0);Ze.current=null,he.current=null,Dn(!1),at.current&&(at.current.innerHTML="")};return document.addEventListener("mouseup",o),()=>document.removeEventListener("mouseup",o)},[S,Se]);const fe=d.useCallback(async(o,r,_)=>{const p=L.webhookUrl||X;if(!p||!L.webhooksEnabled&&!_)return!1;try{return(await fetch(p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:o,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...r})})).ok}catch(m){return console.warn("[Agentation] Webhook failed:",m),!1}},[X,L.webhookUrl,L.webhooksEnabled]),To=d.useCallback(o=>{var _;if(!b)return;const r={id:Date.now().toString(),x:b.x,y:b.y,comment:o,element:b.element,elementPath:b.elementPath,timestamp:Date.now(),selectedText:b.selectedText,boundingBox:b.boundingBox,nearbyText:b.nearbyText,cssClasses:b.cssClasses,isMultiSelect:b.isMultiSelect,isFixed:b.isFixed,fullPath:b.fullPath,accessibility:b.accessibility,computedStyles:b.computedStyles,nearbyElements:b.nearbyElements,reactComponents:b.reactComponents,sourceFile:b.sourceFile,elementBoundingBoxes:b.elementBoundingBoxes,...y&&ie?{sessionId:ie,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};oe(p=>[...p,r]),kt.current=r.id,W(()=>{kt.current=null},300),W(()=>{ot(p=>new Set(p).add(r.id))},250),l==null||l(r),fe("annotation.add",{annotation:r}),xt(!0),W(()=>{z(null),xt(!1)},150),(_=window.getSelection())==null||_.removeAllRanges(),y&&ie&&Pt(y,ie,r).then(p=>{p.id!==r.id&&(oe(m=>m.map(g=>g.id===r.id?{...g,id:p.id}:g)),ot(m=>{const g=new Set(m);return g.delete(r.id),g.add(p.id),g}))}).catch(p=>{console.warn("[Agentation] Failed to sync annotation:",p)})},[b,l,fe,y,ie]),Bo=d.useCallback(()=>{xt(!0),W(()=>{z(null),xt(!1)},150)},[]),Gt=d.useCallback(o=>{const r=M.findIndex(p=>p.id===o),_=M[r];($==null?void 0:$.id)===o&&(Qe(!0),W(()=>{tt(null),ke(null),Te([]),Qe(!1)},150)),kn(o),bt(p=>new Set(p).add(o)),_&&(u==null||u(_),fe("annotation.delete",{annotation:_})),y&&io(y,o).catch(p=>{console.warn("[Agentation] Failed to delete annotation from server:",p)}),W(()=>{oe(p=>p.filter(m=>m.id!==o)),bt(p=>{const m=new Set(p);return m.delete(o),m}),kn(null),r<M.length-1&&(Cn(r),W(()=>Cn(null),200))},150)},[M,$,u,fe,y]),vt=d.useCallback(o=>{var r;if(tt(o),Ot(null),Pe(null),et([]),(r=o.elementBoundingBoxes)!=null&&r.length){const _=[];for(const p of o.elementBoundingBoxes){const m=p.x+p.width/2,g=p.y+p.height/2-window.scrollY,x=Ge(m,g);x&&_.push(x)}Te(_),ke(null)}else if(o.boundingBox){const _=o.boundingBox,p=_.x+_.width/2,m=o.isFixed?_.y+_.height/2:_.y+_.height/2-window.scrollY,g=Ge(p,m);if(g){const x=g.getBoundingClientRect(),k=x.width/_.width,C=x.height/_.height;k<.5||C<.5?ke(null):ke(g)}else ke(null);Te([])}else ke(null),Te([])},[]),St=d.useCallback(o=>{var r;if(!o){Ot(null),Pe(null),et([]);return}if(Ot(o.id),(r=o.elementBoundingBoxes)!=null&&r.length){const _=[];for(const p of o.elementBoundingBoxes){const m=p.x+p.width/2,g=p.y+p.height/2-window.scrollY,k=document.elementsFromPoint(m,g).find(C=>!C.closest("[data-annotation-marker]")&&!C.closest("[data-agentation-root]"));k&&_.push(k)}et(_),Pe(null)}else if(o.boundingBox){const _=o.boundingBox,p=_.x+_.width/2,m=o.isFixed?_.y+_.height/2:_.y+_.height/2-window.scrollY,g=Ge(p,m);if(g){const x=g.getBoundingClientRect(),k=x.width/_.width,C=x.height/_.height;k<.5||C<.5?Pe(null):Pe(g)}else Pe(null);et([])}else Pe(null),et([])},[]),Ro=d.useCallback(o=>{if(!$)return;const r={...$,comment:o};oe(_=>_.map(p=>p.id===$.id?r:p)),i==null||i(r),fe("annotation.update",{annotation:r}),y&&vs(y,$.id,{comment:o}).catch(_=>{console.warn("[Agentation] Failed to update annotation on server:",_)}),Qe(!0),W(()=>{tt(null),ke(null),Te([]),Qe(!1)},150)},[$,i,fe,y]),Ao=d.useCallback(()=>{Qe(!0),W(()=>{tt(null),ke(null),Te([]),Qe(!1)},150)},[]),We=d.useCallback(()=>{const o=M.length;if(o===0)return;c==null||c(M),fe("annotations.clear",{annotations:M}),y&&Promise.all(M.map(_=>io(y,_.id).catch(p=>{console.warn("[Agentation] Failed to delete annotation from server:",p)}))),bn(!0),fn(!0);const r=o*30+200;W(()=>{oe([]),ot(new Set),localStorage.removeItem(At(D)),bn(!1)},r),W(()=>fn(!1),1500)},[D,M,c,fe,y]),qt=d.useCallback(async()=>{const o=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:D,r=po(M,o,L.outputDetail,Ce);if(r){if(U)try{await navigator.clipboard.writeText(r)}catch{}h==null||h(r),pe(!0),W(()=>pe(!1),2e3),L.autoClearAfterCopy&&W(()=>We(),500)}},[M,D,L.outputDetail,Ce,L.autoClearAfterCopy,We,U,h]),en=d.useCallback(async()=>{const o=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:D,r=po(M,o,L.outputDetail,Ce);if(!r)return;v&&v(r,M),Ht("sending"),await new Promise(p=>W(p,150));const _=await fe("submit",{output:r,annotations:M},!0);Ht(_?"sent":"failed"),W(()=>Ht("idle"),2500),_&&L.autoClearAfterCopy&&W(()=>We(),500)},[v,fe,M,D,L.outputDetail,Ce,L.autoClearAfterCopy,We]);d.useEffect(()=>{if(!Ue)return;const o=10,r=p=>{const m=p.clientX-Ue.x,g=p.clientY-Ue.y,x=Math.sqrt(m*m+g*g);if(!ve&&x>o&&Wn(!0),ve||x>o){let k=Ue.toolbarX+m,C=Ue.toolbarY+g;const I=20,j=297,E=44,N=j-(S?ne==="connected"?297:257:44),w=I-N,ce=window.innerWidth-I-j;k=Math.max(w,Math.min(ce,k)),C=Math.max(I,Math.min(window.innerHeight-E-I,C)),Zt({x:k,y:C})}},_=()=>{ve&&(Vt.current=!0),Wn(!1),Fn(null)};return document.addEventListener("mousemove",r),document.addEventListener("mouseup",_),()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",_)}},[Ue,ve,S,ne]);const Wo=d.useCallback(o=>{if(o.target.closest("button")||o.target.closest(`.${a.settingsPanel}`))return;const r=o.currentTarget.parentElement;if(!r)return;const _=r.getBoundingClientRect(),p=(O==null?void 0:O.x)??_.left,m=(O==null?void 0:O.y)??_.top,g=(Math.random()-.5)*10;Eo(g),Fn({x:o.clientX,y:o.clientY,toolbarX:p,toolbarY:m})},[O]);if(d.useEffect(()=>{if(!O)return;const o=()=>{let m=O.x,g=O.y;const C=20-(297-(S?ne==="connected"?297:257:44)),I=window.innerWidth-20-297;m=Math.max(C,Math.min(I,m)),g=Math.max(20,Math.min(window.innerHeight-44-20,g)),(m!==O.x||g!==O.y)&&Zt({x:m,y:g})};return o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[O,S,ne]),d.useEffect(()=>{const o=r=>{const _=r.target,p=_.tagName==="INPUT"||_.tagName==="TEXTAREA"||_.isContentEditable;if(r.key==="Escape"){if(V.length>0){Xe([]);return}b||S&&(se(),K(!1))}if((r.metaKey||r.ctrlKey)&&r.shiftKey&&(r.key==="f"||r.key==="F")){r.preventDefault(),se(),K(m=>!m);return}if(!(p||r.metaKey||r.ctrlKey)&&((r.key==="p"||r.key==="P")&&(r.preventDefault(),se(),Kt()),(r.key==="h"||r.key==="H")&&M.length>0&&(r.preventDefault(),se(),je(m=>!m)),(r.key==="c"||r.key==="C")&&M.length>0&&(r.preventDefault(),se(),qt()),(r.key==="x"||r.key==="X")&&M.length>0&&(r.preventDefault(),se(),We()),r.key==="s"||r.key==="S")){const m=be(L.webhookUrl)||be(X||"");M.length>0&&m&&we==="idle"&&(r.preventDefault(),se(),en())}};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[S,b,M.length,L.webhookUrl,X,we,en,Kt,qt,We,V]),!Z||He)return null;const Ve=M.length>0,Lt=M.filter(o=>!On.has(o.id)&&Ne(o)),Kn=M.filter(o=>On.has(o.id)),Gn=o=>{const g=o.x/100*window.innerWidth,x=typeof o.y=="string"?parseFloat(o.y):o.y,k={};window.innerHeight-x-22-10<80&&(k.top="auto",k.bottom="calc(100% + 10px)");const I=g-200/2,j=10;if(I<j){const E=j-I;k.left=`calc(50% + ${E}px)`}else if(I+200>window.innerWidth-j){const E=I+200-(window.innerWidth-j);k.left=`calc(50% - ${E}px)`}return k};return go.createPortal(t.jsxs("div",{ref:De,style:{display:"contents"},"data-agentation-theme":Ie?"dark":"light","data-agentation-accent":L.annotationColorId,children:[t.jsx("div",{className:`${a.toolbar}${q?` ${q}`:""}`,"data-feedback-toolbar":!0,style:O?{left:O.x,top:O.y,right:"auto",bottom:"auto"}:void 0,children:t.jsxs("div",{className:`${a.toolbarContainer} ${S?a.expanded:a.collapsed} ${Tn?a.entrance:""} ${Oe?a.hiding:""} ${ve?a.dragging:""} ${!L.webhooksEnabled&&(be(L.webhookUrl)||be(X||""))?a.serverConnected:""}`,onClick:S?void 0:o=>{if(Vt.current){Vt.current=!1,o.preventDefault();return}K(!0)},onMouseDown:Wo,role:S?void 0:"button",tabIndex:S?-1:0,title:S?void 0:"Start feedback mode",style:{...ve&&{transform:`scale(1.05) rotate(${No}deg)`,cursor:"grabbing"}},children:[t.jsxs("div",{className:`${a.toggleContent} ${S?a.hidden:a.visible}`,children:[t.jsx(Vo,{size:24}),Ve&&t.jsx("span",{className:`${a.badge} ${S?a.fadeOut:""} ${Tn?a.entrance:""}`,children:M.length})]}),t.jsxs("div",{className:`${a.controlsContent} ${S?a.visible:a.hidden} ${O&&O.y<100?a.tooltipBelow:""} ${vo||nt?a.tooltipsHidden:""} ${$n?a.tooltipsInSession:""}`,onMouseEnter:Lo,onMouseLeave:jo,children:[t.jsxs("div",{className:`${a.buttonWrapper} ${O&&O.x<120?a.buttonWrapperAlignLeft:""}`,children:[t.jsx("button",{className:a.controlButton,onClick:o=>{o.stopPropagation(),se(),Kt()},"data-active":ue,children:t.jsx(es,{size:24,isPaused:ue})}),t.jsxs("span",{className:a.buttonTooltip,children:[ue?"Resume animations":"Pause animations",t.jsx("span",{className:a.shortcut,children:"P"})]})]}),t.jsxs("div",{className:a.buttonWrapper,children:[t.jsx("button",{className:a.controlButton,onClick:o=>{o.stopPropagation(),se(),je(!Ee)},disabled:!Ve,children:t.jsx(qo,{size:24,isOpen:Ee})}),t.jsxs("span",{className:a.buttonTooltip,children:[Ee?"Hide markers":"Show markers",t.jsx("span",{className:a.shortcut,children:"H"})]})]}),t.jsxs("div",{className:a.buttonWrapper,children:[t.jsx("button",{className:`${a.controlButton} ${Me?a.statusShowing:""}`,onClick:o=>{o.stopPropagation(),se(),qt()},disabled:!Ve,"data-active":Me,children:t.jsx(Ko,{size:24,copied:Me})}),t.jsxs("span",{className:a.buttonTooltip,children:["Copy feedback",t.jsx("span",{className:a.shortcut,children:"C"})]})]}),t.jsxs("div",{className:`${a.buttonWrapper} ${a.sendButtonWrapper} ${S&&!L.webhooksEnabled&&(be(L.webhookUrl)||be(X||""))?a.sendButtonVisible:""}`,children:[t.jsxs("button",{className:`${a.controlButton} ${we==="sent"||we==="failed"?a.statusShowing:""}`,onClick:o=>{o.stopPropagation(),se(),en()},disabled:!Ve||!be(L.webhookUrl)&&!be(X||"")||we==="sending","data-no-hover":we==="sent"||we==="failed",tabIndex:be(L.webhookUrl)||be(X||"")?0:-1,children:[t.jsx(Go,{size:24,state:we}),Ve&&we==="idle"&&t.jsx("span",{className:a.buttonBadge,children:M.length})]}),t.jsxs("span",{className:a.buttonTooltip,children:["Send Annotations",t.jsx("span",{className:a.shortcut,children:"S"})]})]}),t.jsxs("div",{className:a.buttonWrapper,children:[t.jsx("button",{className:a.controlButton,onClick:o=>{o.stopPropagation(),se(),We()},disabled:!Ve,"data-danger":!0,children:t.jsx(ns,{size:24})}),t.jsxs("span",{className:a.buttonTooltip,children:["Clear all",t.jsx("span",{className:a.shortcut,children:"X"})]})]}),t.jsxs("div",{className:a.buttonWrapper,children:[t.jsx("button",{className:a.controlButton,onClick:o=>{o.stopPropagation(),se(),zt(!nt)},children:t.jsx(ts,{size:24})}),y&&ne!=="disconnected"&&t.jsx("span",{className:`${a.mcpIndicator} ${a[ne]} ${nt?a.hidden:""}`,title:ne==="connected"?"MCP Connected":"MCP Connecting..."}),t.jsx("span",{className:a.buttonTooltip,children:"Settings"})]}),t.jsx("div",{className:a.divider}),t.jsxs("div",{className:`${a.buttonWrapper} ${O&&typeof window<"u"&&O.x>window.innerWidth-120?a.buttonWrapperAlignRight:""}`,children:[t.jsx("button",{className:a.controlButton,onClick:o=>{o.stopPropagation(),se(),K(!1)},children:t.jsx(os,{size:24})}),t.jsxs("span",{className:a.buttonTooltip,children:["Exit",t.jsx("span",{className:a.shortcut,children:"Esc"})]})]})]}),t.jsx("div",{className:`${a.settingsPanel} ${Co?a.enter:a.exit}`,onClick:o=>o.stopPropagation(),style:O&&O.y<230?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,children:t.jsxs("div",{className:a.settingsPanelContainer,children:[t.jsxs("div",{className:`${a.settingsPage} ${En==="automations"?a.slideLeft:""}`,children:[t.jsxs("div",{className:a.settingsHeader,children:[t.jsxs("span",{className:a.settingsBrand,children:[t.jsx("span",{className:a.settingsBrandSlash,children:"/"}),"agentation"]}),t.jsxs("span",{className:a.settingsVersion,children:["v","2.3.3"]}),t.jsx("button",{className:a.themeToggle,onClick:Io,title:Ie?"Switch to light mode":"Switch to dark mode",children:t.jsx("span",{className:a.themeIconWrapper,children:t.jsx("span",{className:a.themeIcon,children:Ie?t.jsx(ss,{size:20}):t.jsx(rs,{size:20})},Ie?"sun":"moon")})})]}),t.jsxs("div",{className:a.settingsSection,children:[t.jsxs("div",{className:a.settingsRow,children:[t.jsxs("div",{className:a.settingsLabel,children:["Output Detail",t.jsx(Ke,{content:"Controls how much detail is included in the copied output"})]}),t.jsxs("button",{className:a.cycleButton,onClick:()=>{const r=(mt.findIndex(_=>_.value===L.outputDetail)+1)%mt.length;Re(_=>({..._,outputDetail:mt[r].value}))},children:[t.jsx("span",{className:a.cycleButtonText,children:(qn=mt.find(o=>o.value===L.outputDetail))==null?void 0:qn.label},L.outputDetail),t.jsx("span",{className:a.cycleDots,children:mt.map((o,r)=>t.jsx("span",{className:`${a.cycleDot} ${L.outputDetail===o.value?a.active:""}`},o.value))})]})]}),t.jsxs("div",{className:`${a.settingsRow} ${a.settingsRowMarginTop} ${a.settingsRowDisabled}`,children:[t.jsxs("div",{className:a.settingsLabel,children:["React Components",t.jsx(Ke,{content:"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),t.jsxs("label",{className:`${a.toggleSwitch} ${a.disabled}`,children:[t.jsx("input",{type:"checkbox",checked:Rn,disabled:!Rn,onChange:()=>Re(o=>({...o,reactEnabled:!o.reactEnabled}))}),t.jsx("span",{className:a.toggleSlider})]})]}),t.jsxs("div",{className:`${a.settingsRow} ${a.settingsRowMarginTop}`,children:[t.jsxs("div",{className:a.settingsLabel,children:["Hide Until Restart",t.jsx(Ke,{content:"Hides the toolbar until you open a new tab"})]}),t.jsxs("label",{className:a.toggleSwitch,children:[t.jsx("input",{type:"checkbox",checked:!1,onChange:o=>{o.target.checked&&Po()}}),t.jsx("span",{className:a.toggleSlider})]})]})]}),t.jsxs("div",{className:a.settingsSection,children:[t.jsx("div",{className:`${a.settingsLabel} ${a.settingsLabelMarker}`,children:"Marker Color"}),t.jsx("div",{className:a.colorOptions,children:pt.map(o=>t.jsx("div",{role:"button",onClick:()=>Re(r=>({...r,annotationColorId:o.id})),style:{"--swatch":o.srgb,"--swatch-p3":o.p3},className:`${a.colorOptionRing} ${L.annotationColorId===o.id?a.selected:""}`,children:t.jsx("div",{className:`${a.colorOption} ${L.annotationColorId===o.id?a.selected:""}`,title:o.label})},o.id))})]}),t.jsxs("div",{className:a.settingsSection,children:[t.jsxs("label",{className:a.settingsToggle,children:[t.jsx("input",{type:"checkbox",id:"autoClearAfterCopy",checked:L.autoClearAfterCopy,onChange:o=>Re(r=>({...r,autoClearAfterCopy:o.target.checked}))}),t.jsx("label",{className:`${a.customCheckbox} ${L.autoClearAfterCopy?a.checked:""}`,htmlFor:"autoClearAfterCopy",children:L.autoClearAfterCopy&&t.jsx(oo,{size:14})}),t.jsxs("span",{className:a.toggleLabel,children:["Clear on copy/send",t.jsx(Ke,{content:"Automatically clear annotations after copying"})]})]}),t.jsxs("label",{className:`${a.settingsToggle} ${a.settingsToggleMarginBottom}`,children:[t.jsx("input",{type:"checkbox",id:"blockInteractions",checked:L.blockInteractions,onChange:o=>Re(r=>({...r,blockInteractions:o.target.checked}))}),t.jsx("label",{className:`${a.customCheckbox} ${L.blockInteractions?a.checked:""}`,htmlFor:"blockInteractions",children:L.blockInteractions&&t.jsx(oo,{size:14})}),t.jsx("span",{className:a.toggleLabel,children:"Block page interactions"})]})]}),t.jsx("div",{className:`${a.settingsSection} ${a.settingsSectionExtraPadding}`,children:t.jsxs("button",{className:a.settingsNavLink,onClick:()=>Xt("automations"),children:[t.jsx("span",{children:"Manage MCP & Webhooks"}),t.jsxs("span",{className:a.settingsNavLinkRight,children:[y&&ne!=="disconnected"&&t.jsx("span",{className:`${a.mcpNavIndicator} ${a[ne]}`}),t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})})]}),t.jsxs("div",{className:`${a.settingsPage} ${a.automationsPage} ${En==="automations"?a.slideIn:""}`,children:[t.jsxs("button",{className:a.settingsBackButton,onClick:()=>Xt("main"),children:[t.jsx(ls,{size:16}),t.jsx("span",{children:"Manage MCP & Webhooks"})]}),t.jsxs("div",{className:a.settingsSection,children:[t.jsxs("div",{className:a.settingsRow,children:[t.jsxs("span",{className:a.automationHeader,children:["MCP Connection",t.jsx(Ke,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),y&&t.jsx("div",{className:`${a.mcpStatusDot} ${a[ne]}`,title:ne==="connected"?"Connected":ne==="connecting"?"Connecting...":"Disconnected"})]}),t.jsxs("p",{className:a.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",t.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:a.learnMoreLink,children:"Learn more"})]})]}),t.jsxs("div",{className:`${a.settingsSection} ${a.settingsSectionGrow}`,children:[t.jsxs("div",{className:a.settingsRow,children:[t.jsxs("span",{className:a.automationHeader,children:["Webhooks",t.jsx(Ke,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),t.jsxs("div",{className:a.autoSendRow,children:[t.jsx("span",{className:`${a.autoSendLabel} ${L.webhooksEnabled?a.active:""}`,children:"Auto-Send"}),t.jsxs("label",{className:`${a.toggleSwitch} ${L.webhookUrl?"":a.disabled}`,children:[t.jsx("input",{type:"checkbox",checked:L.webhooksEnabled,disabled:!L.webhookUrl,onChange:()=>Re(o=>({...o,webhooksEnabled:!o.webhooksEnabled}))}),t.jsx("span",{className:a.toggleSlider})]})]})]}),t.jsx("p",{className:a.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),t.jsx("textarea",{className:a.webhookUrlInput,placeholder:"Webhook URL",value:L.webhookUrl,onKeyDown:o=>o.stopPropagation(),onChange:o=>Re(r=>({...r,webhookUrl:o.target.value}))})]})]})]})})]})}),t.jsxs("div",{className:a.markersLayer,"data-feedback-toolbar":!0,children:[me&&Lt.filter(o=>!o.isFixed).map((o,r)=>{const _=!G&&ft===o.id,p=wn===o.id,m=(_||p)&&!$,g=o.isMultiSelect,x=g?"var(--agentation-color-green)":"var(--agentation-color-accent)",k=M.findIndex(E=>E.id===o.id),C=!Hn.has(o.id),I=G?a.exit:yn?a.clearing:C?a.enter:"",j=m&&L.markerClickBehavior==="delete";return t.jsxs("div",{className:`${a.marker} ${g?a.multiSelect:""} ${I} ${j?a.hovered:""}`,"data-annotation-marker":!0,style:{left:`${o.x}%`,top:o.y,backgroundColor:j?void 0:x,animationDelay:G?`${(Lt.length-1-r)*20}ms`:`${r*20}ms`},onMouseEnter:()=>!G&&o.id!==kt.current&&St(o),onMouseLeave:()=>St(null),onClick:E=>{E.stopPropagation(),G||(L.markerClickBehavior==="delete"?Gt(o.id):vt(o))},onContextMenu:E=>{L.markerClickBehavior==="delete"&&(E.preventDefault(),E.stopPropagation(),G||vt(o))},children:[m?j?t.jsx(tn,{size:g?18:16}):t.jsx(so,{size:16}):t.jsx("span",{className:yt!==null&&k>=yt?a.renumber:void 0,children:k+1}),_&&!$&&t.jsxs("div",{className:`${a.markerTooltip} ${a.enter}`,style:Gn(o),children:[t.jsxs("span",{className:a.markerQuote,children:[o.element,o.selectedText&&` "${o.selectedText.slice(0,30)}${o.selectedText.length>30?"...":""}"`]}),t.jsx("span",{className:a.markerNote,children:o.comment})]})]},o.id)}),me&&!G&&Kn.filter(o=>!o.isFixed).map(o=>{const r=o.isMultiSelect;return t.jsx("div",{className:`${a.marker} ${a.hovered} ${r?a.multiSelect:""} ${a.exit}`,"data-annotation-marker":!0,style:{left:`${o.x}%`,top:o.y},children:t.jsx(tn,{size:r?12:10})},o.id)})]}),t.jsxs("div",{className:a.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[me&&Lt.filter(o=>o.isFixed).map((o,r)=>{const _=Lt.filter(B=>B.isFixed),p=!G&&ft===o.id,m=wn===o.id,g=(p||m)&&!$,x=o.isMultiSelect,k=x?"var(--agentation-color-green)":"var(--agentation-color-accent)",C=M.findIndex(B=>B.id===o.id),I=!Hn.has(o.id),j=G?a.exit:yn?a.clearing:I?a.enter:"",E=g&&L.markerClickBehavior==="delete";return t.jsxs("div",{className:`${a.marker} ${a.fixed} ${x?a.multiSelect:""} ${j} ${E?a.hovered:""}`,"data-annotation-marker":!0,style:{left:`${o.x}%`,top:o.y,backgroundColor:E?void 0:k,animationDelay:G?`${(_.length-1-r)*20}ms`:`${r*20}ms`},onMouseEnter:()=>!G&&o.id!==kt.current&&St(o),onMouseLeave:()=>St(null),onClick:B=>{B.stopPropagation(),G||(L.markerClickBehavior==="delete"?Gt(o.id):vt(o))},onContextMenu:B=>{L.markerClickBehavior==="delete"&&(B.preventDefault(),B.stopPropagation(),G||vt(o))},children:[g?E?t.jsx(tn,{size:x?18:16}):t.jsx(so,{size:16}):t.jsx("span",{className:yt!==null&&C>=yt?a.renumber:void 0,children:C+1}),p&&!$&&t.jsxs("div",{className:`${a.markerTooltip} ${a.enter}`,style:Gn(o),children:[t.jsxs("span",{className:a.markerQuote,children:[o.element,o.selectedText&&` "${o.selectedText.slice(0,30)}${o.selectedText.length>30?"...":""}"`]}),t.jsx("span",{className:a.markerNote,children:o.comment})]})]},o.id)}),me&&!G&&Kn.filter(o=>o.isFixed).map(o=>{const r=o.isMultiSelect;return t.jsx("div",{className:`${a.marker} ${a.fixed} ${a.hovered} ${r?a.multiSelect:""} ${a.exit}`,"data-annotation-marker":!0,style:{left:`${o.x}%`,top:o.y},children:t.jsx(Qo,{size:r?12:10})},o.id)})]}),S&&t.jsxs("div",{className:a.overlay,"data-feedback-toolbar":!0,style:b||$?{zIndex:99999}:void 0,children:[(te==null?void 0:te.rect)&&!b&&!Ln&&!Se&&t.jsx("div",{className:`${a.hoverHighlight} ${a.enter}`,style:{left:te.rect.left,top:te.rect.top,width:te.rect.width,height:te.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),V.filter(o=>document.contains(o.element)).map((o,r)=>{const _=o.element.getBoundingClientRect(),p=V.length>1;return t.jsx("div",{className:p?a.multiSelectOutline:a.singleSelectOutline,style:{position:"fixed",left:_.left,top:_.top,width:_.width,height:_.height,...p?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},r)}),ft&&!b&&(()=>{var m;const o=M.find(g=>g.id===ft);if(!(o!=null&&o.boundingBox))return null;if((m=o.elementBoundingBoxes)!=null&&m.length)return xn.length>0?xn.filter(g=>document.contains(g)).map((g,x)=>{const k=g.getBoundingClientRect();return t.jsx("div",{className:`${a.multiSelectOutline} ${a.enter}`,style:{left:k.left,top:k.top,width:k.width,height:k.height}},`hover-outline-live-${x}`)}):o.elementBoundingBoxes.map((g,x)=>t.jsx("div",{className:`${a.multiSelectOutline} ${a.enter}`,style:{left:g.x,top:g.y-Be,width:g.width,height:g.height}},`hover-outline-${x}`));const r=Dt&&document.contains(Dt)?Dt.getBoundingClientRect():null,_=r?{x:r.left,y:r.top,width:r.width,height:r.height}:{x:o.boundingBox.x,y:o.isFixed?o.boundingBox.y:o.boundingBox.y-Be,width:o.boundingBox.width,height:o.boundingBox.height},p=o.isMultiSelect;return t.jsx("div",{className:`${p?a.multiSelectOutline:a.singleSelectOutline} ${a.enter}`,style:{left:_.x,top:_.y,width:_.width,height:_.height,...p?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),te&&!b&&!Ln&&!Se&&t.jsxs("div",{className:`${a.hoverTooltip} ${a.enter}`,style:{left:Math.max(8,Math.min(Ye.x,window.innerWidth-100)),top:Math.max(Ye.y-(te.reactComponents?48:32),8)},children:[te.reactComponents&&t.jsx("div",{className:a.hoverReactPath,children:te.reactComponents}),t.jsx("div",{className:a.hoverElementName,children:te.elementName})]}),b&&t.jsxs(t.Fragment,{children:[(eo=b.multiSelectElements)!=null&&eo.length?b.multiSelectElements.filter(o=>document.contains(o)).map((o,r)=>{const _=o.getBoundingClientRect();return t.jsx("div",{className:`${a.multiSelectOutline} ${st?a.exit:a.enter}`,style:{left:_.left,top:_.top,width:_.width,height:_.height}},`pending-multi-${r}`)}):b.targetElement&&document.contains(b.targetElement)?(()=>{const o=b.targetElement.getBoundingClientRect();return t.jsx("div",{className:`${a.singleSelectOutline} ${st?a.exit:a.enter}`,style:{left:o.left,top:o.top,width:o.width,height:o.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():b.boundingBox&&t.jsx("div",{className:`${b.isMultiSelect?a.multiSelectOutline:a.singleSelectOutline} ${st?a.exit:a.enter}`,style:{left:b.boundingBox.x,top:b.boundingBox.y-Be,width:b.boundingBox.width,height:b.boundingBox.height,...b.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const o=b.x,r=b.isFixed?b.y:b.y-Be;return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:`${a.marker} ${a.pending} ${b.isMultiSelect?a.multiSelect:""} ${st?a.exit:a.enter}`,style:{left:`${o}%`,top:r,backgroundColor:b.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:t.jsx(Zo,{size:12})}),t.jsx(ao,{ref:Xn,element:b.element,selectedText:b.selectedText,computedStyles:b.computedStylesObj,placeholder:b.element==="Area selection"?"What should change in this area?":b.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:To,onCancel:Bo,isExiting:st,lightMode:!Ie,accentColor:b.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,o/100*window.innerWidth)),...r>window.innerHeight-290?{bottom:window.innerHeight-r+20}:{top:r+20}}})]})})()]}),$&&t.jsxs(t.Fragment,{children:[(to=$.elementBoundingBoxes)!=null&&to.length?vn.length>0?vn.filter(o=>document.contains(o)).map((o,r)=>{const _=o.getBoundingClientRect();return t.jsx("div",{className:`${a.multiSelectOutline} ${a.enter}`,style:{left:_.left,top:_.top,width:_.width,height:_.height}},`edit-multi-live-${r}`)}):$.elementBoundingBoxes.map((o,r)=>t.jsx("div",{className:`${a.multiSelectOutline} ${a.enter}`,style:{left:o.x,top:o.y-Be,width:o.width,height:o.height}},`edit-multi-${r}`)):(()=>{const o=Yt&&document.contains(Yt)?Yt.getBoundingClientRect():null,r=o?{x:o.left,y:o.top,width:o.width,height:o.height}:$.boundingBox?{x:$.boundingBox.x,y:$.isFixed?$.boundingBox.y:$.boundingBox.y-Be,width:$.boundingBox.width,height:$.boundingBox.height}:null;return r?t.jsx("div",{className:`${$.isMultiSelect?a.multiSelectOutline:a.singleSelectOutline} ${a.enter}`,style:{left:r.x,top:r.y,width:r.width,height:r.height,...$.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),t.jsx(ao,{ref:Un,element:$.element,selectedText:$.selectedText,computedStyles:ys($.computedStyles),placeholder:"Edit your feedback...",initialValue:$.comment,submitLabel:"Save",onSubmit:Ro,onCancel:Ao,onDelete:()=>Gt($.id),isExiting:$o,lightMode:!Ie,accentColor:$.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const o=$.isFixed?$.y:$.y-Be;return{left:Math.max(160,Math.min(window.innerWidth-160,$.x/100*window.innerWidth)),...o>window.innerHeight-290?{bottom:window.innerHeight-o+20}:{top:o+20}}})()})]}),Se&&t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:rt,className:a.dragSelection}),t.jsx("div",{ref:at,className:a.highlightsContainer})]})]})]}),document.body)}export{Cr as Agentation,br as AnimatedBunny,ao as AnnotationPopupCSS,pr as IconChatEllipsis,or as IconCheck,sr as IconCheckSmall,oo as IconCheckSmallAnimated,gr as IconCheckmark,fr as IconCheckmarkCircle,hr as IconCheckmarkLarge,ls as IconChevronLeft,yr as IconChevronRight,Qo as IconClose,rr as IconCopyAlt,Ko as IconCopyAnimated,so as IconEdit,lr as IconEye,ir as IconEyeAlt,qo as IconEyeAnimated,cr as IconEyeClosed,dr as IconEyeMinus,ts as IconGear,Jo as IconHelp,Vo as IconListSparkle,rs as IconMoon,ur as IconPause,_r as IconPauseAlt,es as IconPausePlayAnimated,mr as IconPlayAlt,Zo as IconPlus,ar as IconSendAnimated,Go as IconSendArrow,ss as IconSun,as as IconTrash,ns as IconTrashAlt,tn as IconXmark,os as IconXmarkLarge,Cr as PageFeedbackToolbarCSS,le as closestCrossingShadow,ct as getElementClasses,us as getElementPath,it as getNearbyText,wr as getShadowHost,At as getStorageKey,kr as identifyAnimationElement,Rt as identifyElement,xr as isInShadowDOM,rn as loadAnnotations,bo as saveAnnotations};
