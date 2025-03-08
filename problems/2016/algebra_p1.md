---
id: fimo_2016_algebra_p1
year: 2016
number: 1
difficulty: medium
topics: ["algebra"]
source: "IMO 2016 Algebra Problem 1"
---

Let \(a, b\) and \(c\) be positive real numbers such that \(\min \{a b, b c, c a\} \geqslant 1\). Prove that

\[
\sqrt[3]{\left(a^{2}+1\right)\left(b^{2}+1\right)\left(c^{2}+1\right)} \leqslant\left(\frac{a+b+c}{3}\right)^{2}+1
\]

---
We first show the following.

\begin{itemize}
 \item Claim. For any positive real numbers \(x, y\) with \(x y \geqslant 1\), we have
\end{itemize}

\[
\left(x^{2}+1\right)\left(y^{2}+1\right) \leqslant\left(\left(\frac{x+y}{2}\right)^{2}+1\right)^{2}
\]

Proof. Note that \(x y \geqslant 1\) implies \(\left(\frac{x+y}{2}\right)^{2}-1 \geqslant x y-1 \geqslant 0\). We find that

\[
\left(x^{2}+1\right)\left(y^{2}+1\right)=(x y-1)^{2}+(x+y)^{2} \leqslant\left(\left(\frac{x+y}{2}\right)^{2}-1\right)^{2}+(x+y)^{2}=\left(\left(\frac{x+y}{2}\right)^{2}+1\right)^{2} .
\]

Without loss of generality, assume \(a \geqslant b \geqslant c\). This implies \(a \geqslant 1\). Let \(d=\frac{a+b+c}{3}\). Note that

\[
a d=\frac{a(a+b+c)}{3} \geqslant \frac{1+1+1}{3}=1 .
\]

Then we can apply (2) to the pair \((a, d)\) and the pair \((b, c)\). We get

\[
\left(a^{2}+1\right)\left(d^{2}+1\right)\left(b^{2}+1\right)\left(c^{2}+1\right) \leqslant\left(\left(\frac{a+d}{2}\right)^{2}+1\right)^{2}\left(\left(\frac{b+c}{2}\right)^{2}+1\right)^{2}
\]

Next, from

\[
\frac{a+d}{2} \cdot \frac{b+c}{2} \geqslant \sqrt{a d} \cdot \sqrt{b c} \geqslant 1
\]

we can apply (2) again to the pair \(\left(\frac{a+d}{2}, \frac{b+c}{2}\right)\). Together with (3), we have

\[
\left(a^{2}+1\right)\left(d^{2}+1\right)\left(b^{2}+1\right)\left(c^{2}+1\right) \leqslant\left(\left(\frac{a+b+c+d}{4}\right)^{2}+1\right)^{4}=\left(d^{2}+1\right)^{4} .
\]

Therefore, \(\left(a^{2}+1\right)\left(b^{2}+1\right)\left(c^{2}+1\right) \leqslant\left(d^{2}+1\right)^{3}\), and (1) follows by taking cube root of both sides.
