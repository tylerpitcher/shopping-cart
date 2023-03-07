function safeSerialize(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export default safeSerialize;