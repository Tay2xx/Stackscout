'use strict';
// Only enter affiliate links AFTER acceptance to each program. Public client-side configuration.
const affiliateConfig = {
  // Example after approval: chatgpt: {url:'https://approved-network.example/your-tracking-url', program:'Program name', approved:true}
};
const EVENT_KEY='stackscout_click_events_v1';
function safeExternalUrl(value){try{const u=new URL(value);return ['https:','http:'].includes(u.protocol)?u.href:null;}catch{return null;}}
function affiliateDestination(tool){const entry=affiliateConfig[tool.id];if(entry?.approved && safeExternalUrl(entry.url))return {url:safeExternalUrl(entry.url),affiliate:true,program:entry.program||'Affiliate partner'};return {url:tool.url,affiliate:false,program:null};}
function recordOutboundClick(tool,source){const dest=affiliateDestination(tool);const event={timestamp:new Date().toISOString(),toolId:tool.id,source,affiliate:dest.affiliate};try{const list=JSON.parse(localStorage.getItem(EVENT_KEY)||'[]');list.push(event);localStorage.setItem(EVENT_KEY,JSON.stringify(list.slice(-2000)));}catch{}return dest;}
function setOutboundLink(anchor,tool,source){const dest=affiliateDestination(tool);anchor.href=dest.url;anchor.target='_blank';anchor.rel=dest.affiliate?'noopener noreferrer sponsored':'noopener noreferrer';anchor.addEventListener('click',()=>recordOutboundClick(tool,source));if(dest.affiliate){anchor.textContent='Visit partner website ↗';anchor.title='Affiliate link: StackScout may earn a commission';}else{anchor.title='Direct link to vendor website';}}
