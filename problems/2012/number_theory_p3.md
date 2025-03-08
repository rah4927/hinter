---
id: fimo_2012_number_theory_p3
year: 2012
number: 3
difficulty: medium
topics: ["number theory"]
source: "IMO 2012 Number Theory Problem 3"
---

Determine all integers \(m \geq 2\) such that every \(n\) with \(\frac{m}{3} \leq n \leq \frac{m}{2}\) divides the binomial coefficient \(\left(\begin{array}{c}n \\ m-2 n\end{array}\right)\).

The final answers are all prime numbers.

---
The integers in question are all prime numbers.

First we check that all primes satisfy the condition, and even a stronger one. Namely, if \(p\) is a prime then every \(n\) with \(1 \leq n \leq \frac{p}{2}\) divides \(\left(\begin{array}{c}n \\ p-2 n\end{array}\right)\). This is true for \(p=2\) where \(n=1\) is the only possibility. For an odd prime \(p\) take \(n \in\left[1, \frac{p}{2}\right]\) and consider the following identity of binomial coefficients:

\[
(p-2 n) \cdot\left(\begin{array}{c}
n \\
p-2 n
\end{array}\right)=n \cdot\left(\begin{array}{c}
n-1 \\
p-2 n-1
\end{array}\right) .
\]

Since \(p \geq 2 n\) and \(p\) is odd, all factors are non-zero. If \(d=\operatorname{gcd}(p-2 n, n)\) then \(d\) divides \(p\), but \(d \leq n < p\) and hence \(d=1\). It follows that \(p-2 n\) and \(n\) are relatively prime, and so the factor \(n\) in the right-hand side divides the binomial coefficient \(\left(\begin{array}{c}n \\ p-2 n\end{array}\right)\).

Next we show that no composite number \(m\) has the stated property. Consider two cases.

\begin{itemize}
 \item If \(m=2 k\) with \(k > 1\), pick \(n=k\). Then \(\frac{m}{3} \leq n \leq \frac{m}{2}\) but \(\left(\begin{array}{c}n \\ m-2 n\end{array}\right)=\left(\begin{array}{l}k \\ 0\end{array}\right)=1\) is not divisible by \(k > 1\).

 \item If \(m\) is odd then there exist an odd prime \(p\) and an integer \(k \geq 1\) with \(m=p(2 k+1)\). Pick \(n=p k\), then \(\frac{m}{3} \leq n \leq \frac{m}{2}\) by \(k \geq 1\). However

\end{itemize}

\[
\frac{1}{n}\left(\begin{array}{c}
n \\
m-2 n
\end{array}\right)=\frac{1}{p k}\left(\begin{array}{c}
p k \\
p
\end{array}\right)=\frac{(p k-1)(p k-2) \cdots(p k-(p-1))}{p !}
\]

is not an integer, because \(p\) divides the denominator but not the numerator.
