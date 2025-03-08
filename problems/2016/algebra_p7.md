---
id: fimo_2016_algebra_p7
year: 2016
number: 7
difficulty: medium
topics: ["algebra"]
source: "IMO 2016 Algebra Problem 7"
---

Denote by \(\mathbb{R}\) the set of all real numbers. Find all functions \(f: \mathbb{R} \rightarrow \mathbb{R}\) such that \(f(0) \neq 0\) and
\[
f(x+y)^{2}=2 f(x) f(y)+\max \left\{f\left(x^{2}\right)+f\left(y^{2}\right), f\left(x^{2}+y^{2}\right)\right\}
\]
for all real numbers \(x\) and \(y\).

*  \(f(x)=-1\) for any \(x \in \mathbb{R}\); or

*  \(f(x)=x-1\) for any \(x \in \mathbb{R}\).


---
Taking \(x=y=0\) in (1), we get \(f(0)^{2}=2 f(0)^{2}+\max \{2 f(0), f(0)\}\). If \(f(0) > 0\), then \(f(0)^{2}+2 f(0)=0\) gives no positive solution. If \(f(0) < 0\), then \(f(0)^{2}+f(0)=0\) gives \(f(0)=-1\). Putting \(y=0\) in (1), we have \(f(x)^{2}=-2 f(x)+f\left(x^{2}\right)\), which is the same as \((f(x)+1)^{2}=f\left(x^{2}\right)+1\). Let \(g(x)=f(x)+1\). Then for any \(x \in \mathbb{R}\), we have
\[
g\left(x^{2}\right)=g(x)^{2} \geqslant 0 .
\]
From (1), we find that \(f(x+y)^{2} \geqslant 2 f(x) f(y)+f\left(x^{2}\right)+f\left(y^{2}\right)\). In terms of \(g\), this becomes \((g(x+y)-1)^{2} \geqslant 2(g(x)-1)(g(y)-1)+g\left(x^{2}\right)+g\left(y^{2}\right)-2\). Using (2), this means
\[
(g(x+y)-1)^{2} \geqslant(g(x)+g(y)-1)^{2}-1 .
\]
Putting \(x=1\) in (2), we get \(g(1)=0\) or 1 . The two cases are handled separately.

* Case 1. \(g(1)=0\), which is the same as \(f(1)=-1\).

