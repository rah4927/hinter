---
id: fimo_2006_number_theory_p4
year: 2006
number: 4
difficulty: medium
topics: ["number theory"]
source: "IMO 2006 Number Theory Problem 4"
---

Let \(P\) be a polynomial of degree \(n > 1\) with integer coefficients and let \(k\) be any positive integer. Consider the polynomial \(Q(x)=P(P(\ldots P(P(x)) \ldots))\), with \(k\) pairs of parentheses. Prove that \(Q\) has no more than \(n\) integer fixed points, i.e. integers satisfying the equation \(Q(x)=x\)

---
The claim is obvious if every integer fixed point of \(Q\) is a fixed point of \(P\) itself. For the sequel assume that this is not the case. Take any integer \(x_{0}\) such that \(Q\left(x_{0}\right)=x_{0}\), \(P\left(x_{0}\right) \neq x_{0}\) and define inductively \(x_{i+1}=P\left(x_{i}\right)\) for \(i=0,1,2, \ldots ;\) then \(x_{k}=x_{0}\).
It is evident that
\[
P(u)-P(v) \text { is divisible by } u-v \text { for distinct integers } u, v \text {. }
\]
(Indeed, if \(P(x)=\sum a_{i} x^{i}\) then each \(a_{i}\left(u^{i}-v^{i}\right)\) is divisible by \(u-v\).) Therefore each term in the chain of (nonzero) differences
\[
x_{0}-x_{1}, \quad x_{1}-x_{2}, \quad \ldots, \quad x_{k-1}-x_{k}, \quad x_{k}-x_{k+1}
\]
is a divisor of the next one; and since \(x_{k}-x_{k+1}=x_{0}-x_{1}\), all these differences have equal absolute values. For \(x_{m}=\min \left(x_{1}, \ldots, x_{k}\right)\) this means that \(x_{m-1}-x_{m}=-\left(x_{m}-x_{m+1}\right)\). Thus \(x_{m-1}=x_{m+1}\left(\neq x_{m}\right)\). It follows that consecutive differences in the sequence (2) have opposite signs. Consequently, \(x_{0}, x_{1}, x_{2}, \ldots\) is an alternating sequence of two distinct values. In other words, every integer fixed point of \(Q\) is a fixed point of the polynomial \(P(P(x))\). Our task is to prove that there are at most \(n\) such points.
Let \(a\) be one of them so that \(b=P(a) \neq a\) (we have assumed that such an \(a\) exists); then \(a=P(b)\). Take any other integer fixed point \(\alpha\) of \(P(P(x))\) and let \(P(\alpha)=\beta\), so that \(P(\beta)=\alpha\); the numbers \(\alpha\) and \(\beta\) need not be distinct ( \(\alpha\) can be a fixed point of \(P\) ), but each of \(\alpha, \beta\) is different from each of \(a, b\). Applying property (1) to the four pairs of integers \((\alpha, a),(\beta, b)\), \((\alpha, b),(\beta, a)\) we get that the numbers \(\alpha-a\) and \(\beta-b\) divide each other, and also \(\alpha-b\) and \(\beta-a\) divide each other. Consequently
\[
\alpha-b=\pm(\beta-a), \quad \alpha-a=\pm(\beta-b) .
\]
Suppose we have a plus in both instances: \(\alpha-b=\beta-a\) and \(\alpha-a=\beta-b\). Subtraction yields \(a-b=b-a\), a contradiction, as \(a \neq b\). Therefore at least one equality in (3) holds with a minus sign. For each of them this means that \(\alpha+\beta=a+b\); equivalently \(a+b-\alpha-P(\alpha)=0\).
Denote \(a+b\) by \(C\). We have shown that every integer fixed point of \(Q\) other that \(a\) and \(b\) is a root of the polynomial \(F(x)=C-x-P(x)\). This is of course true for \(a\) and \(b\) as well. And since \(P\) has degree \(n > 1\), the polynomial \(F\) has the same degree, so it cannot have more than \(n\) roots. Hence the result.
