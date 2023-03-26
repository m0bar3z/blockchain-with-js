import SHA256 from 'crypto-js/sha256';

class Block {
    private index: string;
    private timestamp: string;
    private data: Record<string, unknown>;
    private previousHash: string;
    private hash: string;

    constructor(index: string, timestamp: string, data: Record<string, unknown>, previousHash = "") {
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