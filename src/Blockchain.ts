import Block from "./Block.js";

interface IBlockcahin {
    createGenesisBlock: () => Block;
    getLatestBlock: () => Block;
    addBlock: (newBlock: Block) => void;
}

class Blockchain {
    private chain: Block[];
    
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    private createGenesisBlock() {
        return new Block(0, "01/01/2023", "Genesis block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock: Block) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

let mzCoin = new Blockchain();
mzCoin.addBlock(new Block(1, "02, 01, 2023", { amount: 4 }));
mzCoin.addBlock(new Block(2, "03, 01, 2023", { amount: 10 }));

console.log(JSON.stringify(mzCoin, null, 4));