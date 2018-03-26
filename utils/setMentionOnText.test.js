import setMentionOnText from './setMentionOnText';

test('set the selected mention on text', () => {
    const text1 = 'Hello I am @an';
    const text2 = 'Hello I am @angelfeliz and he is @pa';
    const text3 = 'Hello I am @ange and he is @pabloGarcia';
    let newText = setMentionOnText('angelfeliz', text1, 14);
    
    expect(setMentionOnText('angelfeliz', '@ang', 4)).toBe('@angelfeliz ');
    expect(newText).toBe('Hello I am @angelfeliz ');   
    expect(setMentionOnText('pabloGarcia', text2, 36)).toBe('Hello I am @angelfeliz and he is @pabloGarcia ');
    expect(setMentionOnText('angelfeliz', text3, 16)).toBe('Hello I am @angelfeliz and he is @pabloGarcia');
})