import fs from 'node:fs';
import assert from 'node:assert/strict';
export function validate(d) {
 for (const key of ['meta','executiveSummary','labs','dimensions','sources','claims','insights','recommendations','limitations','loop','benchmarkResults']) assert.ok(d[key],`Missing ${key}`);
 const ids=new Set(d.sources.map(s=>s.id)); assert.equal(ids.size,d.sources.length,'Duplicate source ID');
 for (const s of d.sources) {for(const k of ['id','title','publisher','publishedAt','accessedAt','sourceType','sections','limitations']) assert.ok(s[k],`${s.id} missing ${k}`);assert.ok(s.url.startsWith('https://')); if (!s.publishedAt.startsWith('unknown')) assert.ok(s.publishedAt<=d.meta.publicationCutoff,'Post-cutoff source');}
 const all=[...d.claims,...d.insights,...d.recommendations,...d.executiveSummary,d.loop];
 for(const c of all){assert.ok(c.sourceIds.length,'Missing evidence');for(const id of c.sourceIds) assert.ok(ids.has(id),`Unknown source ${id}`);}
 assert.equal(d.labs.length,4); assert.deepEqual(d.labs.map(l=>l.name),['OpenAI','Anthropic','Google DeepMind','Meta']);assert.equal(d.dimensions.length,3);
 for(const l of d.labs)for(const dim of d.dimensions) {const cells=d.claims.filter(c=>c.lab===l.name&&c.dimension===dim.id);assert.equal(cells.length,1,'Missing/duplicate matrix cell');assert.ok(cells[0].brief&&cells[0].caveat);assert.ok(['documented','qualified','not-publicly-disclosed'].includes(cells[0].evidenceStatus));}
 for(const k of ['executiveSummary','insights','recommendations'])assert.equal(d[k].length,3);
 for(const r of d.recommendations)for(const k of ['evidenceSignal','whyItMatters','hypothesis','suggestedTest','metric','limitation','risk','briefTest'])assert.ok(r[k],`${r.id}: ${k}`);
 const words=d.meta.methodologySummary.split(/\s+/).length;assert.ok(words>=120&&words<=180,`Method length ${words}`);
 assert.equal(d.benchmarkResults.length,0,'Numerical results require evaluation metadata');
 assert.ok(!/\blatest (model|release)\b/i.test(JSON.stringify(d)),'Unsupported latest claim');
 return `${d.sources.length} sources; 12 cells; 3 findings/insights/priorities; ${words}-word method; all citations resolve`;
}
const data=JSON.parse(fs.readFileSync(new URL('../data/research.json',import.meta.url)));console.log(validate(data));
