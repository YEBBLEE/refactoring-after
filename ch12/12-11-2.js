// < 슈퍼클래스를 위임으로 바꾸기 >
class CatalogItem {
  constructor(id, title, tags) {
    this._id = id;
    this._title = title;
    this._tags = tags;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  hasTag(arg) {
    return this._tags.includes(arg);
  }
}

class Scroll {
  constructor(id, dataLastCleaned, catalogId, catalog) {
    this._id = id;
    this._catalogItem = catalog.get(catalogId);
    this._lastCleaned = dataLastCleaned;
  }
  get id() {
    return this._id;
  }
  get title() {
    return this._catalogItem.title;
  }
}
