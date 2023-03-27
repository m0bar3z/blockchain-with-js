import SHA256 from 'crypto-js/sha256.js';

interface IBlock {
    index: number;
    timestamp: string;
    data: unknown;
    previousHash: string;
    hash: string;
    calculateHash: () => string;
}

class Block implements IBlock {
    index: number;
    timestamp: string;
    data: unknown;
    previousHash: string;
    hash: string;

    constructor(index: number, timestamp: string, data: unknown, previousHash = "") {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString()
    }
 }

 export default Block;