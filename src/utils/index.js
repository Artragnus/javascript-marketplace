import { db } from "../database/index.js";

export const getUserDataByEmail = async (email, table) => {
  try {
    const userData = await db(table).where({ email });

    if (userData.rowCount > 0) {
      return userData.rows[0];
    }

    return null;
  } catch (error) {
    throw new Error(error.message);
  }
};
