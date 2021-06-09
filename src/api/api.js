import axios from "axios";

class Api {
  baseUrl = "https://test2.sionic.ru/api/";

  async getCategories() {
    try {
      const res = await axios.get(`${this.baseUrl}Categories`);

      return res.data;
    } catch (er) {
      return {
        error: "some error",
      };
    }
  }

  async getProducts(category_id, range) {
    try {
      const res = await axios.get(
        `${this.baseUrl}Products?sort=["name","ASC"]&range=[${range}, ${
          range + 15
        }]&filter={"category_id":${category_id}}`
      );
      //   https://test2.sionic.ru/api/Products?sort=["name","ASC"]&range=[0,24]&filter={"category_id":20}
      return { products: res.data, range: range + 15 };
    } catch (e) {
      return {
        error: "some error",
      };
    }
  }
}

export default new Api();
