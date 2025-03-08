---
id: fimo_2007_number_theory_p3
year: 2007
number: 3
difficulty: medium
topics: ["number theory"]
source: "IMO 2007 Number Theory Problem 3"
---

Let \(X\) be a set of 10000 integers, none of them is divisible by 47 . Prove that there exists a 2007-element subset \(Y\) of \(X\) such that \(a-b+c-d+e\) is not divisible by 47 for any \(a, b, c, d, e \in Y\).

---
Call a set \(M\) of integers good if \(47 \nmid a-b+c-d+e\) for any \(a, b, c, d, e \in M\).
Consider the set \(J=\{-9,-7,-5,-3,-1,1,3,5,7,9\}\). We claim that \(J\) is good. Actually, for any \(a, b, c, d, e \in J\) the number \(a-b+c-d+e\) is odd and
\[
-45=(-9)-9+(-9)-9+(-9) \leq a-b+c-d+e \leq 9-(-9)+9-(-9)+9=45
\]
But there is no odd number divisible by 47 between \(-45\) and 45 .
For any \(k=1, \ldots, 46\) consider the set
\[
A_{k}=\{x \in X \mid \exists j \in J: \quad k x \equiv j(\bmod 47)\}
\]
If \(A_{k}\) is not good, then \(47 \mid a-b+c-d+e\) for some \(a, b, c, d, e \in A_{k}\), hence \(47 \mid k a-k b+\) \(k c-k d+k e\). But set \(J\) contains numbers with the same residues modulo 47 , so \(J\) also is not good. This is a contradiction; therefore each \(A_{k}\) is a good subset of \(X\).
Then it suffices to prove that there exists a number \(k\) such that \(\left|A_{k}\right| \geq 2007\). Note that each \(x \in X\) is contained in exactly 10 sets \(A_{k}\). Then
\[
\sum_{k=1}^{46}\left|A_{k}\right|=10|X|=100000
\]
hence for some value of \(k\) we have
\[
\left|A_{k}\right| \geq \frac{100000}{46} > 2173 > 2007 .
\]
This completes the proof.
