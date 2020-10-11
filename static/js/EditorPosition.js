"user strict";

class EditorPosition {
    /**
     * This represents the position with respect to blocks and string inside blocks.
     * @param {number} blockIndex - block is a substring bounded by spaces.
     * @param {number} strIndex - index inside the specified block;
     */
    constructor(blockIndex, strIndex) {
        this.blockIndex = blockIndex;
        this.strIndex = strIndex;
    }
}