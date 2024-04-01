const petDB = require('../database/memory');

const getAll = (req, res) => {
  return petDB.map((pet) => ({ name: pet.name }));
};

/**
 *
 * @param string name
 * @returns
 */
const get = (name) => {
  const foundPet = petDB.find((pet) => pet.name === name);
  return foundPet;
};

/**
 *
 * @param newPet of the form: { name: string, color: string, weight: number }
 * @returns
 */

const create = (newPet) => {
  const petName = newPet.name;

  const alreadyThere = petDB.some((pet) => pet.name === petName);
  if (alreadyThere) {
    return false;
  }
  petDB.push({
    name: newPet.name,
    color: newPet.color,
    qty: newPet.qty,
  });

  return newPet;
};

module.exports = {
  getAll,
  get,
  create,
};
