import assert from 'node:assert/strict';
import { createAskCli, formatCommandLine } from '@x12i/ask-cli';
const cli = createAskCli({ catalog: [{ id: 'list-assets', intent: 'assets.list', phrases: ['show assets'], command: { base: 'inventory', args: ['list', '--json'] }, explanation: ['Read the local inventory.'], approval: 'never' }] });
const result = await cli.resolve({ input: 'show assets' });
assert.equal(result.matched, true);
assert.deepEqual(result.command, { base: 'inventory', args: ['list', '--json'] });
assert.equal((await cli.resolve({ input: 'unknown request' })).matched, false);
console.log({ plan: result, command: formatCommandLine(result.command) });
// This example produces a plan; it never spawns the planned command.
