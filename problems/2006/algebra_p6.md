---
id: fimo_2006_algebra_p6
year: 2006
number: 6
difficulty: medium
topics: ["algebra"]
source: "IMO 2006 Algebra Problem 6"
---

Determine the smallest number \(M\) such that the inequality

\[
\left|a b\left(a^{2}-b^{2}\right)+b c\left(b^{2}-c^{2}\right)+c a\left(c^{2}-a^{2}\right)\right| \leq M\left(a^{2}+b^{2}+c^{2}\right)^{2}
\]

holds for all real numbers \(a, b, c\).

The final answer is \(M=\frac{9}{32} \sqrt{2}\).

---
We first consider the cubic polynomial

\[
P(t)=t b\left(t^{2}-b^{2}\right)+b c\left(b^{2}-c^{2}\right)+c t\left(c^{2}-t^{2}\right) .
\]

It is easy to check that \(P(b)=P(c)=P(-b-c)=0\), and therefore

\[
P(t)=(b-c)(t-b)(t-c)(t+b+c),
\]

since the cubic coefficient is \(b-c\). The left-hand side of the proposed inequality can therefore be written in the form

\[
\left|a b\left(a^{2}-b^{2}\right)+b c\left(b^{2}-c^{2}\right)+c a\left(c^{2}-a^{2}\right)\right|=|P(a)|=|(b-c)(a-b)(a-c)(a+b+c)| .
\]

The problem comes down to finding the smallest number \(M\) that satisfies the inequality

\[
|(b-c)(a-b)(a-c)(a+b+c)| \leq M \cdot\left(a^{2}+b^{2}+c^{2}\right)^{2} .
\]

Note that this expression is symmetric, and we can therefore assume \(a \leq b \leq c\) without loss of generality. With this assumption,

\[
|(a-b)(b-c)|=(b-a)(c-b) \leq\left(\frac{(b-a)+(c-b)}{2}\right)^{2}=\frac{(c-a)^{2}}{4}
\]

with equality if and only if \(b-a=c-b\), i.e. \(2 b=a+c\). Also

\[
\left(\frac{(c-b)+(b-a)}{2}\right)^{2} \leq \frac{(c-b)^{2}+(b-a)^{2}}{2}
\]

or equivalently,

\[
3(c-a)^{2} \leq 2 \cdot\left[(b-a)^{2}+(c-b)^{2}+(c-a)^{2}\right],
\]

again with equality only for \(2 b=a+c\). From (2) and (3) we get

\[
\begin{aligned}
& |(b-c)(a-b)(a-c)(a+b+c)| \\
\leq & \frac{1}{4} \cdot\left|(c-a)^{3}(a+b+c)\right| \\
= & \frac{1}{4} \cdot \sqrt{(c-a)^{6}(a+b+c)^{2}} \\
\leq & \frac{1}{4} \cdot \sqrt{\left(\frac{2 \cdot\left[(b-a)^{2}+(c-b)^{2}+(c-a)^{2}\right]}{3}\right)^{3} \cdot(a+b+c)^{2}} \\
= & \frac{\sqrt{2}}{2} \cdot\left(\sqrt[4]{\left(\frac{(b-a)^{2}+(c-b)^{2}+(c-a)^{2}}{3}\right)^{3} \cdot(a+b+c)^{2}}\right)^{2} .
\end{aligned}
\]

By the weighted AM-GM inequality this estimate continues as follows:

\[
\begin{aligned}
& |(b-c)(a-b)(a-c)(a+b+c)| \\
\leq & \frac{\sqrt{2}}{2} \cdot\left(\frac{(b-a)^{2}+(c-b)^{2}+(c-a)^{2}+(a+b+c)^{2}}{4}\right)^{2} \\
= & \frac{9 \sqrt{2}}{32} \cdot\left(a^{2}+b^{2}+c^{2}\right)^{2} .
\end{aligned}
\]

We see that the inequality (1) is satisfied for \(M=\frac{9}{32} \sqrt{2}\), with equality if and only if \(2 b=a+c\) and

\[
\frac{(b-a)^{2}+(c-b)^{2}+(c-a)^{2}}{3}=(a+b+c)^{2} .
\]

Plugging \(b=(a+c) / 2\) into the last equation, we bring it to the equivalent form

\[
2(c-a)^{2}=9(a+c)^{2} .
\]

The conditions for equality can now be restated as

\[
2 b=a+c \quad \text { and } \quad(c-a)^{2}=18 b^{2} .
\]

Setting \(b=1\) yields \(a=1-\frac{3}{2} \sqrt{2}\) and \(c=1+\frac{3}{2} \sqrt{2}\). We see that \(M=\frac{9}{32} \sqrt{2}\) is indeed the smallest constant satisfying the inequality, with equality for any triple \((a, b, c)\) proportional to \(\left(1-\frac{3}{2} \sqrt{2}, 1,1+\frac{3}{2} \sqrt{2}\right)\), up to permutation.
