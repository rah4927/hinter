---
id: fimo_2013_number_theory_p6
year: 2013
number: 6
difficulty: medium
topics: ["number theory"]
source: "IMO 2013 Number Theory Problem 6"
---

Determine all functions \(f: \mathbb{Q} \longrightarrow \mathbb{Z}\) satisfying
\[
f\left(\frac{f(x)+a}{b}\right)=f\left(\frac{x+a}{b}\right)
\]
for all \(x \in \mathbb{Q}, a \in \mathbb{Z}\), and \(b \in \mathbb{Z}_{ > 0}\). (Here, \(\mathbb{Z}_{ > 0}\) denotes the set of positive integers.)


---
I. We start by verifying that these functions do indeed satisfy (1). This is clear for all constant functions. Now consider any triple \((x, a, b) \in \mathbb{Q} \times \mathbb{Z} \times \mathbb{Z}_{ > 0}\) and set
\[
q=\left\lfloor\frac{x+a}{b}\right\rfloor .
\]
This means that \(q\) is an integer and \(b q \leqslant x+a < b(q+1)\). It follows that \(b q \leqslant\lfloor x\rfloor+a < b(q+1)\) holds as well, and thus we have
\[
\left\lfloor\left\lfloor\frac{\lfloor x\rfloor+a}{b}\right\rfloor=\left\lfloor\frac{x+a}{b}\right\rfloor,\right.
\]
meaning that the floor function does indeed satisfy (1). One can check similarly that the ceiling function has the same property.
II. Let us now suppose conversely that the function \(f: \mathbb{Q} \longrightarrow \mathbb{Z}\) satisfies (1) for all \((x, a, b) \in\) \(\mathbb{Q} \times \mathbb{Z} \times \mathbb{Z}_{ > 0}\). According to the behaviour of the restriction of \(f\) to the integers we distinguish two cases.
Case 1: There is some \(m \in \mathbb{Z}\) such that \(f(m) \neq m\).
Write \(f(m)=C\) and let \(\eta \in\{-1,+1\}\) and \(b\) denote the sign and absolute value of \(f(m)-m\), respectively. Given any integer \(r\), we may plug the triple \((m, r b-C, b)\) into (1), thus getting \(f(r)=f(r-\eta)\). Starting with \(m\) and using induction in both directions, we deduce from this that the equation \(f(r)=C\) holds for all integers \(r\). Now any rational number \(y\) can be written in the form \(y=\frac{p}{q}\) with \((p, q) \in \mathbb{Z} \times \mathbb{Z}_{ > 0}\), and substituting \((C-p, p-C, q)\) into (1) we get \(f(y)=f(0)=C\). Thus \(f\) is the constant function whose value is always \(C\).
Case 2: One has \(f(m)=m\) for all integers \(m\).
Note that now the special case \(b=1\) of (1) takes a particularly simple form, namely
\[
f(x)+a=f(x+a) \quad \text { for all }(x, a) \in \mathbb{Q} \times \mathbb{Z} .
\]
Defining \(f\left(\frac{1}{2}\right)=\omega\) we proceed in three steps.
Step \(A\). We show that \(\omega \in\{0,1\}\).
If \(\omega \leqslant 0\), we may plug \(\left(\frac{1}{2},-\omega, 1-2 \omega\right)\) into (1), obtaining \(0=f(0)=f\left(\frac{1}{2}\right)=\omega\). In the contrary case \(\omega \geqslant 1\) we argue similarly using the triple \(\left(\frac{1}{2}, \omega-1,2 \omega-1\right)\).
Step B. We show that \(f(x)=\omega\) for all rational numbers \(x\) with \(0 < x < 1\).
Assume that this fails and pick some rational number \(\frac{a}{b} \in(0,1)\) with minimal \(b\) such that \(f\left(\frac{a}{b}\right) \neq \omega\). Obviously, \(\operatorname{gcd}(a, b)=1\) and \(b \geqslant 2\). If \(b\) is even, then \(a\) has to be odd and we can substitute \(\left(\frac{1}{2}, \frac{a-1}{2}, \frac{b}{2}\right)\) into (1), which yields
\[
f\left(\frac{\omega+(a-1) / 2}{b / 2}\right)=f\left(\frac{a}{b}\right) \neq \omega .
\]
Recall that \(0 \leqslant(a-1) / 2 < b / 2\). Thus, in both cases \(\omega=0\) and \(\omega=1\), the left-hand part of (3) equals \(\omega\) either by the minimality of \(b\), or by \(f(\omega)=\omega\). A contradiction.
Thus \(b\) has to be odd, so \(b=2 k+1\) for some \(k \geqslant 1\). Applying \((1)\) to \(\left(\frac{1}{2}, k, b\right)\) we get
\[
f\left(\frac{\omega+k}{b}\right)=f\left(\frac{1}{2}\right)=\omega .
\]
Since \(a\) and \(b\) are coprime, there exist integers \(r \in\{1,2, \ldots, b\}\) and \(m\) such that \(r a-m b=k+\omega\). Note that we actually have \(1 \leqslant r < b\), since the right hand side is not a multiple of \(b\). If \(m\) is negative, then we have \(r a-m b > b \geqslant k+\omega\), which is absurd. Similarly, \(m \geqslant r\) leads to \(r a-m b < b r-b r=0\), which is likewise impossible; so we must have \(0 \leqslant m \leqslant r-1\).
We finally substitute \(\left(\frac{k+\omega}{b}, m, r\right)\) into \((1)\) and use (4) to learn
\[
f\left(\frac{\omega+m}{r}\right)=f\left(\frac{a}{b}\right) \neq \omega .
\]
But as above one may see that the left hand side has to equal \(\omega\) due to the minimality of \(b\). This contradiction concludes our step B.
Step \(C\). Now notice that if \(\omega=0\), then \(f(x)=\lfloor x\rfloor\) holds for all rational \(x\) with \(0 \leqslant x < 1\) and hence by (2) this even holds for all rational numbers \(x\). Similarly, if \(\omega=1\), then \(f(x)=\lceil x\rceil\) holds for all \(x \in \mathbb{Q}\). Thereby the problem is solved.
