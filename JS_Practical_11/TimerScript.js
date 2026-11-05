export const SECONDS = 30;
export const WARNING = 10;

function show(element, seconds) {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    element.textContent = m + ":" + s;
}

export function tick(el1, el2, el3, secs, interval) {
    secs--;
    show(el1, secs);
  
    if(secs> 0 && secs <= WARNING) {
        el2.textContent = `${secs} seconds left!`;
    }
          
    if (secs <= 0) {
        clearInterval(interval);
        el3.textContent = "Class has started!";
        el1.classList.remove('warning');
        el2.textContent = '';
    }

    return secs;
}