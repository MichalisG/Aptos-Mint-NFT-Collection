const {
  AptosClient,
  AptosAccount,
  TokenClient,
} = require("aptos");
const {
  owner,
  collectionName,
  tokenName,
  collection_metadata,
  baseUri,
  amountOfNfts,
  metadataExtension = ''
} = require('../.config.json');

const NODE_URL = process.env.APTOS_NODE_URL || "https://fullnode.mainnet.aptoslabs.com";

const createNftAndMintToUser = async (client, recipient, amount = 100) => {
  console.log('Minting Collection ', collectionName)
  const tokenClient = new TokenClient(client);

  // Create the collection.
  const txnHash1 = await tokenClient.createCollection(
    recipient,
    collectionName,
    collectionName,
    collection_metadata,
  );
  await client.waitForTransaction(txnHash1, { checkSuccess: true });

  for(let i = 1 ; i <= amount; i++) {
    console.log('Minting nft ',  `${tokenName}-${i}`)
    console.log('Base URI ', `${baseUri}/${i}${metadataExtension}`)
    // Create a token in that collection.
    const txnHash2 = await tokenClient.createToken(
      recipient,
      collectionName,
      `${tokenName}-${i}`,
      `${tokenName}-${i}`,
      1,
      `${baseUri}/${i}${metadataExtension}`,
    );
    await client.waitForTransaction(txnHash2, { checkSuccess: true });
  }
}

const main = async () => {
  const client = new AptosClient(NODE_URL);

  const ownerAccountObject = {
    address: owner.account,
    publicKeyHex: owner.publicKey,
    privateKeyHex: owner.privateKey,
  }

  const collectionOwner = AptosAccount.fromAptosAccountObject(ownerAccountObject);

  await createNftAndMintToUser(client, collectionOwner, amountOfNfts)
}

main()
