import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`Finished! We've loaded our keypair securely, using an env file!`); 
console.log(`Our public key is : ${keypair.publicKey.toBase58()}`);