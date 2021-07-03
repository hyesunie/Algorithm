function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^\w\.\-\_]/g, "")
    .replace(/[\.]{2,}/g, ".")
    .replace(/^\./, "")
    .replace(/\.$/, "");

  if (new_id.length === 0) new_id = "a";

  if (new_id.length > 15) {
    new_id = new_id.slice(0, 15).replace(/\.$/, "");
    return new_id;
  }

  if (new_id.length < 3) {
    new_id = new_id.padEnd(3, new_id[new_id.length - 1]);
    return new_id;
  }
  return new_id;
}
