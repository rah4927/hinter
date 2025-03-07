---
id: fimo_2014_number_theory_p7
year: 2014
number: 7
difficulty: medium
topics: ["number theory"]
source: "IMO 2014 Number Theory Problem 7"
---

Let \(c \geqslant 1\) be an integer. Define a sequence of positive integers by \(a_{1}=c\) and
\[
a_{n+1}=a_{n}^{3}-4 c \cdot a_{n}^{2}+5 c^{2} \cdot a_{n}+c
\]
for all \(n \geqslant 1\). Prove that for each integer \(n \geqslant 2\) there exists a prime number \(p\) dividing \(a_{n}\) but none of the numbers \(a_{1}, \ldots, a_{n-1}\).

---
Let us define \(x_{0}=0\) and \(x_{n}=a_{n} / c\) for all integers \(n \geqslant 1\). It is easy to see that the sequence \(\left(x_{n}\right)\) thus obtained obeys the recursive law
\[
x_{n+1}=c^{2}\left(x_{n}^{3}-4 x_{n}^{2}+5 x_{n}\right)+1
\]
for all integers \(n \geqslant 0\). In particular, all of its terms are positive integers; notice that \(x_{1}=1\) and \(x_{2}=2 c^{2}+1\). Since
\[
x_{n+1}=c^{2} x_{n}\left(x_{n}-2\right)^{2}+c^{2} x_{n}+1 > x_{n}
\]
holds for all integers \(n \geqslant 0\), it is also strictly increasing. Since \(x_{n+1}\) is by (1) coprime to \(c\) for any \(n \geqslant 0\), it suffices to prove that for each \(n \geqslant 2\) there exists a prime number \(p\) dividing \(x_{n}\) but none of the numbers \(x_{1}, \ldots, x_{n-1}\). Let us begin by establishing three preliminary claims.
Claim 1. If \(i \equiv j(\bmod m)\) holds for some integers \(i, j \geqslant 0\) and \(m \geqslant 1\), then \(x_{i} \equiv x_{j}\left(\bmod x_{m}\right)\) holds as well.
Proof. Evidently, it suffices to show \(x_{i+m} \equiv x_{i}\left(\bmod x_{m}\right)\) for all integers \(i \geqslant 0\) and \(m \geqslant 1\). For this purpose we may argue for fixed \(m\) by induction on \(i\) using \(x_{0}=0\) in the base case \(i=0\). Now, if we have \(x_{i+m} \equiv x_{i}\left(\bmod x_{m}\right)\) for some integer \(i\), then the recursive equation (1) yields
\[
x_{i+m+1} \equiv c^{2}\left(x_{i+m}^{3}-4 x_{i+m}^{2}+5 x_{i+m}\right)+1 \equiv c^{2}\left(x_{i}^{3}-4 x_{i}^{2}+5 x_{i}\right)+1 \equiv x_{i+1} \quad\left(\bmod x_{m}\right),
\]
which completes the induction.
Claim 2. If the integers \(i, j \geqslant 2\) and \(m \geqslant 1\) satisfy \(i \equiv j(\bmod m)\), then \(x_{i} \equiv x_{j}\left(\bmod x_{m}^{2}\right)\) holds as well.
Proof. Again it suffices to prove \(x_{i+m} \equiv x_{i}\left(\bmod x_{m}^{2}\right)\) for all integers \(i \geqslant 2\) and \(m \geqslant 1\). As above, we proceed for fixed \(m\) by induction on \(i\). The induction step is again easy using (1), but this time the base case \(i=2\) requires some calculation. Set \(L=5 c^{2}\). By (1) we have \(x_{m+1} \equiv L x_{m}+1\left(\bmod x_{m}^{2}\right)\), and hence
\[
\begin{aligned}
x_{m+1}^{3}-4 x_{m+1}^{2}+5 x_{m+1} & \equiv\left(L x_{m}+1\right)^{3}-4\left(L x_{m}+1\right)^{2}+5\left(L x_{m}+1\right) \\
& \equiv\left(3 L x_{m}+1\right)-4\left(2 L x_{m}+1\right)+5\left(L x_{m}+1\right) \equiv 2 \quad\left(\bmod x_{m}^{2}\right),
\end{aligned}
\]
which in turn gives indeed \(x_{m+2} \equiv 2 c^{2}+1 \equiv x_{2}\left(\bmod x_{m}^{2}\right)\)
Claim 3. For each integer \(n \geqslant 2\), we have \(x_{n} > x_{1} \cdot x_{2} \cdots x_{n-2}\).
Proof. The cases \(n=2\) and \(n=3\) are clear. Arguing inductively, we assume now that the claim holds for some \(n \geqslant 3\). Recall that \(x_{2} \geqslant 3\), so by monotonicity and (2) we get \(x_{n} \geqslant x_{3} \geqslant x_{2}\left(x_{2}-2\right)^{2}+x_{2}+1 \geqslant 7\). It follows that
\[
x_{n+1} > x_{n}^{3}-4 x_{n}^{2}+5 x_{n} > 7 x_{n}^{2}-4 x_{n}^{2} > x_{n}^{2} > x_{n} x_{n-1},
\]
which by the induction hypothesis yields \(x_{n+1} > x_{1} \cdot x_{2} \cdots x_{n-1}\), as desired. Now we direct our attention to the problem itself: let any integer \(n \geqslant 2\) be given. By Claim 3 there exists a prime number \(p\) appearing with a higher exponent in the prime factorisation of \(x_{n}\) than in the prime factorisation of \(x_{1} \cdots x_{n-2}\). In particular, \(p \mid x_{n}\), and it suffices to prove that \(p\) divides none of \(x_{1}, \ldots, x_{n-1}\).
Otherwise let \(k \in\{1, \ldots, n-1\}\) be minimal such that \(p\) divides \(x_{k}\). Since \(x_{n-1}\) and \(x_{n}\) are coprime by (1) and \(x_{1}=1\), we actually have \(2 \leqslant k \leqslant n-2\). Write \(n=q k+r\) with some integers \(q \geqslant 0\) and \(0 \leqslant r < k\). By Claim 1 we have \(x_{n} \equiv x_{r}\left(\bmod x_{k}\right)\), whence \(p \mid x_{r}\). Due to the minimality of \(k\) this entails \(r=0\), i.e. \(k \mid n\).
Thus from Claim 2 we infer
\[
x_{n} \equiv x_{k} \quad\left(\bmod x_{k}^{2}\right) .
\]
Now let \(\alpha \geqslant 1\) be maximal with the property \(p^{\alpha} \mid x_{k}\). Then \(x_{k}^{2}\) is divisible by \(p^{\alpha+1}\) and by our choice of \(p\) so is \(x_{n}\). So by the previous congruence \(x_{k}\) is a multiple of \(p^{\alpha+1}\) as well, contrary to our choice of \(\alpha\). This is the final contradiction concluding the solution.
