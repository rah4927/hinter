---
id: fimo_2009_algebra_p2
year: 2009
number: 2
difficulty: medium
topics: ["algebra"]
source: "IMO 2009 Algebra Problem 2"
---

Let \(a, b, c\) be positive real numbers such that \(\frac{1}{a}+\frac{1}{b}+\frac{1}{c}=a+b+c\). Prove that

\[
\frac{1}{(2 a+b+c)^{2}}+\frac{1}{(2 b+c+a)^{2}}+\frac{1}{(2 c+a+b)^{2}} \leq \frac{3}{16} .
\]

---
For positive real numbers \(x, y, z\), from the arithmetic-geometric-mean inequality,

\[
2 x+y+z=(x+y)+(x+z) \geq 2 \sqrt{(x+y)(x+z)},
\]

we obtain

\[
\frac{1}{(2 x+y+z)^{2}} \leq \frac{1}{4(x+y)(x+z)} .
\]

Applying this to the left-hand side terms of the inequality to prove, we get

\[
\begin{aligned}
\frac{1}{(2 a+b+c)^{2}} & +\frac{1}{(2 b+c+a)^{2}}+\frac{1}{(2 c+a+b)^{2}} \\
& \leq \frac{1}{4(a+b)(a+c)}+\frac{1}{4(b+c)(b+a)}+\frac{1}{4(c+a)(c+b)} \\
& =\frac{(b+c)+(c+a)+(a+b)}{4(a+b)(b+c)(c+a)}=\frac{a+b+c}{2(a+b)(b+c)(c+a)} .
\end{aligned}
\]

A second application of the inequality of the arithmetic-geometric mean yields

\[
a^{2} b+a^{2} c+b^{2} a+b^{2} c+c^{2} a+c^{2} b \geq 6 a b c,
\]

or, equivalently,

\[
9(a+b)(b+c)(c+a) \geq 8(a+b+c)(a b+b c+c a) .
\]

The supposition \(\frac{1}{a}+\frac{1}{b}+\frac{1}{c}=a+b+c\) can be written as

\[
a b+b c+c a=a b c(a+b+c) .
\]

Applying the arithmetic-geometric-mean inequality \(x^{2} y^{2}+x^{2} z^{2} \geq 2 x^{2} y z\) thrice, we get

\[
a^{2} b^{2}+b^{2} c^{2}+c^{2} a^{2} \geq a^{2} b c+a b^{2} c+a b c^{2},
\]

which is equivalent to

\[
(a b+b c+c a)^{2} \geq 3 a b c(a+b+c) .
\]

Combining (1), (2), (3), and (4), we will finish the proof:

\[
\begin{aligned}
\frac{a+b+c}{2(a+b)(b+c)(c+a)} & =\frac{(a+b+c)(a b+b c+c a)}{2(a+b)(b+c)(c+a)} \cdot \frac{a b+b c+c a}{a b c(a+b+c)} \cdot \frac{a b c(a+b+c)}{(a b+b c+c a)^{2}} \\
& \leq \frac{9}{2 \cdot 8} \cdot 1 \cdot \frac{1}{3}=\frac{3}{16} .
\end{aligned}
\]
