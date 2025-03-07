---
id: fimo_2017_number_theory_p6
year: 2017
number: 6
difficulty: medium
topics: ["number theory"]
source: "IMO 2017 Number Theory Problem 6"
---

Find the smallest positive integer \(n\), or show that no such \(n\) exists, with the following property: there are infinitely many distinct \(n\)-tuples of positive rational numbers \(\left(a_{1}, a_{2}, \ldots, a_{n}\right)\) such that both
\[
a_{1}+a_{2}+\cdots+a_{n} \quad \text { and } \quad \frac{1}{a_{1}}+\frac{1}{a_{2}}+\cdots+\frac{1}{a_{n}}
\]
are integers.


---
For \(n=1, a_{1} \in \mathbb{Z}_{ > 0}\) and \(\frac{1}{a_{1}} \in \mathbb{Z}_{ > 0}\) if and only if \(a_{1}=1\). Next we show that
(i) There are finitely many \((x, y) \in \mathbb{Q}_{ > 0}^{2}\) satisfying \(x+y \in \mathbb{Z}\) and \(\frac{1}{x}+\frac{1}{y} \in \mathbb{Z}\)
Write \(x=\frac{a}{b}\) and \(y=\frac{c}{d}\) with \(a, b, c, d \in \mathbb{Z}_{ > 0}\) and \(\operatorname{gcd}(a, b)=\operatorname{gcd}(c, d)=1\). Then \(x+y \in \mathbb{Z}\) and \(\frac{1}{x}+\frac{1}{y} \in \mathbb{Z}\) is equivalent to the two divisibility conditions
\[
b d \mid a d+b c(1) \quad \text { and } \quad a c \mid a d+b c \quad(2)
\]
Condition (1) implies that \(d|a d+b c \Longleftrightarrow d| b c \Longleftrightarrow d \mid b\) since \(\operatorname{gcd}(c, d)=1\). Still from (1) we get \(b|a d+b c \Longleftrightarrow b| a d \Longleftrightarrow b \mid d\) since \(\operatorname{gcd}(a, b)=1\). From \(b \mid d\) and \(d \mid b\) we have \(b=d\).
An analogous reasoning with condition (2) shows that \(a=c\). Hence \(x=\frac{a}{b}=\frac{c}{d}=y\), i.e., the problem amounts to finding all \(x \in \mathbb{Q}_{ > 0}\) such that \(2 x \in \mathbb{Z}_{ > 0}\) and \(\frac{2}{x} \in \mathbb{Z}_{ > 0}\). Letting \(n=2 x \in \mathbb{Z}_{ > 0}\), we have that \(\frac{2}{x} \in \mathbb{Z}_{ > 0} \Longleftrightarrow \frac{4}{n} \in \mathbb{Z}_{ > 0} \Longleftrightarrow n=1,2\) or 4 , and there are finitely many solutions, namely \((x, y)=\left(\frac{1}{2}, \frac{1}{2}\right),(1,1)\) or \((2,2)\).
(ii) There are infinitely many triples \((x, y, z) \in \mathbb{Q}_{ > 0}^{2}\) such that \(x+y+z \in \mathbb{Z}\) and \(\frac{1}{x}+\frac{1}{y}+\frac{1}{z} \in \mathbb{Z}\). We will look for triples such that \(x+y+z=1\), so we may write them in the form
\[
(x, y, z)=\left(\frac{a}{a+b+c}, \frac{b}{a+b+c}, \frac{c}{a+b+c}\right) \quad \text { with } a, b, c \in \mathbb{Z}_{ > 0}
\]
We want these to satisfy
\[
\frac{1}{x}+\frac{1}{y}+\frac{1}{z}=\frac{a+b+c}{a}+\frac{a+b+c}{b}+\frac{a+b+c}{c} \in \mathbb{Z} \Longleftrightarrow \frac{b+c}{a}+\frac{a+c}{b}+\frac{a+b}{c} \in \mathbb{Z}
\]
Fixing \(a=1\), it suffices to find infinitely many pairs \((b, c) \in \mathbb{Z}_{ > 0}^{2}\) such that
\[
\frac{1}{b}+\frac{1}{c}+\frac{c}{b}+\frac{b}{c}=3 \Longleftrightarrow b^{2}+c^{2}-3 b c+b+c=0
\]
To show that equation \((* )\) has infinitely many solutions, we use Vieta jumping (also known as root flipping): starting with \(b=2, c=3\), the following algorithm generates infinitely many solutions. Let \(c \geqslant b\), and view \((* )\) as a quadratic equation in \(b\) for \(c\) fixed:

\[
b^{2}-(3 c-1) \cdot b+\left(c^{2}+c\right)=0
\]
Then there exists another root \(b_{0} \in \mathbb{Z}\) of \((* * )\) which satisfies \(b+b_{0}=3 c-1\) and \(b \cdot b_{0}=c^{2}+c\). Since \(c \geqslant b\) by assumption,

\[
b_{0}=\frac{c^{2}+c}{b} \geqslant \frac{c^{2}+c}{c} > c
\]
Hence from the solution \((b, c)\) we obtain another one \(\left(c, b_{0}\right)\) with \(b_{0} > c\), and we can then "jump" again, this time with \(c\) as the "variable" in the quadratic \((* )\). This algorithm will generate an infinite sequence of distinct solutions, whose first terms are

\((2,3),(3,6),(6,14),(14,35),(35,90),(90,234),(234,611),(611,1598),(1598,4182), \ldots\)
