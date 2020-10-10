"user strict";

class Style {
    /**
     * This class represents any style that can be applied to the text. 
     * @param {EditorPosition} start apply classList of css from this postion
     * @param {EditorPosition} end apply classList of css that ends at this position
     * @param {String[]} classList list of css classes
     * @param {BlockManager} blockManager used to access blocks in DOM
     */
    constructor(start, end, classList, blockManager) {
        this.start = start;
        this.end = end;
        this.classList = classList;
        this.blockManager = blockManager;
    }

    /**
     * returns true if cssClass is found in this style, else returns false.
     * @param {string} cssClass css class to check for
     * @return {Boolean} true if cssClass is found in classList
     */
    hasCSS(cssClass) {
        let found = false;
        let index = 0;
        while(!found && index < this.classList.length)
            found = cssClass == this.classList[index];
        
        return found;
    }

    /**
     * adds given cssClass to this style if it was not already added.
     * @param {string} cssClass css class to be added
     */

    addCSS(cssClass) {
        const found = this.hasCSS(cssClass);
        if(!found)
            this.classList.push(cssClass);
    }
    /**
     * deletes given cssClass from this style if it exists.
     * @param {string} cssClass css class to be deleted
     */
    removeCSS(cssClass) {
        for(let i=0; i<this.classList.length; i++) {
            if(cssClass == this.classList[i]) {
                this.classList.splice(i, 1);
                break;
            }
        }
    }
}