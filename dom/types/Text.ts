import { CharacterData } from './CharacterData.ts';

export class Text extends CharacterData {
  content: string = "";

  constructor(content: string) {
    super();
    Object.assign(this, {
      content,
    });
  }

  toString() {
    return this.content;
  }
}
