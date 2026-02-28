import { PublicKey, Connection, Keypair } from '@solana/web3.js';
import bs58 from 'bs58';

export const rayFee = new PublicKey('7YttLkHDoNj9wyDur5pM1ejNaAvT9X4eqaYcHQqtj2G5');
export const tipAcct = new PublicKey('Cw8CFyM9FkoMi7K7Crf6HNQqf4uEMzpKw6QNghXLvLkY');
export const RayLiqPoolv4 = new PublicKey('675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8');

// DEVNET CONFIG
export const connection = new Connection('http://127.0.0.1:8899', {
  commitment: 'confirmed',
});

export const wallet = Keypair.fromSecretKey(
  bs58.decode(
    '3c2a7KXo4726X1PM5Px4NVNEyT4XGiWrkcQr5ErKNTf2nC4uWxiBPizjMRmPyKTieVPJ8tSgLKnqvqx9M9zdjJYw'
  )
);
