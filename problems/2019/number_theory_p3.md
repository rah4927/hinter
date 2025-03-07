---
id: fimo_2019_number_theory_p3
year: 2019
number: 3
difficulty: medium
topics: ["number theory"]
source: "IMO 2019 Number Theory Problem 3"
---

We say that a set \(S\) of integers is rootiful if, for any positive integer \(n\) and any \(a_{0}, a_{1}, \ldots, a_{n} \in S\), all integer roots of the polynomial \(a_{0}+a_{1} x+\cdots+a_{n} x^{n}\) are also in \(S\). Find all rootiful sets of integers that contain all numbers of the form \(2^{a}-2^{b}\) for positive integers \(a\) and \(b\).


---
The set \(\mathbb{Z}\) of all integers is clearly rootiful. We shall prove that any rootiful set \(S\) containing all the numbers of the form \(2^{a}-2^{b}\) for \(a, b \in \mathbb{Z}_{ > 0}\) must be all of \(\mathbb{Z}\).
First, note that \(0=2^{1}-2^{1} \in S\) and \(2=2^{2}-2^{1} \in S\). Now, \(-1 \in S\), since it is a root of \(2 x+2\), and \(1 \in S\), since it is a root of \(2 x^{2}-x-1\). Also, if \(n \in S\) then \(-n\) is a root of \(x+n\), so it suffices to prove that all positive integers must be in \(S\).
Now, we claim that any positive integer \(n\) has a multiple in \(S\). Indeed, suppose that \(n=2^{\alpha} \cdot t\) for \(\alpha \in \mathbb{Z}_{\geqslant 0}\) and \(t\) odd. Then \(t \mid 2^{\phi(t)}-1\), so \(n \mid 2^{\alpha+\phi(t)+1}-2^{\alpha+1}\). Moreover, \(2^{\alpha+\phi(t)+1}-2^{\alpha+1} \in S\), and so \(S\) contains a multiple of every positive integer \(n\).
We will now prove by induction that all positive integers are in \(S\). Suppose that \(0,1, \ldots, n-\) \(1 \in S\); furthermore, let \(N\) be a multiple of \(n\) in \(S\). Consider the base- \(n\) expansion of \(N\), say \(N=a_{k} n^{k}+a_{k-1} n^{k-1}+\cdots+a_{1} n+a_{0}\). Since \(0 \leqslant a_{i} < n\) for each \(a_{i}\), we have that all the \(a_{i}\) are in \(S\). Furthermore, \(a_{0}=0\) since \(N\) is a multiple of \(n\). Therefore, \(a_{k} n^{k}+a_{k-1} n^{k-1}+\cdots+a_{1} n-N=0\), so \(n\) is a root of a polynomial with coefficients in \(S\). This tells us that \(n \in S\), completing the induction.
