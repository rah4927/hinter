---
id: fimo_2013_algebra_p6
year: 2013
number: 6
difficulty: medium
topics: ["algebra"]
source: "IMO 2013 Algebra Problem 6"
---

Let \(m \neq 0\) be an integer. Find all polynomials \(P(x)\) with real coefficients such that
\[
\left(x^{3}-m x^{2}+1\right) P(x+1)+\left(x^{3}+m x^{2}+1\right) P(x-1)=2\left(x^{3}-m x+1\right) P(x)
\]
for all real numbers \(x\).


---
Let \(P(x)=a_{n} x^{n}+\cdots+a_{0} x^{0}\) with \(a_{n} \neq 0\). Comparing the coefficients of \(x^{n+1}\) on both sides gives \(a_{n}(n-2 m)(n-1)=0\), so \(n=1\) or \(n=2 m\).
If \(n=1\), one easily verifies that \(P(x)=x\) is a solution, while \(P(x)=1\) is not. Since the given condition is linear in \(P\), this means that the linear solutions are precisely \(P(x)=t x\) for \(t \in \mathbb{R}\).
Now assume that \(n=2 m\). The polynomial \(x P(x+1)-(x+1) P(x)=(n-1) a_{n} x^{n}+\cdots\) has degree \(n\), and therefore it has at least one (possibly complex) root \(r\). If \(r \notin\{0,-1\}\), define \(k=P(r) / r=P(r+1) /(r+1)\). If \(r=0\), let \(k=P(1)\). If \(r=-1\), let \(k=-P(-1)\). We now consider the polynomial \(S(x)=P(x)-k x\). It also satisfies (1) because \(P(x)\) and \(k x\) satisfy it. Additionally, it has the useful property that \(r\) and \(r+1\) are roots.
Let \(A(x)=x^{3}-m x^{2}+1\) and \(B(x)=x^{3}+m x^{2}+1\). Plugging in \(x=s\) into (1) implies that:
If \(s-1\) and \(s\) are roots of \(S\) and \(s\) is not a root of \(A\), then \(s+1\) is a root of \(S\).
If \(s\) and \(s+1\) are roots of \(S\) and \(s\) is not a root of \(B\), then \(s-1\) is a root of \(S\).
Let \(a \geqslant 0\) and \(b \geqslant 1\) be such that \(r-a, r-a+1, \ldots, r, r+1, \ldots, r+b-1, r+b\) are roots of \(S\), while \(r-a-1\) and \(r+b+1\) are not. The two statements above imply that \(r-a\) is a root of \(B\) and \(r+b\) is a root of \(A\).
Since \(r-a\) is a root of \(B(x)\) and of \(A(x+a+b)\), it is also a root of their greatest common divisor \(C(x)\) as integer polynomials. If \(C(x)\) was a non-trivial divisor of \(B(x)\), then \(B\) would have a rational root \(\alpha\). Since the first and last coefficients of \(B\) are \(1, \alpha\) can only be 1 or \(-1\); but \(B(-1)=m > 0\) and \(B(1)=m+2 > 0\) since \(n=2 m\).
Therefore \(B(x)=A(x+a+b)\). Writing \(c=a+b \geqslant 1\) we compute
\[
0=A(x+c)-B(x)=(3 c-2 m) x^{2}+c(3 c-2 m) x+c^{2}(c-m) .
\]
Then we must have \(3 c-2 m=c-m=0\), which gives \(m=0\), a contradiction. We conclude that \(f(x)=t x\) is the only solution.
