const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { parse } = require('csv-parse/sync');

const VAULT_KEYS_CSV = './vault_keys.csv';
const FILE_TO_UPLOAD = './upload_files/Walrus_Dark.png';

function readVaultsWithKeys() {
  const raw = fs.readFileSync(VAULT_KEYS_CSV, 'utf-8');
  const records = parse(raw, {
    columns: true,
    skip_empty_lines: true,
  });
  return records;
}

async function uploadFileToVault(vaultId, apiKey, filePath) {
  try {
    const fileStream = fs.createReadStream(filePath);
    const stat = fs.statSync(filePath);
    const fileName = path.basename(filePath);

    const res = await axios.post(
      `https://api.tusky.io/uploads?vaultId=${vaultId}`,
      fileStream,
      {
        headers: {
          'Content-Type': 'application/octet-stream',
          'Content-Length': stat.size,
          'Api-Key': apiKey,
          'Content-Disposition': `attachment; filename="${fileName}"`,
        },
      }
    );

    console.log(`Uploaded to Vault ${vaultId}`);
  } catch (err) {
    console.error(`Failed to upload to ${vaultId}:`, err.response?.data || err.message);
  }
}

async function main() {
  const vaults = readVaultsWithKeys();
  const filePath = path.resolve(FILE_TO_UPLOAD);

  if (!fs.existsSync(filePath)) {
    console.error(`File can't be found: ${filePath}`);
    process.exit(1);
  }

  for (const { vaultId, apiKey } of vaults) {
    await uploadFileToVault(vaultId, apiKey, filePath);
  }

  console.log('Uploaded on all vaults');
}

main();
