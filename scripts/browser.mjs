import {chromium} from 'playwright';
export async function launch(){return chromium.launch({headless:true,executablePath:process.env.PLAYWRIGHT_EXECUTABLE_PATH,args:['--no-sandbox']})}
export const base=process.env.REPORT_URL||'http://localhost:3000';
