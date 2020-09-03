const assert = require('assert');
const { decorator } = require('..');

const lucy = {
  name: 'lucy',
  nickName: 'baby',
  getName: () => this.name,
};

const extender = {
  getNickName() { return this.nickName; },
};

it('Should return bady', () => {
  const lucyPlus = decorator(lucy, extender);
  assert.equal(lucyPlus.getNickName(), 'baby');
});

class Cat {
  constructor(name, nickName) {
    this.name = name;
    this.nickName = nickName;
  }

  getName() {
    return this.name;
  }
}

const catExtender = {
  getNickName() {
    return this.nickName;
  },
};

it('Should return hello', () => {
  const kityPlus = decorator(new Cat('kity', 'hello'), catExtender);
  assert.equal(kityPlus.getNickName(), 'hello');
});
