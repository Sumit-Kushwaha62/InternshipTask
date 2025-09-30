
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function byId(id) {
  return document.getElementById(id);
}

function setError(inputEl, errorEl, message) {
  if (!inputEl || !errorEl) return;
  inputEl.classList.add('invalid');
  inputEl.setAttribute('aria-invalid', 'true');
  errorEl.textContent = message;
}

function clearError(inputEl, errorEl) {
  if (!inputEl || !errorEl) return;
  inputEl.classList.remove('invalid');
  inputEl.setAttribute('aria-invalid', 'false');
  errorEl.textContent = '';
}

function validateForm() {
  const nameEl = byId('name');
  const emailEl = byId('email');
  const messageEl = byId('message');

  const nameErr = byId('nameError');
  const emailErr = byId('emailError');
  const messageErr = byId('messageError');


  const name = (nameEl?.value || '').trim();
  const email = (emailEl?.value || '').trim();
  const message = (messageEl?.value || '').trim();

  let firstInvalid = null;

  
  if (name.length < 2) {
    setError(nameEl, nameErr, 'Please enter at least 2 characters.');
    firstInvalid = firstInvalid || nameEl;
  } else {
    clearError(nameEl, nameErr);
  }

  if (!EMAIL_REGEX.test(email)) {
    setError(emailEl, emailErr, 'Please enter a valid email address.');
    firstInvalid = firstInvalid || emailEl;
  } else {
    clearError(emailEl, emailErr);
  }

  // Message: required, min 10 chars
  if (message.length < 10) {
    setError(messageEl, messageErr, 'Message should be at least 10 characters.');
    firstInvalid = firstInvalid || messageEl;
  } else {
    clearError(messageEl, messageErr);
  }

  return { valid: !firstInvalid, firstInvalid, values: { name, email, message } };
}

function handleSubmit(e) {
  e.preventDefault(); 
  const statusEl = byId('formStatus');
  const successPanel = byId('successPanel');
  if (statusEl) statusEl.textContent = '';

  const { valid, firstInvalid, values } = validateForm();

  if (!valid) {
    if (successPanel) {
      successPanel.classList.add('hidden');
      successPanel.textContent = '';
    }
    if (statusEl) statusEl.textContent = 'Please fix the highlighted fields.';
    if (firstInvalid && typeof firstInvalid.focus === 'function') firstInvalid.focus();
    return;
  }

  
  if (successPanel) {
    successPanel.textContent = `Thanks, ${values.name}! Your message passed validation. No message was sent in this demo.`;
    successPanel.classList.remove('hidden');
  }
  if (statusEl) statusEl.textContent = 'Validation successful.';
}

function handleReset() {
  const fields = [
    ['name', 'nameError'],
    ['email', 'emailError'],
    ['message', 'messageError'],
  ];

  fields.forEach(([inputId, errorId]) => {
    clearError(byId(inputId), byId(errorId));
  });

  const statusEl = byId('formStatus');
  const successPanel = byId('successPanel');
  if (statusEl) statusEl.textContent = '';
  if (successPanel) {
    successPanel.classList.add('hidden');
    successPanel.textContent = '';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const form = byId('contactForm');
  const resetBtn = byId('resetBtn');

  if (form) form.addEventListener('submit', handleSubmit);
  if (resetBtn) resetBtn.addEventListener('click', handleReset);
});




