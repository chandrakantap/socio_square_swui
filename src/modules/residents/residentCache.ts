/**
 * I am using a LRU cache to cached  the resident data
 */
import { Resident } from 'common/types';
import { LRUCache } from 'lru-cache';

const options = {
  max: 50,
};
const cache = new LRUCache(options);

export const getResidentData = async (url: string): Promise<Resident> => {
  if (!cache.has(url)) {
    await fetch(url)
      .then((res) => res.json())
      .then((residentData) => {
        cache.set(url, residentData);
      });
  }
  return cache.get(url) as Resident;
};
