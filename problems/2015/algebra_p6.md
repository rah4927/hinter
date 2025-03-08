---
id: fimo_2015_algebra_p6_2
year: 2015
number: 6
difficulty: medium
topics: ["algebra"]
source: "IMO 2015 Algebra Problem 6"
---

Let \(n\) be a fixed integer with \(n \geqslant 2\). We say that two polynomials \(P\) and \(Q\) with real coefficients are block-similar if for each \(i \in\{1,2, \ldots, n\}\) the sequences
\[
\begin{aligned}
& P(2015 i), P(2015 i-1), \ldots, P(2015 i-2014) \quad \text { and } \\
& Q(2015 i), Q(2015 i-1), \ldots, Q(2015 i-2014)
\end{aligned}
\]
are permutations of each other.
Prove that there do not exist distinct block-similar polynomials of degree \(n\).

---
For convenience, we set \(k=2015=2 \ell+1\).
For every polynomial \(F(x)\) and every nonnegative integer \(m\), define \(\Sigma_{F}(m)=\) \(\sum_{i=1}^{m} F(i)\); in particular, \(\Sigma_{F}(0)=0\). It is well-known that for every nonnegative integer \(d\) the sum \(\sum_{i=1}^{m} i^{d}\) is a polynomial in \(m\) of degree \(d+1\). Thus \(\Sigma_{F}\) may also be regarded as a real polynomial of degree \(\operatorname{deg} F+1\) (with the exception that if \(F=0\), then \(\Sigma_{F}=0\) as well). This allows us to consider the values of \(\Sigma_{F}\) at all real points (where the initial definition does not apply).
Assume for the sake of contradiction that there exist two distinct block-similar polynomials \(P(x)\) and \(Q(x)\) of degree \(n\). Then both polynomials \(\Sigma_{P-Q}(x)\) and \(\Sigma_{P^{2}-Q^{2}}(x)\) have roots at the points \(0, k, 2 k, \ldots, n k\). This motivates the following lemma, where we use the special polynomial
\[
T(x)=\prod_{i=0}^{n}(x-i k)
\]
Lemma. Assume that \(F(x)\) is a nonzero polynomial such that \(0, k, 2 k, \ldots, n k\) are among the roots of the polynomial \(\Sigma_{F}(x)\). Then \(\operatorname{deg} F \geqslant n\), and there exists a polynomial \(G(x)\) such that \(\operatorname{deg} G=\operatorname{deg} F-n\) and \(F(x)=T(x) G(x)-T(x-1) G(x-1)\).
Proof. If \(\operatorname{deg} F < n\), then \(\Sigma_{F}(x)\) has at least \(n+1\) roots, while its degree is less than \(n+1\). Therefore, \(\Sigma_{F}(x)=0\) and hence \(F(x)=0\), which is impossible. Thus \(\operatorname{deg} F \geqslant n\).
The lemma condition yields that \(\Sigma_{F}(x)=T(x) G(x)\) for some polynomial \(G(x)\) such that \(\operatorname{deg} G=\operatorname{deg} \Sigma_{F}-(n+1)=\operatorname{deg} F-n\).
Now, let us define \(F_{1}(x)=T(x) G(x)-T(x-1) G(x-1)\). Then for every positive integer \(n\) we have
\[
\Sigma_{F_{1}}(n)=\sum_{i=1}^{n}(T(x) G(x)-T(x-1) G(x-1))=T(n) G(n)-T(0) G(0)=T(n) G(n)=\Sigma_{F}(n),
\]
so the polynomial \(\Sigma_{F-F_{1}}(x)=\Sigma_{F}(x)-\Sigma_{F_{1}}(x)\) has infinitely many roots. This means that this polynomial is zero, which in turn yields \(F(x)=F_{1}(x)\), as required. First, we apply the lemma to the nonzero polynomial \(R_{1}(x)=P(x)-Q(x)\). Since the degree of \(R_{1}(x)\) is at most \(n\), we conclude that it is exactly \(n\). Moreover, \(R_{1}(x)=\alpha \cdot(T(x)-T(x-1))\) for some nonzero constant \(\alpha\).
Our next aim is to prove that the polynomial \(S(x)=P(x)+Q(x)\) is constant. Assume the contrary. Then, notice that the polynomial \(R_{2}(x)=P(x)^{2}-Q(x)^{2}=R_{1}(x) S(x)\) is also nonzero and satisfies the lemma condition. Since \(n < \operatorname{deg} R_{1}+\operatorname{deg} S=\operatorname{deg} R_{2} \leqslant 2 n\), the lemma yields
\[
R_{2}(x)=T(x) G(x)-T(x-1) G(x-1)
\]
with some polynomial \(G(x)\) with \(0 < \operatorname{deg} G \leqslant n\).
Since the polynomial \(R_{1}(x)=\alpha(T(x)-T(x-1))\) divides the polynomial
\[
R_{2}(x)=T(x)(G(x)-G(x-1))+G(x-1)(T(x)-T(x-1)),
\]
we get \(R_{1}(x) \mid T(x)(G(x)-G(x-1))\). On the other hand,
\[
\operatorname{gcd}\left(T(x), R_{1}(x)\right)=\operatorname{gcd}(T(x), T(x)-T(x-1))=\operatorname{gcd}(T(x), T(x-1))=1,
\]
since both \(T(x)\) and \(T(x-1)\) are the products of linear polynomials, and their roots are distinct. Thus \(R_{1}(x) \mid G(x)-G(x-1)\). However, this is impossible since \(G(x)-G(x-1)\) is a nonzero polynomial of degree less than \(n=\operatorname{deg} R_{1}\).
Thus, our assumption is wrong, and \(S(x)\) is a constant polynomial, say \(S(x)=\beta\). Notice that the polynomials \((2 P(x)-\beta) / \alpha\) and \((2 Q(x)-\beta) / \alpha\) are also block-similar and distinct. So we may replace the initial polynomials by these ones, thus obtaining two block-similar polynomials \(P(x)\) and \(Q(x)\) with \(P(x)=-Q(x)=T(x)-T(x-1)\). It remains to show that this is impossible.
For every \(i=1,2 \ldots, n\), the values \(T(i k-k+1)\) and \(T(i k-1)\) have the same sign. This means that the values \(P(i k-k+1)=T(i k-k+1)\) and \(P(i k)=-T(i k-1)\) have opposite signs, so \(P(x)\) has a root in each of the \(n\) segments \([i k-k+1, i k]\). Since \(\operatorname{deg} P=n\), it must have exactly one root in each of them.
Thus, the sequence \(P(1), P(2), \ldots, P(k)\) should change sign exactly once. On the other hand, since \(P(x)\) and \(-P(x)\) are block-similar, this sequence must have as many positive terms as negative ones. Since \(k=2 \ell+1\) is odd, this shows that the middle term of the sequence above must be zero, so \(P(\ell+1)=0\), or \(T(\ell+1)=T(\ell)\). However, this is not true since
\[
|T(\ell+1)|=|\ell+1| \cdot|\ell| \cdot \prod_{i=2}^{n}|\ell+1-i k| < |\ell| \cdot|\ell+1| \cdot \prod_{i=2}^{n}|\ell-i k|=|T(\ell)|,
\]
where the strict inequality holds because \(n \geqslant 2\). We come to the final contradiction.
