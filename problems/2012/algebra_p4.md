---
id: fimo_2012_algebra_p4
year: 2012
number: 4
difficulty: medium
topics: ["algebra"]
source: "IMO 2012 Algebra Problem 4"
---

Let \(f\) and \(g\) be two nonzero polynomials with integer coefficients and \(\operatorname{deg} f > \operatorname{deg} g\). Suppose that for infinitely many primes \(p\) the polynomial \(p f+g\) has a rational root. Prove that \(f\) has a rational root.

---
Since \(\operatorname{deg} f > \operatorname{deg} g\), we have \(|g(x) / f(x)| < 1\) for sufficiently large \(x\); more precisely, there is a real number \(R\) such that \(|g(x) / f(x)| < 1\) for all \(x\) with \(|x|>R\). Then for all such \(x\) and all primes \(p\) we have

\[
|p f(x)+g(x)| \geq|f(x)|\left(p-\frac{|g(x)|}{|f(x)|}\right) > 0
\]

Hence all real roots of the polynomials \(p f+g\) lie in the interval \([-R, R]\).

Let \(f(x)=a_{n} x^{n}+a_{n-1} x^{n-1}+\cdots+a_{0}\) and \(g(x)=b_{m} x^{m}+b_{m-1} x^{m-1}+\cdots+b_{0}\) where \(n > m, a_{n} \neq 0\) and \(b_{m} \neq 0\). Upon replacing \(f(x)\) and \(g(x)\) by \(a_{n}^{n-1} f\left(x / a_{n}\right)\) and \(a_{n}^{n-1} g\left(x / a_{n}\right)\) respectively, we reduce the problem to the case \(a_{n}=1\). In other words one can assume that \(f\) is monic. Then the leading coefficient of \(p f+g\) is \(p\), and if \(r=u / v\) is a rational root of \(p f+g\) with \((u, v)=1\) and \(v > 0\), then either \(v=1\) or \(v=p\).

First consider the case when \(v=1\) infinitely many times. If \(v=1\) then \(|u| \leq R\), so there are only finitely many possibilities for the integer \(u\). Therefore there exist distinct primes \(p\) and \(q\) for which we have the same value of \(u\). Then the polynomials \(p f+g\) and \(q f+g\) share this root, implying \(f(u)=g(u)=0\). So in this case \(f\) and \(g\) have an integer root in common.

Now suppose that \(v=p\) infinitely many times. By comparing the exponent of \(p\) in the denominators of \(p f(u / p)\) and \(g(u / p)\) we get \(m=n-1\) and \(p f(u / p)+g(u / p)=0\) reduces to an equation of the form

\[
\left(u^{n}+a_{n-1} p u^{n-1}+\ldots+a_{0} p^{n}\right)+\left(b_{n-1} u^{n-1}+b_{n-2} p u^{n-2}+\ldots+b_{0} p^{n-1}\right)=0 .
\]

The equation above implies that \(u^{n}+b_{n-1} u^{n-1}\) is divisible by \(p\) and hence, since \((u, p)=1\), we have \(u+b_{n-1}=p k\) with some integer \(k\). On the other hand all roots of \(p f+g\) lie in the interval \([-R, R]\), so that

\[
\begin{gathered}
\frac{\left|p k-b_{n-1}\right|}{p}=\frac{|u|}{p}<R \\
|k|<R+\frac{\left|b_{n-1}\right|}{p}<R+\left|b_{n-1}\right| .
\end{gathered}
\]

Therefore the integer \(k\) can attain only finitely many values. Hence there exists an integer \(k\) such that the number \(\frac{p k-b_{n-1}}{p}=k-\frac{b_{n-1}}{p}\) is a root of \(p f+g\) for infinitely many primes \(p\). For these primes we have

\[
f\left(k-b_{n-1} \frac{1}{p}\right)+\frac{1}{p} g\left(k-b_{n-1} \frac{1}{p}\right)=0 .
\]

So the equation

\[
f\left(k-b_{n-1} x\right)+x g\left(k-b_{n-1} x\right)=0
\]

has infinitely many solutions of the form \(x=1 / p\). Since the left-hand side is a polynomial, this implies that (1) is a polynomial identity, so it holds for all real \(x\). In particular, by substituting \(x=0\) in (1) we get \(f(k)=0\). Thus the integer \(k\) is a root of \(f\).

In summary the monic polynomial \(f\) obtained after the initial reduction always has an integer root. Therefore the original polynomial \(f\) has a rational root.
