const highlightActions = document.querySelectorAll('[dataaction="highlight"]');
for (let а of highlightActions) {
    a.addEventListener('click', evt => {
        evt.preventDefault();
        highlightParas(a.dataset.containing);
    });
}
const removeHighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');
for(let а of removeHighlightActions) {
    a.addEventListener('click' , evt => {
        evt.preventDefault();
        removeParaHighlights();
    });
}
