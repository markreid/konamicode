/**
 * KonamiCode.js
 */

const DEFAULT_SEQUENCE = [38, 38, 40, 40, 37, 39, 37, 39, 65, 66, 13];

const KonamiCode = function (callback, sequence = DEFAULT_SEQUENCE) {
    if(!callback) throw new Error('You must provide a callback function to the constructor.');

    this.callback = callback;
    this.sequence = sequence;
    this.sequenceIndex = 0;

    document.addEventListener('keyup', this.keyHandler.bind(this));
};

KonamiCode.prototype.keyHandler = function (e) {
    if (e.keyCode === this.sequence[this.sequenceIndex]) {
        this.sequenceIndex++;
    } else {
        this.sequenceIndex = 0;
    }

    if (this.sequenceIndex === this.sequence.length) {
        this.callback();
        this.sequenceIndex = 0;
    }
};

KonamiCode.prototype.destroy = function (e) {
    document.removeEventListener('keyup', this.keyHandler);
};

module.exports = KonamiCode;
