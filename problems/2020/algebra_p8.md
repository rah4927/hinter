---
id: fimo_2020_algebra_p8
year: 2020
number: 8
difficulty: medium
topics: ["algebra"]
source: "IMO 2020 Algebra Problem 8"
---

Let \(\mathbb{R}^{+}\)be the set of positive real numbers. Determine all functions \(f: \mathbb{R}^{+} \rightarrow \mathbb{R}^{+}\) such that, for all positive real numbers \(x\) and \(y\),

\[
f(x+f(x y))+y=f(x) f(y)+1
\]

The final answer is \(f(x)=x+1\).

---
A straightforward check shows that \(f(x)=x+1\) satisfies \((*)\). We divide the proof of the converse statement into a sequence of steps.

Step 1: \(f\) is injective.

Put \(x=1\) in \((*)\) and rearrange the terms to get

\[
y=f(1) f(y)+1-f(1+f(y))
\]

Therefore, if \(f\left(y_{1}\right)=f\left(y_{2}\right)\), then \(y_{1}=y_{2}\).

Step 2: \(f\) is (strictly) monotone increasing.

For any fixed \(y \in \mathbb{R}^{+}\), the function

\[
g(x):=f(x+f(x y))=f(x) f(y)+1-y
\]

is injective by Step 1. Therefore, \(x_{1}+f\left(x_{1} y\right) \neq x_{2}+f\left(x_{2} y\right)\) for all \(y, x_{1}, x_{2} \in \mathbb{R}^{+}\)with \(x_{1} \neq x_{2}\). Plugging in \(z_{i}=x_{i} y\), we arrive at

\[
\frac{z_{1}-z_{2}}{y} \neq f\left(z_{2}\right)-f\left(z_{1}\right), \quad \text { or } \quad \frac{1}{y} \neq \frac{f\left(z_{2}\right)-f\left(z_{1}\right)}{z_{1}-z_{2}}
\]

for all \(y, z_{1}, z_{2} \in \mathbb{R}^{+}\)with \(z_{1} \neq z_{2}\). This means that the right-hand side of the rightmost relation is always non-positive, i.e., \(f\) is monotone non-decreasing. Since \(f\) is injective, it is strictly monotone.

Step 3: There exist constants \(a\) and \(b\) such that \(f(y)=a y+b\) for all \(y \in \mathbb{R}^{+}\).

Since \(f\) is monotone and bounded from below by 0 , for each \(x_{0} \geqslant 0\), there exists a right limit \(\lim _{x \searrow x_{0}} f(x) \geqslant 0\). Put \(p=\lim _{x \searrow 0} f(x)\) and \(q=\lim _{x \searrow p} f(x)\).

Fix an arbitrary \(y\) and take the limit of \((*)\) as \(x \searrow 0\). We have \(f(x y) \searrow p\) and hence \(f(x+f(x y)) \searrow q\); therefore, we obtain

\[
q+y=p f(y)+1, \quad \text { or } \quad f(y)=\frac{q+y-1}{p} .
\]

(Notice that \(p \neq 0\), otherwise \(q+y=1\) for all \(y\), which is absurd.) The claim is proved. Step 4: \(f(x)=x+1\) for all \(x \in \mathbb{R}^{+}\).

Based on the previous step, write \(f(x)=a x+b\). Putting this relation into \((*)\) we get

\[
a(x+a x y+b)+b+y=(a x+b)(a y+b)+1,
\]

which can be rewritten as

\[
(a-a b) x+(1-a b) y+a b+b-b^{2}-1=0 \quad \text { for all } x, y \in \mathbb{R}^{+} .
\]

This identity may hold only if all the coefficients are 0, i.e.,

\[
a-a b=1-a b=a b+b-b^{2}-1=0 .
\]

Hence, \(a=b=1\).
