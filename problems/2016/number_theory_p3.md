---
id: fimo_2016_number_theory_p3
year: 2016
number: 3
difficulty: medium
topics: ["number theory"]
source: "IMO 2016 Number Theory Problem 3"
---

Define \(P(n)=n^{2}+n+1\). For any positive integers \(a\) and \(b\), the set

\[
\{P(a), P(a+1), P(a+2), \ldots, P(a+b)\}
\]

is said to be fragrant if none of its elements is relatively prime to the product of the other elements. Determine the smallest size of a fragrant set.

The final answer is 6 .

---
We have the following observations.

(i) \((P(n), P(n+1))=1\) for any \(n\).

We have \((P(n), P(n+1))=\left(n^{2}+n+1, n^{2}+3 n+3\right)=\left(n^{2}+n+1,2 n+2\right)\). Noting that \(n^{2}+n+1\) is odd and \(\left(n^{2}+n+1, n+1\right)=(1, n+1)=1\), the claim follows.

(ii) \((P(n), P(n+2))=1\) for \(n \not \equiv 2(\bmod 7)\) and \((P(n), P(n+2))=7\) for \(n \equiv 2(\bmod 7)\).

From \((2 n+7) P(n)-(2 n-1) P(n+2)=14\) and the fact that \(P(n)\) is odd, \((P(n), P(n+2))\) must be a divisor of 7 . The claim follows by checking \(n \equiv 0,1, \ldots, 6(\bmod 7)\) directly.

(iii) \((P(n), P(n+3))=1\) for \(n \not \equiv 1(\bmod 3)\) and \(3 \mid(P(n), P(n+3))\) for \(n \equiv 1(\bmod 3)\).

From \((n+5) P(n)-(n-1) P(n+3)=18\) and the fact that \(P(n)\) is odd, \((P(n), P(n+3))\) must be a divisor of 9 . The claim follows by checking \(n \equiv 0,1,2(\bmod 3)\) directly.

Suppose there exists a fragrant set with at most 5 elements. We may assume it contains exactly 5 elements \(P(a), P(a+1), \ldots, P(a+4)\) since the following argument also works with fewer elements. Consider \(P(a+2)\). From (i), it is relatively prime to \(P(a+1)\) and \(P(a+3)\). Without loss of generality, assume \((P(a), P(a+2)) > 1\). From (ii), we have \(a \equiv 2(\bmod 7)\). The same observation implies \((P(a+1), P(a+3))=1\). In order that the set is fragrant, \((P(a), P(a+3))\) and \((P(a+1), P(a+4))\) must both be greater than 1. From (iii), this holds only when both \(a\) and \(a+1\) are congruent to \(1 \bmod 3\), which is a contradiction.

It now suffices to construct a fragrant set of size 6. By the Chinese Remainder Theorem, we can take a positive integer \(a\) such that

\[
a \equiv 7 \quad(\bmod 19), \quad a+1 \equiv 2 \quad(\bmod 7), \quad a+2 \equiv 1 \quad(\bmod 3) .
\]

For example, we may take \(a=197\). From (ii), both \(P(a+1)\) and \(P(a+3)\) are divisible by 7. From (iii), both \(P(a+2)\) and \(P(a+5)\) are divisible by 3 . One also checks from 19|P(7) \(=57\) and \(19 \mid P(11)=133\) that \(P(a)\) and \(P(a+4)\) are divisible by 19 . Therefore, the set \(\{P(a), P(a+1), \ldots, P(a+5)\}\) is fragrant.

Therefore, the smallest size of a fragrant set is 6 .
