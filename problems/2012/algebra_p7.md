---
id: fimo_2012_algebra_p7
year: 2012
number: 7
difficulty: medium
topics: ["algebra"]
source: "IMO 2012 Algebra Problem 7"
---

We say that a function \(f: \mathbb{R}^{k} \rightarrow \mathbb{R}\) is a metapolynomial if, for some positive integers \(m\) and \(n\), it can be represented in the form
\[
f\left(x_{1}, \ldots, x_{k}\right)=\max _{i=1, \ldots, m} \min _{j=1, \ldots, n} P_{i, j}\left(x_{1}, \ldots, x_{k}\right)
\]
where \(P_{i, j}\) are multivariate polynomials. Prove that the product of two metapolynomials is also a metapolynomial.

---
We use the notation \(f(x)=f\left(x_{1}, \ldots, x_{k}\right)\) for \(x=\left(x_{1}, \ldots, x_{k}\right)\) and \([m]=\{1,2, \ldots, m\}\). Observe that if a metapolynomial \(f(x)\) admits a representation like the one in the statement for certain positive integers \(m\) and \(n\), then they can be replaced by any \(m^{\prime} \geq m\) and \(n^{\prime} \geq n\). For instance, if we want to replace \(m\) by \(m+1\) then it is enough to define \(P_{m+1, j}(x)=P_{m, j}(x)\) and note that repeating elements of a set do not change its maximum nor its minimum. So one can assume that any two metapolynomials are defined with the same \(m\) and \(n\). We reserve letters \(P\) and \(Q\) for polynomials, so every function called \(P, P_{i, j}, Q, Q_{i, j}, \ldots\) is a polynomial function.
We start with a lemma that is useful to change expressions of the form \(\min \max f_{i, j}\) to ones of the form \(\max \min g_{i, j}\).
Lemma. Let \(\left\{a_{i, j}\right\}\) be real numbers, for all \(i \in[m]\) and \(j \in[n]\). Then
\[
\min _{i \in[m]} \max _{j \in[n]} a_{i, j}=\max _{j_{1}, \ldots, j_{m} \in[n]} \min _{i \in[m]} a_{i, j_{i}},
\]
where the max in the right-hand side is over all vectors \(\left(j_{1}, \ldots, j_{m}\right)\) with \(j_{1}, \ldots, j_{m} \in[n]\).
Proof. We can assume for all \(i\) that \(a_{i, n}=\max \left\{a_{i, 1}, \ldots, a_{i, n}\right\}\) and \(a_{m, n}=\min \left\{a_{1, n}, \ldots, a_{m, n}\right\}\). The left-hand side is \(=a_{m, n}\) and hence we need to prove the same for the right-hand side. If \(\left(j_{1}, j_{2}, \ldots, j_{m}\right)=(n, n, \ldots, n)\) then \(\min \left\{a_{1, j_{1}}, \ldots, a_{m, j_{m}}\right\}=\min \left\{a_{1, n}, \ldots, a_{m, n}\right\}=a_{m, n}\) which implies that the right-hand side is \(\geq a_{m, n}\). It remains to prove the opposite inequality and this is equivalent to \(\min \left\{a_{1, j_{1}}, \ldots, a_{m, j_{m}}\right\} \leq a_{m, n}\) for all possible \(\left(j_{1}, j_{2}, \ldots, j_{m}\right)\). This is true because \(\min \left\{a_{1, j_{1}}, \ldots, a_{m, j_{m}}\right\} \leq a_{m, j_{m}} \leq a_{m, n}\)
We need to show that the family \(\mathcal{M}\) of metapolynomials is closed under multiplication, but it turns out easier to prove more: that it is also closed under addition, maxima and minima.
First we prove the assertions about the maxima and the minima. If \(f_{1}, \ldots, f_{r}\) are metapolynomials, assume them defined with the same \(m\) and \(n\). Then
\[
f=\max \left\{f_{1}, \ldots, f_{r}\right\}=\max \left\{\max _{i \in[m]} \min _{j \in[n]} P_{i, j}^{1}, \ldots, \max _{i \in[m]} \min _{j \in[n]} P_{i, j}^{r}\right\}=\max _{s \in[r], i \in[m]} \min _{j \in[n]} P_{i, j}^{s}
\]
It follows that \(f=\max \left\{f_{1}, \ldots, f_{r}\right\}\) is a metapolynomial. The same argument works for the minima, but first we have to replace min max by max min, and this is done via the lemma.
Another property we need is that if \(f=\max \min P_{i, j}\) is a metapolynomial then so is \(-f\). Indeed, \(-f=\min \left(-\min P_{i, j}\right)=\min \max P_{i, j}\).
To prove \(\mathcal{M}\) is closed under addition let \(f=\max \min P_{i, j}\) and \(g=\max \min Q_{i, j}\). Then
\[
\begin{gathered}
f(x)+g(x)=\max _{i \in[m]} \min _{j \in[n]} P_{i, j}(x)+\max _{i \in[m]} \min _{j \in[n]} Q_{i, j}(x) \\
=\max _{i_{1}, i_{2} \in[m]}\left(\min _{j \in[n]} P_{i_{1}, j}(x)+\min _{j \in[n]} Q_{i_{2}, j}(x)\right)=\max _{i_{1}, i_{2} \in[m]} \min _{j_{1}, j_{2} \in[n]}\left(P_{i_{1}, j_{1}}(x)+Q_{i_{2}, j_{2}}(x)\right),
\end{gathered}
\]
and hence \(f(x)+g(x)\) is a metapolynomial.
We proved that \(\mathcal{M}\) is closed under sums, maxima and minima, in particular any function that can be expressed by sums, max, min, polynomials or even metapolynomials is in \(\mathcal{M}\).
We would like to proceed with multiplication along the same lines like with addition, but there is an essential difference. In general the product of the maxima of two sets is not equal to the maximum of the product of the sets. We need to deal with the fact that \(a < b\) and \(c < d\) do not imply \(a c < b d\). However this is true for \(a, b, c, d \geq 0\).
In view of this we decompose each function \(f(x)\) into its positive part \(f^{+}(x)=\max \{f(x), 0\}\) and its negative part \(f^{-}(x)=\max \{0,-f(x)\}\). Note that \(f=f^{+}-f^{-}\)and \(f^{+}, f^{-} \in \mathcal{M}\) if \(f \in \mathcal{M}\). The whole problem reduces to the claim that if \(f\) and \(g\) are metapolynomials with \(f, g \geq 0\) then \(f g\) it is also a metapolynomial.
Assuming this claim, consider arbitrary \(f, g \in \mathcal{M}\). We have
\[
f g=\left(f^{+}-f^{-}\right)\left(g^{+}-g^{-}\right)=f^{+} g^{+}-f^{+} g^{-}-f^{-} g^{+}+f^{-} g^{-},
\]
and hence \(f g \in \mathcal{M}\). Indeed, \(\mathcal{M}\) is closed under addition, also \(f^{+} g^{+}, f^{+} g^{-}, f^{-} g^{+}, f^{-} g^{-} \in \mathcal{M}\) because \(f^{+}, f^{-}, g^{+}, g^{-} \geq 0\).
It remains to prove the claim. In this case \(f, g \geq 0\), and one can try to repeat the argument for the sum. More precisely, let \(f=\max \min P_{i j} \geq 0\) and \(g=\max \min Q_{i j} \geq 0\). Then
\[
f g=\max \min P_{i, j} \cdot \max \min Q_{i, j}=\max \min P_{i, j}^{+} \cdot \max \min Q_{i, j}^{+}=\max \min P_{i_{1}, j_{1}}^{+} \cdot Q_{i_{2}, j_{2}}^{+} .
\]
Hence it suffices to check that \(P^{+} Q^{+} \in \mathcal{M}\) for any pair of polynomials \(P\) and \(Q\). This reduces to the identity
\[
u^{+} v^{+}=\max \left\{0, \min \{u v, u, v\}, \min \left\{u v, u v^{2}, u^{2} v\right\}, \min \left\{u v, u, u^{2} v\right\}, \min \left\{u v, u v^{2}, v\right\}\right\},
\]
with \(u\) replaced by \(P(x)\) and \(v\) replaced by \(Q(x)\). The formula is proved by a case-by-case analysis. If \(u \leq 0\) or \(v \leq 0\) then both sides equal 0 . In case \(u, v \geq 0\), the right-hand side is clearly \(\leq u v\). To prove the opposite inequality we use that \(u v\) equals
\[
\begin{array}{ll}
\min \{u v, u, v\} & \text { if } 0 \leq u, v \leq 1 \\
\min \left\{u v, u v^{2}, u^{2} v\right\} & \text { if } 1 \leq u, v \\
\min \left\{u v, u, u^{2} v\right\} & \text { if } 0 \leq v \leq 1 \leq u \\
\min \left\{u v, u v^{2}, v\right\} & \text { if } 0 \leq u \leq 1 \leq v
\end{array}
\]
