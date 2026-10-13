import {launch,base} from './browser.mjs';
const b=await launch();try{const p=await b.newPage({viewport:{width:1440,height:1000}});await p.goto(base,{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);await p.screenshot({path:'artifacts/qa/desktop-cover.png'});}finally{await b.close()}
