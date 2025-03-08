---
id: fimo_2021_number_theory_p8_1
year: 2021
number: 8
difficulty: medium
topics: ["number theory"]
source: "IMO 2021 Number Theory Problem 8"
---

For a polynomial \(P(x)\) with integer coefficients let \(P^{1}(x)=P(x)\) and \(P^{k+1}(x)=\) \(P\left(P^{k}(x)\right)\) for \(k \geqslant 1\). Find all positive integers \(n\) for which there exists a polynomial \(P(x)\) with integer coefficients such that for every integer \(m \geqslant 1\), the numbers \(P^{m}(1), \ldots, P^{m}(n)\) leave exactly \(\left\lceil n / 2^{m}\right\rceil\) distinct remainders when divided by \(n\).


---
Denote the set of residues modulo \(\ell\) by \(\mathbb{Z}_{\ell}\). Observe that \(P\) can be regarded as a function \(\mathbb{Z}_{\ell} \rightarrow \mathbb{Z}_{\ell}\) for any positive integer \(\ell\). Denote the cardinality of the set \(P^{m}\left(\mathbb{Z}_{\ell}\right)\) by \(f_{m, \ell}\). Note that \(f_{m, n}=\left\lceil n / 2^{m}\right\rceil\) for all \(m \geqslant 1\) if and only if \(f_{m+1, n}=\left\lceil f_{m, n} / 2\right\rceil\) for all \(m \geqslant 0\).
Part 1. The required polynomial exists when \(n\) is a power of 2 or a prime.
If \(n\) is a power of 2 , set \(P(x)=2 x\).
If \(n=p\) is an odd prime, every function \(f: \mathbb{Z}_{p} \rightarrow \mathbb{Z}_{p}\) coincides with some polynomial with integer coefficients. So we can pick the function that sends \(x \in\{0,1, \ldots, p-1\}\) to \(\lfloor x / 2\rfloor\).
Part 2. The required polynomial does not exist when \(n\) is not a prime power.
Let \(n=a b\) where \(a, b > 1\) and \(\operatorname{gcd}(a, b)=1\). Note that, \(\operatorname{since} \operatorname{gcd}(a, b)=1\),
\[
f_{m, a b}=f_{m, a} f_{m, b}
\]
by the Chinese remainder theorem. Also, note that, if \(f_{m, \ell}=f_{m+1, \ell}\), then \(P\) permutes the image of \(P^{m}\) on \(\mathbb{Z}_{\ell}\), and therefore \(f_{s, \ell}=f_{m, \ell}\) for all \(s > m\). So, as \(f_{m, a b}=1\) for sufficiently large \(m\), we have for each \(m\)
\[
f_{m, a} > f_{m+1, a} \quad \text { or } \quad f_{m, a}=1, \quad f_{m, b} > f_{m+1, b} \quad \text { or } \quad f_{m, b}=1
\]
Choose the smallest \(m\) such that \(f_{m+1, a}=1\) or \(f_{m+1, b}=1\). Without loss of generality assume that \(f_{m+1, a}=1\). Then \(f_{m+1, a b}=f_{m+1, b} < f_{m, b} \leqslant f_{m, a b} / 2 \leqslant f_{m+1, a b}\), a contradiction.
Part 3. The required polynomial does not exist when \(n\) is an odd prime power that is not a prime.
Let \(n=p^{k}\), where \(p \geqslant 3\) is prime and \(k \geqslant 2\). For \(r \in \mathbb{Z}_{p}\) let \(S_{r}\) denote the subset of \(\mathbb{Z}_{p^{k}}\) consisting of numbers congruent to \(r\) modulo \(p\). We denote the cardinality of a set \(S\) by \(|S|\). Claim. For any residue \(r\) modulo \(p\), either \(\left|P\left(S_{r}\right)\right|=p^{k-1}\) or \(\left|P\left(S_{r}\right)\right| \leqslant p^{k-2}\).
Proof. Recall that \(P(r+h)=P(r)+h P^{\prime}(r)+h^{2} Q(r, h)\), where \(Q\) is an integer polynomial.
If \(p \mid P^{\prime}(r)\), then \(P(r+p s) \equiv P(r)\left(\bmod p^{2}\right)\), hence all elements of \(P\left(S_{r}\right)\) are congruent modulo \(p^{2}\). So in this case \(\left|P\left(S_{r}\right)\right| \leqslant p^{k-2}\).
Now we show that \(p \nmid P^{\prime}(r)\) implies \(\left|P\left(S_{r}\right)\right|=p^{k-1}\) for all \(k\).
Suppose the contrary: \(\left|P\left(S_{r}\right)\right| < p^{k-1}\) for some \(k > 1\). Let us choose the smallest \(k\) for which this is so. To each residue in \(P\left(S_{r}\right)\) we assign its residue modulo \(p^{k-1}\); denote the resulting set by \(\bar{P}(S, r)\). We have \(|\bar{P}(S, r)|=p^{k-2}\) by virtue of minimality of \(k\). Then \(\left|P\left(S_{r}\right)\right| < p^{k-1}=p \cdot|\bar{P}(S, r)|\), that is, there is \(u=P(x) \in P\left(S_{r}\right)(x \equiv r(\bmod p))\) and \(t \not \equiv 0\) \((\bmod p)\) such that \(u+p^{k-1} t \notin P\left(S_{r}\right)\).
Note that \(P\left(x+p^{k-1} s\right) \equiv u+p^{k-1} s P^{\prime}(x)\left(\bmod p^{k}\right)\). Since \(P\left(x+p^{k-1} s\right) \not \equiv u+p^{k-1} t\) \(\left(\bmod p^{k}\right)\), the congruence \(p^{k-1} s P^{\prime}(x) \equiv p^{k-1} t\left(\bmod p^{k}\right)\) has no solutions. So the congruence \(s P^{\prime}(x) \equiv t(\bmod p)\) has no solutions, which contradicts \(p \nmid P^{\prime}(r)\). Since the image of \(P^{m}\) consists of one element for sufficiently large \(m\), we can take the smallest \(m\) such that \(\left|P^{m-1}\left(S_{r}\right)\right|=p^{k-1}\) for some \(r \in \mathbb{Z}_{p}\), but \(\left|P^{m}\left(S_{q}\right)\right| \leqslant p^{k-2}\) for all \(q \in \mathbb{Z}_{p}\).
From now on, we fix \(m\) and \(r\).
Since the image of \(P^{m-1}\left(\mathbb{Z}_{p^{k}}\right) \backslash P^{m-1}\left(S_{r}\right)\) under \(P\) contains \(P^{m}\left(\mathbb{Z}_{p^{k}}\right) \backslash P^{m}\left(S_{r}\right)\), we have
\[
a:=\left|P^{m}\left(\mathbb{Z}_{p^{k}}\right) \backslash P^{m}\left(S_{r}\right)\right| \leqslant\left|P^{m-1}\left(\mathbb{Z}_{p^{k}}\right) \backslash P^{m-1}\left(S_{r}\right)\right|
\]
thus
\[
a+p^{k-1} \leqslant f_{m-1, p^{k}} \leqslant 2 f_{m, p^{k}} \leqslant 2 p^{k-2}+2 a
\]
so
\[
(p-2) p^{k-2} \leqslant a
\]
Since \(f_{i, p}=1\) for sufficiently large \(i\), there is exactly one \(t \in \mathbb{Z}_{p}\) such that \(P(t) \equiv t(\bmod p)\). Moreover, as \(i\) increases, the cardinality of the set \(\left\{s \in \mathbb{Z}_{p} \mid P^{i}(s) \equiv t(\bmod p)\right\}\) increases (strictly), until it reaches the value \(p\). So either
\[
\left|\left\{s \in \mathbb{Z}_{p} \mid P^{m-1}(s) \equiv t \quad(\bmod p)\right\}\right|=p \quad \text { or } \quad\left|\left\{s \in \mathbb{Z}_{p} \mid P^{m-1}(s) \equiv t \quad(\bmod p)\right\}\right| \geqslant m .
\]
Therefore, either \(f_{m-1, p}=1\) or there exists a subset \(X \subset \mathbb{Z}_{p}\) of cardinality at least \(m\) such that \(P^{m-1}(x) \equiv t(\bmod p)\) for all \(x \in X\).
In the first case \(\left|P^{m-1}\left(\mathbb{Z}_{p^{k}}\right)\right| \leqslant p^{k-1}=\left|P^{m-1}\left(S_{r}\right)\right|\), so \(a=0\), a contradiction.
In the second case let \(Y\) be the set of all elements of \(\mathbb{Z}_{p^{k}}\) congruent to some element of \(X\) modulo \(p\). Let \(Z=\mathbb{Z}_{p^{k}} \backslash Y\). Then \(P^{m-1}(Y) \subset S_{t}, P\left(S_{t}\right) \subsetneq S_{t}\), and \(Z=\bigcup_{i \in \mathbb{Z}_{p} \backslash X} S_{i}\), so
\[
\left|P^{m}(Y)\right| \leqslant\left|P\left(S_{t}\right)\right| \leqslant p^{k-2} \text { and }\left|P^{m}(Z)\right| \leqslant\left|\mathbb{Z}_{p} \backslash X\right| \cdot p^{k-2} \leqslant(p-m) p^{k-2} .
\]
Hence,
\[
(p-2) p^{k-2} \leqslant a < \left|P^{m}\left(\mathbb{Z}_{p^{k}}\right)\right| \leqslant\left|P^{m}(Y)\right|+\left|P^{m}(Z)\right| \leqslant(p-m+1) p^{k-2}
\]
and \(m < 3\). Then \(\left|P^{2}\left(S_{q}\right)\right| \leqslant p^{k-2}\) for all \(q \in \mathbb{Z}_{p}\), so
\[
p^{k} / 4 \leqslant\left|P^{2}\left(\mathbb{Z}_{p^{k}}\right)\right| \leqslant p^{k-1}
\]
which is impossible for \(p \geqslant 5\). It remains to consider the case \(p=3\).
As before, let \(t\) be the only residue modulo 3 such that \(P(t) \equiv t(\bmod 3)\).
If \(3 \nmid P^{\prime}(t)\), then \(P\left(S_{t}\right)=S_{t}\) by the proof of the Claim above, which is impossible.
So \(3 \mid P^{\prime}(t)\). By substituting \(h=3^{i} s\) into the formula \(P(t+h)=P(t)+h P^{\prime}(t)+h^{2} Q(t, h)\), we obtain \(P\left(t+3^{i} s\right) \equiv P(t)\left(\bmod 3^{i+1}\right)\). Using induction on \(i\) we see that all elements of \(P^{i}\left(S_{t}\right)\) are congruent modulo \(3^{i+1}\). Thus, \(\left|P^{k-1}\left(S_{t}\right)\right|=1\).
Note that \(f_{1,3} \leqslant 2\) and \(f_{2,3} \leqslant 1\), so \(P^{2}\left(\mathbb{Z}_{3^{k}}\right) \subset S_{t}\). Therefore, \(\left|P^{k+1}\left(\mathbb{Z}_{3^{k}}\right)\right| \leqslant\left|P^{k-1}\left(S_{t}\right)\right|=1\). It follows that \(3^{k} \leqslant 2^{k+1}\), which is impossible for \(k \geqslant 2\).
