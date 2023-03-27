import Block from "./Block.js";

interface IBlockcahin {
    createGenesisBlock: () => Block;
    getLatestBlock: () => Block;
    addBlock: (newBlock: Block) => void;
}

class Blockchain {
    public chain: Block[];
    
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
        this.chain. push(newBlock);
    }

    isChainValid() {
        if (this.chain.length === 1) {
            let genesisBlock = this.chain[0];
            if (genesisBlock.index === 0) 
                return true;
            else
                return false;
        }

        for(let i = 1;  i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) return false;
            if (currentBlock.previousHash !== previousBlock.hash) return false;
        }

        return true;
    }
}

let mzCoin = new Blockchain();
mzCoin.addBlock(new Block(1, "02, 01, 2023", { amount: 4 }));
mzCoin.addBlock(new Block(2, "03, 01, 2023", { amount: 10 }));

console.log("is blockchain valid? " + mzCoin.isChainValid())

mzCoin.chain[1].data = { amount: 200 };

console.log("is blockchain valid? " + mzCoin.isChainValid())
//console.log(JSON.stringify(mzCoin, null, 4));