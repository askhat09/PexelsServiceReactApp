export default class GotService {
  constructor() {
    this._apiBase = "https://api.pexels.com/v1";
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      headers: {
        Authorization:
          "563492ad6f91700001000001564ddfe7496e4e27a7c1350f45bbf17b"
      }
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`);
    }
    return res.json();
  };

  getImages(terms) {
    return this.getResource(`/${terms}/`, {
      params: {
        per_page: 15
      }
    });
  }
}
