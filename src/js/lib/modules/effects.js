import $ from '../core';

$.prototype.animateOverTime = function(dur, cb, fin) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) timeStart = time;

        const timeElapsed = time - timeStart;
        const complection = Math.min(timeElapsed / dur, 1);

        cb(complection);

        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else if (typeof fin === 'function') {
            fin();
        }
    }

    return _animateOverTime;
};

function fadeIn(elem, dur, display, fin) {
    elem.style.display = display || 'block';

    const _fadeIn = (complection) => {
        elem.style.opacity = complection;
    };

    const ani = $.prototype.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
}

function fadeOut(elem, dur, fin) {
    const _fadeOut = (complection) => {
        elem.style.opacity = 1 - complection;

        if (complection === 1) {
            elem.style.display = 'none';
        }
    };

    const ani = $.prototype.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
}

$.prototype.fadeIn = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        fadeIn(this[i], dur, display, fin);
    }
    return this;
};

$.prototype.fadeOut = function(dur, fin) {
    for (let i = 0; i < this.length; i++) {
        fadeOut(this[i], dur, fin);
    }
    return this;
};

$.prototype.fadeToggle = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            fadeIn(this[i], dur, display, fin);
        } else {
            fadeOut(this[i], dur, fin);
        }
    }
    return this;
};
