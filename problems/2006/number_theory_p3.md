---
id: fimo_2006_number_theory_p3
year: 2006
number: 3
difficulty: medium
topics: ["number theory"]
source: "IMO 2006 Number Theory Problem 3"
---

The sequence \(f(1), f(2), f(3), \ldots\) is defined by
\[
f(n)=\frac{1}{n}\left(\left\lfloor\frac{n}{1}\right\rfloor+\left\lfloor\frac{n}{2}\right\rfloor+\cdots+\left\lfloor\frac{n}{n}\right\rfloor\right),
\]
where \(\lfloor x\rfloor\) denotes the integer part of \(x\).
(a) Prove that \(f(n+1) > f(n)\) infinitely often.
(b) Prove that \(f(n+1) < f(n)\) infinitely often.

---
Let \(g(n)=n f(n)\) for \(n \geq 1\) and \(g(0)=0\). We note that, for \(k=1, \ldots, n\),
\[
\left\lfloor\frac{n}{k}\right\rfloor-\left\lfloor\frac{n-1}{k}\right\rfloor=0
\]
if \(k\) is not a divisor of \(n\) and
\[
\left\lfloor\frac{n}{k}\right\rfloor-\left\lfloor\frac{n-1}{k}\right\rfloor=1
\]
if \(k\) divides \(n\). It therefore follows that if \(d(n)\) is the number of positive divisors of \(n \geq 1\) then
\[
\begin{aligned}
g(n) & =\left\lfloor\frac{n}{1}\right\rfloor+\left\lfloor\frac{n}{2}\right\rfloor+\cdots+\left\lfloor\frac{n}{n-1}\right\rfloor+\left\lfloor\frac{n}{n}\right\rfloor \\
& =\left\lfloor\frac{n-1}{1}\right\rfloor+\left\lfloor\frac{n-1}{2}\right\rfloor+\cdots+\left\lfloor\frac{n-1}{n-1}\right\rfloor+\left\lfloor\frac{n-1}{n}\right\rfloor+d(n) \\
& =g(n-1)+d(n) .
\end{aligned}
\]
Hence
\[
g(n)=g(n-1)+d(n)=g(n-2)+d(n-1)+d(n)=\cdots=d(1)+d(2)+\cdots+d(n)
\]
meaning that
\[
f(n)=\frac{d(1)+d(2)+\cdots+d(n)}{n} .
\]
In other words, \(f(n)\) is equal to the arithmetic mean of \(d(1), d(2), \ldots, d(n)\). In order to prove the claims, it is therefore sufficient to show that \(d(n+1) > f(n)\) and \(d(n+1) < f(n)\) both hold infinitely often.
We note that \(d(1)=1\). For \(n > 1, d(n) \geq 2\) holds, with equality if and only if \(n\) is prime. Since \(f(6)=7 / 3 > 2\), it follows that \(f(n) > 2\) holds for all \(n \geq 6\).
Since there are infinitely many primes, \(d(n+1)=2\) holds for infinitely many values of \(n\), and for each such \(n \geq 6\) we have \(d(n+1)=2 < f(n)\). This proves claim (b).
To prove (a), notice that the sequence \(d(1), d(2), d(3), \ldots\) is unbounded (e. g. \(d\left(2^{k}\right)=k+1\) for all \(k)\). Hence \(d(n+1) > \max \{d(1), d(2), \ldots, d(n)\}\) for infinitely many \(n\). For all such \(n\), we have \(d(n+1) > f(n)\). This completes the solution.
