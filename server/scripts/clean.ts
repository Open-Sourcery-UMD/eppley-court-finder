import { rmSync } from 'node:fs'

for (const dir of ['dist', 'node_modules', 'tsconfig.tsbuildinfo']) {
  rmSync(dir, { recursive: true, force: true });
  console.log("Deleted server/dist/, server/node_modules/");
}
