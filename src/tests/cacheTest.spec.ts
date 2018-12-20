import * as chai from 'chai';
import Cache from '../lib/cache';

const { expect } = chai;
chai.should();

async function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

describe('Cache', () => {
    describe('When create a new without initial value', () => {
        it('Should give invalid cache', () => {
            const cache = new Cache();
            const result = cache.valid();
            const expected = false;

            result.should.equal(expected);
        });
        it('Should have value null', () => {
            const cache = new Cache();
            const result = cache.getValue();
            const expected: any = null;

            expect(result).to.equal(expected);
        });
        it('Should be possible to update with new value', () => {
            const expected = { testObject: 'test string' };
            const cache = new Cache(50);
            cache.update(expected);
            const result: any = cache.getValue();

            result.should.equal(expected);
        });
        it('Should get a default cacheTime', () => {
            const cache = new Cache();
            cache.cacheTime.should.be.a('number');
        });
    });

    describe('Create new with value', () => {
        it('Should give valid cache', () => {
            const cache = new Cache(500, { testObject: 'hej' });
            const result = cache.valid();
            const expected = true;

            result.should.equal(expected);
        });

        it('Should return the cached value', () => {
            const expected = { testObject: 'test string' };
            const cache = new Cache<any>(500, expected);
            const result = cache.getValue();

            result.should.equal(expected);
        });

        it('Should not be valid if cache time runs out', async () => {
            const cache = new Cache<any>(30, { testObject: 'test string' });

            await sleep(30);

            const result = cache.valid();
            const expected = false;

            result.should.equal(expected);
        });

        it('Should be valid again if updated with new value', async () => {
            const testObject1 = { testObject1: 'test string1' };
            const testObject2 = { testObject2: 'test string2' };
            const cache = new Cache<any>(10, testObject1);
            const result = cache.getValue();

            // Valid
            result.should.equal(testObject1);

            await sleep(10);
            const result2 = cache.valid();
            // Not Valid
            result2.should.equal(false);
            expect(cache.getValue()).to.equal(null);

            cache.update(testObject2);
            const result3 = cache.getValue();
            // Valid
            result3.should.equal(testObject2);

            // Not valid
            await sleep(10);
            const result4 = cache.valid();
            result4.should.equal(false);
            expect(cache.getValue()).to.equal(null);
        });
    });
});
