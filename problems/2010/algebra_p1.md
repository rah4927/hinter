---
id: fimo_2010_algebra_p1
year: 2010
number: 1
difficulty: medium
topics: ["algebra"]
source: "IMO 2010 Algebra Problem 1"
---

Determine all functions \(f: \mathbb{R} \rightarrow \mathbb{R}\) such that the equality
\[
f([x] y)=f(x)[f(y)] .
\]
holds for all \(x, y \in \mathbb{R}\). Here, by \([x]\) we denote the greatest integer not exceeding \(x\).


---
First, setting \(x=0\) in (1) we get
\[
f(0)=f(0)[f(y)]
\]
for all \(y \in \mathbb{R}\). Now, two cases are possible.
Case 1. Assume that \(f(0) \neq 0\). Then from (2) we conclude that \([f(y)]=1\) for all \(y \in \mathbb{R}\). Therefore, equation (1) becomes \(f([x] y)=f(x)\), and substituting \(y=0\) we have \(f(x)=f(0)=C \neq 0\). Finally, from \([f(y)]=1=[C]\) we obtain that \(1 \leq C < 2\).
Case 2. Now we have \(f(0)=0\). Here we consider two subcases.
Subcase 2a. Suppose that there exists \(0 < \alpha < 1\) such that \(f(\alpha) \neq 0\). Then setting \(x=\alpha\) in (1) we obtain \(0=f(0)=f(\alpha)[f(y)]\) for all \(y \in \mathbb{R}\). Hence, \([f(y)]=0\) for all \(y \in \mathbb{R}\). Finally, substituting \(x=1\) in (1) provides \(f(y)=0\) for all \(y \in \mathbb{R}\), thus contradicting the condition \(f(\alpha) \neq 0\).
Subcase 2b. Conversely, we have \(f(\alpha)=0\) for all \(0 \leq \alpha < 1\). Consider any real \(z\); there exists an integer \(N\) such that \(\alpha=\frac{z}{N} \in[0,1\) ) (one may set \(N=[z]+1\) if \(z \geq 0\) and \(N=[z]-1\) otherwise). Now, from (1) we get \(f(z)=f([N] \alpha)=f(N)[f(\alpha)]=0\) for all \(z \in \mathbb{R}\).
Finally, a straightforward check shows that all the obtained functions satisfy (1).
