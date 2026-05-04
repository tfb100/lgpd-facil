function showTab(id, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}
function togglePrinciple(el, key) {
  var detail = document.getElementById('detail-' + key);
  var isOpen = detail.classList.contains('show');
  document.querySelectorAll('.principle-detail').forEach(d => d.classList.remove('show'));
  document.querySelectorAll('.principle-card').forEach(c => c.classList.remove('selected'));
  if (!isOpen) { detail.classList.add('show'); el.classList.add('selected'); }
}