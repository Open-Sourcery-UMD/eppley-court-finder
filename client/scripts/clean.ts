import { rmSync } from 'node:fs'

for (const dir of ['dist', 'node_modules', '.vite']) {
  rmSync(dir, { recursive: true, force: true });
  console.log("Deleted client/dist/, client/node_modules/, client/.vite/");
}
