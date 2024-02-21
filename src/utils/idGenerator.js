const getId = () => {
  const t = Date.now();
  const r = Math.floor(Math.random() * 10000);
  return t * 10000 + r;
}

export default getId;
