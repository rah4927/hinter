---
id: fimo_2017_number_theory_p4
year: 2017
number: 4
difficulty: medium
topics: ["number theory"]
source: "IMO 2017 Number Theory Problem 4"
---

Call a rational number short if it has finitely many digits in its decimal expansion. For a positive integer \(m\), we say that a positive integer \(t\) is \(m\)-tastic if there exists a number \(c \in\{1,2,3, \ldots, 2017\}\) such that \(\frac{10^{t}-1}{c \cdot m}\) is short, and such that \(\frac{10^{k}-1}{c \cdot m}\) is not short for any \(1 \leqslant k < t\). Let \(S(m)\) be the set of \(m\)-tastic numbers. Consider \(S(m)\) for \(m=1,2, \ldots\). What is the maximum number of elements in \(S(m)\) ?


---
First notice that \(x \in \mathbb{Q}\) is short if and only if there are exponents \(a, b \geqslant 0\) such that \(2^{a} \cdot 5^{b} \cdot x \in \mathbb{Z}\). In fact, if \(x\) is short, then \(x=\frac{n}{10^{k}}\) for some \(k\) and we can take \(a=b=k\); on the other hand, if \(2^{a} \cdot 5^{b} \cdot x=q \in \mathbb{Z}\) then \(x=\frac{2^{b} \cdot 5^{a} q}{10^{a+b}}\), so \(x\) is short.
If \(m=2^{a} \cdot 5^{b} \cdot s\), with \(\operatorname{gcd}(s, 10)=1\), then \(\frac{10^{t}-1}{m}\) is short if and only if \(s\) divides \(10^{t}-1\). So we may (and will) suppose without loss of generality that \(\operatorname{gcd}(m, 10)=1\). Define
\[
C=\{1 \leqslant c \leqslant 2017: \operatorname{gcd}(c, 10)=1\}
\]
The \(m\)-tastic numbers are then precisely the smallest exponents \(t > 0\) such that \(10^{t} \equiv 1\) \((\bmod \mathrm{cm})\) for some integer \(c \in C\), that is, the set of orders of \(10 \operatorname{modulo~} \mathrm{cm}\). In other words,
\[
S(m)=\left\{\operatorname{ord}_{c m}(10): c \in C\right\}
\]
Since there are \(4 \cdot 201+3=807\) numbers \(c\) with \(1 \leqslant c \leqslant 2017\) and \(\operatorname{gcd}(c, 10)=1\), namely those such that \(c \equiv 1,3,7,9(\bmod 10)\),
\[
|S(m)| \leqslant|C|=807
\]
Now we find \(m\) such that \(|S(m)|=807\). Let
\[
P=\{1 < p \leqslant 2017: p \text { is prime, } p \neq 2,5\}
\]
and choose a positive integer \(\alpha\) such that every \(p \in P\) divides \(10^{\alpha}-1(\) e.g. \(\alpha=\varphi(T), T\) being the product of all primes in \(P\) ), and let \(m=10^{\alpha}-1\).
Claim. For every \(c \in C\), we have
\[
\operatorname{ord}_{c m}(10)=c \alpha
\]
As an immediate consequence, this implies \(|S(m)|=|C|=807\), finishing the problem. Proof. Obviously \(\operatorname{ord}_{m}(10)=\alpha\). Let \(t=\operatorname{ord}_{c m}(10)\). Then
\[
c m\left|10^{t}-1 \Longrightarrow m\right| 10^{t}-1 \Longrightarrow \alpha \mid t \text {. }
\]
Hence \(t=k \alpha\) for some \(k \in \mathbb{Z}_{ > 0}\). We will show that \(k=c\).
Denote by \(\nu_{p}(n)\) the number of prime factors \(p\) in \(n\), that is, the maximum exponent \(\beta\) for which \(p^{\beta} \mid n\). For every \(\ell \geqslant 1\) and \(p \in P\), the Lifting the Exponent Lemma provides
\[
\nu_{p}\left(10^{\ell \alpha}-1\right)=\nu_{p}\left(\left(10^{\alpha}\right)^{\ell}-1\right)=\nu_{p}\left(10^{\alpha}-1\right)+\nu_{p}(\ell)=\nu_{p}(m)+\nu_{p}(\ell)
\]
so
\[
\begin{aligned}
c m \mid 10^{k \alpha}-1 & \Longleftrightarrow \forall p \in P ; \nu_{p}(c m) \leqslant \nu_{p}\left(10^{k \alpha}-1\right) \\
& \Longleftrightarrow \forall p \in P ; \nu_{p}(m)+\nu_{p}(c) \leqslant \nu_{p}(m)+\nu_{p}(k) \\
& \Longleftrightarrow \forall p \in P ; \nu_{p}(c) \leqslant \nu_{p}(k) \\
& \Longleftrightarrow c \mid k .
\end{aligned}
\]
The first \(\operatorname{such} k\) is \(k=c\), so \(\operatorname{ord}_{c m}(10)=c \alpha\).
