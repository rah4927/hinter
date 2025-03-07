---
id: fimo_2013_number_theory_p1
year: 2013
number: 1
difficulty: medium
topics: ["number theory"]
source: "IMO 2013 Number Theory Problem 1"
---

Let \(\mathbb{Z}_{ > 0}\) be the set of positive integers. Find all functions \(f: \mathbb{Z}_{ > 0} \rightarrow \mathbb{Z}_{ > 0}\) such that
\[
m^{2}+f(n) \mid m f(m)+n
\]
for all positive integers \(m\) and \(n\).


---
Setting \(m=n=2\) tells us that \(4+f(2) \mid 2 f(2)+2\). Since \(2 f(2)+2 < 2(4+f(2))\), we must have \(2 f(2)+2=4+f(2)\), so \(f(2)=2\). Plugging in \(m=2\) then tells us that \(4+f(n) \mid 4+n\), which implies that \(f(n) \leqslant n\) for all \(n\).
Setting \(m=n\) gives \(n^{2}+f(n) \mid n f(n)+n\), so \(n f(n)+n \geqslant n^{2}+f(n)\) which we rewrite as \((n-1)(f(n)-n) \geqslant 0\). Therefore \(f(n) \geqslant n\) for all \(n \geqslant 2\). This is trivially true for \(n=1\) also.
It follows that \(f(n)=n\) for all \(n\). This function obviously satisfies the desired property.
