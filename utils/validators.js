import { Types } from 'mongoose';

function isTitle(title) {
  if (typeof title !== 'string') return false;
  return title.length >= 3 && title.length <= 64;
}

function isDesc(desc) {
  if (typeof desc !== 'string') return false;
  return desc.length >= 32;
}

function isPrice(price) {
  if (typeof price !== 'number') return false;
  return price > 0;
}

function isObjectId(objectId) {
  return Types.ObjectId.isValid(objectId);
}

export { isTitle, isDesc, isPrice, isObjectId };
