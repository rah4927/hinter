---
id: fimo_2009_number_theory_p5
year: 2009
number: 5
difficulty: medium
topics: ["number theory"]
source: "IMO 2009 Number Theory Problem 5"
---

Let \(P(x)\) be a non-constant polynomial with integer coefficients. Prove that there is no function \(T\) from the set of integers into the set of integers such that the number of integers \(x\) with \(T^{n}(x)=x\) is equal to \(P(n)\) for every \(n \geq 1\), where \(T^{n}\) denotes the \(n\)-fold application of \(T\).

---
Assume there is a polynomial \(P\) of degree at least 1 with the desired property for a given function \(T\). Let \(A(n)\) denote the set of all \(x \in \mathbb{Z}\) such that \(T^{n}(x)=x\) and let \(B(n)\) denote the set of all \(x \in \mathbb{Z}\) for which \(T^{n}(x)=x\) and \(T^{k}(x) \neq x\) for all \(1 \leq k < n\). Both sets are finite under the assumption made. For each \(x \in A(n)\) there is a smallest \(k \geq 1\) such that \(T^{k}(x)=x\), i.e., \(x \in B(k)\). Let \(d=\operatorname{gcd}(k, n)\). There are positive integers \(r, s\) such that \(r k-s n=d\) and hence \(x=T^{r k}(x)=T^{s n+d}(x)=T^{d}\left(T^{s n}(x)\right)=T^{d}(x)\). The minimality of \(k\) implies \(d=k\), i.e., \(k \mid n\). On the other hand one clearly has \(B(k) \subset A(n)\) if \(k \mid n\) and thus we have \(A(n)=\bigcup_{d \mid n} B(d)\) as a disjoint union and hence
\[
|A(n)|=\sum_{d \mid n}|B(d)| .
\]
Furthermore, for every \(x \in B(n)\) the elements \(x, T^{1}(x), T^{2}(x), \ldots, T^{n-1}(x)\) are \(n\) distinct elements of \(B(n)\). The fact that they are in \(A(n)\) is obvious. If for some \(k < n\) and some \(0 \leq i < n\) we had \(T^{k}\left(T^{i}(x)\right)=T^{i}(x)\), i.e. \(T^{k+i}(x)=T^{i}(x)\), that would imply \(x=T^{n}(x)=T^{n-i}\left(T^{i}(x)\right)=T^{n-i}\left(T^{k+i}(x)\right)=T^{k}\left(T^{n}(x)\right)=T^{k}(x)\) contradicting the minimality of \(n\). Thus \(T^{i}(x) \in B(n)\) and \(T^{i}(x) \neq T^{j}(x)\) for \(0 \leq i < j \leq n-1\).
So indeed, \(T\) permutes the elements of \(B(n)\) in (disjoint) cycles of length \(n\) and in particular one has \(n|| B(n) \mid\).
Now let \(P(x)=\sum_{i=0}^{k} a_{i} x^{i}, a_{i} \in \mathbb{Z}, k \geq 1, a_{k} \neq 0\) and suppose that \(|A(n)|=P(n)\) for all \(n \geq 1\). Let \(p\) be any prime. Then
\[
p^{2}|| B\left(p^{2}\right)|=| A\left(p^{2}\right)|-| A(p) \mid=a_{1}\left(p^{2}-p\right)+a_{2}\left(p^{4}-p^{2}\right)+\ldots
\]
Hence \(p \mid a_{1}\) and since this is true for all primes we must have \(a_{1}=0\).
Now consider any two different primes \(p\) and \(q\). Since \(a_{1}=0\) we have that
\[
\left|A\left(p^{2} q\right)\right|-|A(p q)|=a_{2}\left(p^{4} q^{2}-p^{2} q^{2}\right)+a_{3}\left(p^{6} q^{3}-p^{3} q^{3}\right)+\ldots
\]
is a multiple of \(p^{2} q\). But we also have
\[
p^{2} q|| B\left(p^{2} q\right)|=| A\left(p^{2} q\right)|-| A(p q)|-| B\left(p^{2}\right) \mid .
\]
This implies
\[
p^{2} q|| B\left(p^{2}\right)|=| A\left(p^{2}\right)|-| A(p) \mid=a_{2}\left(p^{4}-p^{2}\right)+a_{3}\left(p^{6}-p^{3}\right)+\cdots+a_{k}\left(p^{2 k}-p^{k}\right) .
\]
Since this is true for every prime \(q\) we must have \(a_{2}\left(p^{4}-p^{2}\right)+a_{3}\left(p^{6}-p^{3}\right)+\cdots+a_{k}\left(p^{2 k}-p^{k}\right)=0\) for every prime \(p\). Since this expression is a polynomial in \(p\) of degree \(2 k\) (because \(\left.a_{k} \neq 0\right)\) this is a contradiction, as such a polynomial can have at most \(2 k\) zeros.
