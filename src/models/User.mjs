// User.mjs
import { getDB } from '../../config.mjs';

const getUserCollection = () => {
  const db = getDB();
  return db.collection('users');
};

// Функція для використання курсора
const getUsersWithCursor = async () => {
  try {
    const collection = getUserCollection();
    const cursor = collection.find();
    return cursor;
  } catch (err) {
    console.error("Error getting users with cursor:", err);
    throw err;
  }
};


export { getUsersWithCursor };
