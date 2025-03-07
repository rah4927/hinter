---
id: fimo_2017_algebra_p2
year: 2017
number: 2
difficulty: medium
topics: ["algebra"]
source: "IMO 2017 Algebra Problem 2"
---

Let \(q\) be a real number. Gugu has a napkin with ten distinct real numbers written on it, and he writes the following three lines of real numbers on the blackboard:

*  In the first line, Gugu writes down every number of the form \(a-b\), where \(a\) and \(b\) are two (not necessarily distinct) numbers on his napkin.

*  In the second line, Gugu writes down every number of the form \(q a b\), where \(a\) and \(b\) are two (not necessarily distinct) numbers from the first line.

*  In the third line, Gugu writes down every number of the form \(a^{2}+b^{2}-c^{2}-d^{2}\), where \(a, b, c, d\) are four (not necessarily distinct) numbers from the first line.

Determine all values of \(q\) such that, regardless of the numbers on Gugu's napkin, every number in the second line is also a number in the third line.


---
Call a number \(q\) good if every number in the second line appears in the third line unconditionally. We first show that the numbers 0 and \(\pm 2\) are good. The third line necessarily contains 0 , so 0 is good. For any two numbers \(a, b\) in the first line, write \(a=x-y\) and \(b=u-v\), where \(x, y, u, v\) are (not necessarily distinct) numbers on the napkin. We may now write
\[
2 a b=2(x-y)(u-v)=(x-v)^{2}+(y-u)^{2}-(x-u)^{2}-(y-v)^{2},
\]
which shows that 2 is good. By negating both sides of the above equation, we also see that \(-2\) is good.
We now show that \(-2,0\), and 2 are the only good numbers. Assume for sake of contradiction that \(q\) is a good number, where \(q \notin\{-2,0,2\}\). We now consider some particular choices of numbers on Gugu's napkin to arrive at a contradiction.
Assume that the napkin contains the integers \(1,2, \ldots, 10\). Then, the first line contains the integers \(-9,-8, \ldots, 9\). The second line then contains \(q\) and \(81 q\), so the third line must also contain both of them. But the third line only contains integers, so \(q\) must be an integer. Furthermore, the third line contains no number greater than \(162=9^{2}+9^{2}-0^{2}-0^{2}\) or less than \(-162\), so we must have \(-162 \leqslant 81 q \leqslant 162\). This shows that the only possibilities for \(q\) are \(\pm 1\)
Now assume that \(q=\pm 1\). Let the napkin contain \(0,1,4,8,12,16,20,24,28,32\). The first line contains \(\pm 1\) and \(\pm 4\), so the second line contains \(\pm 4\). However, for every number \(a\) in the first line, \(a \neq 2(\bmod 4)\), so we may conclude that \(a^{2} \equiv 0,1(\bmod 8)\). Consequently, every number in the third line must be congruent to \(-2,-1,0,1,2(\bmod 8)\); in particular, \(\pm 4\) cannot be in the third line, which is a contradiction.
