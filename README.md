# Aptos-Mint-NFT-Collection

## Create New Collection
### Step 1
Create a config file `.config.json`

```
{
  "owner": {
    "privateKey": "",
    "account": ""
  },
  "collectionName": "",
  "tokenName": "",
  "collection_metadata": "",
  "baseUri": ""
  "amountOfNfts": 100,
  "metadataExtension": ".json"
}
```

`owner.privateKey`: The private key of the creator account
`owner.account`: The address of the creator account
`collectionName`: The name of the collection
`tokenName`: The name of the token to which a number will be appended like this `tokenName-0`
`baseUri`: The base URI for the tokens metadata (make sure there is no `/` at the end)
`metadataExtension`: In case the the metadata has an extension in the name for example `.json` if it doesn't leave it empty
`amountOfNfts`: The amount of NFTs to be minted


### Step 2

Run `yarn install`

### Step 3

Run `yarn create-new-collection`
