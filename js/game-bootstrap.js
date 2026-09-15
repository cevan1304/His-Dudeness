/* His Dudeness v48 split-file campaign router. */
window.HD_SPLIT_MODE=true;
window.HDSplit=(()=>{
 const KEY='his-dudeness-split-handoff-v1';
 const fileFor=n=>n===1?'index.html':`level${n}.html`;
 function normalizeInventory(v={}){return {
   wealth:Number(v.wealth)||0,
   armor:Math.max(0,Math.min(4,Number(v.armor)||0)),
   sword:v.sword!==false,
   hp:Number(v.hp)>0?Number(v.hp):100,
   maxHP:Number(v.maxHP)>0?Number(v.maxHP):100,
   gun:!!v.gun,
   ammo:Math.max(0,Number(v.ammo)||0)
 };}
 function goNext(after,inventory={},extra={}){
   const to=Number(after)+1;if(to<2||to>8)return false;
   const payload={schema:1,from:Number(after),to,inventory:normalizeInventory(inventory),...extra};
   try{localStorage.setItem(KEY,JSON.stringify(payload));}catch{}
   location.href=fileFor(to);return true;
 }
 function readHandoff(){try{const p=JSON.parse(localStorage.getItem(KEY));return p?.schema===1?p:null}catch{return null}}
 function consume(){const p=readHandoff();if(!p||p.to!==Number(window.HD_SPLIT_LEVEL))return null;try{localStorage.removeItem(KEY)}catch{}return p;}
 function bootHandoff(){
   const p=consume();if(!p)return false;const n=Number(window.HD_SPLIT_LEVEL),inv=normalizeInventory(p.inventory);
   if(n===2){startBridge(inv);return true;}
   if(n===3){startRiver(inv);return true;}
   if(n===4){startForest(inv);return true;}
   if(n===5){startSawmill(inv);return true;}
   if(n===6){startCity(inv);return true;}
   if(n===7){startDungeonLevel(p.dungeonEntry||dungeonCampaignEntry());return true;}
   if(n===8){castle8Entry={wealth:inv.wealth,armor:inv.armor,hasSword:inv.sword,hp:inv.hp,gun:inv.gun,ammo:inv.ammo};startCastle8Campaign();return true;}
   return false;
 }
 function jumpTo(n){n=Number(n);if(n<1||n>8)return false;location.href=fileFor(n);return true;}
 return {goNext,bootHandoff,jumpTo,fileFor};
})();
if(!location.hash)history.replaceState(null,'','#level1');
window.DUNGEON_STANDALONE=false;window.CASTLE8_STANDALONE=false;window.CAMPAIGN_CLEAN=true;
