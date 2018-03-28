import isBackspaceAtMention from './isBackspaceAtMention';

test('is backspace at mention', () => {
      let text1 = '@angel';
      let text2 = 'hola como estas @angel';
      let text3 = 'en casa de @maria y tu';
      let text4 = 'donde @juan aqui @maria';

      expect(isBackspaceAtMention({start:6, end:6}, text1)).toBe(true);
      expect(isBackspaceAtMention({start:22, end:22}, text2)).toBe(true);
      expect(isBackspaceAtMention({start:17, end:17}, text3)).toBe(true);
      expect(isBackspaceAtMention({start:11, end:11}, text4)).toBe(true);
      expect(isBackspaceAtMention({start:15, end:15}, text3)).toBe(true);
      expect(isBackspaceAtMention({start:14, end:14}, text4)).toBe(true);

   })