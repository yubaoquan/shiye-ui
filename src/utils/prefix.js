export default function(prefix, suffix) {
  if (prefix && prefix.trim()) {
    return `${prefix}-${suffix}`;
  }
  return `shiye-${suffix}`;
}
