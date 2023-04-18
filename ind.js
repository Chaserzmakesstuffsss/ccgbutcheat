Copied!
const btn = document.getElementById('player');

// ✅ Change button text on click
btn.addEventListener('click', function handleClick() {
  btn.textContent = 'on';
});

/**
 * ✅ If you need to change the button's inner HTML use:
 *  - `innerHTML` instead of `textContent`
 */
