const rankTest = require('ava');
const {voyageRisk, voyageProfitFactor} = require('../src/rank');

rankTest('foo', t => {
    t.pass();
});

rankTest('bar', async t => {
    const bar = Promise.resolve('bar');
    t.is(await bar, 'bar');
});

rankTest('voyageRisk case 1 test. should return 3 when voyageRisk given voyage length = 5 and voyage zone  = xxxx', t => {
    //when
    const voyage = {
        length: 5,
        zone: 'xxxx'
    };

    //given
    const result = voyageRisk(voyage);

    //then
    t.is(result, 3)
});

rankTest('voyageRisk case 2 test. should return 3 when voyageRisk given voyage length = 9 and voyage zone  = xxxx', t => {
    //when
    const voyage = {
        length: 9,
        zone: 'xxxx'
    };

    //given
    const result = voyageRisk(voyage);

    //then
    t.is(result, 4)
});

rankTest('voyageRisk case 3 test. should return 7 when voyageRisk given voyage length = 5 and voyage zone  = china', t => {
    //when
    const voyage = {
        length: 5,
        zone: 'china'
    };

    //given
    const result = voyageRisk(voyage);

    //then
    t.is(result, 7)
});

rankTest('voyageRisk case 4 test. should return 8 when voyageRisk given voyage length = 9 and voyage zone  = china', t => {
    //when
    const voyage = {
        length: 9,
        zone: 'china'
    };

    //given
    const result = voyageRisk(voyage);

    //then
    t.is(result, 8)
});

rankTest('voyageProfitFactor case 1 test. should return 2 when voyageProfitFactor given voyage zone xxx and history.length = 1 and voyage.length = 1', t => {
    //when
    const voyage = {
        zone: 'xxx',
        length: 1
    };
    const history = {
        length: 1
    };

    //given
    const result = voyageProfitFactor(voyage, history);

    //when
    t.is(result, 2);
});

rankTest('voyageProfitFactor case 2 test. should return 3 when voyageProfitFactor given voyage zone xxx and history.length = 9 and voyage.length = 1', t => {
    //when
    const voyage = {
        zone: 'xxx',
        length: 1
    };
    const history = {
        length: 9
    };

    //given
    const result = voyageProfitFactor(voyage, history);

    //when
    t.is(result, 3);
});

rankTest('voyageProfitFactor case 3 test. should return 1 when voyageProfitFactor given voyage zone xxx and history.length = 1 and voyage.length = 15', t => {
    //when
    const voyage = {
        zone: 'xxx',
        length: 15
    };
    const history = {
        length: 1
    };

    //given
    const result = voyageProfitFactor(voyage, history);

    //when
    t.is(result, 1);
});

rankTest('voyageProfitFactor case 4 test. should return 2 when voyageProfitFactor given voyage zone xxx and history.length = 9 and voyage.length = 15', t => {
    //when
    const voyage = {
        zone: 'xxx',
        length: 15
    };
    const history = {
        length: 9
    };

    //given
    const result = voyageProfitFactor(voyage, history);

    //when
    t.is(result, 2);
});