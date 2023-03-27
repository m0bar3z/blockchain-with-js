import Block from "./Block.js";
class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }
    createGenesisBlock() {
        return new Block(0, "01/01/2023", "Genesis block", "0");
    }
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}
let mzCoin = new Blockchain();
mzCoin.addBlock(new Block(1, "02, 01, 2023", { amount: 4 }));
mzCoin.addBlock(new Block(2, "03, 01, 2023", { amount: 10 }));
console.log(JSON.stringify(mzCoin, null, 4));
