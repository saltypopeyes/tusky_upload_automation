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
   - Create a folder named `upload_files`
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
```

## Important Note
If you have over 2+ to XX accounts, it'll take you a little time to create `vault` on Tusky.io and generate your `API_KEY` to paste it inside the `vault_keys.csv`

For example in `vault_keys.csv`

```
## Account 1
6d93a593-259d-4821-a911-bd22b2c6063a,API_ACCOUNT_1

## Account 2
44c15cf2-9f4d-4d7d-881c-de7af244d288,API_ACCOUNT_2

## Account 3
6d93a593-259d-4821-a911-bd22b2c6063a,API_ACCOUNT_3
```

Tutorial
https://www.youtube.com/watch?v=M14GhXKbR9Q&feature=youtu.be




