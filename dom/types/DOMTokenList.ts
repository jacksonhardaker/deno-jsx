/**
 * The DOMTokenList interface represents a set of space-separated tokens.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList|DOMTokenList}
 */
export class DOMTokenList {
  public length: number = 0;
  public value: string = "";
  private values: Array<string> = [];

  private update() {
    this.length = this.values.length;
    this.value = this.values.join(" ");
  }

  item(index: number) {
    return this.values[index];
  }

  contains(token: string) {
    return this.values.includes(token);
  }

  add(...args: Array<string>) {
    this.values.push(...args);
    this.update();
  }

  remove(...args: Array<string>) {
    this.values = this.values.filter(value => !args.includes(value));
    this.update();
  }

  replace(oldToken: string, newToken: string) {
    const index = this.values.indexOf(oldToken);
    this.values[index] = newToken;
    this.update();
  }

  toggle(token: string, force?: boolean) {
    const tokenExists = this.values.includes(token);
    if (force === undefined) {
      tokenExists ? this.remove(token) : this.add(token);
    }
    else if (force === true && !tokenExists) {
      this.add(token);
    }
    else if (force === false && tokenExists) {
      this.remove(token);
    }
  }
}
