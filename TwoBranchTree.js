class Node {

  constructor(val) {
    this._val = val;
  }

  search(val, ifSame, ifExist, ifNot) {
    if (this._val === val) {
      return ifSame && ifSame(val, this);
    }

    let sl = this._val > val ? '_small' : '_large';

    if (this.[sl]) {
      return ifExist && ifExist(val, sl, this);
    } else {
      return ifNot && ifNot(val, sl, this);
    }
  }

  contains(val) {
    return search(
      val,
      () => true,
      (val, sl, _this) => _this.[sl].contains(val),
      () => false
    );
  }

  insert(val) {
    return search(
      val,
      () => false,
      (val, sl, _this) => _this.[sl].insert(val),
      (val, sl, _this) => _this.[sl] = new Node(val)
    );
  }

  remove(val) {
    return search(
      val,
      null,
      (val, sl, _this) => {
        if (_this.[sl]._val === val) {
          _this.[sl] = null;
          return true;
        } else {
          return _this.[sl].remove(val);
        }
      },
      () => false
    );
  }

  createList() {
    return this._createList([]);
  }

  _createList(arr) {
    this._small && (arr = this._small._createList(arr));
    arr.push(this.val);
    this._large && (arr = this._large._createList(arr));
    return arr;
  }

}

class Tree {

  contains(val) {
    if (!this.rootNode) {
      return false;
    }
    return this.rootNode.contains(val);
  }

  insert(val) {
    if (!this.rootNode) {
      this.rootNode = new Node(val);
      return true;
    }
    return this.rootNode.insert(val);
  }

  remove() {
    if (!this.rootNode) {
      return false;
    }
    return this.rootNode.remove(val);
  }

  /**
   * 持ってる全nodeの値をSortした配列
   * @return {[Number]}
   */
  getList() {
    if (!this.rootNode) {
      return [];
    }
    return this.rootNode.createList();
  }
}
