---
id: fimo_2016_algebra_p6
year: 2016
number: 6
difficulty: medium
topics: ["algebra"]
source: "IMO 2016 Algebra Problem 6"
---

The equation
\[
(x-1)(x-2) \cdots(x-2016)=(x-1)(x-2) \cdots(x-2016)
\]
is written on the board. One tries to erase some linear factors from both sides so that each side still has at least one factor, and the resulting equation has no real roots. Find the least number of linear factors one needs to erase to achieve this.


---
Since there are 2016 common linear factors on both sides, we need to erase at least 2016 factors. We claim that the equation has no real roots if we erase all factors \((x-k)\) on the left-hand side with \(k \equiv 2,3(\bmod 4)\), and all factors \((x-m)\) on the right-hand side with \(m \equiv 0,1(\bmod 4)\). Therefore, it suffices to show that no real number \(x\) satisfies
\[
\prod_{j=0}^{503}(x-4 j-1)(x-4 j-4)=\prod_{j=0}^{503}(x-4 j-2)(x-4 j-3) .
\]

* Case 1. \(x=1,2, \ldots, 2016\).

In this case, one side of (1) is zero while the other side is not. This shows \(x\) cannot satisfy (1).

* Case 2. \(4 k+1 < x < 4 k+2\) or \(4 k+3 < x < 4 k+4\) for some \(k=0,1, \ldots, 503\).

For \(j=0,1, \ldots, 503\) with \(j \neq k\), the product \((x-4 j-1)(x-4 j-4)\) is positive. For \(j=k\), the product \((x-4 k-1)(x-4 k-4)\) is negative. This shows the left-hand side of (1) is negative. On the other hand, each product \((x-4 j-2)(x-4 j-3)\) on the right-hand side of (1) is positive. This yields a contradiction.

* Case 3. \(x < 1\) or \(x > 2016\) or \(4 k < x < 4 k+1\) for some \(k=1,2, \ldots, 503\).

The equation (1) can be rewritten as
\[
1=\prod_{j=0}^{503} \frac{(x-4 j-1)(x-4 j-4)}{(x-4 j-2)(x-4 j-3)}=\prod_{j=0}^{503}\left(1-\frac{2}{(x-4 j-2)(x-4 j-3)}\right) .
\]
Note that \((x-4 j-2)(x-4 j-3) > 2\) for \(0 \leqslant j \leqslant 503\) in this case. So each term in the product lies strictly between 0 and 1 , and the whole product must be less than 1 , which is impossible.

* Case 4. \(4 k+2 < x < 4 k+3\) for some \(k=0,1, \ldots, 503\).

This time we rewrite (1) as
\[
\begin{aligned}
1 & =\frac{x-1}{x-2} \cdot \frac{x-2016}{x-2015} \prod_{j=1}^{503} \frac{(x-4 j)(x-4 j-1)}{(x-4 j+1)(x-4 j-2)} \\
& =\frac{x-1}{x-2} \cdot \frac{x-2016}{x-2015} \prod_{j=1}^{503}\left(1+\frac{2}{(x-4 j+1)(x-4 j-2)}\right) .
\end{aligned}
\]
Clearly, \(\frac{x-1}{x-2}\) and \(\frac{x-2016}{x-2015}\) are both greater than 1. For the range of \(x\) in this case, each term in the product is also greater than 1. Then the right-hand side must be greater than 1 and hence a contradiction arises. From the four cases, we conclude that (1) has no real roots. Hence, the minimum number of linear factors to be erased is 2016 .
