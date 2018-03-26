import removeMentionFromText from './removeMentionFromText';

test('remove mention from text', () => {
    let text1 = 'Hello @angelfeliz';
    let text2 = '@angelfeliz test on jest';
    let text3 = 'Ready to go @juangAl and @mario';
    let text4 = 'Ready to go @juangAl  and @mario';

    expect(removeMentionFromText({start:17, end:17},text1)).toBe('Hello ');
    expect(removeMentionFromText({start:11, end:11},text2)).toBe(' test on jest');
    expect(removeMentionFromText({start:20, end:20},text3)).toBe('Ready to go  and @mario');
    expect(removeMentionFromText({start:6, end:6},'@mario')).toBe('');
    expect(removeMentionFromText({start:21, end:21},text4)).toBe('Ready to go @juangAl  and @mario');
    
})