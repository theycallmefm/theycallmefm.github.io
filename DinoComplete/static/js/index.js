"use strict";

const copyButton = document.getElementById("copy-bibtex");
const citation = document.getElementById("bibtex-code");
const copyStatus = document.getElementById("copy-status");

if (copyButton && citation && copyStatus) {
  copyButton.hidden = false;
  let resetTimer;

  copyButton.addEventListener("click", async () => {
    clearTimeout(resetTimer);
    const text = citation.textContent.trim() + "\n";

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const range = document.createRange();
        range.selectNodeContents(citation);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        if (!document.execCommand("copy")) throw new Error("Copy unavailable");
        selection.removeAllRanges();
      }

      copyButton.textContent = "Copied!";
      copyStatus.textContent = "BibTeX citation copied to clipboard.";
    } catch (error) {
      const range = document.createRange();
      range.selectNodeContents(citation);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      copyButton.textContent = "Citation selected";
      copyStatus.textContent = "Copy could not complete. The citation is selected; press Control+C or Command+C to copy it.";
    }

    resetTimer = setTimeout(() => {
      copyButton.textContent = "Copy BibTeX";
    }, 2500);
  });
}