We put \(x=-1\) and \(y=0\) in (1). This gives \(f(-1)^{2}=-2 f(-1)-1\), which forces \(f(-1)=-1\). Next, we take \(x=-1\) and \(y=1\) in (1) to get \(1=2+\max \{-2, f(2)\}\). This clearly implies \(1=2+f(2)\) and hence \(f(2)=-1\), that is, \(g(2)=0\). From (2), we can prove inductively that \(g\left(2^{2^{n}}\right)=g(2)^{2^{n}}=0\) for any \(n \in \mathbb{N}\). Substitute \(y=2^{2^{n}}-x\) in (3). We obtain
\[
\left(g(x)+g\left(2^{2^{n}}-x\right)-1\right)^{2} \leqslant\left(g\left(2^{2^{n}}\right)-1\right)^{2}+1=2 .
\]
For any fixed \(x \geqslant 0\), we consider \(n\) to be sufficiently large so that \(2^{2^{n}}-x > 0\). From (2), this implies \(g\left(2^{2^{n}}-x\right) \geqslant 0\) so that \(g(x) \leqslant 1+\sqrt{2}\). Using (2) again, we get
\[
g(x)^{2^{n}}=g\left(x^{2^{n}}\right) \leqslant 1+\sqrt{2}
\]
for any \(n \in \mathbb{N}\). Therefore, \(|g(x)| \leqslant 1\) for any \(x \geqslant 0\).
If there exists \(a \in \mathbb{R}\) for which \(g(a) \neq 0\), then for sufficiently large \(n\) we must have \(g\left(\left(a^{2}\right)^{\frac{1}{2^{n}}}\right)=g\left(a^{2}\right)^{\frac{1}{2^{n}}} > \frac{1}{2}\). By taking \(x=-y=-\left(a^{2}\right)^{\frac{1}{2^{n}}}\) in (1), we obtain
\[
\begin{aligned}
1 & =2 f(x) f(-x)+\max \left\{2 f\left(x^{2}\right), f\left(2 x^{2}\right)\right\} \\
& =2(g(x)-1)(g(-x)-1)+\max \left\{2\left(g\left(x^{2}\right)-1\right), g\left(2 x^{2}\right)-1\right\} \\
& \leqslant 2\left(-\frac{1}{2}\right)\left(-\frac{1}{2}\right)+0=\frac{1}{2}
\end{aligned}
\]
since \(|g(-x)|=|g(x)| \in\left(\frac{1}{2}, 1\right]\) by \((2)\) and the choice of \(x\), and since \(g(z) \leqslant 1\) for \(z \geqslant 0\). This yields a contradiction and hence \(g(x)=0\) must hold for any \(x\). This means \(f(x)=-1\) for any \(x \in \mathbb{R}\), which clearly satisfies (1). - Case 2. \(g(1)=1\), which is the same as \(f(1)=0\).
We put \(x=-1\) and \(y=1\) in \((1)\) to get \(1=\max \{0, f(2)\}\). This clearly implies \(f(2)=1\) and hence \(g(2)=2\). Setting \(x=2 n\) and \(y=2\) in \((3)\), we have
\[
(g(2 n+2)-1)^{2} \geqslant(g(2 n)+1)^{2}-1
\]
By induction on \(n\), it is easy to prove that \(g(2 n) \geqslant n+1\) for all \(n \in \mathbb{N}\). For any real number \(a > 1\), we choose a large \(n \in \mathbb{N}\) and take \(k\) to be the positive integer such that \(2 k \leqslant a^{2^{n}} < 2 k+2\). From \((2)\) and \((3)\), we have
\[
\left(g(a)^{2^{n}}-1\right)^{2}+1=\left(g\left(a^{2^{n}}\right)-1\right)^{2}+1 \geqslant\left(g(2 k)+g\left(a^{2^{n}}-2 k\right)-1\right)^{2} \geqslant k^{2} > \frac{1}{4}\left(a^{2^{n}}-2\right)^{2}
\]
since \(g\left(a^{2^{n}}-2 k\right) \geqslant 0\). For large \(n\), this clearly implies \(g(a)^{2^{n}} > 1\). Thus,
\[
\left(g(a)^{2^{n}}\right)^{2} > \left(g(a)^{2^{n}}-1\right)^{2}+1 > \frac{1}{4}\left(a^{2^{n}}-2\right)^{2}
\]
This yields
\[
g(a)^{2^{n}} > \frac{1}{2}\left(a^{2^{n}}-2\right)
\]
Note that
\[
\frac{a^{2^{n}}}{a^{2^{n}}-2}=1+\frac{2}{a^{2^{n}}-2} \leqslant\left(1+\frac{2}{2^{n}\left(a^{2^{n}}-2\right)}\right)^{2^{n}}
\]
by binomial expansion. This can be rewritten as
\[
\left(a^{2^{n}}-2\right)^{\frac{1}{2^{n}}} \geqslant \frac{a}{1+\frac{2}{2^{n}\left(a^{2^{n}}-2\right)}} .
\]
Together with (4), we conclude \(g(a) \geqslant a\) by taking \(n\) sufficiently large.
Consider \(x=n a\) and \(y=a > 1\) in \((3)\). This gives \((g((n+1) a)-1)^{2} \geqslant(g(n a)+g(a)-1)^{2}-1\). By induction on \(n\), it is easy to show \(g(n a) \geqslant(n-1)(g(a)-1)+a\) for any \(n \in \mathbb{N}\). We choose a large \(n \in \mathbb{N}\) and take \(k\) to be the positive integer such that \(k a \leqslant 2^{2^{n}} < (k+1) a\). Using (2) and \((3)\), we have
\(2^{2^{n+1}} > \left(2^{2^{n}}-1\right)^{2}+1=\left(g\left(2^{2^{n}}\right)-1\right)^{2}+1 \geqslant\left(g\left(2^{2^{n}}-k a\right)+g(k a)-1\right)^{2} \geqslant((k-1)(g(a)-1)+a-1)^{2}\), from which it follows that
\[
2^{2^{n}} \geqslant(k-1)(g(a)-1)+a-1 > \frac{2^{2^{n}}}{a}(g(a)-1)-2(g(a)-1)+a-1
\]
holds for sufficiently large \(n\). Hence, we must have \(\frac{g(a)-1}{a} \leqslant 1\), which implies \(g(a) \leqslant a+1\) for any \(a > 1\). Then for large \(n \in \mathbb{N}\), from (3) and (2) we have
\[
4 a^{2^{n+1}}=\left(2 a^{2^{n}}\right)^{2} \geqslant\left(g\left(2 a^{2^{n}}\right)-1\right)^{2} \geqslant\left(2 g\left(a^{2^{n}}\right)-1\right)^{2}-1=\left(2 g(a)^{2^{n}}-1\right)^{2}-1
\]
This implies
\[
2 a^{2^{n}} > \frac{1}{2}\left(1+\sqrt{4 a^{2^{n+1}}+1}\right) \geqslant g(a)^{2^{n}}
\]
When \(n\) tends to infinity, this forces \(g(a) \leqslant a\). Together with \(g(a) \geqslant a\), we get \(g(a)=a\) for all real numbers \(a > 1\), that is, \(f(a)=a-1\) for all \(a > 1\).
Finally, for any \(x \in \mathbb{R}\), we choose \(y\) sufficiently large in (1) so that \(y, x+y > 1\). This gives \((x+y-1)^{2}=2 f(x)(y-1)+\max \left\{f\left(x^{2}\right)+y^{2}-1, x^{2}+y^{2}-1\right\}\), which can be rewritten as
\[
2(x-1-f(x)) y=-x^{2}+2 x-2-2 f(x)+\max \left\{f\left(x^{2}\right), x^{2}\right\} .
\]
As the right-hand side is fixed, this can only hold for all large \(y\) when \(f(x)=x-1\). We now check that this function satisfies (1). Indeed, we have
\[
\begin{aligned}
f(x+y)^{2} & =(x+y-1)^{2}=2(x-1)(y-1)+\left(x^{2}+y^{2}-1\right) \\
& =2 f(x) f(y)+\max \left\{f\left(x^{2}\right)+f\left(y^{2}\right), f\left(x^{2}+y^{2}\right)\right\}
\end{aligned}
\]
