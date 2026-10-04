import { rmSync } from 'node:fs'

for (const dir of ['build', 'node_modules', 'tsconfig.tsbuildinfo']) {
  rmSync(dir, { recursive: true, force: true });
  console.log("Deleted shared/build/, shared/node_modules/");
}
