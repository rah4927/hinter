---
id: fimo_2019_algebra_p6
year: 2019
number: 6
difficulty: medium
topics: ["algebra"]
source: "IMO 2019 Algebra Problem 6"
---

A polynomial \(P(x, y, z)\) in three variables with real coefficients satisfies the identities
\[
P(x, y, z)=P(x, y, x y-z)=P(x, z x-y, z)=P(y z-x, y, z) .
\]
Prove that there exists a polynomial \(F(t)\) in one variable such that
\[
P(x, y, z)=F\left(x^{2}+y^{2}+z^{2}-x y z\right)
\]

---
The polynomial \(x^{2}+y^{2}+z^{2}-x y z\) satisfies the condition \((* )\), so every polynomial of the form \(F\left(x^{2}+y^{2}+z^{2}-x y z\right)\) does satisfy \((* )\). We will use without comment the fact that two polynomials have the same coefficients if and only if they are equal as functions.

In the first two steps, we deal with any polynomial \(P(x, y, z)\) satisfying \(P(x, y, z)=\) \(P(x, y, x y-z)\). Call such a polynomial weakly symmetric, and call a polynomial satisfying the full conditions in the problem symmetric.
Step 1. We start with the description of weakly symmetric polynomials. We claim that they are exactly the polynomials in \(x, y\), and \(z(x y-z)\). Clearly, all such polynomials are weakly symmetric. For the converse statement, consider \(P_{1}(x, y, z):=P\left(x, y, z+\frac{1}{2} x y\right)\), which satisfies \(P_{1}(x, y, z)=P_{1}(x, y,-z)\) and is therefore a polynomial in \(x, y\), and \(z^{2}\). This means that \(P\) is a polynomial in \(x, y\), and \(\left(z-\frac{1}{2} x y\right)^{2}=-z(x y-z)+\frac{1}{4} x^{2} y^{2}\), and therefore a polynomial in \(x, y\), and \(z(x y-z)\).
Step 2. Suppose that \(P\) is weakly symmetric. Consider the monomials in \(P(x, y, z)\) of highest total degree. Our aim is to show that in each such monomial \(\mu x^{a} y^{b} z^{c}\) we have \(a, b \geqslant c\). Consider the expansion
\[
P(x, y, z)=\sum_{i, j, k} \mu_{i j k} x^{i} y^{j}(z(x y-z))^{k} .
\]
The maximal total degree of a summand in (1.1) is \(m=\max _{i, j, k: \mu_{i j k} \neq 0}(i+j+3 k)\). Now, for any \(i, j, k\) satisfying \(i+j+3 k=m\) the summand \(\mu_{i, j, k} x^{i} y^{j}(z(x y-z))^{k}\) has leading term of the form \(\mu x^{i+k} y^{j+k} z^{k}\). No other nonzero summand in (1.1) may have a term of this form in its expansion, hence this term does not cancel in the whole sum. Therefore, \(\operatorname{deg} P=m\), and the leading component of \(P\) is exactly
\[
\sum_{i+j+3 k=m} \mu_{i, j, k} x^{i+k} y^{j+k} z^{k}
\]
and each summand in this sum satisfies the condition claimed above.
Step 3. We now prove the problem statement by induction on \(m=\operatorname{deg} P\). For \(m=0\) the claim is trivial. Consider now a symmetric polynomial \(P\) with \(\operatorname{deg} P > 0\). By Step 2, each of its monomials \(\mu x^{a} y^{b} z^{c}\) of the highest total degree satisfies \(a, b \geqslant c\). Applying other weak symmetries, we obtain \(a, c \geqslant b\) and \(b, c \geqslant a\); therefore, \(P\) has a unique leading monomial of the form \(\mu(x y z)^{c}\). The polynomial \(P_{0}(x, y, z)=P(x, y, z)-\mu\left(x y z-x^{2}-y^{2}-z^{2}\right)^{c}\) has smaller total degree. Since \(P_{0}\) is symmetric, it is representable as a polynomial function of \(x y z-x^{2}-y^{2}-z^{2}\). Then \(P\) is also of this form, completing the inductive step.
