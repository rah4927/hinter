---
id: fimo_2014_algebra_p5
year: 2014
number: 5
difficulty: medium
topics: ["algebra"]
source: "IMO 2014 Algebra Problem 5"
---

Consider all polynomials \(P(x)\) with real coefficients that have the following property: for any two real numbers \(x\) and \(y\) one has
\[
\left|y^{2}-P(x)\right| \leqslant 2|x| \quad \text { if and only if } \quad\left|x^{2}-P(y)\right| \leqslant 2|y| \text {. }
\]
Determine all possible values of \(P(0)\).


---
Part I. We begin by verifying that these numbers are indeed possible values of \(P(0)\). To see that each negative real number \(-C\) can be \(P(0)\), it suffices to check that for every \(C > 0\) the polynomial \(P(x)=-\left(\frac{2 x^{2}}{C}+C\right)\) has the property described in the statement of the problem. Due to symmetry it is enough for this purpose to prove \(\left|y^{2}-P(x)\right| > 2|x|\) for any two real numbers \(x\) and \(y\). In fact we have
\[
\left|y^{2}-P(x)\right|=y^{2}+\frac{x^{2}}{C}+\frac{(|x|-C)^{2}}{C}+2|x| \geqslant \frac{x^{2}}{C}+2|x| \geqslant 2|x|,
\]
where in the first estimate equality can only hold if \(|x|=C\), whilst in the second one it can only hold if \(x=0\). As these two conditions cannot be met at the same time, we have indeed \(\left|y^{2}-P(x)\right| > 2|x|\)
To show that \(P(0)=1\) is possible as well, we verify that the polynomial \(P(x)=x^{2}+1\) satisfies (1). Notice that for all real numbers \(x\) and \(y\) we have
\[
\begin{aligned}
\left|y^{2}-P(x)\right| \leqslant 2|x| & \Longleftrightarrow\left(y^{2}-x^{2}-1\right)^{2} \leqslant 4 x^{2} \\
& \Longleftrightarrow 0 \leqslant\left(\left(y^{2}-(x-1)^{2}\right)\left((x+1)^{2}-y^{2}\right)\right. \\
& \Longleftrightarrow 0 \leqslant(y-x+1)(y+x-1)(x+1-y)(x+1+y) \\
& \Longleftrightarrow 0 \leqslant\left((x+y)^{2}-1\right)\left(1-(x-y)^{2}\right) .
\end{aligned}
\]
Since this inequality is symmetric in \(x\) and \(y\), we are done.
Part II. Now we show that no values other than those mentioned in the answer are possible for \(P(0)\). To reach this we let \(P\) denote any polynomial satisfying \((1)\) and \(P(0) \geqslant 0\); as we shall see, this implies \(P(x)=x^{2}+1\) for all real \(x\), which is actually more than what we want.
First step: We prove that \(P\) is even.
By (1) we have
\[
\left|y^{2}-P(x)\right| \leqslant 2|x| \Longleftrightarrow\left|x^{2}-P(y)\right| \leqslant 2|y| \Longleftrightarrow\left|y^{2}-P(-x)\right| \leqslant 2|x|
\]
for all real numbers \(x\) and \(y\). Considering just the equivalence of the first and third statement and taking into account that \(y^{2}\) may vary through \(\mathbb{R}_{\geqslant 0}\) we infer that
\[
[P(x)-2|x|, P(x)+2|x|] \cap \mathbb{R}_{\geqslant 0}=[P(-x)-2|x|, P(-x)+2|x|] \cap \mathbb{R}_{\geqslant 0}
\]
holds for all \(x \in \mathbb{R}\). We claim that there are infinitely many real numbers \(x\) such that \(P(x)+2|x| \geqslant 0\). This holds in fact for any real polynomial with \(P(0) \geqslant 0\); in order to see this, we may assume that the coefficient of \(P\) appearing in front of \(x\) is nonnegative. In this case the desired inequality holds for all sufficiently small positive real numbers.
For such numbers \(x\) satisfying \(P(x)+2|x| \geqslant 0\) we have \(P(x)+2|x|=P(-x)+2|x|\) by the previous displayed formula, and hence also \(P(x)=P(-x)\). Consequently the polynomial \(P(x)-P(-x)\) has infinitely many zeros, wherefore it has to vanish identically. Thus \(P\) is indeed even. Second step: We prove that \(P(t) > 0\) for all \(t \in \mathbb{R}\).
Let us assume for a moment that there exists a real number \(t \neq 0\) with \(P(t)=0\). Then there is some open interval \(I\) around \(t\) such that \(|P(y)| \leqslant 2|y|\) holds for all \(y \in I\). Plugging \(x=0\) into (1) we learn that \(y^{2}=P(0)\) holds for all \(y \in I\), which is clearly absurd. We have thus shown \(P(t) \neq 0\) for all \(t \neq 0\).
In combination with \(P(0) \geqslant 0\) this informs us that our claim could only fail if \(P(0)=0\). In this case there is by our first step a polynomial \(Q(x)\) such that \(P(x)=x^{2} Q(x)\). Applying (1) to \(x=0\) and an arbitrary \(y \neq 0\) we get \(|y Q(y)| > 2\), which is surely false when \(y\) is sufficiently small.
Third step: We prove that \(P\) is a quadratic polynomial.
Notice that \(P\) cannot be constant, for otherwise if \(x=\sqrt{P(0)}\) and \(y\) is sufficiently large, the first part of (1) is false whilst the second part is true. So the degree \(n\) of \(P\) has to be at least 1 . By our first step \(n\) has to be even as well, whence in particular \(n \geqslant 2\).
Now assume that \(n \geqslant 4\). Plugging \(y=\sqrt{P(x)}\) into (1) we get \(\left|x^{2}-P(\sqrt{P(x)})\right| \leqslant 2 \sqrt{P(x)}\) and hence
\[
P(\sqrt{P(x)}) \leqslant x^{2}+2 \sqrt{P(x)}
\]
for all real \(x\). Choose positive real numbers \(x_{0}, a\), and \(b\) such that if \(x \in\left(x_{0}, \infty\right)\), then \(a x^{n} < \) \(P(x) < b x^{n}\); this is indeed possible, for if \(d > 0\) denotes the leading coefficient of \(P\), then \(\lim _{x \rightarrow \infty} \frac{P(x)}{x^{n}}=d\), whence for instance the numbers \(a=\frac{d}{2}\) and \(b=2 d\) work provided that \(x_{0}\) is chosen large enough.
Now for all sufficiently large real numbers \(x\) we have
\[
a^{n / 2+1} x^{n^{2} / 2} < a P(x)^{n / 2} < P(\sqrt{P(x)}) \leqslant x^{2}+2 \sqrt{P(x)} < x^{n / 2}+2 b^{1 / 2} x^{n / 2}
\]
i.e.
\[
x^{\left(n^{2}-n\right) / 2} < \frac{1+2 b^{1 / 2}}{a^{n / 2+1}},
\]
which is surely absurd. Thus \(P\) is indeed a quadratic polynomial.
Fourth step: We prove that \(P(x)=x^{2}+1\).
In the light of our first three steps there are two real numbers \(a > 0\) and \(b\) such that \(P(x)=\) \(a x^{2}+b\). Now if \(x\) is large enough and \(y=\sqrt{a} x\), the left part of (1) holds and the right part reads \(\left|\left(1-a^{2}\right) x^{2}-b\right| \leqslant 2 \sqrt{a} x\). In view of the fact that \(a > 0\) this is only possible if \(a=1\). Finally, substituting \(y=x+1\) with \(x > 0\) into (1) we get
\[
|2 x+1-b| \leqslant 2 x \Longleftrightarrow|2 x+1+b| \leqslant 2 x+2,
\]
i.e.,
\[
b \in[1,4 x+1] \Longleftrightarrow b \in[-4 x-3,1]
\]
for all \(x > 0\). Choosing \(x\) large enough, we can achieve that at least one of these two statements holds; then both hold, which is only possible if \(b=1\), as desired.
