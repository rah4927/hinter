---
id: fimo_2011_algebra_p2
year: 2011
number: 2
difficulty: medium
topics: ["algebra"]
source: "IMO 2011 Algebra Problem 2"
---

Determine all sequences \(\left(x_{1}, x_{2}, \ldots, x_{2011}\right)\) of positive integers such that for every positive integer \(n\) there is an integer \(a\) with
\[
x_{1}^{n}+2 x_{2}^{n}+\cdots+2011 x_{2011}^{n}=a^{n+1}+1 .
\]
\[
\left(x_{1}, \ldots, x_{2011}\right)=(1, k, \ldots, k) \quad \text { with } k=2+3+\cdots+2011=2023065
\]

---
Throughout this solution, the set of positive integers will be denoted by \(\mathbb{Z}_{+}\).
Put \(k=2+3+\cdots+2011=2023065\). We have
\[
1^{n}+2 k^{n}+\cdots 2011 k^{n}=1+k \cdot k^{n}=k^{n+1}+1
\]
for all \(n\), so \((1, k, \ldots, k)\) is a valid sequence. We shall prove that it is the only one.
Let a valid sequence \(\left(x_{1}, \ldots, x_{2011}\right)\) be given. For each \(n \in \mathbb{Z}_{+}\)we have some \(y_{n} \in \mathbb{Z}_{+}\)with
\[
x_{1}^{n}+2 x_{2}^{n}+\cdots+2011 x_{2011}^{n}=y_{n}^{n+1}+1 .
\]
Note that \(x_{1}^{n}+2 x_{2}^{n}+\cdots+2011 x_{2011}^{n} < \left(x_{1}+2 x_{2}+\cdots+2011 x_{2011}\right)^{n+1}\), which implies that the sequence \(\left(y_{n}\right)\) is bounded. In particular, there is some \(y \in \mathbb{Z}_{+}\)with \(y_{n}=y\) for infinitely many \(n\).
Let \(m\) be the maximum of all the \(x_{i}\). Grouping terms with equal \(x_{i}\) together, the sum \(x_{1}^{n}+\) \(2 x_{2}^{n}+\cdots+2011 x_{2011}^{n}\) can be written as
\[
x_{1}^{n}+2 x_{2}^{n}+\cdots+x_{2011}^{n}=a_{m} m^{n}+a_{m-1}(m-1)^{n}+\cdots+a_{1}
\]
with \(a_{i} \geq 0\) for all \(i\) and \(a_{1}+\cdots+a_{m}=1+2+\cdots+2011\). So there exist arbitrarily large values of \(n\), for which
\[
a_{m} m^{n}+\cdots+a_{1}-1-y \cdot y^{n}=0 .
\]
The following lemma will help us to determine the \(a_{i}\) and \(y\) :
Lemma. Let integers \(b_{1}, \ldots, b_{N}\) be given and assume that there are arbitrarily large positive integers \(n\) with \(b_{1}+b_{2} 2^{n}+\cdots+b_{N} N^{n}=0\). Then \(b_{i}=0\) for all \(i\).
Proof. Suppose that not all \(b_{i}\) are zero. We may assume without loss of generality that \(b_{N} \neq 0\). Dividing through by \(N^{n}\) gives
\[
\left|b_{N}\right|=\left|b_{N-1}\left(\frac{N-1}{N}\right)^{n}+\cdots+b_{1}\left(\frac{1}{N}\right)^{n}\right| \leq\left(\left|b_{N-1}\right|+\cdots+\left|b_{1}\right|\right)\left(\frac{N-1}{N}\right)^{n} .
\]
The expression \(\left(\frac{N-1}{N}\right)^{n}\) can be made arbitrarily small for \(n\) large enough, contradicting the assumption that \(b_{N}\) be non-zero.
We obviously have \(y > 1\). Applying the lemma to (1) we see that \(a_{m}=y=m, a_{1}=1\), and all the other \(a_{i}\) are zero. This implies \(\left(x_{1}, \ldots, x_{2011}\right)=(1, m, \ldots, m)\). But we also have \(1+m=a_{1}+\cdots+a_{m}=1+\cdots+2011=1+k\) so \(m=k\), which is what we wanted to show.
