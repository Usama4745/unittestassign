const compareobj=require('./compareObject');
test('compare object', () => {
    expect(compareobj({"name": "sheet2","freeze": "A1","styles": [],"merges": [],"rows": {},"validations": []},{"name": "sheet2","freeze": "A1","styles": [],"merges": [],"rows": {},"validations": []})).toBe(true);
});
test('compare Mismatching object', () => {
    expect(compareobj({"name": "sheet2","freeze": "A1","styles": [],"merges": [],"rows": {},"validations": []},{"name": "sheet2","freeze": "A1","styles": [],"merges": [],"rows": {}})).toBe(false);
});
test('compare string object', () => {
    expect(compareobj({"name": "sheet2","freeze": "A1","styles": [],"merges": [],"rows": {},"validations": []},"this is string")).toBe(false);
});