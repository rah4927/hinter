---
id: fimo_2013_algebra_p2
year: 2013
number: 2
difficulty: medium
topics: ["algebra"]
source: "IMO 2013 Algebra Problem 2"
---

Prove that in any set of 2000 distinct real numbers there exist two pairs \(a > b\) and \(c > d\) with \(a \neq c\) or \(b \neq d\), such that
\[
\left|\frac{a-b}{c-d}-1\right| < \frac{1}{100000} \text {. }
\]

---
For any set \(S\) of \(n=2000\) distinct real numbers, let \(D_{1} \leqslant D_{2} \leqslant \cdots \leqslant D_{m}\) be the distances between them, displayed with their multiplicities. Here \(m=n(n-1) / 2\). By rescaling the numbers, we may assume that the smallest distance \(D_{1}\) between two elements of \(S\) is \(D_{1}=1\). Let \(D_{1}=1=y-x\) for \(x, y \in S\). Evidently \(D_{m}=v-u\) is the difference between the largest element \(v\) and the smallest element \(u\) of \(S\).
If \(D_{i+1} / D_{i} < 1+10^{-5}\) for some \(i=1,2, \ldots, m-1\) then the required inequality holds, because \(0 \leqslant D_{i+1} / D_{i}-1 < 10^{-5}\). Otherwise, the reverse inequality
\[
\frac{D_{i+1}}{D_{i}} \geqslant 1+\frac{1}{10^{5}}
\]
holds for each \(i=1,2, \ldots, m-1\), and therefore
\[
v-u=D_{m}=\frac{D_{m}}{D_{1}}=\frac{D_{m}}{D_{m-1}} \cdots \frac{D_{3}}{D_{2}} \cdot \frac{D_{2}}{D_{1}} \geqslant\left(1+\frac{1}{10^{5}}\right)^{m-1} .
\]
From \(m-1=n(n-1) / 2-1=1000 \cdot 1999-1 > 19 \cdot 10^{5}\), together with the fact that for all \(n \geqslant 1\), \(\left(1+\frac{1}{n}\right)^{n} \geqslant 1+\left(\begin{array}{l}n \\ 1\end{array}\right) \cdot \frac{1}{n}=2\), we get
\[
\left(1+\frac{1}{10^{5}}\right)^{19 \cdot 10^{5}}=\left(\left(1+\frac{1}{10^{5}}\right)^{10^{5}}\right)^{19} \geqslant 2^{19}=2^{9} \cdot 2^{10} > 500 \cdot 1000 > 2 \cdot 10^{5} \text {, }
\]
and so \(v-u=D_{m} > 2 \cdot 10^{5}\).
Since the distance of \(x\) to at least one of the numbers \(u, v\) is at least \((u-v) / 2 > 10^{5}\), we have
\[
|x-z| > 10^{5} .
\]
for some \(z \in\{u, v\}\). Since \(y-x=1\), we have either \(z > y > x\) (if \(z=v\) ) or \(y > x > z\) (if \(z=u\) ). If \(z > y > x\), selecting \(a=z, b=y, c=z\) and \(d=x\) (so that \(b \neq d\) ), we obtain
\[
\left|\frac{a-b}{c-d}-1\right|=\left|\frac{z-y}{z-x}-1\right|=\left|\frac{x-y}{z-x}\right|=\frac{1}{z-x} < 10^{-5} .
\]
Otherwise, if \(y > x > z\), we may choose \(a=y, b=z, c=x\) and \(d=z\) (so that \(a \neq c\) ), and obtain
\[
\left|\frac{a-b}{c-d}-1\right|=\left|\frac{y-z}{x-z}-1\right|=\left|\frac{y-x}{x-z}\right|=\frac{1}{x-z} < 10^{-5} .
\]
The desired result follows.
