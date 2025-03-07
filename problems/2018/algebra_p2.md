---
id: fimo_2018_algebra_p2
year: 2018
number: 2
difficulty: medium
topics: ["algebra"]
source: "IMO 2018 Algebra Problem 2"
---

Find all positive integers \(n \geqslant 3\) for which there exist real numbers \(a_{1}, a_{2}, \ldots, a_{n}\), \(a_{n+1}=a_{1}, a_{n+2}=a_{2}\) such that
\[
a_{i} a_{i+1}+1=a_{i+2}
\]
for all \(i=1,2, \ldots, n\).
The answer is that \(n\) can be any multiple of 3 .

---
For the sake of convenience, extend the sequence \(a_{1}, \ldots, a_{n+2}\) to an infinite periodic sequence with period \(n\). ( \(n\) is not necessarily the shortest period.)
If \(n\) is divisible by 3 , then \(\left(a_{1}, a_{2}, \ldots\right)=(-1,-1,2,-1,-1,2, \ldots)\) is an obvious solution.
We will show that in every periodic sequence satisfying the recurrence, each positive term is followed by two negative values, and after them the next number is positive again. From this, it follows that \(n\) is divisible by 3 .
If the sequence contains two consecutive positive numbers \(a_{i}, a_{i+1}\), then \(a_{i+2}=a_{i} a_{i+1}+1 > 1\), so the next value is positive as well; by induction, all numbers are positive and greater than 1. But then \(a_{i+2}=a_{i} a_{i+1}+1 \geqslant 1 \cdot a_{i+1}+1 > a_{i+1}\) for every index \(i\), which is impossible: our sequence is periodic, so it cannot increase everywhere.
If the number 0 occurs in the sequence, \(a_{i}=0\) for some index \(i\), then it follows that \(a_{i+1}=a_{i-1} a_{i}+1\) and \(a_{i+2}=a_{i} a_{i+1}+1\) are two consecutive positive elements in the sequences and we get the same contradiction again.
Notice that after any two consecutive negative numbers the next one must be positive: if \(a_{i} < 0\) and \(a_{i+1} < 0\), then \(a_{i+2}=a_{1} a_{i+1}+1 > 1 > 0\). Hence, the positive and negative numbers follow each other in such a way that each positive term is followed by one or two negative values and then comes the next positive term.
Consider the case when the positive and negative values alternate. So, if \(a_{i}\) is a negative value then \(a_{i+1}\) is positive, \(a_{i+2}\) is negative and \(a_{i+3}\) is positive again.
Notice that \(a_{i} a_{i+1}+1=a_{i+2} < 0 < a_{i+3}=a_{i+1} a_{i+2}+1\); by \(a_{i+1} > 0\) we conclude \(a_{i} < a_{i+2}\). Hence, the negative values form an infinite increasing subsequence, \(a_{i} < a_{i+2} < a_{i+4} < \ldots\), which is not possible, because the sequence is periodic.
The only case left is when there are consecutive negative numbers in the sequence. Suppose that \(a_{i}\) and \(a_{i+1}\) are negative; then \(a_{i+2}=a_{i} a_{i+1}+1 > 1\). The number \(a_{i+3}\) must be negative. We show that \(a_{i+4}\) also must be negative.
Notice that \(a_{i+3}\) is negative and \(a_{i+4}=a_{i+2} a_{i+3}+1 < 1 < a_{i} a_{i+1}+1=a_{i+2}\), so
\[
a_{i+5}-a_{i+4}=\left(a_{i+3} a_{i+4}+1\right)-\left(a_{i+2} a_{i+3}+1\right)=a_{i+3}\left(a_{i+4}-a_{i+2}\right) > 0,
\]
therefore \(a_{i+5} > a_{i+4}\). Since at most one of \(a_{i+4}\) and \(a_{i+5}\) can be positive, that means that \(a_{i+4}\) must be negative.
Now \(a_{i+3}\) and \(a_{i+4}\) are negative and \(a_{i+5}\) is positive; so after two negative and a positive terms, the next three terms repeat the same pattern. That completes the solution.
