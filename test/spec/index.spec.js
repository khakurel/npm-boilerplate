import chai, {expect}  from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {Index}  from '../../src/index';

chai.use(sinonChai);

describe('Index', () => {

    describe('#Print()', ()=> {

        it('should have value', () => {
            expect(Index.Name()).to.be.equal('Index')
        });

    });


});