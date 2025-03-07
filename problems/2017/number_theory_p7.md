---
id: fimo_2017_number_theory_p7
year: 2017
number: 7
difficulty: medium
topics: ["number theory"]
source: "IMO 2017 Number Theory Problem 7"
---

Say that an ordered pair \((x, y)\) of integers is an irreducible lattice point if \(x\) and \(y\) are relatively prime. For any finite set \(S\) of irreducible lattice points, show that there is a homogenous polynomial in two variables, \(f(x, y)\), with integer coefficients, of degree at least 1 , such that \(f(x, y)=1\) for each \((x, y)\) in the set \(S\).
Note: A homogenous polynomial of degree \(n\) is any nonzero polynomial of the form
\[
f(x, y)=a_{0} x^{n}+a_{1} x^{n-1} y+a_{2} x^{n-2} y^{2}+\cdots+a_{n-1} x y^{n-1}+a_{n} y^{n} .
\]

---
First of all, we note that finding a homogenous polynomial \(f(x, y)\) such that \(f(x, y)=\pm 1\) is enough, because we then have \(f^{2}(x, y)=1\). Label the irreducible lattice points \(\left(x_{1}, y_{1}\right)\) through \(\left(x_{n}, y_{n}\right)\). If any two of these lattice points \(\left(x_{i}, y_{i}\right)\) and \(\left(x_{j}, y_{j}\right)\) lie on the same line through the origin, then \(\left(x_{j}, y_{j}\right)=\left(-x_{i},-y_{i}\right)\) because both of the points are irreducible. We then have \(f\left(x_{j}, y_{j}\right)=\pm f\left(x_{i}, y_{i}\right)\) whenever \(f\) is homogenous, so we can assume that no two of the lattice points are collinear with the origin by ignoring the extra lattice points.
Consider the homogenous polynomials \(\ell_{i}(x, y)=y_{i} x-x_{i} y\) and define
\[
g_{i}(x, y)=\prod_{j \neq i} \ell_{j}(x, y)
\]
Then \(\ell_{i}\left(x_{j}, y_{j}\right)=0\) if and only if \(j=i\), because there is only one lattice point on each line through the origin. Thus, \(g_{i}\left(x_{j}, y_{j}\right)=0\) for all \(j \neq i\). Define \(a_{i}=g_{i}\left(x_{i}, y_{i}\right)\), and note that \(a_{i} \neq 0\)
Note that \(g_{i}(x, y)\) is a degree \(n-1\) polynomial with the following two properties:
\begin{enumerate}

*  \(g_{i}\left(x_{j}, y_{j}\right)=0\) if \(j \neq i\).

*  \(g_{i}\left(x_{i}, y_{i}\right)=a_{i}\).

\end{enumerate}
For any \(N \geqslant n-1\), there also exists a polynomial of degree \(N\) with the same two properties. Specifically, let \(I_{i}(x, y)\) be a degree 1 homogenous polynomial such that \(I_{i}\left(x_{i}, y_{i}\right)=1\), which exists since \(\left(x_{i}, y_{i}\right)\) is irreducible. Then \(I_{i}(x, y)^{N-(n-1)} g_{i}(x, y)\) satisfies both of the above properties and has degree \(N\).
We may now reduce the problem to the following claim:
Claim: For each positive integer a, there is a homogenous polynomial \(f_{a}(x, y)\), with integer coefficients, of degree at least 1, such that \(f_{a}(x, y) \equiv 1(\bmod a)\) for all relatively prime \((x, y)\).
To see that this claim solves the problem, take \(a\) to be the least common multiple of the numbers \(a_{i}(1 \leqslant i \leqslant n)\). Take \(f_{a}\) given by the claim, choose some power \(f_{a}(x, y)^{k}\) that has degree at least \(n-1\), and subtract appropriate multiples of the \(g_{i}\) constructed above to obtain the desired polynomial.
We prove the claim by factoring \(a\). First, if \(a\) is a power of a prime \(\left(a=p^{k}\right)\), then we may choose either:

*  \(f_{a}(x, y)=\left(x^{p-1}+y^{p-1}\right)^{\phi(a)}\) if \(p\) is odd;

*  \(f_{a}(x, y)=\left(x^{2}+x y+y^{2}\right)^{\phi(a)}\) if \(p=2\).

Now suppose \(a\) is any positive integer, and let \(a=q_{1} q_{2} \cdots q_{k}\), where the \(q_{i}\) are prime powers, pairwise relatively prime. Let \(f_{q_{i}}\) be the polynomials just constructed, and let \(F_{q_{i}}\) be powers of these that all have the same degree. Note that
\[
\frac{a}{q_{i}} F_{q_{i}}(x, y) \equiv \frac{a}{q_{i}} \quad(\bmod a)
\]
for any relatively prime \(x, y\). By Bézout's lemma, there is an integer linear combination of the \(\frac{a}{q_{i}}\) that equals 1 . Thus, there is a linear combination of the \(F_{q_{i}}\) such that \(F_{q_{i}}(x, y) \equiv 1\) \((\bmod a)\) for any relatively prime \((x, y)\); and this polynomial is homogenous because all the \(F_{q_{i}}\) have the same degree.
