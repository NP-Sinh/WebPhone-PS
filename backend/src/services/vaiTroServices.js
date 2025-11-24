import { context } from "../config/dbconfig.js";

export const vaiTroServices = {
  getVaiTro: async () => {
    try {
      const result = await context.query("SELECT * FROM VaiTro WHERE trangthai = true ORDER BY id");
      return result.rows;
    } catch (error) {
      console.error("Lỗi lấy dữ liệu getVaiTro:", error);
    }
  },
  getVaiTroById: async (id) => {
    try {
      const query = ` SELECT * FROM VaiTro WHERE id = $1 ORDER BY id `;
      const result = await context.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      console.error("Lỗi lấy vai trò theo ID:", error);
    }
  },

  modifyVaiTro: async (id, tenvaitro) => {
    try {
      if (id == 0) {
        const query = `INSERT INTO VaiTro (tenvaitro, trangthai)  VALUES ($1, true) RETURNING *`
        const result = await context.query(query, [tenvaitro]);
        return result.rows[0];
      }
      else {
        const query = `UPDATE VaiTro SET tenvaitro = $1 WHERE id = $2 RETURNING *`;
        const result = await context.query(query, [tenvaitro, id]);
        return result.rows[0];
      }
    } catch (error) {
      console.error("Lỗi modiffy vai trò:", error);
    }
  },

  deleteVaiTro: async (id) => {
    try {
      const query = ` UPDATE VaiTro SET trangthai = false WHERE id = $1 RETURNING *`;
      const result = await context.query(query, [id]);
      return {
        message: 'Đã vô hiệu hóa vai trò thành công',
      };
    } catch (error) {
      console.error("Lỗi vô hiệu hóa vai trò:", error);
    }
  },

  restoreVaiTro: async (id) => {
    try {
      const query = ` UPDATE VaiTro SET trangthai = true WHERE id = $1 RETURNING * `;
      const result = await context.query(query, [id]);
      
      return { 
        message: 'Đã khôi phục vai trò thành công',
      };
    } catch (error) {
      console.error("Lỗi khôi phục vai trò:", error);
    }
  },
};
