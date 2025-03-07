---
id: fimo_2016_algebra_p2
year: 2016
number: 2
difficulty: medium
topics: ["algebra"]
source: "IMO 2016 Algebra Problem 2"
---

Find the smallest real constant \(C\) such that for any positive real numbers \(a_{1}, a_{2}, a_{3}, a_{4}\) and \(a_{5}\) (not necessarily distinct), one can always choose distinct subscripts \(i, j, k\) and \(l\) such that
\[
\left|\frac{a_{i}}{a_{j}}-\frac{a_{k}}{a_{l}}\right| \leqslant C .
\]


---
We first show that \(C \leqslant \frac{1}{2}\). For any positive real numbers \(a_{1} \leqslant a_{2} \leqslant a_{3} \leqslant a_{4} \leqslant a_{5}\), consider the five fractions
\[
\frac{a_{1}}{a_{2}}, \frac{a_{3}}{a_{4}}, \frac{a_{1}}{a_{5}}, \frac{a_{2}}{a_{3}}, \frac{a_{4}}{a_{5}} .
\]
Each of them lies in the interval \((0,1]\). Therefore, by the Pigeonhole Principle, at least three of them must lie in \(\left(0, \frac{1}{2}\right]\) or lie in \(\left(\frac{1}{2}, 1\right]\) simultaneously. In particular, there must be two consecutive terms in (2) which belong to an interval of length \(\frac{1}{2}\) (here, we regard \(\frac{a_{1}}{a_{2}}\) and \(\frac{a_{4}}{a_{5}}\) as consecutive). In other words, the difference of these two fractions is less than \(\frac{1}{2}\). As the indices involved in these two fractions are distinct, we can choose them to be \(i, j, k, l\) and conclude that \(C \leqslant \frac{1}{2}\).
Next, we show that \(C=\frac{1}{2}\) is best possible. Consider the numbers \(1,2,2,2, n\) where \(n\) is a large real number. The fractions formed by two of these numbers in ascending order are \(\frac{1}{n}, \frac{2}{n}, \frac{1}{2}, \frac{2}{2}, \frac{2}{1}, \frac{n}{2}, \frac{n}{1}\). Since the indices \(i, j, k, l\) are distinct, \(\frac{1}{n}\) and \(\frac{2}{n}\) cannot be chosen simultaneously. Therefore the minimum value of the left-hand side of \((1)\) is \(\frac{1}{2}-\frac{2}{n}\). When \(n\) tends to infinity, this value approaches \(\frac{1}{2}\), and so \(C\) cannot be less than \(\frac{1}{2}\).
These conclude that \(C=\frac{1}{2}\) is the smallest possible choice.
