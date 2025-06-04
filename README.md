# Tusky Upload Automation

Automate file uploads to Tusky.io with this Node.js script.

## Prerequisites

- Node.js installed on your system
- Tusky.io account with API access
- Valid vault credentials

## Installation

1. **Initialize the project and install dependencies:**
   ```bash
   npm init -y
   npm install axios form-data fs path
   ```

## Configuration

2. **Prepare your files:**
   - Copy the files you want to upload to the `./upload_files/` directory
   - Example: Place `Example.mp4` in `./upload_files/Example.mp4`

3. **Update the upload script:**
   - Open `bulkUpload.js`
   - Find the line: `const FILE_TO_UPLOAD = './upload_files/[replace]';`
   - Replace `[replace]` with your actual filename
   - Example: `const FILE_TO_UPLOAD = './upload_files/Example.mp4';`

4. **Configure vault credentials:**
   - Open `vault_keys.csv`
   - Add your vault information in the format: `VaultID,API_KEY`
   - Example: `6d93a593-259d-4821-a911-bd22b2c6063a,your_api_key_here`

## Usage

5. **Run the upload script:**
   ```bash
   node bulkUpload.js
   ```

## File Structure

```
tusky_upload_automation/
├── upload_files/          # Place your files here
│   └── Example.mp4
├── bulkUpload.js         # Main upload script
├── vault_keys.csv        # Vault credentials
├── package.json
└── README.md