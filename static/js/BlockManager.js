"use strict";

class BlockManager {
    /**
     * A block is simply a substring without spaces. A block is isolated and only 1 user
     * can edit a block at a time. Insertion and Deletion operations on string in editor 
     * maintain track of blocks by wrapping these DOM elements inside <span class="block"> 
     * and </span> tags.
     * @param {string} editorId - used to selet root HTML element of editor
     */
    constructor(editorId) {
        this.editorId = editorId;
    }

    #getBlockList() {
        const editorEl = document.getElementById(this.editorId);
        return editorEl.getElementsByClassName('block');
    }

    /**
     * returns the block with specified index.
     * @param {number} index - block index(0-based) to be retrieved
     * @return {HTMLElement} - block HTML element
     */
    get(index) {
        const blockList = this.#getBlockList();

        if(index<0 || index>=blockList.length)
            throw new Error(`Invalid block index: ${index}`);

        return blockList[index];
    }

    /**
     * sets given HTML content as content of the specified block.
     * @param {number} index - block index(0-based)
     * @param {string} content - HTML content that will be set
     */
    setHTMLAt(index, content) {
        const blockList = this.#getBlockList();
        const block = blockList[index];
        block.innerHTML = content;
    }

    /**
     * insert a new block at given index in DOM.
     * moves the elements at given index to right by 1 position.
     * @param {number} index - block index(0-based)
     */
    insert(index) {
        // create new block element
        const newBlockEl = document.createElement('span');
        newBlockEl.classList.add('block');

        // insert element in DOM
        const editorEl = document.getElementById(this.editorId);
        const targetBlock = this.get(index);
        editorEl.insertBefore(newBlockEl, targetBlock);
    }
 
    /**
     * deletes specified block from DOM.
     * @param {number} index - block index(0-based)
     */
    delete(index) {
        const blockEl = this.get(index);
        blockEl.remove();
    }
}