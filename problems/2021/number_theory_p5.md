---
id: fimo_2021_number_theory_p5
year: 2021
number: 5
difficulty: medium
topics: ["number theory"]
source: "IMO 2021 Number Theory Problem 5"
---

Prove that there are only finitely many quadruples \((a, b, c, n)\) of positive integers such that
\[
n !=a^{n-1}+b^{n-1}+c^{n-1}
\]

---
For fixed \(n\) there are clearly finitely many solutions; we will show that there is no solution with \(n > 100\). So, assume \(n > 100\). By the AM-GM inequality,
\[
\begin{aligned}
n ! & =2 n(n-1)(n-2)(n-3) \cdot(3 \cdot 4 \cdots(n-4)) \\
& \leqslant 2(n-1)^{4}\left(\frac{3+\cdots+(n-4)}{n-6}\right)^{n-6}=2(n-1)^{4}\left(\frac{n-1}{2}\right)^{n-6} < \left(\frac{n-1}{2}\right)^{n-1}
\end{aligned}
\]
thus \(a, b, c < (n-1) / 2\).
For every prime \(p\) and integer \(m \neq 0\), let \(\nu_{p}(m)\) denote the \(p\)-adic valuation of \(m\); that is, the greatest non-negative integer \(k\) for which \(p^{k}\) divides \(m\). Legendre's formula states that
\[
\nu_{p}(n !)=\sum_{s=1}^{\infty}\left\lfloor\frac{n}{p^{s}}\right\rfloor
\]
and a well-know corollary of this formula is that
\[
\nu_{p}(n !) < \sum_{s=1}^{\infty} \frac{n}{p^{s}}=\frac{n}{p-1}
\]
If \(n\) is odd then \(a^{n-1}, b^{n-1}, c^{n-1}\) are squares, and by considering them modulo 4 we conclude that \(a, b\) and \(c\) must be even. Hence, \(2^{n-1} \mid n\) ! but that is impossible for odd \(n\) because \(\nu_{2}(n !)=\nu_{2}((n-1) !) < n-1\) by \((\nabla)\)
From now on we assume that \(n\) is even. If all three numbers \(a+b, b+c, c+a\) are powers of 2 then \(a, b, c\) have the same parity. If they all are odd, then \(n !=a^{n-1}+b^{n-1}+c^{n-1}\) is also odd which is absurd. If all \(a, b, c\) are divisible by 4 , this contradicts \(\nu_{2}(n !) \leqslant n-1\). If, say, \(a\) is not divisible by 4 , then \(2 a=(a+b)+(a+c)-(b+c)\) is not divisible by 8 , and since all \(a+b, b+c\), \(c+a\) are powers of 2 , we get that one of these sums equals 4 , so two of the numbers of \(a, b, c\) are equal to 2. Say, \(a=b=2\), then \(c=2^{r}-2\) and, since \(c \mid n\) !, we must have \(c \mid a^{n-1}+b^{n-1}=2^{n}\) implying \(r=2\), and so \(c=2\), which is impossible because \(n ! \equiv 0 \not \equiv 3 \cdot 2^{n-1}(\bmod 5)\).
So now we assume that the sum of two numbers among \(a, b, c\), say \(a+b\), is not a power of 2 , so it is divisible by some odd prime \(p\). Then \(p \leqslant a+b < n\) and so \(c^{n-1}=n !-\left(a^{n-1}+b^{n-1}\right)\) is divisible by \(p\). If \(p\) divides \(a\) and \(b\), we get \(p^{n-1} \mid n\) !, contradicting \((\odot)\). Next, using ( \(\left.\nabla\right)\) and the Lifting the Exponent Lemma we get
\[
\nu_{p}(1)+\nu_{p}(2)+\cdots+\nu_{p}(n)=\nu_{p}(n !)=\nu_{p}\left(n !-c^{n-1}\right)=\nu_{p}\left(a^{n-1}+b^{n-1}\right)=\nu_{p}(a+b)+\nu_{p}(n-1) .(\diamond)
\]
In view of \((\diamond)\), no number of \(1,2, \ldots, n\) can be divisible by \(p\), except \(a+b\) and \(n-1 > a+b\). On the other hand, \(p \mid c\) implies that \(p < n / 2\) and so there must be at least two such numbers. Hence, there are two multiples of \(p\) among \(1,2, \ldots, n\), namely \(a+b=p\) and \(n-1=2 p\). But this is another contradiction because \(n-1\) is odd. This final contradiction shows that there is no solution of the equation for \(n > 100\).
