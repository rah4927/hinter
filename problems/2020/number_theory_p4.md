---
id: fimo_2020_number_theory_p4_2
year: 2020
number: 4
difficulty: medium
topics: ["number theory"]
source: "IMO 2020 Number Theory Problem 4"
---

For any odd prime \(p\) and any integer \(n\), let \(d_{p}(n) \in\{0,1, \ldots, p-1\}\) denote the remainder when \(n\) is divided by \(p\). We say that \(\left(a_{0}, a_{1}, a_{2}, \ldots\right)\) is a \(p\)-sequence, if \(a_{0}\) is a positive integer coprime to \(p\), and \(a_{n+1}=a_{n}+d_{p}\left(a_{n}\right)\) for \(n \geqslant 0\).
Do there exist infinitely many primes \(p\) for which there exist \(p\)-sequences \(\left(a_{0}, a_{1}, a_{2}, \ldots\right)\) and \(\left(b_{0}, b_{1}, b_{2}, \ldots\right)\) such that \(a_{0} < b_{0}\), but \(a_{n} > b_{n}\) for all \(n \geqslant 1\) ?


---
Fix some odd prime \(p\), and let \(T\) be the smallest positive integer such that \(p \mid 2^{T}-1\); in other words, \(T\) is the multiplicative order of 2 modulo \(p\).
Consider any \(p\)-sequence \(\left(x_{n}\right)=\left(x_{0}, x_{1}, x_{2}, \ldots\right)\). Obviously, \(x_{n+1} \equiv 2 x_{n}(\bmod p)\) and therefore \(x_{n} \equiv 2^{n} x_{0}(\bmod p)\). This yields \(x_{n+T} \equiv x_{n}(\bmod p)\) and therefore \(d\left(x_{n+T}\right)=d\left(x_{n}\right)\) for all \(n \geqslant 0\). It follows that the sum \(d\left(x_{n}\right)+d\left(x_{n+1}\right)+\ldots+d\left(x_{n+T-1}\right)\) does not depend on \(n\) and is thus a function of \(x_{0}\) (and \(p\) ) only; we shall denote this sum by \(S_{p}\left(x_{0}\right)\), and extend the function \(S_{p}(\cdot)\) to all (not necessarily positive) integers. Therefore, we have \(x_{n+k T}=x_{n}+k S_{p}\left(x_{0}\right)\) for all positive integers \(n\) and \(k\). Clearly, \(S_{p}\left(x_{0}\right)=S_{p}\left(2^{t} x_{0}\right)\) for every integer \(t \geqslant 0\).
In both parts, we use the notation
\[
S_{p}^{+}=S_{p}(1)=\sum_{i=0}^{T-1} d_{p}\left(2^{i}\right) \quad \text { and } \quad S_{p}^{-}=S_{p}(-1)=\sum_{i=0}^{T-1} d_{p}\left(p-2^{i}\right) .
\]
Let \(q\) be an odd prime and \(p\) a prime divisor of \(2^{q}-1\); thus we have \(T=q\). We will show that \(p\) is suitable for part (b). Notice that the numbers of the form \(2^{q}-1\) are pairwise coprime (since \(\operatorname{gcd}\left(2^{q}-1,2^{r}-1\right)=2^{\operatorname{gcd}(q, r)}-1=1\) for any two distinct primes \(q\) and \(r\) ), thus there exist infinitely many such primes \(p\). Notice that \(d_{p}(x)+d_{p}(p-x)=p\) for all \(x\) with \(p \nmid x\), so that the sum \(S_{p}^{+}+S_{p}^{-}=p q\) is odd, which yields \(S_{p}^{+}=S_{p}(1) \neq S_{p}(-1)=S_{p}^{-}\).
Assume that \(\left(x_{n}\right)\) and \(\left(y_{n}\right)\) are two \(p\)-sequences with \(S_{p}\left(x_{0}\right) > S_{p}\left(y_{0}\right)\) but \(x_{0} < y_{0}\). The first condition yields that
\[
x_{M q+r}-y_{M q+r}=\left(x_{r}-y_{r}\right)+M\left(S_{p}\left(x_{0}\right)-S_{p}\left(y_{0}\right)\right) \geqslant\left(x_{r}-y_{r}\right)+M
\]
for all nonnegative integers \(M\) and every \(r=0,1, \ldots, q-1\). Thus, we have \(x_{n} > y_{n}\) for every \(n \geqslant q+q \cdot \max \left\{y_{r}-x_{r}: r=0,1, \ldots, q-1\right\}\). Now, since \(x_{0} < y_{0}\), there exists the largest \(n_{0}\) with \(x_{n_{0}} < y_{n_{0}}\). In this case the \(p\)-sequences \(a_{n}=x_{n-n_{0}}\) and \(b_{n}=y_{n-n_{0}}\) possess the desired property (notice here that \(x_{n} \neq y_{n}\) for all \(n \geqslant 0\), as otherwise we would have \(\left.S_{p}\left(x_{0}\right)=S_{p}\left(x_{n}\right)=S_{p}\left(y_{n}\right)=S_{p}\left(y_{0}\right)\right)\). It remains to find \(p\)-sequences \(\left(x_{n}\right)\) and \(\left(y_{n}\right)\) satisfying the two conditions. Recall that \(S_{p}^{+} \neq S_{p}^{-}\). Now, if \(S_{p}^{+} > S_{p}^{-}\), then we can put \(x_{0}=1\) and \(y_{0}=p-1\). Otherwise, if \(S_{p}^{+} < S_{p}^{-}\), then we put \(x_{0}=p-1\) and \(y_{0}=p+1\).
