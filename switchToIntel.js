javascript: (function() {
  let d = ['leetcode.com', 'leetcode-cn.com'];
  if (d.indexOf(window.location.host) === -1) return;
  let h = window.location.href;
  window.location.href = h.indexOf('leetcode.com') > 0 ? h.replace('leetcode', 'leetcode-cn') : h.replace('-cn', '');
})();
