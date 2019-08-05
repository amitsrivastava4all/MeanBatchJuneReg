describe('Add Suite',()=>{
    it('Should Add 2 numbers',()=>{
        let result = add(10,20);
        expect(result).toBe(30);
    })
    it('Should Add 1 numbers',()=>{
        let result = add(10);
        expect(result).toBe(10);
    })
    it('Should Add 0 numbers',()=>{
        let result = add();
        expect(result).toBe(0);
    })
})