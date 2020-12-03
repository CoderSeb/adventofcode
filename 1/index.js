const inputs = [
1567,
1223,
1758,
1842,
1933,
1898,
1409,
1058,
1533,
1417,
1032,
1634,
1477,
1394,
1888,
1972,
1237,
1390,
1677,
1546,
1302,
1070,
1369,
1455,
1065,
1924,
1593,
1131,
1064,
1346,
1914,
1129,
1830,
1450,
1278,
1740,
1809,
1176,
1734,
1102,
1807,
1982,
1603,
1736,
2008,
1980,
1905,
1633,
1732,
1350,
1865,
1988,
1805,
1998,
1152,
1046,
1870,
1557,
1789,
1766,
1945,
1359,
1002,
1126,
1719,
1497,
1296,
1560,
1936,
1929,
1464,
2005,
1281,
618,
1257,
1107,
1632,
1688,
1964,
1803,
1360,
1384,
1889,
1411,
1328,
1452,
1868,
1515,
1586,
1631,
1618,
1087,
1710,
1094,
1774,
1295,
1700,
1636,
1230,
1421,
1910,
1522,
1366,
1144,
1757,
1493,
1316,
1103,
687,
1371,
1720,
1155,
1559,
1900,
989,
1367,
1999,
1066,
1773,
1787,
1402,
1047,
1806,
1956,
1219,
1555,
1307,
1419,
1706,
1884,
1109,
1181,
2010,
1298,
1730,
1078,
1848,
1398,
1687,
2007,
1550,
1664,
1225,
1079,
1698,
350,
1222,
1377,
1977,
1510,
1571,
1630,
1029,
1379,
1942,
1949,
1249,
1829,
1297,
1530,
1607,
1324,
1069,
1476,
928,
1039,
1855,
1644,
1454,
1310,
1172,
547,
1034,
1878,
1479,
1457,
1319,
1810,
1759,
1439,
1851,
545,
1470,
2003,
1908,
1564,
1491,
1174,
1301,
1689,
1276,
1781,
1392,
1499,
1962,
1653,
1823,
1381,
1827,
1974
]

// Part One
/**
 * Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

For example, suppose your expense report contained the following:

1721
979
366
299
675
1456

In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?

Your puzzle answer was 866436.
 */
inputs.forEach(function(numberOne) {
  inputs.map(numberTwo => {
    if (numberOne + numberTwo === 2020) {
      const result = numberOne * numberTwo

      console.log(result)
    }
  })
})

// Part Two
/**
 * The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.

Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

In your expense report, what is the product of the three entries that sum to 2020?

Your puzzle answer was 276650720.

Both parts of this puzzle are complete! They provide two gold stars: **
 */
inputs.forEach(function(numberOne) {
  inputs.map(numberTwo => {
    inputs.map(numberThree => {
      if (numberOne + numberTwo + numberThree === 2020) {

        const result = numberOne * numberTwo * numberThree
        console.log(result)
      }
    })
  })
})