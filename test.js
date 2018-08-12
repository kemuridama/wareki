import test from 'ava';
import wareki from './src/wareki';

test('returns era year', t => {
  t.is(wareki('2018-01-01'), '平成30');
  t.is(wareki('2018/01/01'), '平成30');
  t.is(wareki(1514764800000), '平成30');

  t.is(wareki('1868-01-24'), 1868);
  t.is(wareki('1868-01-25'), '明治元');
  t.is(wareki('1912-07-29'), '明治45');
  t.is(wareki('1912-07-30'), '大正元');
  t.is(wareki('1926-12-24'), '大正15');
  t.is(wareki('1926-12-25'), '昭和元');
  t.is(wareki('1989-01-06'), '昭和64');
  t.is(wareki('1989-01-08'), '平成元');
  t.is(wareki('2019-04-30'), '平成31');
  t.is(wareki('2019-05-01'), '平成31');
  t.is(wareki(0), '昭和45');
  t.is(wareki(10000), '昭和45');
  t.is(wareki(1000000), '昭和45');
  t.is(wareki(-100), '昭和45');
});

test('invalid date returns NaN', t => {
  t.is(wareki(20180101), '昭和45');
})
