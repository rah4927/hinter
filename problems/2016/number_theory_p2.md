---
id: fimo_2016_number_theory_p2
year: 2016
number: 2
difficulty: medium
topics: ["number theory"]
source: "IMO 2016 Number Theory Problem 2"
---

Let \(\tau(n)\) be the number of positive divisors of \(n\). Let \(\tau_{1}(n)\) be the number of positive divisors of \(n\) which have remainders 1 when divided by 3 . Find all possible integral values of the fraction \(\frac{\tau(10 n)}{\tau_{1}(10 n)}\)

The final answer are all composite numbers together with 2.

---
In this solution, we always use \(p_{i}\) to denote primes congruent to \(1 \bmod 3\), and use \(q_{j}\) to denote primes congruent to \(2 \bmod 3\). When we express a positive integer \(m\) using its prime factorization, we also include the special case \(m=1\) by allowing the exponents to be zeros. We first compute \(\tau_{1}(m)\) for a positive integer \(m\).

\begin{itemize}
 \item Claim. Let \(m=3^{x} p_{1}^{a_{1}} p_{2}^{a_{2}} \cdots p_{s}^{a_{s}} q_{1}^{b_{1}} q_{2}^{b_{2}} \cdots q_{t}^{b_{t}}\) be the prime factorization of \(m\). Then
\end{itemize}

\[
\tau_{1}(m)=\prod_{i=1}^{s}\left(a_{i}+1\right)\left[\frac{1}{2} \prod_{j=1}^{t}\left(b_{j}+1\right)\right]
\]

Proof. To choose a divisor of \(m\) congruent to \(1 \bmod 3\), it cannot have the prime divisor 3, while there is no restriction on choosing prime factors congruent to \(1 \bmod 3\). Also, we have to choose an even number of prime factors (counted with multiplicity) congruent to \(2 \bmod 3\).

If \(\prod_{j=1}^{t}\left(b_{j}+1\right)\) is even, then we may assume without loss of generality \(b_{1}+1\) is even. We can choose the prime factors \(q_{2}, q_{3}, \ldots, q_{t}\) freely in \(\prod_{j=2}^{t}\left(b_{j}+1\right)\) ways. Then the parity of the number of \(q_{1}\) is uniquely determined, and hence there are \(\frac{1}{2}\left(b_{1}+1\right)\) ways to choose the exponent of \(q_{1}\). Hence (1) is verified in this case.

If \(\prod_{j=1}^{t}\left(b_{j}+1\right)\) is odd, we use induction on \(t\) to count the number of choices. When \(t=1\), there are \(\left\lceil\frac{b_{1}+1}{2}\right\rceil\) choices for which the exponent is even and \(\left\lfloor\frac{b_{1}+1}{2}\right\rfloor\) choices for which the exponent is odd. For the inductive step, we find that there are

\[
\left\lceil\frac{1}{2} \prod_{j=1}^{t-1}\left(b_{j}+1\right)\right\rceil \cdot\left\lceil\frac{b_{t}+1}{2}\right\rceil+\left\lfloor\frac{1}{2} \prod_{j=1}^{t-1}\left(b_{j}+1\right)\right\rfloor \cdot\left\lfloor\frac{b_{t}+1}{2}\right\rfloor=\left\lceil\frac{1}{2} \prod_{j=1}^{t}\left(b_{j}+1\right)\right\rceil
\]

choices with an even number of prime factors and hence \(\left\lfloor\frac{1}{2} \prod_{j=1}^{t}\left(b_{j}+1\right)\right\rfloor\) choices with an odd number of prime factors. Hence (1) is also true in this case.

Let \(n=3^{x} 2^{y} 5^{z} p_{1}^{a_{1}} p_{2}^{a_{2}} \cdots p_{s}^{a_{s}} q_{1}^{b_{1}} q_{2}^{b_{2}} \cdots q_{t}^{b_{t}}\). Using the well-known formula for computing the divisor function, we get

\[
\tau(10 n)=(x+1)(y+2)(z+2) \prod_{i=1}^{s}\left(a_{i}+1\right) \prod_{j=1}^{t}\left(b_{j}+1\right)
\]

By the Claim, we have

\[
\tau_{1}(10 n)=\prod_{i=1}^{s}\left(a_{i}+1\right)\left[\frac{1}{2}(y+2)(z+2) \prod_{j=1}^{t}\left(b_{j}+1\right)\right]
\]

If \(c=(y+2)(z+2) \prod_{j=1}^{t}\left(b_{j}+1\right)\) is even, then (2) and (3) imply

\[
\frac{\tau(10 n)}{\tau_{1}(10 n)}=2(x+1)
\]

In this case \(\frac{\tau(10 n)}{\tau_{1}(10 n)}\) can be any even positive integer as \(x\) runs through all nonnegative integers. If \(c\) is odd, which means \(y, z\) are odd and each \(b_{j}\) is even, then (2) and (3) imply

\[
\frac{\tau(10 n)}{\tau_{1}(10 n)}=\frac{2(x+1) c}{c+1}
\]

For this to be an integer, we need \(c+1\) divides \(2(x+1)\) since \(c\) and \(c+1\) are relatively prime. Let \(2(x+1)=k(c+1)\). Then \((4)\) reduces to

\[
\frac{\tau(10 n)}{\tau_{1}(10 n)}=k c=k(y+2)(z+2) \prod_{j=1}^{t}\left(b_{j}+1\right) .
\]

Noting that \(y, z\) are odd, the integers \(y+2\) and \(z+2\) are at least 3 . This shows the integer in this case must be composite. On the other hand, for any odd composite number \(a b\) with \(a, b \geqslant 3\), we may simply take \(n=3^{\frac{a b-1}{2}} \cdot 2^{a-2} \cdot 5^{b-2}\) so that \(\frac{\tau(10 n)}{\tau_{1}(10 n)}=a b\) from (5).

We conclude that the fraction can be any even integer or any odd composite number. Equivalently, it can be 2 or any composite number.
